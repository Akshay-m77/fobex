import { NAV_LINKS, SOCIAL_LINKS } from '../constants';
import fobexLogo from '../assets/Fobex.svg';
import FadeIn from './ui/FadeIn';

export default function Footer() {
    return (
        <footer
            className="relative pt-24 pb-8 overflow-hidden font-sans"
            style={{ background: 'radial-gradient(70.54% 70.54% at 50% 113.81%, #351750 0%, #000000 100%)' }}
        >
            <div className="max-w-[var(--container-lg)] mx-auto px-4 md:px-6 relative z-10">

                {/* Top Section: Branding & Newsletter */}
                <div className="flex justify-between items-start gap-12 mb-20 max-md:flex-col max-md:items-start">

                    {/* Left Column: Brand Info */}
                    <FadeIn direction="right" className="flex flex-col gap-10 max-w-[450px]">
                        <div>
                            <img src={fobexLogo} alt="Fobex" className="h-9 filter invert brightness-0 mb-8" />
                            <p className="text-[#e5e7eb] text-[15px] leading-relaxed font-normal">
                                A forward-thinking brand  creating technology-driven ventures built for long-term success.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3.5 text-[#e5e7eb] text-sm">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                <span className="font-light">Kochi, India</span>
                            </div>
                            <div className="flex items-center gap-3.5 text-[#e5e7eb] text-sm">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <span className="font-light">Info@fobexglobal.com</span>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right Column: Newsletter + Socials */}
                    <FadeIn direction="left" className="flex flex-col items-end max-md:items-start gap-10">
                        <div className="w-full max-w-[420px]">
                            <h3 className="text-white italic text-xl mb-6 font-medium">Stay Informed</h3>
                            <div className="relative group shadow-lg">
                                <input
                                    type="email"
                                    placeholder="Enter Email to Subscribe"
                                    className="w-full bg-white rounded-full py-4 pl-7 pr-16 text-gray-900 text-[15px] font-normal outline-none placeholder:text-gray-400"
                                />
                                <button className="absolute right-1.5 top-1.5 w-11 h-11 bg-[#9D31FF] rounded-full flex items-center justify-center text-white transition-all hover:bg-[#8B2BE2] hover:scale-105 active:scale-95 cursor-pointer shadow-md">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="7" y1="17" x2="17" y2="7" />
                                        <polyline points="7 7 17 7 17 17" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3.5">
                            {SOCIAL_LINKS.map((s, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-black hover:bg-[#9D31FF] hover:text-white transition-all duration-300 shadow-sm"
                                    aria-label={s.label}
                                >
                                    <svg width="18" height="18" viewBox={s.viewBox || "0 0 24 24"} fill="currentColor">
                                        <path d={s.path} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </FadeIn>
                </div>

                {/* Navigation Links Area */}
                <div className="border-t border-white/10 py-14">
                    <FadeIn className="flex justify-center flex-wrap gap-x-14 gap-y-6">
                        {NAV_LINKS.map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                className="text-[#9ca3af] text-base hover:text-white transition-colors tracking-wide font-normal"
                            >
                                {link.label}
                            </a>
                        ))}
                    </FadeIn>
                </div>

                {/* Footer Bottom Bar */}
                <div className="border-t border-white/10 pt-10 flex items-center justify-between max-md:flex-col max-md:gap-6">
                    <p className="text-[11px] text-[#4b5563] font-medium tracking-tight">
                        © 2026 Fobexglobal all rights reserved
                    </p>
                    <p className="text-[11px] text-[#4b5563] font-medium tracking-tight text-right max-md:text-center">
                        Building Powerful Digital Experiences that perform
                    </p>
                </div>

            </div>
        </footer>
    );
}
