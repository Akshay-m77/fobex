import { useState } from 'react';
import SectionHeader from './ui/SectionHeader';

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
            <div className="max-w-[700px] mx-auto px-6">
                <SectionHeader
                    label="[FOR CURIOUS MIND]"
                    heading={
                        <>
                            Frequently <span className="italic text-[var(--color-accent-purple)]">asked</span> Questions
                        </>
                    }
                    subtitle="Interested in working with us but have a few questions? We've answered the most common ones here. For anything more specific, our team is always happy to help—just reach out."
                />

                {/* FAQ Items */}
                <div className="flex flex-col">
                    {faqs.map((q, i) => (
                        <div key={i} className="border-b border-gray-300">
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
                            >
                                <span className="text-sm font-medium text-gray-900 group-hover:text-[var(--color-accent-purple)] group-hover:translate-x-2 transition-all duration-300">
                                    {q.question}
                                </span>
                                <span className={`text-gray-400 text-xl leading-none transition-all duration-300 group-hover:scale-125 group-hover:text-[var(--color-accent-purple)] ${open === i ? 'rotate-45 !text-[var(--color-accent-purple)]' : ''}`}>
                                    +
                                </span>
                            </button>
                            {open === i && (
                                <div className="pb-5 text-sm text-gray-500 leading-relaxed">
                                    {q.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
