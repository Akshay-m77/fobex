import { useState } from 'react';

const faqs = [
    {
        question: 'What is digital consulting?',
        answer: 'Digital consulting is the process of helping businesses leverage technology to improve their operations, customer experiences, and overall growth. It covers everything from strategy and UX design to full-stack development and digital transformation.',
    },
    {
        question: 'What digital consulting services do you offer?',
        answer: 'We offer a comprehensive suite of services including UX/UI design, web and mobile app development, e-commerce solutions, cloud infrastructure, digital strategy, and ongoing product support and maintenance.',
    },
    {
        question: 'How are you different from other companies?',
        answer: 'We combine deep technical expertise with a design-first approach. Unlike traditional agencies, we focus on measurable outcomes, transparent communication, and long-term partnerships rather than one-off projects.',
    },
    {
        question: 'How much does it cost to work with you?',
        answer: 'Our pricing depends on the scope, complexity, and timeline of each project. We offer flexible engagement models — from fixed-price projects to dedicated team arrangements. Get in touch for a tailored quote.',
    },
    {
        question: 'What kinds of projects do you specialise in?',
        answer: 'We specialise in complex digital products across healthcare, fintech, e-commerce, logistics, and enterprise SaaS. From MVPs to large-scale platform redesigns, we handle projects of all sizes.',
    },
    {
        question: 'Does your whole team work in house?',
        answer: 'Yes, our core team of designers, developers, and strategists works in-house. This ensures tight collaboration, consistent quality, and seamless communication throughout every project.',
    },
    {
        question: 'What projects are you most proud of?',
        answer: "We're proud of every project, but standout work includes transforming a legacy healthcare platform into a modern SaaS product, building a logistics tracking system used across Europe, and launching an e-commerce platform that tripled client revenue.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section className="bg-[var(--color-bg-light)] py-24 max-md:py-16" id="faq">
            <div className="max-w-[var(--container-lg)] mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* Left Column: Heading */}
                    <div className="lg:col-span-5">
                        <div className="lg:sticky lg:top-32">
                            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-accent-purple)] mb-4">
                                [FOR CURIOUS MIND]
                            </p>
                            <h2 className="text-[3.5rem] max-md:text-[2.2rem] font-medium leading-[1.2] tracking-[-0.02em] mb-5 text-gray-900">
                                Frequently <span className="text-[var(--color-accent-purple)]">asked</span> Questions
                            </h2>
                            <p className="text-sm leading-relaxed text-gray-500 max-w-[600px]">
                                Interested in working with us but have a few questions? We've answered the most common ones here. For anything more specific, our team is always happy to help—just reach out.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: FAQ Items */}
                    <div className="lg:col-span-7">
                        <div className="flex flex-col border-t border-gray-300">
                            {faqs.map((q, i) => (
                                <div key={i} className="border-b border-gray-300">
                                    <button
                                        onClick={() => setOpen(open === i ? null : i)}
                                        className="w-full flex items-start justify-between py-6 text-left cursor-pointer group gap-6"
                                    >
                                        <span className="text-base italic font-medium text-gray-900 group-hover:text-[var(--color-accent-purple)] group-hover:translate-x-2 transition-all duration-300">
                                            {q.question}
                                        </span>
                                        <span className={`text-gray-400 text-xl leading-none transition-all duration-300 group-hover:scale-125 group-hover:text-[var(--color-accent-purple)] mt-1 ${open === i ? 'rotate-45 !text-[var(--color-accent-purple)]' : ''}`}>
                                            +
                                        </span>
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 max-w-[550px] ${open === i ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
                                    >
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {q.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
