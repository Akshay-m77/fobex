import { useRef } from 'react';
import heroImg from '../assets/hero-img.png';
import heroMobileBg from '../assets/hero bg.png';
import largeHeroBg from '../assets/large hero bg.png';
import ArrowButton from './ui/ArrowButton';
import { ChevronDownIcon } from './ui/Icons';
import FadeIn from './ui/FadeIn';

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen max-md:min-h-[85vh] flex flex-col pt-[40vh] justify-start max-md:pt-[200px] overflow-hidden"
        >
            {/* Desktop hero background */}
            <div className="absolute inset-0 pointer-events-none max-md:hidden z-0">
                <img src={largeHeroBg} alt="Desktop Hero Background" className="w-full h-full object-cover object-center" />
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
            <div className="max-w-[var(--container-lg)] mx-auto px-4 md:px-6 relative z-10 w-full">
                {/* Title — left aligned */}
                <FadeIn delay={0.2}>
                    <h1 className="text-[3.5rem] max-md:text-[2.2rem] font-medium max-md:not-italic leading-[1.1] max-md:leading-[1.15] tracking-[-0.02em] mb-6 max-w-[var(--container-sm)]">

                        <span className="text-white">Building Powerfull  </span>
                        <span className="block">
                            <span className="gradient-text">Digital Experiences </span>

                            <span className="text-white">that Imapct</span>
                        </span>
                    </h1>
                </FadeIn>

                {/* Description */}
                <FadeIn delay={0.4}>
                    <p className="text-sm max-md:text-[13px] text-gray-400 max-w-3xl text-left leading-relaxed max-md:leading-[1.6] mb-8 max-md:mb-10 max-md:pr-4">
                        Our story isn't just about code or design; we look at your complete business landscape. As a leading web development company in Kochi Kerala, our foundation is built on superior React apps and high-end mobile development. We integrate expert product leadership and visual media to build the next chapter of your brand.
                    </p>
                </FadeIn>

                {/* CTA Button */}
                <FadeIn delay={0.6}>
                    <div className="flex items-center gap-4 w-full">
                        <ArrowButton
                            href="#contact"
                            className="max-md:w-full max-md:justify-between max-md:bg-[rgba(124,58,237,0.08)] max-md:border-[#a855f7]/50"
                        >
                            <span className="max-md:italic max-md:font-medium text-[15px]">Let's Talk business</span>
                        </ArrowButton>
                    </div>
                </FadeIn>

                {/* Bouncing arrow (mobile) */}
                <div className="flex justify-center md:hidden pt-12 pb-6 w-full text-white animate-bounce">
                    <ChevronDownIcon size={24} />
                </div>
            </div>

            {/* Gradient flow scroll indicator (desktop) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 max-md:hidden h-24 w-[1px] bg-white/10 overflow-hidden z-20">
                <div className="w-full h-1/2 bg-gradient-to-b from-transparent via-[#a855f7] to-transparent animate-gradient-flow" />
            </div>
        </section>
    );
}
