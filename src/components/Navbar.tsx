import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import fobexLogoLight from '../assets/Fobex.svg';
import fobexLogoDark from '../assets/Fobex dark.svg';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40);

            // Find the current active section
            const sections = NAV_LINKS.map(link => link.href.replace('#', ''));
            let current = '';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the section is mostly within the viewport or passing the middle
                    if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.2) {
                        current = section;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', onScroll);
        // Initial check
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 border-b ${scrolled
                ? 'bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] border-gray-100 h-[72px]'
                : 'bg-transparent border-transparent h-[90px]'
                }`}
        >
            <div className="max-w-[var(--container-lg)] mx-auto px-4 md:px-6 h-full flex items-center justify-between max-md:justify-start max-md:gap-4">
                <div className="flex items-center h-full gap-12 max-md:gap-0">
                    {/* Logo */}
                    <a href="#" className={`flex items-center -mt-1 z-[1001] transition-all duration-300 hover:scale-105`}>
                        <img src={scrolled ? fobexLogoDark : fobexLogoLight} alt="Fobex Logo" className="h-4.5 w-auto" />
                    </a>

                    {/* Nav Links */}
                    <div
                        className={`flex items-center h-full gap-10 max-md:fixed max-md:inset-0 max-md:h-auto max-md:flex-col max-md:justify-center max-md:gap-10 max-md:bg-[rgba(var(--bg-primary-rgb),0.97)] max-md:backdrop-blur-[24px] max-md:transition-opacity max-md:duration-250 ${menuOpen
                            ? 'max-md:opacity-100 max-md:pointer-events-auto'
                            : 'max-md:opacity-0 max-md:pointer-events-none'
                            }`}
                    >
                        {NAV_LINKS.map((link, i) => {
                            const targetId = link.href.replace('#', '');
                            const isActive = activeSection === targetId;

                            const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                                e.preventDefault();
                                setMenuOpen(false);
                                const element = document.getElementById(targetId);
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            };

                            return (
                                <a
                                    key={i}
                                    href={link.href}
                                    onClick={handleClick}
                                    className={`flex items-center h-full max-md:h-auto text-sm font-medium transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[var(--color-accent-purple)] after:transition-all after:duration-250 hover:after:w-full max-md:text-2xl ${isActive
                                        ? `${scrolled ? 'text-gray-900' : 'text-white'} after:w-full`
                                        : `${scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'} after:w-0`
                                        }`}
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Hamburger */}
                <button
                    className="hidden max-md:flex flex-col gap-[5px] z-[1001] p-1 max-md:order-first"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block w-[22px] h-[2px] rounded-sm transition-all duration-250 ${scrolled || menuOpen ? 'bg-gray-900' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-x-[5px] translate-y-[5px]' : ''
                            }`}
                    />
                    <span
                        className={`block w-[22px] h-[2px] rounded-sm transition-all duration-250 ${scrolled || menuOpen ? 'bg-gray-900' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''
                            }`}
                    />
                    <span
                        className={`block w-[22px] h-[2px] rounded-sm transition-all duration-250 ${scrolled || menuOpen ? 'bg-gray-900' : 'bg-white'} ${menuOpen ? '-rotate-45 translate-x-[5px] -translate-y-[5px]' : ''
                            }`}
                    />
                </button>
            </div>
        </nav>
    );
}
