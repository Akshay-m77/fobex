// Shared navigation links used in Navbar and Footer
export const NAV_LINKS = [
    { label: 'Services', href: '#features' },
    { label: 'Process', href: '#process' },
    { label: 'Our Results', href: '#results' },
    { label: 'Industries', href: '#industries' },
    // { label: 'Insights', href: '#insights' },
] as const;

// Social media links used in Footer
export const SOCIAL_LINKS = [
    { label: 'Facebook', path: 'M9 3.5V7H6.5v3H9v7h3v-7h2.5L15 7h-3V4.5c0-.83.67-1.5 1.5-1.5H15V0h-2c-2.21 0-4 1.79-4 4v-.5z' },
    { label: 'YouTube', path: 'M8 5l4.5 3L8 11V5z' },
    { label: 'Instagram', path: 'M8 2H8a6 6 0 016 6v0a6 6 0 01-6 6H8a6 6 0 01-6-6v0a6 6 0 016-6z' },
    { label: 'LinkedIn', path: 'M4 6v8H1V6h3zM2.5 2A1.5 1.5 0 114 3.5 1.5 1.5 0 012.5 2zM15 14h-3V9.5c0-1-.5-1.5-1.3-1.5S9.5 9 9.5 10v4h-3V6h3v1.2A3 3 0 0112 6c1.7 0 3 1.2 3 3.5V14z' },
] as const;
