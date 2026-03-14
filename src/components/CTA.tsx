import { useState, useRef, useEffect } from 'react';
import ArrowButton from './ui/ArrowButton';
import FadeIn from './ui/FadeIn';

const COUNTRIES = [
    { code: 'IN', dialCode: '+91', flag: '🇮🇳', name: 'India' },
    { code: 'US', dialCode: '+1', flag: '🇺🇸', name: 'United States' },
    { code: 'GB', dialCode: '+44', flag: '🇬🇧', name: 'United Kingdom' },
    { code: 'AU', dialCode: '+61', flag: '🇦🇺', name: 'Australia' },
    { code: 'CA', dialCode: '+1', flag: '🇨🇦', name: 'Canada' },
    { code: 'AE', dialCode: '+971', flag: '🇦🇪', name: 'United Arab Emirates' },
    { code: 'SG', dialCode: '+65', flag: '🇸🇬', name: 'Singapore' },
    { code: 'DE', dialCode: '+49', flag: '🇩🇪', name: 'Germany' },
    { code: 'OTHER', dialCode: '', flag: '🌐', name: 'Other' },
];

export default function CTA() {
    const [nda, setNda] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [manualDialCode, setManualDialCode] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!name.trim()) newErrors.name = 'Full Name is required';

        if (!phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (phone.length < 7) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        if (selectedCountry.code === 'OTHER' && !manualDialCode.trim()) {
            newErrors.phone = 'Please enter a dial code';
        }

        if (!email.trim()) {
            newErrors.email = 'Email address is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
        const secret = import.meta.env.VITE_FORM_SECRET;

        if (!scriptUrl || scriptUrl === 'undefined') {
            setSubmitStatus('error');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrors({});

        const dialCode = selectedCountry.code === 'OTHER' ? manualDialCode : selectedCountry.dialCode;

        const data = {
            name,
            phone: `'${dialCode} ${phone}`,
            email,
            message,
            secret
        };

        try {
            await fetch(scriptUrl, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                },
                body: JSON.stringify(data)
            });

            setSubmitStatus('success');
            setName('');
            setPhone('');
            setManualDialCode('');
            setEmail('');
            setMessage('');
            setNda(false);
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <section className="bg-[var(--color-bg-dark-alt)] py-24 max-md:py-16 border-t-4 border-[var(--color-accent-purple)]" id="contact">
            <div className="max-w-[var(--container-lg)] mx-auto px-4 md:px-6">
                <div className="flex gap-16 items-start max-md:flex-col">
                    {/* Left — Heading + Quote + World Map */}
                    <FadeIn direction="right" className="flex-1 min-w-0" delay={0.2} fullWidth>
                        <h2 className="text-[3.5rem] max-md:text-[2.2rem] font-medium leading-[1.15] mb-10">
                            <span className="text-white">Let's Talk</span>
                            <br />
                            <span className="gradient-text">Business</span>
                        </h2>

                        <blockquote className="text-sm italic text-gray-400 leading-relaxed mb-3 max-w-[300px]">
                            "From big ideas to real results, we partner
                            with brands to design solutions that truly
                            make an impact."
                        </blockquote>
                        <p className="text-sm text-gray-300 font-medium mb-12">
                            CEO - Company name
                        </p>

                        {/* World map dots */}
                        <div className="relative h-40 max-md:h-28 overflow-hidden opacity-60">
                            <svg viewBox="0 0 500 200" fill="none" className="w-full h-full">
                                {/* Simplified dot-based world map */}
                                {[
                                    { key: 'na', coords: [[60, 40], [70, 35], [80, 38], [90, 42], [65, 50], [75, 48], [85, 52], [95, 50], [70, 60], [80, 58], [90, 62], [100, 55], [75, 70], [85, 68], [95, 72]] },
                                    { key: 'sa', coords: [[120, 100], [115, 110], [125, 108], [118, 120], [122, 130], [120, 140], [115, 150], [125, 145]] },
                                    { key: 'eu', coords: [[230, 30], [240, 28], [250, 32], [235, 40], [245, 38], [255, 42], [240, 48], [250, 50], [260, 45]] },
                                    { key: 'af', coords: [[240, 70], [250, 68], [245, 80], [255, 78], [248, 90], [252, 100], [250, 110], [248, 120], [252, 125]] },
                                    { key: 'as', coords: [[280, 30], [290, 28], [300, 32], [310, 35], [320, 30], [330, 38], [285, 45], [295, 42], [305, 48], [315, 45], [325, 50], [335, 42], [340, 48], [290, 55], [300, 58], [310, 52], [320, 60], [330, 55], [340, 58], [300, 68], [310, 65], [320, 70], [330, 68]] },
                                    { key: 'au', coords: [[380, 110], [390, 108], [400, 112], [385, 120], [395, 118], [405, 122], [390, 128], [400, 130]] },
                                ].map((region) =>
                                    region.coords.map(([x, y], i) => (
                                        <circle key={`${region.key}${i}`} cx={x} cy={y} r="1.5" fill="var(--color-accent-purple)" opacity="0.7" />
                                    ))
                                )}
                                {/* Connection lines */}
                                <line x1="100" y1="55" x2="230" y2="40" stroke="var(--color-accent-purple)" strokeWidth="0.3" opacity="0.3" />
                                <line x1="255" y1="45" x2="280" y2="35" stroke="var(--color-accent-purple)" strokeWidth="0.3" opacity="0.3" />
                                <line x1="340" y1="58" x2="380" y2="110" stroke="var(--color-accent-purple)" strokeWidth="0.3" opacity="0.3" />
                            </svg>
                        </div>
                    </FadeIn>

                    {/* Right — Contact Form / Feedback */}
                    <FadeIn direction="left" className="flex-1 min-w-0 transition-all duration-500" delay={0.4} fullWidth>
                        {submitStatus === 'success' ? (
                            <div className="bg-[rgba(var(--accent-purple-rgb),0.05)] border border-[var(--color-accent-purple)] rounded-3xl p-12 text-center animate-fade-in">
                                <div className="w-20 h-20 bg-[var(--color-accent-vibrant)] rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(157,49,255,0.4)]">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-medium text-white mb-4 italic">Thank You!</h3>
                                <p className="text-gray-400 mb-10 leading-relaxed text-sm">
                                    Your enquiry has been received. Our team will reach out to you within the next 24 hours to discuss your project.
                                </p>
                                <button
                                    onClick={() => setSubmitStatus('idle')}
                                    className="text-[var(--color-accent-purple)] text-sm font-medium hover:underline flex items-center gap-2 mx-auto"
                                >
                                    Send another message
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                                {submitStatus === 'error' && (
                                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-xs flex items-center gap-3 animate-fade-in mb-2">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                                        Something went wrong. Please check your connection and try again.
                                    </div>
                                )}

                                {/* Full Name */}
                                <FormField label="Full Name" required error={errors.name}>
                                    <input
                                        type="text"
                                        placeholder="Name..."
                                        className={`form-input transition-all ${errors.name ? 'border-red-500/50 bg-red-500/5' : ''}`}
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                            if (errors.name) setErrors({ ...errors, name: '' });
                                        }}
                                    />
                                </FormField>

                                {/* Primary Contact Number */}
                                <FormField label="Primary Contact Number" required error={errors.phone}>
                                    <div className="flex gap-2 relative" ref={dropdownRef}>
                                        <div
                                            className={`flex items-center gap-1.5 px-3 py-3 rounded-xl bg-[rgba(var(--white-rgb),0.04)] border border-[rgba(var(--white-rgb),0.08)] text-sm text-gray-300 cursor-pointer shrink-0 transition-all hover:bg-[rgba(var(--white-rgb),0.08)] ${errors.phone && selectedCountry.code === 'OTHER' && !manualDialCode ? 'border-red-500/50 bg-red-500/5' : ''}`}
                                            onClick={(e) => {
                                                if (selectedCountry.code !== 'OTHER' || (e.target as HTMLElement).tagName !== 'INPUT') {
                                                    setIsDropdownOpen(!isDropdownOpen);
                                                }
                                            }}
                                        >
                                            <span className="text-base">{selectedCountry.flag}</span>
                                            {selectedCountry.code === 'OTHER' ? (
                                                <input
                                                    type="text"
                                                    placeholder="+..."
                                                    className="w-12 bg-transparent border-none outline-hidden text-xs font-medium text-white placeholder-gray-600 p-0"
                                                    value={manualDialCode}
                                                    onChange={(e) => {
                                                        setManualDialCode(e.target.value);
                                                        if (errors.phone) setErrors({ ...errors, phone: '' });
                                                    }}
                                                    onClick={(e) => e.stopPropagation()}
                                                    autoFocus
                                                />
                                            ) : (
                                                <span className="text-xs font-medium text-gray-400">{selectedCountry.dialCode}</span>
                                            )}
                                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                                                <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>

                                        {/* Dropdown Menu */}
                                        {isDropdownOpen && (
                                            <div className="absolute top-[calc(100%+8px)] left-0 w-[240px] bg-[#1a1a2e] border border-[rgba(var(--white-rgb),0.1)] rounded-xl shadow-xl z-50 py-2 max-h-[300px] overflow-y-auto outline-hidden">
                                                {COUNTRIES.map((country) => (
                                                    <div
                                                        key={country.code}
                                                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-[rgba(var(--white-rgb),0.05)] cursor-pointer transition-colors text-sm text-gray-300"
                                                        onClick={() => {
                                                            setSelectedCountry(country);
                                                            setIsDropdownOpen(false);
                                                        }}
                                                    >
                                                        <span className="text-xl">{country.flag}</span>
                                                        <span className="w-12 text-gray-400 font-medium">{country.dialCode}</span>
                                                        <span className="truncate">{country.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            className={`form-input flex-1 !w-auto ${errors.phone ? 'border-red-500/50 bg-red-500/5' : ''}`}
                                            value={phone}
                                            onChange={(e) => {
                                                setPhone(e.target.value);
                                                if (errors.phone) setErrors({ ...errors, phone: '' });
                                            }}
                                        />
                                    </div>
                                </FormField>

                                {/* Email Address */}
                                <FormField label="Email Address" required error={errors.email}>
                                    <input
                                        type="email"
                                        placeholder="Email...."
                                        className={`form-input ${errors.email ? 'border-red-500/50 bg-red-500/5' : ''}`}
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            if (errors.email) setErrors({ ...errors, email: '' });
                                        }}
                                    />
                                </FormField>

                                {/* Tell us about your project */}
                                <FormField label="Tell us more about your project">
                                    <textarea
                                        rows={4}
                                        className="form-input resize-none"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </FormField>

                                {/* NDA Checkbox */}
                                <label className="flex items-center gap-2.5 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={nda}
                                        onChange={() => setNda(!nda)}
                                        className="w-4 h-4 rounded border-gray-600 accent-[var(--color-accent-purple)]"
                                    />
                                    <span className="text-xs text-gray-400">
                                        I want to protect my data by signing an NDA.
                                    </span>
                                </label>

                                {/* Submit Button */}
                                <ArrowButton type="submit" fullWidth disabled={isSubmitting}>
                                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                                </ArrowButton>

                                {/* Privacy disclaimer */}
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    Please review our{' '}
                                    <a href="#" className="text-[var(--color-accent-purple)] underline hover:text-[var(--color-accent-purple-light)]">Privacy Policy</a>
                                    {' '}and{' '}
                                    <a href="#" className="text-[var(--color-accent-purple)] underline hover:text-[var(--color-accent-purple-light)]">Terms of Service</a>
                                    {' '}before providing your details and clicking Submit Enquiry button
                                </p>
                            </form>
                        )}
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

/** Small helper for consistent form field labels */
function FormField({ label, required, children, error }: { label: string; required?: boolean; children: React.ReactNode; error?: string }) {
    return (
        <div className="relative">
            <label className="text-xs text-gray-400 mb-1.5 block flex justify-between items-center pr-1 transition-all">
                <span>
                    {label}
                    {required && <span className="text-[var(--color-accent-vibrant)]"> *</span>}
                </span>
            </label>
            {children}
            {error && (
                <div className="text-[10px] text-red-500 mt-1.5 pl-1 flex items-center gap-1.5 animate-fade-in absolute -bottom-4.5 left-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                    {error}
                </div>
            )}
        </div>
    );
}
