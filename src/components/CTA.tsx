import { useState, useRef, useEffect } from 'react';
import ArrowButton from './ui/ArrowButton';
import FadeIn from './ui/FadeIn';
import worldMap from '../assets/world.svg';

const COUNTRIES = [
    { code: 'IN', flagCode: 'in', dialCode: '+91', flag: '🇮🇳', name: 'India' },
    { code: 'US', flagCode: 'us', dialCode: '+1', flag: '🇺🇸', name: 'United States' },
    { code: 'GB', flagCode: 'gb', dialCode: '+44', flag: '🇬🇧', name: 'United Kingdom' },
    { code: 'AU', flagCode: 'au', dialCode: '+61', flag: '🇦🇺', name: 'Australia' },
    { code: 'CA', flagCode: 'ca', dialCode: '+1', flag: '🇨🇦', name: 'Canada' },
    { code: 'AE', flagCode: 'ae', dialCode: '+971', flag: '🇦🇪', name: 'United Arab Emirates' },
    { code: 'SG', flagCode: 'sg', dialCode: '+65', flag: '🇸🇬', name: 'Singapore' },
    { code: 'DE', flagCode: 'de', dialCode: '+49', flag: '🇩🇪', name: 'Germany' },
    { code: 'OTHER', flagCode: '', dialCode: '', flag: '🌐', name: 'Other' },
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
        <section className="bg-[var(--color-bg-dark-alt)] border-t-4 border-[var(--color-accent-purple)] overflow-hidden" id="contact">
            <div className="flex max-md:flex-col min-h-[700px]">
                {/* Left Side (50%) — From absolute edge */}
                <div className="w-1/2 max-md:w-full flex-shrink-0">
                    <FadeIn direction="right" className="h-full" delay={0.2} fullWidth>
                        <div
                            className="h-full flex flex-col justify-between py-24 pl-[calc(5vw+1.5rem)] pr-16 max-md:px-4 max-md:py-16"
                            style={{ background: 'linear-gradient(155.76deg, #000000 15.52%, #351750 159.28%)' }}
                        >
                            <div className="max-w-[500px]">
                                <h2 className="font-medium leading-none mb-10">
                                    <span className="text-white text-[2.5rem] max-md:text-[1.8rem] block mb-2 opacity-90 italic">Let's Talk</span>
                                    <span className="gradient-text text-[5rem] max-md:text-[3.5rem] block -ml-1">Business</span>
                                </h2>

                                <blockquote className="text-sm italic text-gray-400 leading-relaxed mb-3">
                                    "From big ideas to real results, we partner
                                    with brands to design solutions that truly
                                    make an impact."
                                </blockquote>
                                <p className="text-sm text-gray-300 font-medium">
                                    CEO - Fobex
                                </p>
                            </div>

                            {/* World map */}
                            <div className="relative h-52 max-md:h-32 flex items-center mt-auto overflow-hidden">
                                <img
                                    src={worldMap}
                                    alt="World Map"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Right Side (50%) — Form Section */}
                <div className="w-1/2 max-md:w-full flex items-center bg-[var(--color-bg-dark-alt)]">
                    <div className="w-full pl-24 pr-[calc(5vw+1.5rem)] py-24 max-md:px-4 max-md:py-16">
                        <FadeIn direction="left" className="transition-all duration-500" delay={0.4} fullWidth>
                            {submitStatus === 'success' ? (
                                <div className="bg-[rgba(var(--accent-purple-rgb),0.05)] border border-[var(--color-accent-purple)] rounded-none p-12 text-center animate-fade-in">
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
                                <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                                    {submitStatus === 'error' && (
                                        <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-none text-xs flex items-center gap-3 animate-fade-in mb-2">
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
                                                className={`flex items-center gap-1.5 px-3 py-3 rounded-none bg-[rgba(var(--white-rgb),0.04)] border border-[rgba(var(--white-rgb),0.08)] text-sm text-gray-300 cursor-pointer shrink-0 transition-all hover:bg-[rgba(var(--white-rgb),0.08)] ${errors.phone && selectedCountry.code === 'OTHER' && !manualDialCode ? 'border-red-500/50 bg-red-500/5' : ''}`}
                                                onClick={(e) => {
                                                    if (selectedCountry.code !== 'OTHER' || (e.target as HTMLElement).tagName !== 'INPUT') {
                                                        setIsDropdownOpen(!isDropdownOpen);
                                                    }
                                                }}
                                            >
                                                <div className="w-5 h-3.5 flex items-center justify-center overflow-hidden">
                                                    {selectedCountry.code === 'OTHER' ? (
                                                        <span className="text-base leading-none">🌐</span>
                                                    ) : (
                                                        <img
                                                            src={`https://flagcdn.com/w40/${selectedCountry.flagCode}.png`}
                                                            alt={selectedCountry.name}
                                                            className="w-full h-auto object-cover"
                                                        />
                                                    )}
                                                </div>
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
                                                <div className="absolute top-[calc(100%+8px)] left-0 w-[240px] bg-[#1a1a2e] border border-[rgba(var(--white-rgb),0.1)] rounded-none shadow-xl z-50 py-2 max-h-[300px] overflow-y-auto outline-hidden">
                                                    {COUNTRIES.map((country) => (
                                                        <div
                                                            key={country.code}
                                                            className="flex items-center gap-3 px-4 py-2.5 hover:bg-[rgba(var(--white-rgb),0.05)] cursor-pointer transition-colors text-sm text-gray-300"
                                                            onClick={() => {
                                                                setSelectedCountry(country);
                                                                setIsDropdownOpen(false);
                                                            }}
                                                        >
                                                            <div className="w-5 h-3.5 flex items-center justify-center overflow-hidden shrink-0">
                                                                {country.code === 'OTHER' ? (
                                                                    <span className="text-lg leading-none">🌐</span>
                                                                ) : (
                                                                    <img
                                                                        src={`https://flagcdn.com/w40/${country.flagCode}.png`}
                                                                        alt={country.name}
                                                                        className="w-full h-auto object-cover"
                                                                    />
                                                                )}
                                                            </div>
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
                                            className="w-4 h-4 rounded-none border-gray-600 accent-[var(--color-accent-purple)]"
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
