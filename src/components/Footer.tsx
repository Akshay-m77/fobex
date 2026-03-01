import { NAV_LINKS, SOCIAL_LINKS } from '../constants';
import ArrowButton from './ui/ArrowButton';
import fobexLogo from '../assets/Fobex.svg';

export default function Footer() {
    return (
        <footer className="relative bg-[var(--color-bg-footer)] pt-20 pb-12 overflow-hidden">
            {/* Purple wave/glow effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute bottom-0 right-0 w-[600px] h-[400px]"
                    style={{
                        background: `radial-gradient(ellipse 80% 60% at 80% 90%, rgba(var(--accent-purple-rgb), 0.25) 0%, transparent 70%)`,
                    }}
                />
                <div
                    className="absolute bottom-0 left-[20%] w-[500px] h-[300px]"
                    style={{
                        background: `radial-gradient(ellipse 70% 50% at 50% 100%, rgba(var(--accent-purple-rgb), 0.12) 0%, transparent 70%)`,
                    }}
                />
                {/* Curved lines */}
                <svg className="absolute bottom-0 left-0 w-full h-[300px] opacity-20" viewBox="0 0 1200 300" fill="none" preserveAspectRatio="none">
                    <path d="M0 200 Q300 100 600 180 Q900 260 1200 150" stroke="url(#footerGrad)" strokeWidth="1.5" fill="none" />
                    <path d="M0 240 Q350 140 650 220 Q950 300 1200 190" stroke="url(#footerGrad)" strokeWidth="1" fill="none" />
                    <defs>
                        <linearGradient id="footerGrad" x1="0" y1="0" x2="1200" y2="0">
                            <stop offset="0%" stopColor="var(--color-accent-purple)" stopOpacity="0.3" />
                            <stop offset="50%" stopColor="var(--color-accent-purple)" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="var(--color-accent-blue)" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="max-w-[1100px] mx-auto px-6 relative z-10">
                {/* Top row: Heading + Logo */}
                <div className="flex items-start justify-between mb-12 max-md:flex-col max-md:gap-8">
                    <h2 className="text-[2.5rem] max-md:text-[1.75rem] font-bold italic leading-[1.2] text-white">
                        Set bold goals.
                        <br />
                        Rise beyond limits.
                    </h2>

                    <img src={fobexLogo} alt="Fobex Logo" className="h-10 w-auto filter invert brightness-0" />
                </div>

                {/* Nav links */}
                <div className="flex items-center gap-8 mb-10 flex-wrap">
                    {NAV_LINKS.map((link, i) => (
                        <a
                            key={i}
                            href={link.href}
                            className="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Bottom row: Newsletter + Social/Address */}
                <div className="flex items-end justify-between gap-12 max-md:flex-col max-md:items-start max-md:gap-10">
                    {/* Left — Newsletter */}
                    <div className="max-w-[320px]">
                        <label className="text-xs text-gray-400 mb-1.5 block">
                            Enter Your Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="form-input mb-4"
                        />
                        <ArrowButton href="#">
                            Subscribe to Newsletter
                        </ArrowButton>
                    </div>

                    {/* Right — Social + Address */}
                    <div className="text-right max-md:text-left">
                        {/* Social icons */}
                        <div className="flex items-center gap-3 mb-5 justify-end max-md:justify-start">
                            {SOCIAL_LINKS.map((s, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    aria-label={s.label}
                                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-900 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_4px_12px_rgba(255,255,255,0.3)]"
                                >
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                                        <path d={s.path} />
                                    </svg>
                                </a>
                            ))}
                        </div>

                        {/* Address */}
                        <div className="text-sm text-gray-400 leading-relaxed">
                            <p>18/75 - TownHall Road, Thrissur  Kerala</p>
                            <p>680005</p>
                            <p>+91 9539217426</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
