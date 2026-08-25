'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const navigationLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Methodology', href: '#process' },
  { label: 'Featured Projects', href: '#projects' },
  { label: 'Client Endorsements', href: '#testimonials' },
  { label: 'Pricing & Packages', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Connect Scope', href: '#contact' },
];

const solutions = [
  { label: 'Custom POS & Billing Systems', href: '#services' },
  { label: 'Mobile Apps (iOS & Android)', href: '#services' },
  { label: 'Luxury Web Design & Development', href: '#services' },
  { label: 'E-Commerce Platforms & Stores', href: '#services' },
  { label: 'Custom ERP & Business Portals', href: '#services' },
  { label: 'UI/UX Design Systems & Branding', href: '#services' },
  { label: 'Technical SEO & Page Optimization', href: '#services' },
];

const socials = [
  {
    label: 'TikTok',
    handle: '@harsh.apex',
    href: 'https://www.tiktok.com/@harsh.apex',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .59.044.868.128V9.33a6.33 6.33 0 0 0-.868-.06A6.34 6.34 0 0 0 3.1 15.61a6.34 6.34 0 0 0 10.82 4.48 6.3 6.3 0 0 0 1.86-4.48V8.62a8.28 8.28 0 0 0 4.84 1.54V6.71a4.86 4.86 0 0 1-1.03-.02z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    handle: 'harshapex',
    href: 'https://www.facebook.com/harshapex',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    handle: '@c_harshz',
    href: 'https://www.instagram.com/c_harshz/',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    handle: 'chamilka-harshan',
    href: 'https://linkedin.com/in/chamilka-harshan',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    handle: 'chamilka-ch',
    href: 'https://github.com/chamilka-ch',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Colombo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('chamilka.ch@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060411] border-t border-[#B8C0FF]/15 text-white overflow-hidden font-body pt-0 select-none">
      {/* Dynamic Ambient Background Illumination */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#6DD5C4]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[700px] h-[700px] bg-[#B8C0FF]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* ————————————————————————————————————————————————————————————
          1. Grand Pre-Footer Horizon Portal (High-Impact CTA Banner)
      ———————————————————————————————————————————————————————————— */}
      <div className="relative border-b border-white/[0.08] bg-gradient-to-b from-[#0D0A22]/90 via-[#0A071B] to-[#060411] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            {/* Left Statement */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#6DD5C4]/10 border border-[#6DD5C4]/30 text-[#6DD5C4] text-xs font-mono font-medium tracking-[0.2em] uppercase mb-6 shadow-[0_0_20px_rgba(109,213,196,0.15)]">
                <span className="w-2 h-2 rounded-full bg-[#6DD5C4] animate-ping inline-block" />
                <span>Available for 2026 Q3/Q4 Projects</span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white font-display leading-[1.08] mb-6">
                Have a Vision? <br className="hidden sm:inline" />
                Let&apos;s Build Something{' '}
                <span className="bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent italic font-editorial font-normal">
                  Extraordinary.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#E7D8FF]/70 max-w-2xl font-light leading-relaxed">
                From bespoke corporate websites and high-yield e-commerce platforms to custom POS systems and mobile apps — we engineer digital infrastructure that sets you apart.
              </p>
            </div>

            {/* Right Action Hub */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0 w-full sm:w-auto">
              <button
                onClick={scrollToContact}
                className="group relative px-9 py-5 rounded-full bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] text-[#0D0B1A] font-semibold text-xs sm:text-sm uppercase tracking-[0.1em] font-mono shadow-[0_0_40px_rgba(109,213,196,0.35)] hover:shadow-[0_0_60px_rgba(109,213,196,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-500 cursor-pointer flex items-center justify-center gap-3 overflow-hidden"
              >
                <span className="relative z-10">Initialize Project Scope</span>
                <span className="relative z-10 font-bold transition-transform duration-300 group-hover:translate-x-1">→</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>

              <a
                href="https://wa.me/94770663154?text=Hello%20Harsh%20Apex,%20I%20would%20like%20to%20discuss%20a%20new%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border border-white/15 bg-white/[0.02] text-white/90 font-mono text-xs uppercase tracking-wider hover:border-[#6DD5C4]/60 hover:bg-[#6DD5C4]/10 hover:text-white transition-all duration-300 flex items-center justify-center gap-2.5"
              >
                <span>💬</span>
                <span>WhatsApp Hotline</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ————————————————————————————————————————————————————————————
          2. Architectural Multi-Column Main Navigation Grid
      ———————————————————————————————————————————————————————————— */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Col 1 (5 cols): Brand, Philosophy & Global Time */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              {/* Brand Emblem */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6DD5C4]/20 via-[#B8C0FF]/10 to-transparent p-2.5 border border-[#B8C0FF]/25 shadow-[0_0_30px_rgba(109,213,196,0.15)] flex items-center justify-center group">
                  <Image
                    src="/logo.png"
                    alt="Harsh Apex Logo"
                    width={48}
                    height={48}
                    className="object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-display tracking-tight">HARSH APEX</h3>
                  <p className="text-xs text-[#6DD5C4] font-mono tracking-widest uppercase">Digital Solutions Studio</p>
                </div>
              </div>

              <p className="text-sm text-[#E7D8FF]/70 leading-relaxed font-light max-w-md mb-8">
                Pioneering high-performance web engineering, bespoke Point-of-Sale systems, cross-platform mobile apps, and Haute-Horlogerie digital interfaces for global brands and ambitious enterprises.
              </p>

              {/* Real-time Colombo Clock & Studio Status */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md max-w-md">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-[#E7D8FF]/50 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6DD5C4] animate-pulse" />
                    Studio Location
                  </span>
                  <span className="text-[#6DD5C4] font-medium">Colombo, Sri Lanka</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono pt-2 border-t border-white/5">
                  <span className="text-[#E7D8FF]/40 uppercase tracking-wider">Local Time (UTC+5:30)</span>
                  <span className="text-white font-semibold tabular-nums text-sm bg-gradient-to-r from-[#6DD5C4] to-[#B8C0FF] bg-clip-text text-transparent">
                    {time || 'Loading...'}
                  </span>
                </div>
              </div>
            </div>

            {/* Operations Coverage */}
            <div className="text-xs font-mono text-[#E7D8FF]/40 flex items-center gap-2">
              <span>OPERATIONS:</span>
              <span className="text-[#E7D8FF]/75">Galle &bull; Colombo &bull; Matara &bull; Worldwide</span>
            </div>
          </div>

          {/* Col 2 (2 cols): Navigation Map */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#6DD5C4] mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {navigationLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[#E7D8FF]/70 hover:text-white hover:translate-x-1.5 inline-flex items-center gap-2 transition-all duration-300 font-light group"
                  >
                    <span className="text-[#6DD5C4]/0 group-hover:text-[#6DD5C4] transition-colors text-xs">›</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 (3 cols): Solutions & Capabilities */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#B8C0FF] mb-6">
              Capabilities
            </h4>
            <ul className="space-y-3 text-sm">
              {solutions.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[#E7D8FF]/70 hover:text-[#6DD5C4] hover:translate-x-1.5 inline-flex items-center gap-2 transition-all duration-300 font-light group"
                  >
                    <span className="text-[#6DD5C4]/0 group-hover:text-[#6DD5C4] transition-colors text-xs">›</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 (2 cols): Direct Access & Socials */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#E7D8FF] mb-6">
                Direct Contact
              </h4>
              
              <div className="space-y-3 text-xs font-mono">
                {/* Copy Email Button */}
                <button
                  onClick={handleCopyEmail}
                  className="w-full text-left p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#6DD5C4]/50 hover:bg-[#6DD5C4]/10 transition-all duration-300 group cursor-pointer"
                >
                  <div className="text-[10px] text-[#6DD5C4] uppercase tracking-wider mb-1 flex items-center justify-between">
                    <span>Email Studio</span>
                    <span>{copied ? '✓ Copied!' : 'Copy'}</span>
                  </div>
                  <div className="text-white text-xs truncate group-hover:text-[#6DD5C4] transition-colors">
                    chamilka.ch@gmail.com
                  </div>
                </button>

                {/* Call Hotline */}
                <a
                  href="tel:+94770663154"
                  className="block p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#6DD5C4]/50 hover:bg-[#6DD5C4]/10 transition-all duration-300 group"
                >
                  <div className="text-[10px] text-[#6DD5C4] uppercase tracking-wider mb-1">Direct Phone</div>
                  <div className="text-white text-xs group-hover:text-[#6DD5C4] transition-colors">
                    +94 77 066 3154
                  </div>
                </a>
              </div>
            </div>

            {/* Social Media Grid */}
            <div>
              <h5 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#E7D8FF]/50 mb-3">
                Follow Ecosystem
              </h5>
              <div className="flex flex-wrap gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#B8C0FF]/80 hover:text-[#0D0B1A] hover:bg-gradient-to-tr hover:from-[#6DD5C4] hover:to-[#B8C0FF] hover:border-[#6DD5C4] hover:scale-110 active:scale-95 transition-all duration-300 shadow-md group"
                  >
                    <span className="transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      {s.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ————————————————————————————————————————————————————————————
          3. Monumental Background Typographic Watermark
      ———————————————————————————————————————————————————————————— */}
      <div className="relative w-full overflow-hidden border-t border-white/[0.04] pt-8 pointer-events-none select-none">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-center">
          <span className="w-full text-center text-[13vw] font-bold font-display tracking-[-0.04em] leading-none bg-gradient-to-b from-white/[0.07] via-white/[0.02] to-transparent bg-clip-text text-transparent uppercase opacity-80">
            HARSH APEX
          </span>
        </div>
      </div>

      {/* ————————————————————————————————————————————————————————————
          4. Sub-Footer Bar (Legal, Standards, & Back-to-Top)
      ———————————————————————————————————————————————————————————— */}
      <div className="relative border-t border-white/[0.08] bg-black/40 backdrop-blur-xl font-mono z-20">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/50">
          {/* Left: Copyright & License */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Harsh Apex Digital Solutions. All Rights Reserved.</p>
            <span className="hidden sm:inline text-white/20">&bull;</span>
            <p className="text-white/40 text-[11px]">Precision Engineering & Design</p>
          </div>

          {/* Center: System Architecture */}
          <div className="flex items-center gap-4 text-[11px] text-[#6DD5C4]/70">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6DD5C4]" />
              SSL 256-Bit Encrypted
            </span>
            <span className="text-white/20">&bull;</span>
            <span>Next.js 16 • Turbopack</span>
          </div>

          {/* Right: Interactive Smooth Back-to-Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#6DD5C4]/30 bg-white/[0.02] hover:border-[#6DD5C4] hover:bg-[#6DD5C4]/15 text-[#6DD5C4] hover:text-white transition-all duration-300 cursor-pointer text-xs"
            aria-label="Back to top"
          >
            <span className="text-[10px] tracking-wider uppercase font-semibold">Back to top</span>
            <span className="w-5 h-5 rounded-full bg-[#6DD5C4]/20 flex items-center justify-center text-[10px] transform group-hover:-translate-y-0.5 transition-transform duration-300">
              ▲
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
