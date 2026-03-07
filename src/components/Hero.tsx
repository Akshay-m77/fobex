import { useRef } from 'react';
import heroImg from '../assets/hero-img.png';
import heroMobileBg from '../assets/hero bg.png';
import ArrowButton from './ui/ArrowButton';
import { ChevronDownIcon } from './ui/Icons';

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen max-md:min-h-[80vh] flex items-end overflow-hidden pb-20 pt-24 max-md:pb-0"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 pointer-events-none max-md:hidden">
                <div
                    className="absolute w-[600px] h-[600px] rounded-full blur-[120px] -top-[10%] -left-[10%]"
                    style={{
                        background: `radial-gradient(circle, rgba(var(--accent-purple-rgb), 0.2) 0%, transparent 70%)`,
                    }}
                />
                {/* Bottom glow */}
                <div
                    className="absolute w-full h-[200px] bottom-0 left-0"
                    style={{
                        background: `linear-gradient(to top, rgba(var(--accent-purple-rgb), 0.08) 0%, transparent 100%)`,
                    }}
                />
            </div>

            {/* Mobile hero background */}
            <div className="absolute inset-0 hidden max-md:block pointer-events-none z-0">
                <img src={heroMobileBg} alt="Mobile Hero Background" className="w-full h-full object-cover object-center" />
            </div>

            {/* Hero image — top right (Desktop) */}
            <div className="absolute top-0 right-0 w-[55%] max-md:hidden h-[75%] pointer-events-none z-0">
                <div className="w-full h-full animate-zoom-out-fit [animation-delay:0.1s] origin-top-right">
                    <img
                        src={heroImg}
                        alt="Abstract 3D artwork"
                        className="w-full h-full object-cover object-left-bottom"
                        style={{
                            maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%), linear-gradient(to left, black 60%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%), linear-gradient(to left, black 60%, transparent 100%)',
                            maskComposite: 'intersect',
                            WebkitMaskComposite: 'source-in' as string,
                        }}
                    />
                </div>
            </div>

            {/* Content */}
            <div className="max-w-[var(--container-lg)] mx-auto px-6 max-md:px-5 relative z-10 w-full max-md:mt-[30%]">
                {/* Title — left aligned */}
                <h1 className="text-[3.5rem] max-md:text-[2.2rem] font-medium max-md:not-italic leading-[1.1] max-md:leading-[1.15] tracking-[-0.02em] mb-6 max-w-[var(--container-sm)]">
                    <span className="block">
                        <span className="text-white">One Partner </span>
                        <span className="gradient-text">Every Digital Edge</span>
                    </span>
                    <span className="text-white block">Your Brand Needs</span>
                </h1>

                {/* Description */}
                <p className="text-sm max-md:text-[13px] text-gray-400 max-w-[480px] leading-relaxed max-md:leading-[1.6] mb-8 max-md:mb-10 max-md:pr-4">
                    Our story isn't just about code or design; we look at your complete business landscape. Our foundation is built on superior React apps and high-end mobile development. We integrate expert product leadership and video to build the next chapter of your brand.
                </p>

                {/* CTA Button */}
                <div className="flex items-center gap-4 w-full">
                    <ArrowButton
                        href="#contact"
                        className="max-md:w-full max-md:justify-between max-md:bg-[rgba(124,58,237,0.08)] max-md:border-[#a855f7]/50"
                    >
                        <span className="max-md:italic max-md:font-medium text-[15px]">Let's Talk business</span>
                    </ArrowButton>
                </div>

                {/* Gradient flow scroll indicator (desktop) */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 max-md:hidden h-24 w-[1px] bg-white/10 overflow-hidden">
                    <div className="w-full h-1/2 bg-gradient-to-b from-transparent via-[#a855f7] to-transparent animate-gradient-flow" />
                </div>

                {/* Bouncing arrow (mobile) */}
                <div className="flex justify-center md:hidden pt-12 pb-6 w-full text-white animate-bounce">
                    <ChevronDownIcon size={24} />
                </div>
            </div>
        </section>
    );
}
