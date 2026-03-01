import { useState, useEffect } from 'react';
import SectionHeader from './ui/SectionHeader';
import ArrowButton from './ui/ArrowButton';
import { ChevronLeftIcon, ChevronRightIcon } from './ui/Icons';

const testimonials = [
    {
        caseTitle: 'From Legacy to Seamless.',
        caseDesc:
            'From complexity to clarity: a digital transformation journey. With our expertise, the platform evolved into a scalable, high-performance solution.',
        quoteTitle: 'They transformed how we work across Europe.',
        quoteBody: [
            'When we partnered with Pixelsmiths, our digital platform was outdated and fragmented, impacting efficiency and growth.',
            'Their team took the time to understand our challenges, goals, and workflows, laying the foundation for a streamlined, scalable solution.',
        ],
        rating: 5,
        author: 'Bruce Lienoes',
        gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 50%, #1a1a2e 80%)',
    },
    {
        caseTitle: 'Scaling with Confidence.',
        caseDesc:
            "A startup's journey from MVP to enterprise-grade platform. Our team delivered a robust architecture that scaled with growing demand.",
        quoteTitle: "The best tech partner we've ever worked with.",
        quoteBody: [
            "Pixelsmiths understood our vision from day one. They didn't just build a product — they built the foundation for our future.",
            'Their iterative approach and transparent communication made the entire process smooth, even as requirements evolved.',
        ],
        rating: 5,
        author: 'Sarah Mitchell',
        gradient: 'linear-gradient(135deg, #2d1f3d 0%, #1a3a4a 40%, #3d6b5e 70%, #2d1f3d 100%)',
    },
    {
        caseTitle: 'Digital-First Retail.',
        caseDesc:
            'Reimagining the retail experience through digital innovation. A complete overhaul that boosted online sales by 240% in 6 months.',
        quoteTitle: 'Our online revenue tripled within the first quarter.',
        quoteBody: [
            'We needed a partner who could move fast without cutting corners. Pixelsmiths delivered a flawless ecommerce experience.',
            'From UX research to launch, every decision was data-driven and user-focused. The results speak for themselves.',
        ],
        rating: 5,
        author: 'Daniel Park',
        gradient: 'linear-gradient(135deg, #0a1628 0%, #162d50 40%, #1a3a6b 70%, #0a1628 100%)',
    },
];

export default function Testimonials() {
    const [active, setActive] = useState(0);
    const t = testimonials[active];

    const goTo = (index: number) =>
        setActive((index + testimonials.length) % testimonials.length);

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [active]);

    return (
        <section className="bg-[var(--color-bg-light)] py-24 max-md:py-16" id="testimonials">
            <div className="max-w-[var(--container-lg)] mx-auto px-6">
                <SectionHeader
                    label="[CLIENT TESTIMONIALS]"
                    heading={
                        <>
                            <span className="text-[var(--color-accent-purple)]">Trusted</span> by Those Who Matter
                        </>
                    }
                    subtitle="Our clients' trust is earned through consistent results, clear communication, and measurable impact. Their experiences reflect the standards we uphold in every partnership."
                    className="mb-16"
                />

                {/* Two-column content */}
                <div className="flex gap-12 items-start max-md:flex-col">
                    {/* Left — Case study */}
                    <div className="flex-1 min-w-0">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {t.caseTitle}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed mb-6">
                            {t.caseDesc}
                        </p>

                        {/* Image placeholder */}
                        <div
                            className="h-48 rounded-2xl overflow-hidden mb-6 relative transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1"
                            style={{ background: t.gradient }}
                        >
                            <div className="absolute inset-0 transition-opacity duration-300 hover:opacity-80" style={{
                                background: `radial-gradient(ellipse 70% 80% at 50% 60%, rgba(var(--white-rgb), 0.06) 0%, transparent 100%)`,
                            }} />
                            <div className="absolute bottom-0 left-[15%] w-[70%] h-[70%]" style={{
                                background: `linear-gradient(180deg, rgba(var(--accent-blue-rgb), 0.15) 0%, rgba(var(--accent-blue-rgb), 0.25) 100%)`,
                                borderRadius: '8px 8px 0 0',
                                border: `1px solid rgba(var(--white-rgb), 0.08)`,
                            }} />
                            <div className="absolute bottom-0 left-[8%] w-[84%] h-[8%]" style={{
                                background: `rgba(var(--white-rgb), 0.06)`,
                                borderRadius: '0 0 4px 4px',
                            }} />
                        </div>

                        <ArrowButton href="#" variant="dark">
                            Learn more about Our works
                        </ArrowButton>
                    </div>

                    {/* Right — Testimonial quote */}
                    <div className="flex-1 min-w-0 pt-2">
                        <h3 className="text-[1.75rem] max-md:text-xl font-bold text-gray-900 leading-[1.3] mb-6 transition-colors duration-300 hover:text-[var(--color-accent-purple)]">
                            {t.quoteTitle}
                        </h3>
                        {t.quoteBody.map((p, i) => (
                            <p key={i} className="text-sm text-gray-600 leading-relaxed mb-3">
                                {p}
                            </p>
                        ))}

                        {/* Author */}
                        <div className="flex items-center gap-3 mt-8 group cursor-default">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center text-white text-sm font-semibold transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                                {t.author.charAt(0)}
                            </div>
                            <div className="transition-transform duration-300 group-hover:translate-x-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-gray-500">{t.rating}/5</span>
                                    <span className="text-amber-400 text-xs tracking-wider">
                                        {'★'.repeat(t.rating)}
                                    </span>
                                </div>
                                <p className="text-sm font-semibold text-gray-900">{t.author}</p>
                            </div>
                        </div>

                        {/* Navigation arrows */}
                        <div className="flex items-center gap-2 mt-10 justify-end">
                            <button
                                onClick={() => goTo(active - 1)}
                                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-400 transition-all duration-300 cursor-pointer hover:-translate-x-1 hover:shadow-md hover:scale-105"
                            >
                                <ChevronLeftIcon />
                            </button>
                            <button
                                onClick={() => goTo(active + 1)}
                                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-400 transition-all duration-300 cursor-pointer hover:translate-x-1 hover:shadow-md hover:scale-105"
                            >
                                <ChevronRightIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
