'use client';

import Image from 'next/image';

const socials = [
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@harsh.apex',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .59.044.868.128V9.33a6.33 6.33 0 0 0-.868-.06A6.34 6.34 0 0 0 3.1 15.61a6.34 6.34 0 0 0 10.82 4.48 6.3 6.3 0 0 0 1.86-4.48V8.62a8.28 8.28 0 0 0 4.84 1.54V6.71a4.86 4.86 0 0 1-1.03-.02z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/harshapex',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/94770663154?text=Hello%20Harsh%20Apex,%20I%20would%20like%20to%20discuss%20a%20new%20project.',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.771.82 2.789.82 3.184 0 5.772-2.587 5.772-5.766 0-3.182-2.589-5.766-5.77-5.766zm9.969 5.766c0 5.514-4.486 10-10 10-1.748 0-3.38-.456-4.81-1.249l-5.19 1.359 1.385-5.064c-.87-1.488-1.385-3.218-1.385-5.046 0-5.514 4.486-10 10-10s10 4.486 10 10z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/c_harshz/',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/chamilka-harshan',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/chamilka-ch',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
];

const mainNav = [
  { label: 'HOME', href: '#' },
  { label: 'SERVICES', href: '#services' },
  { label: 'PROCESS', href: '#process' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'TESTIMONIALS', href: '#testimonials' },
  { label: 'PRICING', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'CONTACT', href: '#contact' },
];

const serviceTags = [
  'Web Design & Development',
  'Custom POS Systems',
  'Mobile Apps (iOS & Android)',
  'UI/UX Prototyping',
  'E-Commerce Solutions',
  'Brand Identity',
  'Custom Business Software & ERP',
];

export default function Footer() {
  return (
    <footer className="relative bg-[#070514] border-t border-[#B8C0FF]/15 text-white overflow-hidden font-body pt-20 pb-12 select-none">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6DD5C4]/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* 1. Logo & Brand Heading */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-28 h-28 rounded-full bg-white/[0.03] border border-[#B8C0FF]/25 p-4 flex items-center justify-center mb-5 shadow-[0_0_35px_rgba(109,213,196,0.2)] group hover:border-[#6DD5C4]/60 transition-all duration-500">
            <Image
              src="/logo.png"
              alt="Harsh Apex Logo"
              width={84}
              height={84}
              className="object-contain transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-[0.25em] text-white uppercase font-display">
            HARSH APEX
          </h3>
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#6DD5C4] font-mono mt-1 font-semibold">
            DIGITAL SOLUTIONS
          </p>
        </div>

        {/* 2. Social Circular Icon Buttons */}
        <div className="flex items-center justify-center gap-3 mb-10">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-11 h-11 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#B8C0FF]/80 hover:text-[#0D0B1A] hover:bg-gradient-to-tr hover:from-[#6DD5C4] hover:to-[#B8C0FF] hover:border-[#6DD5C4] hover:scale-110 active:scale-95 transition-all duration-300 shadow-md group"
            >
              <span className="transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                {s.icon}
              </span>
            </a>
          ))}
        </div>

        {/* 3. Primary Navigation Menu */}
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-8 font-mono text-xs md:text-[13px] tracking-[0.18em] uppercase text-white/80 font-medium">
          {mainNav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-[#6DD5C4] transition-colors duration-300 hover:scale-105"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* 4. Sub-Services / Categories List */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mb-10 text-xs md:text-sm text-[#E7D8FF]/50 font-light max-w-3xl leading-relaxed">
          {serviceTags.map((tag, idx) => (
            <span key={tag} className="inline-flex items-center gap-3">
              <span className="hover:text-[#6DD5C4] transition-colors cursor-default">{tag}</span>
              {idx < serviceTags.length - 1 && <span className="text-white/20 text-[10px]">&bull;</span>}
            </span>
          ))}
        </div>

        {/* 5. "GET IN TOUCH!" Block */}
        <div className="flex flex-col items-center mb-10">
          <span className="text-[11px] font-mono font-semibold tracking-[0.3em] uppercase text-[#6DD5C4] mb-2">
            GET IN TOUCH!
          </span>

          <a
            href="tel:+94770663154"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white hover:text-[#6DD5C4] transition-colors font-display mb-3"
          >
            +94 77 066 3154
          </a>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-[#E7D8FF]/70 font-light">
            <span className="inline-flex items-center gap-1.5">
              <span className="text-[#6DD5C4]">📍</span> Address: Galle &bull; Colombo &bull; Matara, Sri Lanka
            </span>
            <span className="hidden sm:inline text-white/20">&bull;</span>
            <a
              href="mailto:chamilka.ch@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-[#6DD5C4] transition-colors"
            >
              <span className="text-[#6DD5C4]">✉</span> chamilka.ch@gmail.com
            </a>
          </div>
        </div>

        {/* 6. Thin Divider */}
        <div className="w-full max-w-4xl border-t border-white/10 my-6" />

        {/* 7. Bottom Copyright & Admin lock icon */}
        <div className="flex items-center justify-center gap-2 text-xs text-white/45 font-mono text-center">
          <p>Copyright © {new Date().getFullYear()} Harsh Apex Digital Solutions. All Rights Reserved.</p>
          <a
            href="/admin.html"
            title="Admin Login"
            className="opacity-40 hover:opacity-100 hover:text-[#6DD5C4] transition-opacity ml-1"
          >
            🔒
          </a>
        </div>
      </div>
    </footer>
  );
}
