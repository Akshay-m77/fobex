import SectionHeader from './ui/SectionHeader';

const projects = [
    {
        category: 'Corporate Consulting',
        title: "We partnered with a Bangalore-based marketing firm to build a powerful lead generation website, helping them attract more qualified clients and grow their revenue.",
        image: 'https://images.unsplash.com/photo-1522792011400-988365922c26?q=80&w=800&auto=format&fit=crop',
    },
    {
        category: 'Food and Beverage',
        title: 'We transformed this growing Kerala cafe into a highly profitable client by building a custom digital identity and localized web platform. Our strategic local search optimization captured neighbourhood traffic, resulting in fully booked event spaces and a massive surge in daily physical sales.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    },
    {
        category: 'Vacations Travel Travel and Tourism',
        title: 'As the dedicated technology partner for this UAE based travel client, we engineered a globally optimized booking application. By simplifying complex visa selections through intuitive user navigation, our custom software directly accelerated their online conversion rates and generated massive global booking profit.',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    },
];

export default function Results() {
    return (
        <section className="bg-[var(--color-bg-white)] py-24 max-md:py-16" id="results">
            <div className="max-w-[var(--container-lg)] mx-auto px-6">
                <SectionHeader
                    label="[RESULTS DELIVERED]"
                    heading={
                        <>
                            <span className="text-[var(--color-accent-purple)]">Flawless execution</span> is our standard.<br />
                            Revenue growth is  <span className="text-[var(--color-accent-purple)]">our commitment.</span>
                        </>
                    }
                    subtitle="Our team develops high performance digital assets structured to fuel your continuous expansion. Functioning as a premier digital agency, we manage complete web development, digital commerce integration, and custom mobile applications across the entire project lifespan."
                />

                {/* 3-Column Project Cards */}
                <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8">
                    {projects.map((p, i) => (
                        <div key={i} className="group cursor-pointer">
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
                    ))}
                </div>
            </div>
        </section>
    );
}
