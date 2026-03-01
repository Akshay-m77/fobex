import { useState } from 'react';

const services = [
    {
        title: 'Web & Mobile Development ',
        description: 'World-beating, future ready apps and websites designed to scale fast.',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    },
    {
        title: 'Search Engine Optimization',
        description: 'Smart visibility strategies that turn your website into a lead generation machine. ',
        image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2670&auto=format&fit=crop',
    },
    {
        title: 'Product Design ',
        description: 'Delightful digital products designed to drive revenue and seamless user experiences.',
        image: 'https://images.unsplash.com/photo-1627398246609-edf64fc019ec?q=80&w=2574&auto=format&fit=crop',
    },
    {
        title: 'Branding & Creatives',
        description: 'Strategic brand planning and data driven decisions to reach your goals fast.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop',
    },
    {
        title: 'Product Management ',
        description: 'Expert team coordination to deliver jaw-dropping products on time and on budget.',
        image: 'https://images.unsplash.com/photo-1618005191295-a226b9a80e1c?q=80&w=2564&auto=format&fit=crop',
    },
    {
        title: 'Photo & Video Production',
        description: 'Stunning visual content that showcases your brand in the best possible light.',
        image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2564&auto=format&fit=crop',
    },
];

export default function Features() {
    const [activeFeature, setActiveFeature] = useState(1);

    return (
        <section className="bg-[var(--color-bg-white)] py-24 max-md:py-16" id="features">
            <div className="max-w-[var(--container-lg)] mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-[2.5rem] max-md:text-[1.75rem] font-medium leading-[1.2] tracking-[-0.02em] text-gray-900 mb-5">
                        We work with forward-thinking brands <br /> to create high-quality digital spaces.
                    </h2>
                    <p className="text-sm text-gray-500 max-w-[520px] mx-auto leading-relaxed">
                        We focus on user clarity and system speed from day one so your digital presence grows smoothly.
                        Our strategy across all services is built to make a big market impact over time.
                    </p>
                </div>

                {/* Desktop Grid */}
                <div className="grid grid-cols-3 gap-5 max-md:hidden">
                    {services.map((s, i) => (
                        <div
                            key={i}
                            className={`group rounded-xl border bg-white overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(124,58,237,0.15)] ${i === 0
                                ? 'border-teal-400 border-2'
                                : 'border-gray-200'
                                }`}
                        >
                            {/* Image thumbnail */}
                            <div className="overflow-hidden bg-black">
                                <div className="h-44 w-full relative transition-transform duration-500 group-hover:scale-105">
                                    <img src={s.image} alt={s.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                                </div>
                            </div>

                            {/* Text content */}
                            <div className="p-5">
                                <h3 className="text-base font-medium text-gray-900 mb-1.5">
                                    {s.title}
                                </h3>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    {s.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Accordion */}
                <div className="hidden max-md:flex flex-col gap-2">
                    {services.map((s, i) => (
                        <div key={i} onClick={() => setActiveFeature(i)} className="cursor-pointer">
                            {activeFeature === i ? (
                                <div className="w-full relative overflow-hidden transition-all duration-500 bg-black">
                                    <div className="h-44 relative w-full">
                                        <img src={s.image} alt={s.title} className="w-full h-full object-cover opacity-80" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                                        <div className="absolute bottom-5 left-5 right-5 z-10 text-left">
                                            <h3 className="text-base font-medium text-white mb-1.5">
                                                {s.title}
                                            </h3>
                                            <p className="text-[11px] text-white/80 leading-relaxed max-w-[90%] whitespace-normal overflow-hidden overflow-ellipsis line-clamp-2">
                                                {s.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center justify-between px-6 py-5 bg-[#f6f8fb] rounded-sm transition-all duration-300">
                                    <span className="italic font-medium text-sm text-gray-900">{s.title}</span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
