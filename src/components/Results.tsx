import SectionHeader from './ui/SectionHeader';
import FadeIn from './ui/FadeIn';

const projects = [
    {
        category: 'Infinios | Corporate Consulting',
        title: "We helped a Bangalore-based marketing firm grow with a lead generation website, improving search visibility and increasing qualified client leads.",
        image: 'https://images.unsplash.com/photo-1522792011400-988365922c26?q=80&w=800&auto=format&fit=crop',
    },
    {
        category: 'Zestano | Food and Beverage',
        title: 'We built a localized website and digital identity for a Kerala café, improving local search visibility, foot traffic, and daily sales.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    },
    {
        category: 'Vacations Travel | Travel and Tourism',
        title: 'We built a global travel booking platform for a UAE client, improving user navigation, visa selection, and online booking conversions.',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    },
];

export default function Results() {
    return (
        <section className="bg-[var(--color-bg-white)] py-24 max-md:py-16" id="results">
            <div className="max-w-[var(--container-lg)] mx-auto px-6">
                <FadeIn>
                    <SectionHeader
                        label="[Client Success]"
                        heading={
                            <>
                                <span className="text-[var(--color-accent-purple)]">Flawless execution</span> is our standard.<br />
                                Revenue growth is <span className="text-[var(--color-accent-purple)]">our commitment.</span>
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
                                    className="relative h-56 rounded-2xl overflow-hidden mb-5 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_10px_40px_rgba(124,58,237,0.15)] group-hover:scale-[1.01]"
                                >
                                    <img
                                        src={p.image}
                                        alt={p.category}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                </div>

                                <p className="text-sm font-semibold text-[var(--color-accent-purple)] mb-1.5 transition-transform duration-300 group-hover:translate-x-1">
                                    {p.category}
                                </p>
                                <p className="text-sm text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-900">
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
