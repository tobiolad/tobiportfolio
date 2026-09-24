import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

function getPreferredTheme(): Theme {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(() => {
        try {
            return getPreferredTheme();
        } catch {
            return 'light';
        }
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        try {
            localStorage.setItem('theme', theme);
        } catch {
            // ignore storage errors (private browsing, etc.)
        }
    }, [theme]);

    const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

    return { theme, toggleTheme };
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
