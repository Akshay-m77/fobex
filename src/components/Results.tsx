import SectionHeader from './ui/SectionHeader';
import FadeIn from './ui/FadeIn';
import { ExternalLinkIcon } from './ui/Icons';

import infiniosImg from '../assets/results/infinios.webp';
import zestanoImg from '../assets/results/zestano.webp';
import vacationsTravelImg from '../assets/results/Vacations Travel.webp';

const projects = [
    {
        category: 'Infinios | Corporate Consulting',
        title: "We helped a Bangalore-based marketing firm grow with a lead generation website, improving search visibility and increasing qualified client leads.",
        image: infiniosImg,
        link: 'https://infinios.in/',
    },
    {
        category: 'Zestano | Food and Beverage',
        title: 'We built a localized website and digital identity for a Kerala café, improving local search visibility, foot traffic, and daily sales.',
        image: zestanoImg,
        link: 'https://zestano.in/',
    },
    {
        category: 'Vacations Travel | Travel and Tourism',
        title: 'We built a global travel booking platform for a UAE client, improving user navigation, visa selection, and online booking conversions.',
        image: vacationsTravelImg,
        link: 'https://www.vacationstravel.ae/',
    },
];

export default function Results() {
    return (
        <section className="bg-[var(--color-bg-white)] py-24 max-md:py-16" id="results">
            <div className="max-w-[var(--container-lg)] mx-auto px-4 md:px-6">
                <FadeIn>
                    <SectionHeader
                        label="[Client Success]"
                        heading={
                            <>
                                Flawless <span className="text-[var(--color-accent-purple)]"> Execution</span><br />
                                Measurable Revenue <span className="text-[var(--color-accent-purple)]">Growth</span>
                            </>
                        }
                        subtitle="We build high-performance digital solutions that drive business growth, including web development, eCommerce integration, and custom mobile app development."
                    />
                </FadeIn>

                {/* 3-Column Project Cards */}
                <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8">
                    {projects.map((p, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="group cursor-pointer">
                                {/* Thumbnail */}
                                <div
                                    className="relative h-56 rounded-none overflow-hidden mb-5"
                                >
                                    <img
                                        src={p.image}
                                        alt={p.category}
                                        className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:blur-[3px]"
                                    />
                                    {/* View More Overlay */}
                                    <a
                                        href={p.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/10 z-10"
                                    >
                                        <span className="flex items-center gap-2 px-6 py-2 bg-white/95 text-black text-xs font-semibold tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                                            Visit Website
                                            <ExternalLinkIcon size={12} />
                                        </span>
                                    </a>
                                </div>

                                <p className="text-sm font-semibold text-[var(--color-accent-purple)] mb-1.5">
                                    {p.category}
                                </p>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {p.title}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
