import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

function readStoredTheme(): Theme | null {
    const stored = localStorage.getItem('theme');
    return stored === 'light' || stored === 'dark' ? stored : null;
}

function getSystemTheme(): Theme {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getPreferredTheme(): Theme {
    const current = document.documentElement.getAttribute('data-theme');
    if (current === 'light' || current === 'dark') return current;
    return readStoredTheme() ?? getSystemTheme();
}

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(() => {
        try {
            return getPreferredTheme();
        } catch {
            return 'dark';
        }
    });

    // Reflect the current theme in the DOM on every change, but don't write
    // to storage here: a system-derived theme on first visit isn't a user
    // preference yet, and persisting it would stop the site from following
    // prefers-color-scheme once the OS switches. Only toggleTheme persists.
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    // Until the user makes an explicit choice, keep following the OS theme
    // live (e.g. an automatic light/dark schedule).
    useEffect(() => {
        if (readStoredTheme()) return;
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        const onChange = (e: MediaQueryListEvent) => setTheme(e.matches ? 'dark' : 'light');
        media.addEventListener('change', onChange);
        return () => media.removeEventListener('change', onChange);
    }, []);

    const toggleTheme = () => {
        setTheme((t) => {
            const next: Theme = t === 'dark' ? 'light' : 'dark';
            try {
                localStorage.setItem('theme', next);
            } catch {
                // ignore storage errors (private browsing, etc.)
            }
            return next;
        });
    };

    return { theme, toggleTheme };
}

export function useCommandPalette() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                setOpen((v) => !v);
            } else if (e.key === 'Escape') {
                setOpen(false);
            }
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, []);

    return { open, setOpen };
}

export function useScrollReveal() {
    useEffect(() => {
        const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
        const revealAll = () => targets.forEach((el) => el.classList.add('is-visible'));

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion || !('IntersectionObserver' in window)) {
            revealAll();
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );

        targets.forEach((el) => observer.observe(el));

        // Safety net: never leave content permanently hidden (e.g. a direct
        // hash-link jump past a section without an intersection check firing).
        const fallback = window.setTimeout(revealAll, 4000);

        return () => {
            observer.disconnect();
            window.clearTimeout(fallback);
        };
    }, []);
}
