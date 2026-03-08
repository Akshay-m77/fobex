import { ArrowIcon } from './Icons';

interface ArrowButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: 'dark' | 'outline';
    type?: 'button' | 'submit';
    className?: string;
    fullWidth?: boolean;
}

/**
 * Reusable pill-shaped CTA button with a purple arrow circle.
 * Used across Hero, Industries, Testimonials, CTA, and Footer sections.
 */
export default function ArrowButton({
    children,
    href,
    onClick,
    variant = 'outline',
    type = 'button',
    className = '',
    fullWidth = false,
}: ArrowButtonProps) {
    const baseClasses = `relative inline-flex items-center italic gap-12 pl-6 pr-2 py-2 rounded-full text-sm transition-all duration-500 group cursor-pointer overflow-hidden ${fullWidth ? 'w-full justify-between' : ''
        }`;

    const variantClasses =
        variant === 'dark'
            ? 'bg-gray-900 text-gray-300 group-hover:text-white border border-[#9D31FF] before:bg-[#9D31FF]'
            : 'border border-[#9D31FF] text-gray-300 group-hover:text-white before:bg-[#9D31FF]';

    const animationClasses = 'before:absolute before:inset-0 before:w-full before:h-full before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-500 before:ease-out before:z-0';

    const classes = `${baseClasses} ${variantClasses} ${animationClasses} ${className}`;

    const inner = (
        <>
            <span className="relative z-10">{children}</span>
            <span className="w-9 h-9 rounded-full bg-[var(--color-accent-purple)] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform relative z-10 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                <ArrowIcon />
            </span>
        </>
    );

    if (href) {
        return (
            <a href={href} className={classes}>
                {inner}
            </a>
        );
    }

    return (
        <button type={type} onClick={onClick} className={classes}>
            {inner}
        </button>
    );
}
