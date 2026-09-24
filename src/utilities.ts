export function scrollToSection(id: string) {
    return (e: React.MouseEvent) => {
        e.preventDefault();
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    };
}
