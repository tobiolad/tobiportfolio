export function scrollToSection(id: string) {
    return (e: React.MouseEvent) => {
        e.preventDefault();
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    };
}

/**
 * Scrolls to the very top of the page. Not implemented via scrollToSection('#top'),
 * because the nav (id="top") is position: fixed, and scrollIntoView on a fixed
 * element is unreliable across browsers.
 */
export function scrollToTop(e: React.MouseEvent) {
    e.preventDefault();
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
}
