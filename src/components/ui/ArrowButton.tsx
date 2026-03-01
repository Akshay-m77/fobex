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
    const baseClasses = `inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full text-sm transition-all duration-300 group cursor-pointer hover:-translate-y-1 hover:shadow-lg ${fullWidth ? 'w-full justify-between' : ''
        }`;

    const variantClasses =
        variant === 'dark'
            ? 'bg-gray-900 text-gray-300 hover:bg-gray-800'
            : 'bg-[var(--color-overlay-light)] border border-[var(--color-border-light)] text-gray-300 hover:bg-[var(--color-overlay-hover)] hover:border-[var(--color-overlay-hover-border)]';

    const classes = `${baseClasses} ${variantClasses} ${className}`;

    const inner = (
        <>
            {children}
            <span className="w-9 h-9 rounded-full bg-[var(--color-accent-purple)] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
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
