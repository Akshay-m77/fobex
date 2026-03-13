import { useState } from 'react';
import FadeIn from './ui/FadeIn';

const faqs = [
    {
        question: 'What web development services does Fobex provide?',
        answer: 'Fobex is a web development partner that builds custom web applications designed to scale with your business. We are experts in fast and high-performance React-based platforms and scalable web systems.\n\nOur mission is to deliver fast, efficient, and future-proof web applications that are able to handle thousands of users without compromising on speed.\n\nAt Fobex, we don’t just build websites. We build web platforms that deliver real business results.',
    },
    {
        question: 'How does Fobex determine the cost of a custom project?',
        answer: 'Every project we undertake is unique. We consider the goals and vision of your project before we can determine the cost of your project. We provide fixed-cost projects as well as dedicated teams. The cost of our projects is essential. However, we do not just focus on the cost of our projects. More importantly, we want our customers to be able to break even.',
    },
    {
        question: 'Why should I choose Fobex for UI and UX design services as opposed to using a template?',
        answer: 'The reason why we are better than a template is that a template was not developed for your users.\n\nFobex takes the time to understand how your customers think, how they move, and how they make decisions. Fobex creates an interface that feels natural, like it’s almost effortless to use. It’s not just about making it look good; it’s about making it work for you.',
    },
    {
        question: 'How does Fobex help my business rank higher with SEO?',
        answer: 'SEO is not about putting keywords in articles. It’s about getting the word out, but getting it out the right way.\n\nFobex offers you both the technical and content aspects of SEO. Fobex will uncover what your ideal customer is searching for, then position your business to be found for those keywords. This will, in turn, help drive more traffic to your website, increase your rankings, and ultimately turn your website into a lead-generating machine.',
    },
    {
        question: 'How long will it take to see measurable results with Fobex?',
        answer: 'The length of time it will take to see measurable results for software development will depend on the complexity of the project.\n\nThe length of time for SEO and marketing will be between three to six months. Fobex will work to make immediate changes to your website, like the speed of your website, while working on your long-term plan in the background.',
    },
    {
        question: 'Does Fobex offer support after my platform is launched?',
        answer: 'Yes, we do, and we strongly recommend it.\n\nWhile launching the platform is just the beginning, Fobex is committed to providing ongoing support to ensure that the platform continues to perform optimally, remains secure, and continues to grow in the direction that you need it to.',
    },
    {
        question: 'How does Fobex ensure the security and privacy of my project?',
        answer: 'Security is at the heart of everything we do at Fobex.\n\nFrom the first line of code, we follow strict data protection practices, use secure architecture patterns, and implement strong encryption standards. Whether you operate in healthcare, finance, or e-commerce, we build systems designed to protect sensitive data and meet global security expectations.\n\nWhether you’re in healthcare, finance, e-commerce, or any other industry, we understand the importance of protecting sensitive data, and we design our solutions to meet the highest global standards in security and data privacy, from the first line of code.',
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section className="bg-[var(--color-bg-light)] py-24 max-md:py-16" id="faq">
            <div className="max-w-[var(--container-lg)] mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* Left Column: Heading */}
                    <div className="lg:col-span-5">
                        <FadeIn className="lg:sticky lg:top-32">
                            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-accent-purple)] mb-4">
                                [FOR CURIOUS MIND]
                            </p>
                            <h2 className="text-[3.5rem] max-md:text-[2.2rem] font-medium leading-[1.2] tracking-[-0.02em] mb-5 text-gray-900">
                                Frequently <span className="text-[var(--color-accent-purple)]">asked</span> Questions
                            </h2>
                            <p className="text-sm leading-relaxed text-gray-500 max-w-[600px]">
                                Interested in working with us but have a few questions? We've answered the most common ones here. For anything more specific, our team is always happy to help—just reach out.
                            </p>
                        </FadeIn>
                    </div>

                    {/* Right Column: FAQ Items */}
                    <div className="lg:col-span-7">
                        <div className="flex flex-col border-t border-gray-300">
                            {faqs.map((q, i) => (
                                <FadeIn key={i} delay={i * 0.05} fullWidth>
                                    <div className="border-b border-gray-300">
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
                                            <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                                                {q.answer}
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
