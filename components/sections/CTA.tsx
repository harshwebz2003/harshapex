'use client';

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const [form, setForm] = useState({ name: '', email: '', company: '', serviceType: '', budget: '', message: '' });
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
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || 'N/A'}\nService/System Needed: ${form.serviceType || 'Not specified'}\nBudget Range: ${form.budget || 'Flexible'}\n\nProject Scope & Message:\n${form.message}`
    );

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

  return (
    <section id="contact" ref={sectionRef} className="py-12 sm:py-20 md:py-32 bg-transparent relative overflow-hidden font-body w-full">
      {/* Background glow meshes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#6DD5C4]/4 blur-[160px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#B8C0FF]/4 blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="cta-header text-center mb-8 sm:mb-14">
          <p className="text-xs tracking-[0.35em] uppercase text-[#6DD5C4] font-semibold mb-2 sm:mb-3 font-mono">Let&apos;s Connect</p>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight font-display tracking-tight break-words"
          >
            Start Your Next{' '}
            <span className="bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">
              Project
            </span>
          </h2>
          <p className="text-[#E7D8FF]/70 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed px-2">
            Need a high-converting website, custom POS system, mobile application, or business portal on your budget? Let&apos;s build it together.
          </p>
        </div>

        {/* Form Container */}
        <div className="cta-form-container p-6 sm:p-8 md:p-12 rounded-[28px] sm:rounded-[32px] border border-[#B8C0FF]/15 bg-gradient-to-br from-[#1A1630]/80 via-[#120F26]/90 to-[#0D0B1A]/95 backdrop-blur-xl shadow-2xl">
          {submitted ? (
            <div ref={successRef} className="text-center py-12 sm:py-16">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#6DD5C4] to-[#B8C0FF] flex items-center justify-center mx-auto mb-5 sm:mb-6 shadow-[0_0_30px_rgba(109,213,196,0.4)]">
                <span className="text-2xl text-[#0D0B1A] font-bold">✓</span>
              </div>
              <h3
                className="text-2xl md:text-3xl font-bold text-white mb-3 font-display"
              >
                Inquiry Initialized!
              </h3>
              <p className="text-[#E7D8FF]/70 max-w-md mx-auto text-sm leading-relaxed mb-6 sm:mb-8 font-light">
                Thank you for reaching out. We will review your project requirements and get back to you within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-8 py-3 rounded-full border border-[#6DD5C4]/40 text-[#6DD5C4] text-xs font-semibold uppercase tracking-wider font-mono hover:bg-[#6DD5C4]/10 transition-colors"
              >
                Send Another Message
              </button>
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
                  <option value="" className="bg-[#1A1630] text-gray-400">Select system type...</option>
                  <option value="POS System & Billing Software" className="bg-[#1A1630]">Custom POS System & Billing</option>
                  <option value="Mobile App (iOS & Android)" className="bg-[#1A1630]">Mobile App (iOS / Android)</option>
                  <option value="Custom Business Software / ERP" className="bg-[#1A1630]">Custom Business Software / ERP</option>
                  <option value="Website & Web Design" className="bg-[#1A1630]">Website / Web Design</option>
                  <option value="Full E-Commerce Platform" className="bg-[#1A1630]">Full E-Commerce Platform</option>
                  <option value="UI/UX & Brand Identity" className="bg-[#1A1630]">UI/UX & Brand Identity</option>
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
                  <option value="starter" className="bg-[#1A1630]">Standard (LKR 25,000 – 60,000)</option>
                  <option value="growth" className="bg-[#1A1630]">Professional (LKR 60,000 – 150,000)</option>
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
                  placeholder="e.g. Need a POS billing system for my retail shop with barcode scanning, or a mobile delivery app..."
                  className="w-full pt-6 pb-3 px-4 bg-[#B8C0FF]/5 border border-[#B8C0FF]/15 rounded-xl sm:rounded-2xl text-white text-base outline-none focus:border-[#6DD5C4]/60 transition-colors resize-none placeholder:text-white/20 font-light"
                />
              </div>

              {/* Submit */}
              <div className="md:col-span-2 flex justify-center pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] text-[#0D0B1A] font-semibold uppercase tracking-[0.08em] shadow-[0_0_40px_rgba(109,213,196,0.35)] hover:shadow-[0_0_50px_rgba(109,213,196,0.55)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:scale-100 disabled:cursor-not-allowed min-w-[220px] font-mono text-xs cursor-pointer text-center"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-3.5 h-3.5 rounded-full border-2 border-[#0D0B1A]/30 border-t-[#0D0B1A] animate-spin" />
                      Dispatching...
                    </span>
                  ) : (
                    'Inquire System / Project →'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Contact info */}
        <div className="mt-10 sm:mt-14 flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 text-center">
          {[
            { icon: '✉', label: 'Email', value: 'chamilka.ch@gmail.com', href: 'mailto:chamilka.ch@gmail.com' },
            { icon: '📞', label: 'Phone / WhatsApp', value: '+94 77 066 3154', href: 'tel:+94770663154' },
            { icon: '📍', label: 'Location', value: 'Sri Lanka', href: '#contact' },
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
                <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#6DD5C4]/70 font-mono">{item.label}</div>
                <div className="text-xs sm:text-sm text-[#E7D8FF]/80 font-light group-hover:text-white transition-colors truncate max-w-[200px] sm:max-w-none">{item.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
