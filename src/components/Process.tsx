import SectionHeader from './ui/SectionHeader';

const steps = [
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" r="6" stroke="var(--color-accent-purple)" strokeWidth="2" />
                <circle cx="26" cy="14" r="6" stroke="var(--color-accent-purple)" strokeWidth="2" />
                <path d="M14 24v6M26 24v6M10 30h8M22 30h8" stroke="var(--color-accent-purple)" strokeWidth="2" strokeLinecap="round" />
                <path d="M20 10v4" stroke="var(--color-accent-purple)" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        title: 'Discover & Align',
        description: 'We establish project parameters and schedules before development actually begins.',
        items: ['Strategic Market Analysis', 'Technical Architecture Planning', 'Revenue Focused Goal Setting'],
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="10" width="24" height="18" rx="2" stroke="var(--color-accent-purple)" strokeWidth="2" />
                <path d="M8 16h24" stroke="var(--color-accent-purple)" strokeWidth="2" />
                <path d="M14 22h6M14 26h4" stroke="var(--color-accent-purple)" strokeWidth="2" strokeLinecap="round" />
                <circle cx="28" cy="8" r="4" stroke="var(--color-accent-purple)" strokeWidth="2" />
                <path d="M28 6v4M26 8h4" stroke="var(--color-accent-purple)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        title: 'Design & Build',
        description: 'Our team crafts intuitive interfaces backed by secure and efficient code systems.',
        items: ['Custom Interface Design', 'Advanced React Engineering', 'Search Engine Optimization'],
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="12" y="6" width="16" height="22" rx="2" stroke="var(--color-accent-purple)" strokeWidth="2" />
                <path d="M16 12h8M16 16h6" stroke="var(--color-accent-purple)" strokeWidth="2" strokeLinecap="round" />
                <path d="M20 28v6M16 34h8" stroke="var(--color-accent-purple)" strokeWidth="2" strokeLinecap="round" />
                <path d="M15 22l3 3 5-6" stroke="var(--color-accent-purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Launch & Handover',
        description: 'We conduct deep system testing before taking your digital platform live for good.',
        items: ['Rigorous Quality Assurance', 'Smooth Platform Deployment', 'Comprehensive Team Training'],
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="18" r="10" stroke="var(--color-accent-purple)" strokeWidth="2" />
                <path d="M20 12v6l4 3" stroke="var(--color-accent-purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 30l-2 4M26 30l2 4M18 34h4" stroke="var(--color-accent-purple)" strokeWidth="2" strokeLinecap="round" />
                <path d="M30 10l2-2M10 10l-2-2" stroke="var(--color-accent-purple)" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        title: 'Support & Scale',
        description: 'We deliver technical updates and targeted marketing to boost your company growth.',
        items: ['Proactive System Maintenance', 'Ongoing Digital Marketing', 'Continuous Feature Expansion',

        ],
    },
];

export default function Process() {
    return (
        <section id="process" className="bg-[var(--color-bg-light-alt)] py-20 max-md:py-14">
            <div className="max-w-[var(--container-lg)] mx-auto px-6">
                <SectionHeader
                    label="[The Execution Strategy]"
                    heading={
                        <>
                            Turning Ambitious Ideas into <br />
                            <span className="text-[var(--color-accent-purple)]">High Growth Realities</span>
                        </>
                    }
                    subtitle="We make ideas happen in the digital world with goals, smart execution, and results that matter. Each step is designed to help you grow and succeed with real-time results for you."
                />

                {/* 4-Column Process Grid */}
                <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8 max-md:gap-10">
                    {steps.map((step, i) => (
                        <div key={i} className="group transition-transform duration-300 hover:-translate-y-2">
                            <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:text-[var(--color-accent-purple)]">{step.icon}</div>
                            <h3 className="text-base font-medium text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-xs text-gray-500 leading-relaxed mb-6 transition-colors duration-300 group-hover:text-gray-700">{step.description}</p>
                            <div className="flex flex-col gap-3">
                                {step.items.map((item, j) => (
                                    <div
                                        key={j}
                                        className="text-sm font-medium text-gray-800 pb-2 border-b border-gray-200"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
