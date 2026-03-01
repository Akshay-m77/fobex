import { useEffect, useRef, useCallback } from 'react';

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
    const boldCount = boldWords.length;

    const handleScroll = useCallback(() => {
        if (!sectionRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();
        const windowH = window.innerHeight;

        // Calculate scroll progress through section (0 to 1)
        // Starts revealing early — as soon as the section top enters the viewport
        const progress = Math.max(
            0,
            Math.min(1, 1 - rect.top / (windowH * 0.82))
        );

        // Reveal words progressively based on scroll progress
        const totalWords = allWords.length;
        wordsRef.current.forEach((wordEl, i) => {
            if (!wordEl) return;
            // Each word has its own reveal threshold
            const wordProgress = i / totalWords;
            const reveal = Math.max(
                0,
                Math.min(1, (progress - wordProgress * 0.6) / 0.28)
            );

            if (dark) {
                // Dark bg: from dim gray to white
                const dimColor = 75;      // starting gray
                const brightColor = 255;  // target white
                const val = Math.round(dimColor + (brightColor - dimColor) * reveal);
                wordEl.style.color = `rgb(${val}, ${val}, ${val})`;
            } else {
                // Light bg: from light gray to dark
                const dimColor = 200;    // starting light gray
                const brightColor = 25;  // target near-black
                const val = Math.round(dimColor + (brightColor - dimColor) * reveal);
                wordEl.style.color = `rgb(${val}, ${val}, ${val})`;
            }
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
            className={`relative py-40 max-md:py-24 overflow-hidden ${dark ? 'bg-[var(--color-bg-primary)]' : 'bg-white'
                }`}
        >
            <div className="max-w-[800px] mx-auto px-6 text-center">
                {/* Label */}
                <p
                    className={`text-sm tracking-wide mb-8 font-normal ${dark ? 'text-gray-500' : 'text-gray-400'
                        }`}
                >
                    {label}
                </p>

                {/* Main statement with word-by-word scroll reveal */}
                <h2 className="text-[2.75rem] max-md:text-[1.75rem] leading-[1.3] font-light cursor-default">
                    {allWords.map((word, i) => (
                        <span
                            key={i}
                            ref={(el) => { wordsRef.current[i] = el; }}
                            className={`inline-block mr-[0.3em] transition-all duration-300 hover:-translate-y-1 hover:scale-105 ${i < boldCount ? 'font-semibold' : 'font-light'
                                }`}
                            style={{
                                color: dark ? 'rgb(75, 75, 75)' : 'rgb(200, 200, 200)',
                            }}
                        >
                            {word}
                        </span>
                    ))}
                </h2>
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
