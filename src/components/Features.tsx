import { useState } from 'react';
import FadeIn from './ui/FadeIn';

import img1 from '../assets/features/Group 1.png';
import img2 from '../assets/features/Group 2.png';
import img3 from '../assets/features/Group 3.png';
import img4 from '../assets/features/Group 4.png';
import img5 from '../assets/features/Group 5.png';
import img6 from '../assets/features/Group 6.png';

const services = [
    {
        title: 'Web & Mobile Development ',
        description: 'World-beating, future ready apps and websites designed to scale fast.',
        image: img1,
    },
    {
        title: 'Search Engine Optimization',
        description: 'Smart visibility strategies that turn your website into a lead generation machine. ',
        image: img2,
    },
    {
        title: 'Product Design ',
        description: 'Delightful digital products designed to drive revenue and seamless user experiences.',
        image: img3,
    },
    {
        title: 'Branding & Creatives',
        description: 'Strategic brand planning and data driven decisions to reach your goals fast.',
        image: img4,
    },
    {
        title: 'Product Management ',
        description: 'Expert team coordination to deliver jaw-dropping products on time and on budget.',
        image: img5,
    },
    {
        title: 'Photo & Video Production',
        description: 'Stunning visual content that showcases your brand in the best possible light.',
        image: img6,
    },
];

export default function Features() {
    const [activeFeature, setActiveFeature] = useState(1);

    return (
        <section className="bg-[var(--color-bg-white)] py-24 max-md:py-16" id="features">
            <div className="max-w-[var(--container-lg)] mx-auto px-6">
                {/* Header */}
                <FadeIn>
                    <div className="text-center mb-14">
                        <h2 className="text-[3.5rem] max-md:text-[2.2rem] font-medium leading-[1.2] tracking-[-0.02em] text-gray-900 mb-5">
                            We work with forward-thinking brands <br /> to create high-quality digital spaces.
                        </h2>
                        <p className="text-sm text-gray-500 mx-auto leading-relaxed">
                            We focus on user clarity and system speed from day one so your digital presence grows smoothly.<br className="hidden md:block" />
                            Our strategy across all services is built to make a big market impact over time.
                        </p>
                    </div>
                </FadeIn>

                {/* Desktop Grid */}
                <div className="grid grid-cols-3 gap-5 max-md:hidden">
                    {services.map((s, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div
                                className="group bg-[#F4F8FF] overflow-hidden transition-all duration-300 hover:shadow-[0_10px_40px_rgba(124,58,237,0.15)]"
                            >
                                {/* Image thumbnail */}
                                <div className="overflow-hidden bg-black">
                                    <div className="h-32 w-full relative transition-transform duration-700 ease-out group-hover:scale-110">
                                        <img src={s.image} alt={s.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                                    </div>
                                </div>

                                {/* Text content */}
                                <div className="p-8 pt-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1 inline-block relative pb-1
after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-[95%] after:bg-[#8B5CF6]">
                                        {s.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                        {s.description}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* Mobile Accordion */}
                <div className="hidden max-md:flex flex-col gap-2">
                    {services.map((s, i) => (
                        <div key={i} onClick={() => setActiveFeature(i)} className="cursor-pointer">
                            {activeFeature === i ? (
                                <div className="w-full relative overflow-hidden transition-all duration-500 bg-black">
                                    <div className="h-40 relative w-full">
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
