interface SectionHeaderProps {
    label?: string;
    heading: React.ReactNode;
    subtitle?: string;
    dark?: boolean;
    className?: string;
}

/**
 * Reusable section header with optional purple label, heading, and subtitle.
 * Used across Process, Results, Industries, Testimonials, and FAQ sections.
 */
export default function SectionHeader({
    label,
    heading,
    subtitle,
    dark = false,
    className = '',
}: SectionHeaderProps) {
    return (
        <div className={`text-center mb-14 ${className}`}>
            {label && (
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-accent-purple)] mb-5">
                    {label}
                </p>
            )}
            <h2
                className={`text-[2.5rem] max-md:text-[1.75rem] font-bold leading-[1.2] tracking-[-0.02em] mb-5 ${dark ? 'text-white' : 'text-gray-900'
                    }`}
            >
                {heading}
            </h2>
            {subtitle && (
                <p
                    className={`text-sm max-w-[700px] mx-auto leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-500'
                        }`}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}
