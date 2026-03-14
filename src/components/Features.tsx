import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    const [activeFeature, setActiveFeature] = useState(-1);

    const toggleFeature = (index: number) => {
        setActiveFeature(activeFeature === index ? -1 : index);
    };

    return (
        <section className="bg-[var(--color-bg-white)] py-24 max-md:py-16" id="features">
            <div className="max-w-[var(--container-lg)] mx-auto px-4 md:px-6">
                {/* Header */}
                <FadeIn>
                    <div className="text-center mb-14">
                        <h2 className="text-[3.5rem] max-md:text-[2.2rem] font-medium leading-[1.2] tracking-[-0.02em] text-gray-900 mb-5">
                            One Partner - Every Digital Edge <br />Your Brand Needs
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
                                className="group bg-[#F4F8FF] overflow-hidden transition-all duration-300"
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
                        <div key={i} onClick={() => toggleFeature(i)} className="cursor-pointer">
                            <div className={`flex items-center justify-between px-6 py-5 rounded-sm transition-all duration-300 ${activeFeature === i ? 'bg-white border-x border-t border-gray-100 shadow-sm' : 'bg-[#f6f8fb] text-gray-900 border border-transparent'}`}>
                                <span className={`italic font-medium text-sm ${activeFeature === i ? 'text-[var(--color-accent-purple)]' : 'text-gray-900'}`}>{s.title}</span>
                                <motion.svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    animate={{ rotate: activeFeature === i ? 90 : 0 }}
                                    className={activeFeature === i ? 'text-[var(--color-accent-purple)]' : 'text-gray-900'}
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </motion.svg>
                            </div>

                            <AnimatePresence>
                                {activeFeature === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                                        className="overflow-hidden bg-black border-x border-b border-gray-100 shadow-sm rounded-b-sm"
                                    >
                                        <motion.div
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.1, duration: 0.4 }}
                                            className="w-full relative"
                                        >
                                            <div className="h-44 relative w-full overflow-hidden">
                                                <motion.img
                                                    initial={{ scale: 1.1 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ duration: 0.8 }}
                                                    src={s.image}
                                                    alt={s.title}
                                                    className="w-full h-full object-cover opacity-85"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                                                <div className="absolute bottom-6 left-6 right-6 z-10 text-left">
                                                    <motion.p
                                                        initial={{ y: 10, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        transition={{ delay: 0.2, duration: 0.4 }}
                                                        className="text-[13px] text-white/90 leading-relaxed max-w-[95%] whitespace-normal"
                                                    >
                                                        {s.description}
                                                    </motion.p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
