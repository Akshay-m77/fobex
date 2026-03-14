import { useEffect, useRef, useCallback } from 'react';
import FadeIn from './ui/FadeIn';

const sections = [
    {
        label: 'Our Vision',
        boldText: 'We create robust digital spaces',
        fadeText:
            'that help established and high growth firms dominate their markets and thrive long term.',
        dark: false,
    },
    {
        label: 'Our Mission',
        boldText: 'We combine',
        fadeText:
            'web development, organic marketing, and visual branding to launch digital products that produce real profits.',
        dark: true,
    },
];

function ScrollRevealSection({
    label,
    boldText,
    fadeText,
    dark,
}: {
    label: string;
    boldText: string;
    fadeText: string;
    dark: boolean;
}) {
    const sectionRef = useRef<HTMLElement>(null);
    const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);

    // Split the entire sentence into words and track which are bold
    const boldWords = boldText.split(' ');
    const fadeWords = fadeText.split(' ');
    const allWords = [...boldWords, ...fadeWords];
    const handleScroll = useCallback(() => {
        if (!sectionRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();
        const windowH = window.innerHeight;

        // Calculate scroll progress through the tall holding section (0 to 1)
        const scrollableDistance = rect.height - windowH;
        let progress = 0;

        if (scrollableDistance > 0) {
            progress = Math.max(0, Math.min(1, -rect.top / scrollableDistance));
        }

        // Reveal words progressively based on scroll progress
        const totalWords = allWords.length;
        wordsRef.current.forEach((wordEl, i) => {
            if (!wordEl) return;
            // Spread the reveal logic across the scroll progress
            const wordProgress = i / totalWords;
            const reveal = Math.max(
                0,
                Math.min(1, (progress - wordProgress * 0.7) / 0.3)
            );

            if (dark) {
                // Dark bg: from dim gray to white
                const dimColor = 75;
                const brightColor = 255;
                const val = Math.round(dimColor + (brightColor - dimColor) * reveal);
                wordEl.style.color = `rgb(${val}, ${val}, ${val})`;
            } else {
                // Light bg: from light gray to dark
                const dimColor = 200;
                const brightColor = 25;
                const val = Math.round(dimColor + (brightColor - dimColor) * reveal);
                wordEl.style.color = `rgb(${val}, ${val}, ${val})`;
            }

            // Word becomes bold as it lights up
            wordEl.style.fontWeight = reveal > 0.4 ? '500' : '300';
        });
    }, [allWords.length, dark]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial call
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <section
            ref={sectionRef}
            className={`relative h-[150vh] ${dark ? 'bg-[var(--color-bg-primary)]' : 'bg-white'}`}
        >
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden w-full">
                <div className="max-w-[var(--container-md)] mx-auto px-4 md:px-6 text-center">
                    {/* Label */}
                    <FadeIn delay={0.1}>
                        <p
                            className={`text-lg max-md:text-base tracking-wide mb-10 font-normal ${dark ? 'text-white/80' : 'text-gray-900'
                                }`}
                        >
                            {label}
                        </p>
                    </FadeIn>

                    {/* Main statement with word-by-word scroll reveal */}
                    <h2 className="text-[3.5rem] max-md:text-[2.2rem] font-medium leading-[1.2] tracking-[-0.02em] cursor-default transition-all">
                        {allWords.map((word, i) => (
                            <span
                                key={i}
                                ref={(el) => { wordsRef.current[i] = el; }}
                                className="inline-block mr-[0.3em] transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                                style={{
                                    color: dark ? 'rgb(75, 75, 75)' : 'rgb(200, 200, 200)',
                                    fontWeight: 300
                                }}
                            >
                                {word}
                            </span>
                        ))}
                    </h2>
                </div>
            </div>
        </section>
    );
}

export default function Vision() {
    return (
        <>
            {sections.map((s, i) => (
                <ScrollRevealSection key={i} {...s} />
            ))}
        </>
    );
}
