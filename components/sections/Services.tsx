'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="4" width="22" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 10h5M7 14h3M18 10h3M18 14h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M2 22h24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 22l-1 3M18 22l1 3M8 25h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'POS Systems & Software',
    desc: 'Custom Point-of-Sale, billing software, inventory control, and multi-branch management for shops, restaurants & retail at budget-friendly rates.',
    tags: ['POS Systems', 'Inventory', 'Multi-Branch', 'Budget Friendly'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="6" y="2" width="16" height="24" rx="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="14" cy="21" r="1" fill="currentColor"/>
        <path d="M11 5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Mobile & Custom Apps',
    desc: 'Bespoke iOS, Android, and cross-platform mobile apps built with React Native & Flutter to automate workflows and delight users.',
    tags: ['iOS & Android', 'Flutter', 'React Native', 'Custom Systems'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M8 10l-4 4 4 4M20 10l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 6l-4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Web Development',
    desc: 'Blazing-fast, scalable web applications and platforms built with modern tech stacks — React, Next.js, TypeScript & Tailwind.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 4v4M14 20v4M4 14h4M20 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'UI/UX Design',
    desc: 'Intuitive interfaces, luxury design systems, and delightful user journeys engineered to maximize user engagement and conversion.',
    tags: ['User Research', 'Figma', 'Design Systems'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="4" width="24" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 20v4M19 20v4M6 24h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 11l4 3 4-5 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Web Design',
    desc: 'Visually stunning, conversion-focused websites that make your brand unforgettable across every screen and device.',
    tags: ['UI Design', 'Wireframes', 'Prototyping'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3l9 5v12l-9 5-9-5V8l9-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M14 3v17M5 8l9 5 9-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Branding & Identity',
    desc: 'Strategic brand identities, typography systems, and corporate logos that communicate authority, trust, and prestige.',
    tags: ['Logo Design', 'Brand Strategy', 'Style Guides'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M18.5 18.5L25 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'SEO & Search Growth',
    desc: 'Data-driven SEO strategies that dominate Google rankings and drive qualified organic traffic at scale with schema markup.',
    tags: ['On-page SEO', 'Technical SEO', 'Analytics'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M13 3l-9 9h6l-2 13 11-13h-7l1-9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Speed & Optimization',
    desc: 'Core Web Vitals tuning, asset compression, database query caching, and code splitting for lightning-fast speeds.',
    tags: ['Core Web Vitals', 'Lighthouse 100', 'CDN'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20l6-8 5 6 3-4 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 8h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Custom Business Portals',
    desc: 'Tailor-made CRM, ERP, booking engines, and customer management portals developed precisely for your business operations.',
    tags: ['CRM Portals', 'ERP Systems', 'Cloud Database'],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
    const tx = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const ty = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    gsap.to(card, { rotateY: tx, rotateX: ty, duration: 0.4, ease: 'power2.out', transformPerspective: 900 });
  };

  const handleMouseEnter = () => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (glowRef.current) glowRef.current.style.opacity = '1';
  };

  const handleMouseLeave = () => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (glowRef.current) glowRef.current.style.opacity = '0';
    gsap.to(cardRef.current, { rotateY: 0, rotateX: 0, duration: 0.5, ease: 'power2.out' });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="service-card group relative p-6 sm:p-8 rounded-3xl border border-[#B8C0FF]/15 bg-gradient-to-br from-[#16132A]/85 to-[#0D0B1A] overflow-hidden hover:border-[#6DD5C4]/40 transition-all duration-300 cursor-default h-full flex flex-col justify-between"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Cursor spotlight */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full transition-opacity duration-300"
        style={{
          opacity: 0,
          background: 'radial-gradient(circle, rgba(109,213,196,0.15) 0%, transparent 70%)',
        }}
      />
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#6DD5C4]/5 blur-2xl -translate-y-8 translate-x-8 group-hover:bg-[#6DD5C4]/15 transition-colors duration-500" />

      <div>
        {/* Number */}
        <div className="absolute top-6 right-7 text-[11px] font-mono text-[#B8C0FF]/25 group-hover:text-[#6DD5C4]/60 transition-colors duration-300">
          0{index + 1}
        </div>

        {/* Animated Icon Badge */}
        <div className="relative mb-6 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#6DD5C4]/5 border border-[#B8C0FF]/15 flex items-center justify-center text-[#B8C0FF] group-hover:text-[#6DD5C4] group-hover:border-[#6DD5C4]/50 group-hover:bg-[#6DD5C4]/15 group-hover:shadow-[0_0_25px_rgba(109,213,196,0.35)] group-hover:scale-110 transition-all duration-500 ease-out">
          <div className="transform transition-transform duration-500 group-hover:scale-105">
            {service.icon}
          </div>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-white mb-2.5 group-hover:text-white transition-colors duration-300 font-display">
          {service.title}
        </h3>
        <p className="text-[#E7D8FF]/60 text-xs sm:text-sm leading-relaxed mb-6 font-light">{service.desc}</p>
      </div>

      <div>
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
          {service.tags.map((tag) => (
            <span key={tag} className="text-[9px] sm:text-[10px] px-2.5 sm:px-3 py-1 rounded-full bg-[#B8C0FF]/8 text-[#B8C0FF]/80 border border-[#B8C0FF]/15 group-hover:border-[#6DD5C4]/30 group-hover:text-[#6DD5C4] transition-all duration-300 font-mono">
              {tag}
            </span>
          ))}
        </div>

        {/* Animated arrow */}
        <div className="flex items-center gap-2 text-[#6DD5C4]/80 sm:text-[#6DD5C4]/0 group-hover:text-[#6DD5C4] transition-all duration-300 font-mono">
          <span className="text-[11px] sm:text-xs tracking-wider uppercase">Inquire Solution</span>
          <span className="translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300 inline-block font-bold">→</span>
        </div>
      </div>

      {/* Bottom border glow */}
      <div className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-gradient-to-r from-transparent via-[#6DD5C4]/0 to-transparent group-hover:via-[#6DD5C4]/50 transition-all duration-500" />
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header bidirectional fade in/out
      gsap.fromTo(
        '.services-header',
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

      // Cards bidirectional staggered fade in/out
      gsap.fromTo(
        '.service-card-wrap',
        { opacity: 0, y: 45, filter: 'blur(6px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          stagger: 0.07,
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

      // Budget banner bidirectional fade in/out
      gsap.fromTo(
        '.services-budget-banner',
        { opacity: 0, y: 40, filter: 'blur(6px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.9,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.services-budget-banner',
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 sm:py-28 md:py-44 bg-transparent relative overflow-hidden font-body w-full">
      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#6DD5C4]/4 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#B8C0FF]/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="services-header text-center mb-12 sm:mb-20 opacity-0">
          <p className="text-xs tracking-[0.35em] uppercase text-[#6DD5C4] font-semibold mb-3 sm:mb-4 font-mono">What We Build</p>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight font-display tracking-tight break-words">
            Websites, POS &{' '}
            <span className="bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">Custom Apps</span>
          </h2>
          <p className="max-w-xl mx-auto text-[#E7D8FF]/70 text-base sm:text-lg leading-relaxed font-light px-2">
            We engineer high-performance websites, custom POS systems, mobile applications, and bespoke business software at flexible, budget-friendly rates.
          </p>
        </div>

        {/* Grid */}
        <div ref={scrollRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 w-full mb-12 sm:mb-16">
          {services.map((service, i) => (
            <div key={service.title} className="service-card-wrap opacity-0">
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>

        {/* Budget-Friendly Custom Systems Highlight Banner */}
        <div className="services-budget-banner opacity-0 p-6 sm:p-8 md:p-12 rounded-[28px] sm:rounded-[32px] border border-[#6DD5C4]/35 bg-gradient-to-r from-[#1A1630]/90 via-[#120F26]/95 to-[#0D0B1A] relative overflow-hidden backdrop-blur-xl shadow-[0_10px_45px_rgba(109,213,196,0.09)]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#6DD5C4]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6DD5C4]/10 border border-[#6DD5C4]/30 text-[#6DD5C4] text-[11px] sm:text-xs font-mono font-semibold tracking-wider uppercase mb-3 sm:mb-4">
                <span>⚡</span> Flexible & Budget-Friendly Pricing
              </div>
              <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-2.5 sm:mb-3 font-display">
                Need a Custom POS System, ERP, or Mobile App at a <span className="text-gradient-mint">Budget Price</span>?
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-[#E7D8FF]/75 font-light leading-relaxed">
                Whether you need a specialized retail POS, restaurant billing software, delivery tracking system, or custom business portal — we design and develop any system tailored exactly to your budget and operational needs.
              </p>
            </div>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto shrink-0 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] text-[#0D0B1A] font-semibold text-xs md:text-sm uppercase tracking-wider font-mono shadow-[0_0_35px_rgba(109,213,196,0.35)] hover:shadow-[0_0_50px_rgba(109,213,196,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer text-center"
            >
              Get Any System on Your Budget →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
