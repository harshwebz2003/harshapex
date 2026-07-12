'use client';

import { useState, useRef } from 'react';
import { gsap } from 'gsap';

export default function CTA() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', budget: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
    if (successRef.current) {
      gsap.fromTo(
        successRef.current,
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'back.out(1.7)' }
      );
    }
  };

  return (
    <section id="contact" className="py-32 md:py-40 bg-[#0A0918] relative overflow-hidden">
      {/* Background radial */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#B8C0FF]/8 blur-[120px]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8C0FF]/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-[#B8C0FF] mb-4">Let&apos;s Talk</p>
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: 'Clash Display, sans-serif' }}
          >
            Ready to Build Something{' '}
            <span className="bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">
              Extraordinary?
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-[#E7D8FF]/50 text-lg">
            Tell us about your project. We respond within 24 hours and offer a free 30-minute discovery call.
          </p>
        </div>

        {/* Form / Success */}
        {submitted ? (
          <div
            ref={successRef}
            className="text-center py-20 px-8 rounded-3xl border border-[#B8C0FF]/20 bg-gradient-to-br from-[#1A1630]/60 to-[#0D0B1A]/80"
          >
            <div className="text-6xl mb-6">✦</div>
            <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Clash Display, sans-serif' }}>
              Message Sent!
            </h3>
            <p className="text-[#E7D8FF]/50">
              Thank you, {form.name}! We&apos;ll be in touch within 24 hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-5 p-8 md:p-12 rounded-3xl border border-[#B8C0FF]/10 bg-gradient-to-br from-[#1A1630]/40 to-[#0D0B1A]/80 backdrop-blur-sm"
          >
            {/* Name */}
            <div className="relative group">
              <label className="absolute left-4 top-4 text-xs text-[#B8C0FF]/50 transition-all duration-200 pointer-events-none group-focus-within:-top-2.5 group-focus-within:text-[10px] group-focus-within:text-[#B8C0FF]">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full pt-6 pb-3 px-4 bg-[#B8C0FF]/5 border border-[#B8C0FF]/15 rounded-2xl text-white text-sm outline-none focus:border-[#B8C0FF]/50 transition-colors placeholder:text-transparent"
              />
            </div>

            {/* Email */}
            <div className="relative group">
              <label className="absolute left-4 top-4 text-xs text-[#B8C0FF]/50 transition-all duration-200 pointer-events-none group-focus-within:-top-2.5 group-focus-within:text-[10px] group-focus-within:text-[#B8C0FF]">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full pt-6 pb-3 px-4 bg-[#B8C0FF]/5 border border-[#B8C0FF]/15 rounded-2xl text-white text-sm outline-none focus:border-[#B8C0FF]/50 transition-colors placeholder:text-transparent"
              />
            </div>

            {/* Company */}
            <div className="relative group">
              <label className="absolute left-4 top-4 text-xs text-[#B8C0FF]/50 transition-all duration-200 pointer-events-none group-focus-within:-top-2.5 group-focus-within:text-[10px] group-focus-within:text-[#B8C0FF]">
                Company Name
              </label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full pt-6 pb-3 px-4 bg-[#B8C0FF]/5 border border-[#B8C0FF]/15 rounded-2xl text-white text-sm outline-none focus:border-[#B8C0FF]/50 transition-colors placeholder:text-transparent"
              />
            </div>

            {/* Budget */}
            <div className="relative group">
              <label className="absolute left-4 top-4 text-xs text-[#B8C0FF]/50 transition-all duration-200 pointer-events-none">
                Budget Range
              </label>
              <select
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                className="w-full pt-6 pb-3 px-4 bg-[#B8C0FF]/5 border border-[#B8C0FF]/15 rounded-2xl text-white text-sm outline-none focus:border-[#B8C0FF]/50 transition-colors appearance-none"
              >
                <option value="" className="bg-[#1A1630]"></option>
                <option value="starter" className="bg-[#1A1630]">LKR 45,000 – 95,000</option>
                <option value="growth" className="bg-[#1A1630]">LKR 95,000 – 200,000</option>
                <option value="enterprise" className="bg-[#1A1630]">LKR 200,000+</option>
              </select>
            </div>

            {/* Message */}
            <div className="md:col-span-2 relative group">
              <label className="absolute left-4 top-4 text-xs text-[#B8C0FF]/50 transition-all duration-200 pointer-events-none group-focus-within:-top-2.5 group-focus-within:text-[10px] group-focus-within:text-[#B8C0FF]">
                Tell us about your project *
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full pt-6 pb-3 px-4 bg-[#B8C0FF]/5 border border-[#B8C0FF]/15 rounded-2xl text-white text-sm outline-none focus:border-[#B8C0FF]/50 transition-colors resize-none placeholder:text-transparent"
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="group px-12 py-4 rounded-full bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF] text-[#0D0B1A] font-semibold hover:shadow-[0_0_50px_rgba(184,192,255,0.4)] transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:scale-100 disabled:cursor-not-allowed min-w-[200px]"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 rounded-full border-2 border-[#0D0B1A]/30 border-t-[#0D0B1A] animate-spin" />
                    Sending...
                  </span>
                ) : (
                  'Send Message →'
                )}
              </button>
            </div>
          </form>
        )}

        {/* Contact info */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
          {[
            { icon: '✉', label: 'Email', value: 'chamilka.ch@gmail.com' },
            { icon: '📞', label: 'Phone', value: '+94 77 066 3154' },
            { icon: '📍', label: 'Location', value: 'Sri Lanka' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="text-[#B8C0FF]">{item.icon}</span>
              <div className="text-left">
                <div className="text-xs text-[#E7D8FF]/40">{item.label}</div>
                <div className="text-sm text-[#E7D8FF]/70">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
