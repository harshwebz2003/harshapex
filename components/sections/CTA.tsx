'use client';

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    serviceType: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-header',
        { opacity: 0, y: 40, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.9,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );

      gsap.fromTo(
        '.cta-form-container',
        { opacity: 0, y: 45, filter: 'blur(6px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.9,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'bottom 15%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const subject = encodeURIComponent(`Project Inquiry: ${form.serviceType || 'Custom Solution'} - ${form.name}`);
    const bodyText = `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || 'N/A'}\nService/System Needed: ${form.serviceType || 'Not specified'}\nBudget Range: ${form.budget || 'Flexible'}\n\nProject Scope & Message:\n${form.message}`;
    const body = encodeURIComponent(bodyText);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.location.href = `mailto:chamilka.ch@gmail.com?subject=${subject}&body=${body}`;

      setTimeout(() => {
        if (successRef.current) {
          gsap.fromTo(
            successRef.current,
            { opacity: 0, scale: 0.96 },
            { opacity: 1, scale: 1, duration: 0.6, ease: 'expo.out' }
          );
        }
      }, 50);
    }, 700);
  };

  const getWhatsAppHref = () => {
    const text = form.name
      ? `Hello Harsh Apex, my name is ${form.name}. I'm inquiring about: ${form.serviceType || 'a project'}. Budget: ${form.budget || 'Flexible'}. Details: ${form.message || 'I would like to discuss my requirements.'}`
      : 'Hello Harsh Apex, I would like to start a project inquiry.';
    return `https://wa.me/94770663154?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 sm:py-24 md:py-32 bg-transparent relative overflow-hidden font-body w-full scroll-mt-20"
    >
      {/* Background glow meshes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#6DD5C4]/4 blur-[160px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#B8C0FF]/4 blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="cta-header text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#6DD5C4]/30 bg-[#6DD5C4]/10 text-[#6DD5C4] text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6DD5C4] animate-pulse" />
            LET&apos;S BUILD TOGETHER
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-[1.15] font-display tracking-tight break-words uppercase">
            HAVE AN IDEA?{' '}
            <span className="bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">
              LET&apos;S TURN IT INTO A REAL PRODUCT.
            </span>
          </h2>
          <p className="text-[#E7D8FF]/75 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed px-2">
            Whether you need a high-converting website, a custom POS software, an ERP system, or an AI-driven platform — we engineer it on your budget.
          </p>

          {/* Quick Dual Action Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6">
            <a
              href="#project-form"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#6DD5C4]/10 border border-[#6DD5C4]/30 text-[#6DD5C4] text-xs font-mono font-medium hover:bg-[#6DD5C4]/20 transition-colors"
            >
              <span>⚡</span> Fast 24h Response
            </a>
            <a
              href={getWhatsAppHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-xs font-mono font-medium hover:bg-[#25D366]/20 transition-colors"
            >
              <span>💬</span> Direct WhatsApp (+94 77 066 3154)
            </a>
          </div>
        </div>

        {/* Form Container */}
        <div
          id="project-form"
          className="cta-form-container p-6 sm:p-8 md:p-12 rounded-[28px] sm:rounded-[32px] border border-[#B8C0FF]/15 bg-gradient-to-br from-[#1A1630]/85 via-[#120F26]/90 to-[#0D0B1A]/95 backdrop-blur-xl shadow-2xl"
        >
          {submitted ? (
            <div ref={successRef} className="text-center py-12 sm:py-16">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6DD5C4] to-[#B8C0FF] flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(109,213,196,0.4)]">
                <span className="text-3xl text-[#0D0B1A] font-bold">✓</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-display">
                Inquiry Initialized!
              </h3>
              <p className="text-[#E7D8FF]/70 max-w-md mx-auto text-sm leading-relaxed mb-6 sm:mb-8 font-light">
                Thank you for reaching out. We have opened your email client to dispatch the specifications to{' '}
                <span className="text-[#6DD5C4] font-mono">chamilka.ch@gmail.com</span>. We will review and respond within 24 hours.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={getWhatsAppHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#25D366] text-[#0D0B1A] text-xs font-semibold uppercase tracking-wider font-mono hover:scale-105 transition-all shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center gap-2"
                >
                  <span>💬</span> Confirm on WhatsApp
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-full border border-[#6DD5C4]/40 text-[#6DD5C4] text-xs font-semibold uppercase tracking-wider font-mono hover:bg-[#6DD5C4]/10 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Name */}
              <div className="relative group">
                <label className="absolute left-4 top-4 text-xs text-[#B8C0FF]/50 transition-all duration-200 pointer-events-none group-focus-within:-top-2.5 group-focus-within:text-[10px] group-focus-within:text-[#6DD5C4] font-mono uppercase tracking-wider">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full pt-6 pb-3 px-4 bg-[#B8C0FF]/5 border border-[#B8C0FF]/15 rounded-xl sm:rounded-2xl text-white text-base outline-none focus:border-[#6DD5C4]/60 transition-colors placeholder:text-transparent font-light"
                />
              </div>

              {/* Email */}
              <div className="relative group">
                <label className="absolute left-4 top-4 text-xs text-[#B8C0FF]/50 transition-all duration-200 pointer-events-none group-focus-within:-top-2.5 group-focus-within:text-[10px] group-focus-within:text-[#6DD5C4] font-mono uppercase tracking-wider">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full pt-6 pb-3 px-4 bg-[#B8C0FF]/5 border border-[#B8C0FF]/15 rounded-xl sm:rounded-2xl text-white text-base outline-none focus:border-[#6DD5C4]/60 transition-colors placeholder:text-transparent font-light"
                />
              </div>

              {/* Company */}
              <div className="relative group">
                <label className="absolute left-4 top-4 text-xs text-[#B8C0FF]/50 transition-all duration-200 pointer-events-none group-focus-within:-top-2.5 group-focus-within:text-[10px] group-focus-within:text-[#6DD5C4] font-mono uppercase tracking-wider">
                  Company / Brand Name
                </label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full pt-6 pb-3 px-4 bg-[#B8C0FF]/5 border border-[#B8C0FF]/15 rounded-xl sm:rounded-2xl text-white text-base outline-none focus:border-[#6DD5C4]/60 transition-colors placeholder:text-transparent font-light"
                />
              </div>

              {/* System / Service Type */}
              <div className="relative group">
                <label className="absolute left-4 top-2 text-[10px] text-[#6DD5C4] transition-all duration-200 pointer-events-none font-mono uppercase tracking-wider">
                  System / Service Needed *
                </label>
                <select
                  required
                  value={form.serviceType}
                  onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                  className="w-full pt-6 pb-3 px-4 bg-[#1A1630] border border-[#B8C0FF]/15 rounded-xl sm:rounded-2xl text-white text-base outline-none focus:border-[#6DD5C4]/60 transition-colors appearance-none font-light"
                >
                  <option value="" className="bg-[#1A1630] text-gray-400">
                    Select system type...
                  </option>
                  <option value="POS System & Retail Billing" className="bg-[#1A1630]">
                    Custom POS System &amp; Retail Billing
                  </option>
                  <option value="Custom Business Software / ERP" className="bg-[#1A1630]">
                    Custom Business Software / ERP Suite
                  </option>
                  <option value="High-Converting Website & E-Commerce" className="bg-[#1A1630]">
                    High-Converting Website &amp; E-Commerce
                  </option>
                  <option value="Mobile Application (iOS & Android)" className="bg-[#1A1630]">
                    Mobile Application (iOS &amp; Android)
                  </option>
                  <option value="AI Automation & Internal Portal" className="bg-[#1A1630]">
                    AI Automation &amp; Internal Portal
                  </option>
                  <option value="UI/UX Engineering & Rebrand" className="bg-[#1A1630]">
                    UI/UX Engineering &amp; Rebrand
                  </option>
                </select>
              </div>

              {/* Budget */}
              <div className="md:col-span-2 relative group">
                <label className="absolute left-4 top-2 text-[10px] text-[#6DD5C4] transition-all duration-200 pointer-events-none font-mono uppercase tracking-wider">
                  Budget Expectation (Any Budget Welcome)
                </label>
                <select
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className="w-full pt-6 pb-3 px-4 bg-[#1A1630] border border-[#B8C0FF]/15 rounded-xl sm:rounded-2xl text-white text-base outline-none focus:border-[#6DD5C4]/60 transition-colors appearance-none font-light"
                >
                  <option value="" className="bg-[#1A1630]">Flexible / Let&apos;s discuss budget</option>
                  <option value="budget-starter" className="bg-[#1A1630]">Budget Friendly (Under LKR 25,000)</option>
                  <option value="standard" className="bg-[#1A1630]">Standard (LKR 25,000 – 60,000)</option>
                  <option value="professional" className="bg-[#1A1630]">Professional (LKR 60,000 – 150,000)</option>
                  <option value="enterprise" className="bg-[#1A1630]">Enterprise / Complete Suite (LKR 150,000+)</option>
                </select>
              </div>

              {/* Message */}
              <div className="md:col-span-2 relative group">
                <label className="absolute left-4 top-4 text-xs text-[#B8C0FF]/50 transition-all duration-200 pointer-events-none group-focus-within:-top-2.5 group-focus-within:text-[10px] group-focus-within:text-[#6DD5C4] font-mono uppercase tracking-wider">
                  Tell us about your system or project requirements *
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="e.g. Need a POS billing system for my retail shop with barcode scanning, or an e-commerce website..."
                  className="w-full pt-6 pb-3 px-4 bg-[#B8C0FF]/5 border border-[#B8C0FF]/15 rounded-xl sm:rounded-2xl text-white text-base outline-none focus:border-[#6DD5C4]/60 transition-colors resize-none placeholder:text-white/20 font-light"
                />
              </div>

              {/* Dual Action Buttons (Primary & Secondary CTA) */}
              <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
                {/* Primary CTA */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] text-[#0D0B1A] font-bold uppercase tracking-[0.08em] shadow-[0_0_40px_rgba(109,213,196,0.35)] hover:shadow-[0_0_50px_rgba(109,213,196,0.55)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:scale-100 disabled:cursor-not-allowed min-w-[220px] font-mono text-xs cursor-pointer text-center"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-3.5 h-3.5 rounded-full border-2 border-[#0D0B1A]/30 border-t-[#0D0B1A] animate-spin" />
                      Dispatching...
                    </span>
                  ) : (
                    'Start Your Project →'
                  )}
                </button>

                {/* Secondary CTA */}
                <a
                  href={getWhatsAppHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 sm:px-9 py-4 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] font-semibold uppercase tracking-[0.08em] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] min-w-[200px] font-mono text-xs cursor-pointer text-center flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.15)]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </form>
          )}
        </div>

        {/* Contact info cards */}
        <div className="mt-10 sm:mt-14 flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 text-center">
          {[
            { icon: '✉', label: 'Email', value: 'chamilka.ch@gmail.com', href: 'mailto:chamilka.ch@gmail.com' },
            { icon: '📞', label: 'Phone / WhatsApp', value: '+94 77 066 3154', href: 'https://wa.me/94770663154' },
            { icon: '📍', label: 'Location', value: 'Sri Lanka (Global Delivery)', href: '#contact' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 group p-2 rounded-2xl transition-all duration-300 hover:bg-white/[0.03]"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#6DD5C4]/10 border border-[#6DD5C4]/25 flex items-center justify-center text-sm text-[#6DD5C4] group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#6DD5C4]/20 group-hover:border-[#6DD5C4]/60 transition-all duration-300 ease-out shrink-0">
                <span className="transform transition-transform duration-300 group-hover:scale-110">{item.icon}</span>
              </div>
              <div className="text-left">
                <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#6DD5C4]/70 font-mono">
                  {item.label}
                </div>
                <div className="text-xs sm:text-sm text-[#E7D8FF]/80 font-light group-hover:text-white transition-colors truncate max-w-[200px] sm:max-w-none">
                  {item.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
