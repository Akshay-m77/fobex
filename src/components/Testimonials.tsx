import { useState, useEffect } from 'react';
import FadeIn from './ui/FadeIn';
import SectionHeader from './ui/SectionHeader';
import ArrowButton from './ui/ArrowButton';
import { ChevronLeftIcon, ChevronRightIcon } from './ui/Icons';

const testimonials = [
    {
        caseTitle: 'Web Development',
        caseDesc: 'Turning a slow platform into a high growth engine.',
        quoteTitle: 'They built the technical foundation our business needed to scale.',
        quoteBody: [
            'Before we started working with Fobex, our website would literally crawl whenever we had a spike in traffic. It crashed so often that we were actually looking for ways just to access our own data.',
            "The team didn't just patch the bugs; they rebuilt our entire web architecture from scratch using React. Today, we have a blazing fast, secure, and scalable site that handles thousands of visitors at once without a single glitch.",
        ],
        rating: 5,
        author: 'Marcus Thorne | Operations Director',
        gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 50%, #1a1a2e 80%)',
    },
    {
        caseTitle: 'Design & UX',
        caseDesc: 'Moving from a cluttered interface to a seamless journey.',
        quoteTitle: 'Finally, a digital experience that our customers actually enjoy using.',
        quoteBody: [
            'Our app used to have a very messy interface, and it was a major pain point for our users.',
            'The Fobex team took the time to truly understand how our customers think and delivered a design that is both simple and beautiful. Our engagement numbers are up across the board now because the entire experience feels effortless for our users.',
        ],
        rating: 5,
        author: 'Sarah Jenkins | Product Lead',
        gradient: 'linear-gradient(135deg, #2d1f3d 0%, #1a3a4a 40%, #3d6b5e 70%, #2d1f3d 100%)',
    },
    {
        caseTitle: 'SEO & Organic Traffic',
        caseDesc: 'From being invisible to dominating the search results.',
        quoteTitle: 'We went from being hard to find to the very top of the page.',
        quoteBody: [
            "We knew we had a fantastic product, but we just didn't have the visibility to back it up.",
            'Fobex helped us build a smart SEO strategy focused on the exact terms our customers are searching for. Our organic traffic has tripled since we started, and we are now consistently holding the top spot in search results. It has completely changed our lead generation.',
        ],
        rating: 5,
        author: 'David Chen | Marketing Head',
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
            <div className="max-w-[var(--container-lg)] mx-auto px-4 md:px-6">
                <FadeIn>
                    <SectionHeader
                        label="[Client Stories]"
                        heading={
                            <>
                                Partnerships built on <span className="text-[var(--color-accent-purple)]">real results</span>
                            </>
                        }
                        subtitle="Trust isn't something we take lightly at Fobex. We earn it by staying vocal, hitting our marks, and showing actual progress every step of the way. These stories reflect the high standards we bring to every single project."
                        className="mb-16"
                    />
                </FadeIn>

                {/* Two-column content */}
                <div className="flex gap-12 items-start max-md:flex-col">
                    {/* Left — Case study */}
                    <FadeIn direction="right" className="flex-1 min-w-0" delay={0.2} fullWidth>
                        <h3 className="text-2xl font-medium text-gray-900 mb-3">
                            {t.caseTitle}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed mb-6">
                            {t.caseDesc}
                        </p>

                        {/* Image placeholder */}
                        <div
                            className="h-48 rounded-none overflow-hidden mb-6 relative transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1"
                            style={{ background: t.gradient }}
                        >
                            <div className="absolute inset-0 transition-opacity duration-300 hover:opacity-80" style={{
                                background: `radial-gradient(ellipse 70% 80% at 50% 60%, rgba(var(--white-rgb), 0.06) 0%, transparent 100%)`,
                            }} />
                            <div className="absolute bottom-0 left-[15%] w-[70%] h-[70%]" style={{
                                background: `linear-gradient(180deg, rgba(var(--accent-blue-rgb), 0.15) 0%, rgba(var(--accent-blue-rgb), 0.25) 100%)`,
                                borderRadius: '0',
                                border: `1px solid rgba(var(--white-rgb), 0.08)`,
                            }} />
                            <div className="absolute bottom-0 left-[8%] w-[84%] h-[8%]" style={{
                                background: `rgba(var(--white-rgb), 0.06)`,
                                borderRadius: '0',
                            }} />
                        </div>

                        <ArrowButton href="#" variant="dark">
                            Learn more about Our works
                        </ArrowButton>
                    </FadeIn>

                    {/* Right — Testimonial quote */}
                    <FadeIn direction="left" className="flex-1 min-w-0 pt-2" delay={0.4} fullWidth>
                        <h3 className="text-[1.75rem] max-md:text-xl font-medium text-gray-900 leading-[1.3] mb-6 transition-colors duration-300 hover:text-[var(--color-accent-purple)]">
                            {t.quoteTitle}
                        </h3>
                        {t.quoteBody.map((p, i) => (
                            <p key={i} className="text-sm text-gray-600 leading-relaxed mb-3">
                                {p}
                            </p>
                        ))}

                        {/* Author */}
                        <div className="flex items-center gap-3 mt-8 group cursor-default">
                            <div className="w-10 h-10 rounded-none bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center text-white text-sm font-semibold transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
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
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
