import { useState, useRef, useEffect } from 'react';
import ArrowButton from './ui/ArrowButton';

const COUNTRIES = [
    { code: 'IN', dialCode: '+91', flag: '🇮🇳', name: 'India' },
    { code: 'US', dialCode: '+1', flag: '🇺🇸', name: 'United States' },
    { code: 'GB', dialCode: '+44', flag: '🇬🇧', name: 'United Kingdom' },
    { code: 'AU', dialCode: '+61', flag: '🇦🇺', name: 'Australia' },
    { code: 'CA', dialCode: '+1', flag: '🇨🇦', name: 'Canada' },
    { code: 'AE', dialCode: '+971', flag: '🇦🇪', name: 'United Arab Emirates' },
    { code: 'SG', dialCode: '+65', flag: '🇸🇬', name: 'Singapore' },
    { code: 'DE', dialCode: '+49', flag: '🇩🇪', name: 'Germany' },
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
        const secret = import.meta.env.VITE_FORM_SECRET;

        if (!scriptUrl || scriptUrl === 'undefined') {
            alert("Configuration Error: The form endpoint is not set up correctly.");
            return;
        }

        setIsSubmitting(true);

        const data = {
            name,
            phone: `'${selectedCountry.dialCode} ${phone}`,
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
            
            alert("Form submitted successfully!");
            setName('');
            setPhone('');
            setEmail('');
            setMessage('');
            setNda(false);
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred while submitting the form. Please try again.");
        } finally {
            setIsSubmitting(false);
        }

    };


    return (
        <section className="bg-[var(--color-bg-dark-alt)] py-24 max-md:py-16 border-t-4 border-[var(--color-accent-purple)]" id="contact">
            <div className="max-w-[var(--container-lg)] mx-auto px-6">
                <div className="flex gap-16 items-start max-md:flex-col">
                    {/* Left — Heading + Quote + World Map */}
                    <div className="flex-1 min-w-0">
                        <h2 className="text-[3.5rem] max-md:text-[2.2rem] font-medium leading-[1.15] mb-10">
                            <span className="text-white">Let's Talk</span>
                            <br />
                            <span className="text-[var(--color-accent-purple)]">Business</span>
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
                    </div>

                    {/* Right — Contact Form */}
                    <div className="flex-1 min-w-0">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            {/* Full Name */}
                            <FormField label="Full Name" required>
                                <input
                                    type="text"
                                    placeholder="Name..."
                                    className="form-input"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </FormField>

                            {/* Primary Contact Number */}
                            <FormField label="Primary Contact Number" required>
                                <div className="flex gap-2 relative" ref={dropdownRef}>
                                    <div 
                                        className={`flex items-center gap-1.5 px-3 py-3 rounded-xl bg-[rgba(var(--white-rgb),0.04)] border border-[rgba(var(--white-rgb),0.08)] text-sm text-gray-300 cursor-pointer shrink-0 transition-colors hover:bg-[rgba(var(--white-rgb),0.08)]`}
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    >
                                        <span className="text-base">{selectedCountry.flag}</span>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                                            <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>

                                    {/* Dropdown Menu */}
                                    {isDropdownOpen && (
                                        <div className="absolute top-[calc(100%+8px)] left-0 w-[240px] bg-[#1a1a2e] border border-[rgba(var(--white-rgb),0.1)] rounded-xl shadow-xl z-50 py-2 max-h-[300px] overflow-y-auto">
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
                                        placeholder={selectedCountry.dialCode}
                                        className="form-input"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />
                                </div>
                            </FormField>

                            {/* Email Address */}
                            <FormField label="Email Address" required>
                                <input
                                    type="email"
                                    placeholder="Email...."
                                    className="form-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </FormField>

                            {/* Schedule call link */}
                            <p className="text-xs text-gray-500">
                                We will call you ASAP or you can{' '}
                                <a href="#" className="text-[var(--color-accent-purple)] underline hover:text-[var(--color-accent-purple-light)] transition-colors">
                                    schedule a call.
                                </a>
                            </p>

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
                    </div>
                </div>
            </div>
        </section>
    );
}

/** Small helper for consistent form field labels */
function FormField({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
    return (
        <div>
            <label className="text-xs text-gray-400 mb-1.5 block">
                {label}
                {required && <span className="text-[var(--color-accent-purple)]"> *</span>}
            </label>
            {children}
        </div>
    );
}
