'use client';

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', budget: '' });
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
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
        }
      );

      gsap.fromTo(
        '.cta-form-container',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    if (successRef.current) {
      gsap.fromTo(
        successRef.current,
        { opacity: 0, scale: 0.95, y: 15 },
        { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: 'expo.out' }
      );
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-32 md:py-40 bg-transparent relative overflow-hidden font-body">
      {/* Background radial */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#6DD5C4]/6 blur-[140px]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6DD5C4]/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="cta-header text-center mb-16 opacity-0">
          <p className="text-xs tracking-[0.35em] uppercase text-[#6DD5C4] font-semibold mb-4 font-mono">Let&apos;s Talk</p>
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-display tracking-tight"
          >
            Ready to Build Something{' '}
            <span className="bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">
              Extraordinary?
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-[#E7D8FF]/60 text-lg font-light leading-relaxed">
            Tell us about your project vision. We respond within 24 hours to arrange your bespoke discovery consultation.
          </p>
        </div>

        {/* Form / Success */}
        <div className="cta-form-container opacity-0">
          {submitted ? (
            <div
              ref={successRef}
              className="text-center py-20 px-8 rounded-3xl border border-[#6DD5C4]/30 bg-gradient-to-br from-[#1A1630]/80 to-[#0D0B1A]/95 shadow-[0_0_50px_rgba(109,213,196,0.15)]"
            >
              <div className="text-5xl text-[#6DD5C4] mb-5 font-serif">✦</div>
              <h3 className="text-2xl font-bold text-white mb-3 font-display">
                Message Sent Successfully
              </h3>
              <p className="text-[#E7D8FF]/60 font-light">
                Thank you, {form.name}! Our team will connect with you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-5 p-8 md:p-12 rounded-3xl border border-[#B8C0FF]/15 bg-gradient-to-br from-[#1A1630]/50 to-[#0D0B1A]/85 backdrop-blur-md shadow-2xl"
            >
              {/* Name */}
              <div className="relative group">
                <label className="absolute left-4 top-4 text-xs text-[#B8C0FF]/50 transition-all duration-200 pointer-events-none group-focus-within:-top-2.5 group-focus-within:text-[10px] group-focus-within:text-[#6DD5C4] font-mono uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full pt-6 pb-3 px-4 bg-[#B8C0FF]/5 border border-[#B8C0FF]/15 rounded-2xl text-white text-sm outline-none focus:border-[#6DD5C4]/60 transition-colors placeholder:text-transparent font-light"
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
                  className="w-full pt-6 pb-3 px-4 bg-[#B8C0FF]/5 border border-[#B8C0FF]/15 rounded-2xl text-white text-sm outline-none focus:border-[#6DD5C4]/60 transition-colors placeholder:text-transparent font-light"
                />
              </div>

              {/* Company */}
              <div className="relative group">
                <label className="absolute left-4 top-4 text-xs text-[#B8C0FF]/50 transition-all duration-200 pointer-events-none group-focus-within:-top-2.5 group-focus-within:text-[10px] group-focus-within:text-[#6DD5C4] font-mono uppercase tracking-wider">
                  Company Name
                </label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full pt-6 pb-3 px-4 bg-[#B8C0FF]/5 border border-[#B8C0FF]/15 rounded-2xl text-white text-sm outline-none focus:border-[#6DD5C4]/60 transition-colors placeholder:text-transparent font-light"
                />
              </div>

              {/* Budget */}
              <div className="relative group">
                <label className="absolute left-4 top-4 text-xs text-[#B8C0FF]/50 transition-all duration-200 pointer-events-none font-mono uppercase tracking-wider">
                  Budget Range
                </label>
                <select
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className="w-full pt-6 pb-3 px-4 bg-[#B8C0FF]/5 border border-[#B8C0FF]/15 rounded-2xl text-white text-sm outline-none focus:border-[#6DD5C4]/60 transition-colors appearance-none font-light"
                >
                  <option value="" className="bg-[#1A1630]"></option>
                  <option value="starter" className="bg-[#1A1630]">LKR 15,000 – 45,000</option>
                  <option value="growth" className="bg-[#1A1630]">LKR 50,000 – 150,000</option>
                  <option value="enterprise" className="bg-[#1A1630]">LKR 200,000+</option>
                </select>
              </div>

              {/* Message */}
              <div className="md:col-span-2 relative group">
                <label className="absolute left-4 top-4 text-xs text-[#B8C0FF]/50 transition-all duration-200 pointer-events-none group-focus-within:-top-2.5 group-focus-within:text-[10px] group-focus-within:text-[#6DD5C4] font-mono uppercase tracking-wider">
                  Tell us about your project *
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full pt-6 pb-3 px-4 bg-[#B8C0FF]/5 border border-[#B8C0FF]/15 rounded-2xl text-white text-sm outline-none focus:border-[#6DD5C4]/60 transition-colors resize-none placeholder:text-transparent font-light"
                />
              </div>

              {/* Submit */}
              <div className="md:col-span-2 flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="group px-10 py-4 rounded-full bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] text-[#0D0B1A] font-semibold uppercase tracking-[0.08em] shadow-[0_0_40px_rgba(109,213,196,0.35)] hover:shadow-[0_0_50px_rgba(109,213,196,0.55)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:scale-100 disabled:cursor-not-allowed min-w-[220px] font-mono text-xs cursor-pointer"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-3.5 h-3.5 rounded-full border-2 border-[#0D0B1A]/30 border-t-[#0D0B1A] animate-spin" />
                      Dispatching...
                    </span>
                  ) : (
                    'Send Message →'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Contact info */}
        <div className="mt-14 flex flex-wrap justify-center gap-8 md:gap-12 text-center">
          {[
            { icon: '✉', label: 'Email', value: 'chamilka.ch@gmail.com', href: 'mailto:chamilka.ch@gmail.com' },
            { icon: '📞', label: 'Phone', value: '+94 77 066 3154', href: 'tel:+94770663154' },
            { icon: '📍', label: 'Location', value: 'Sri Lanka', href: '#contact' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-3.5 group p-2 rounded-2xl transition-all duration-300 hover:bg-white/[0.03]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#6DD5C4]/10 border border-[#6DD5C4]/25 flex items-center justify-center text-sm text-[#6DD5C4] group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#6DD5C4]/20 group-hover:border-[#6DD5C4]/60 group-hover:shadow-[0_0_20px_rgba(109,213,196,0.4)] transition-all duration-300 ease-out">
                <span className="transform transition-transform duration-300 group-hover:scale-110">{item.icon}</span>
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider text-[#6DD5C4]/70 font-mono">{item.label}</div>
                <div className="text-sm text-[#E7D8FF]/80 font-light group-hover:text-white transition-colors">{item.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
