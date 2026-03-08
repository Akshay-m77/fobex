import { useState, useEffect } from 'react';
import SectionHeader from './ui/SectionHeader';
import ArrowButton from './ui/ArrowButton';
import { ChevronLeftIcon, ChevronRightIcon } from './ui/Icons';

const industries = [
    {
        name: 'HealthCare',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
        paragraphs: [
            'At Pixelsmiths, we help healthcare providers deliver seamless, patient-centric digital experiences.',
            'Our solutions improve appointment booking, patient engagement, and operational efficiency through intuitive design and secure technology.',
        ],
        cta: 'Learn more about how we serves in healthcare',
    },
    {
        name: 'Retail & Ecommerce',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop',
        paragraphs: [
            'We build powerful ecommerce platforms that drive sales and deliver exceptional shopping experiences.',
            'From product discovery to checkout, our solutions optimize every touchpoint for conversion and customer satisfaction.',
        ],
        cta: 'Learn more about how we serves in retail',
    },
    {
        name: 'Logistics & Supply Chain',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop',
        paragraphs: [
            'We digitize supply chain operations with real-time tracking, route optimization, and warehouse management.',
            'Our platforms help logistics companies reduce costs, improve delivery times, and gain end-to-end visibility.',
        ],
        cta: 'Learn more about how we serves in logistics',
    },
    {
        name: 'Industrial Manufacturing',
        image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop',
        paragraphs: [
            'We create digital solutions that streamline manufacturing processes from shop floor to top floor.',
            'Our IoT-integrated dashboards and ERP solutions help manufacturers boost productivity and reduce downtime.',
        ],
        cta: 'Learn more about how we serves in manufacturing',
    },
    {
        name: 'Banking & Finance',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop',
        paragraphs: [
            'We build secure, compliant fintech solutions that modernize banking and financial services.',
            'From digital wallets to portfolio management, our platforms drive financial inclusion and customer trust.',
        ],
        cta: 'Learn more about how we serves in finance',
    },
];

export default function Industries() {
    const [active, setActive] = useState(0);
    const current = industries[active];

    const goTo = (index: number) =>
        setActive((index + industries.length) % industries.length);

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % industries.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [active]);

    // Derived array of inactive industries for the bottom bar
    const inactiveIndustries = industries.map((ind, idx) => ({ ...ind, originalIndex: idx })).filter((_, idx) => idx !== active);

    return (
        <section className="bg-[var(--color-bg-dark)] py-24 max-md:py-16" id="industries">
            <style>{`
                @keyframes fadeSlideUp {
                    0% { opacity: 0; transform: translateY(15px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            <div className="max-w-[var(--container-lg)] mx-auto px-6">
                <SectionHeader
                    label="[INDUSTRIES WE SERVE]"
                    heading={
                        <>
                            Serving Businesses Across{' '}
                            <span className="text-[var(--color-accent-purple)]">Industries</span>
                        </>
                    }
                    subtitle="From startups to established enterprises, we serve a wide range of industries. Each solution is crafted to match industry-specific needs and customer behavior. Helping businesses grow with confidence through smart digital innovation."
                    dark
                />

                {/* Content: Image + Details */}
                <div className="flex gap-10 items-start max-md:flex-col">
                    {/* Left — Image card */}
                    <div className="flex-1 min-w-0">
                        <div
                            className="relative h-72 max-md:h-56 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl group"
                        >
                            <img
                                src={current.image}
                                alt={current.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.4)_50%,transparent_100%)] pointer-events-none" />

                            {/* Text Container at Bottom inside Image */}
                            <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col justify-end">

                                {/* Active Tab (Large Heading) */}
                                <h3
                                    key={`active-${active}`}
                                    className="text-[3rem] max-md:text-[2rem] font-medium text-white mb-2 leading-tight"
                                    style={{ animation: 'fadeSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
                                >
                                    {current.name}
                                </h3>

                                {/* Inactive Tabs List */}
                                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm max-md:text-xs">
                                    {inactiveIndustries.map((ind, idx, arr) => (
                                        <div key={ind.originalIndex} className="flex items-center gap-2.5">
                                            <span
                                                className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setActive(ind.originalIndex);
                                                }}
                                            >
                                                {ind.name}
                                            </span>
                                            {idx < arr.length - 1 && (
                                                <span className="text-gray-600 font-bold text-[10px]">•</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right — Details */}
                    <div className="flex-1 min-w-0 pt-2">
                        <h3 className="text-2xl font-medium text-[var(--color-accent-purple)] mb-5">
                            {current.name}
                        </h3>
                        {current.paragraphs.map((p, i) => (
                            <p key={i} className="text-sm text-gray-300 leading-relaxed mb-4">
                                {p}
                            </p>
                        ))}

                        <div className="mt-6">
                            <ArrowButton href="#">
                                {current.cta}
                            </ArrowButton>
                        </div>
                    </div>
                </div>

                {/* Dot pagination */}
                <div className="flex items-center justify-center gap-2 mt-10">
                    <button
                        onClick={() => goTo(active - 1)}
                        className="w-8 h-8 rounded-full border border-[var(--color-border-light)] flex items-center justify-center text-gray-500 hover:text-white hover:border-[var(--color-border-hover)] transition-all cursor-pointer"
                    >
                        <ChevronLeftIcon />
                    </button>

                    <div className="flex items-center gap-1.5 mx-2">
                        {industries.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={`relative h-2 rounded-full overflow-hidden transition-all duration-300 cursor-pointer ${i === active
                                    ? 'w-10 bg-[rgba(var(--white-rgb),0.2)]'
                                    : `w-2 bg-[rgba(var(--white-rgb),0.2)]`
                                    }`}
                                aria-label={`Go to industry ${i + 1}`}
                            >
                                {i === active && (
                                    <span
                                        className="absolute top-0 left-0 h-full bg-white"
                                        style={{
                                            animation: 'progress 5s linear forwards'
                                        }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => goTo(active + 1)}
                        className="w-8 h-8 rounded-full border border-[var(--color-border-light)] flex items-center justify-center text-gray-500 hover:text-white hover:border-[var(--color-border-hover)] transition-all cursor-pointer"
                    >
                        <ChevronRightIcon />
                    </button>
                </div>
            </div>
        </section>
    );
}
