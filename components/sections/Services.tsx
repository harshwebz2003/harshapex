'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ServiceItem {
  number: string;
  title: string;
  desc: string;
  tags: string[];
  inquireQuery: string;
  icon: React.ReactNode;
}

const enterpriseSolutions: ServiceItem[] = [
  {
    number: '01',
    title: 'Websites & E-Commerce',
    desc: 'High-speed, conversion-focused online stores and responsive web platforms built on Next.js with custom payment gateways, lightning checkout, and rank-ready SEO architecture.',
    tags: ['Next.js', 'High-Speed', 'Custom Gateways', 'SEO'],
    inquireQuery: 'Websites & E-Commerce Solutions',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="4" width="22" height="15" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 8h4M13 8h1M16 8h1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M3 11h22" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 23h8M14 19v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="19" cy="15" r="1.5" fill="currentColor" />
        <path d="M16 15h1.5l1.5-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'POS & Billing Systems',
    desc: 'Fast, resilient point-of-sale platforms featuring real-time offline/online sync, instant barcode scanning, thermal receipt printing, cash drawer audits, and centralized multi-branch control.',
    tags: ['Offline/Online Sync', 'Barcode Scanner', 'Thermal Print', 'Multi-Branch'],
    inquireQuery: 'POS & Billing Systems',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 8h12M8 11h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 21h24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M7 21l2-4h10l2 4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 24h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'ERP & Business Management',
    desc: 'Centralized operational operating systems combining multi-location inventory tracking, staff attendance, automated payroll, vendor purchase orders, and granular accounting profit/loss reports.',
    tags: ['Inventory', 'HR & Staff', 'Payroll', 'Accounting Reports'],
    inquireQuery: 'ERP & Business Management Software',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <rect x="15" y="3" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <rect x="3" y="15" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <rect x="15" y="15" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 8h.01M20 8h.01M8 20h.01M20 20h.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M8 13v2M20 13v2M13 8h2M13 20h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="1 2" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'SaaS Platforms & Web Apps',
    desc: 'Enterprise multi-tenant web applications and subscription software architected for elastic cloud scaling, role-based security, automated billing cycles, and frictionless self-onboarding.',
    tags: ['Multi-Tenant', 'Subscription Billing', 'Cloud Architecture'],
    inquireQuery: 'SaaS Platforms & Web Applications',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M7 19a5 5 0 0 1-.5-9.97 7 7 0 0 1 13.5-1.5A5.5 5.5 0 0 1 21 19H7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M14 13v7M11 17l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'AI & WhatsApp Automation',
    desc: 'Autonomous customer communication engines featuring 24/7 intelligent AI chatbots, automatic WhatsApp order dispatch alerts, payment notifications, and instantaneous two-way CRM sync.',
    tags: ['24/7 Smart Chatbots', 'Order Notifications', 'CRM Sync'],
    inquireQuery: 'AI & WhatsApp Automation Systems',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3a11 11 0 0 0-9.5 16.5L3 25l5.8-1.5A11 11 0 1 0 14 3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="10" cy="13" r="1.5" fill="currentColor" />
        <circle cx="14" cy="13" r="1.5" fill="currentColor" />
        <circle cx="18" cy="13" r="1.5" fill="currentColor" />
        <path d="M11 17c.8.7 1.8 1 3 1s2.2-.3 3-1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Custom Software Development',
    desc: 'Bespoke software engineered specifically around your organizational DNA — custom internal business portals, complex third-party API orchestrations, and secure, high-concurrency cloud databases.',
    tags: ['Tailored Business Portals', 'API Integrations', 'Cloud DB'],
    inquireQuery: 'Custom Software Development & Portals',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M8 10l-4 4 4 4M20 10l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 6l-4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
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
    const tx = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const ty = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
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

  const waUrl = `https://wa.me/94770663154?text=${encodeURIComponent(`Hello Harsh Apex, I would like to inquire about ${service.inquireQuery}.`)}`;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="service-card group relative p-6 sm:p-8 rounded-3xl border border-[#B8C0FF]/15 bg-gradient-to-br from-[#16132A]/85 to-[#0D0B1A] overflow-hidden hover:border-[#6DD5C4]/45 transition-all duration-300 cursor-default h-full flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.3)]"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Cursor spotlight */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full transition-opacity duration-300"
        style={{
          opacity: 0,
          background: 'radial-gradient(circle, rgba(109,213,196,0.18) 0%, transparent 70%)',
        }}
      />

      {/* Corner accent glow */}
      <div className="absolute top-0 right-0 w-28 h-28 rounded-full bg-[#6DD5C4]/5 blur-2xl -translate-y-8 translate-x-8 group-hover:bg-[#6DD5C4]/15 transition-colors duration-500" />

      <div>
        {/* Number Badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#6DD5C4]/5 border border-[#B8C0FF]/15 flex items-center justify-center text-[#B8C0FF] group-hover:text-[#6DD5C4] group-hover:border-[#6DD5C4]/50 group-hover:bg-[#6DD5C4]/15 group-hover:shadow-[0_0_25px_rgba(109,213,196,0.35)] group-hover:scale-105 transition-all duration-500 ease-out">
            <div className="transform transition-transform duration-500 group-hover:scale-105">
              {service.icon}
            </div>
          </div>
          <span className="text-xs font-mono font-bold tracking-widest text-[#B8C0FF]/35 group-hover:text-[#6DD5C4]/80 transition-colors duration-300">
            {service.number}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-white transition-colors duration-300 font-display tracking-tight">
          {service.title}
        </h3>
        <p className="text-[#E7D8FF]/70 text-xs sm:text-sm leading-relaxed mb-6 font-light">
          {service.desc}
        </p>
      </div>

      <div>
        {/* Secondary Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] sm:text-[11px] px-2.5 sm:px-3 py-1 rounded-full bg-[#B8C0FF]/8 text-[#B8C0FF]/90 border border-[#B8C0FF]/15 group-hover:border-[#6DD5C4]/35 group-hover:text-[#6DD5C4] transition-all duration-300 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Inquire Action */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#6DD5C4] group-hover:text-[#6DD5C4] text-xs font-mono font-semibold tracking-wider uppercase transition-all duration-300 hover:underline"
        >
          <span>Inquire Solution</span>
          <span className="translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300 font-bold">
            →
          </span>
        </a>
      </div>

      {/* Bottom border glow */}
      <div className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-gradient-to-r from-transparent via-[#6DD5C4]/0 to-transparent group-hover:via-[#6DD5C4]/50 transition-all duration-500" />
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let isInteracting = false;
    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    const autoScrollNext = () => {
      if (window.innerWidth >= 768 || isInteracting) return;
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (maxScroll <= 10) return;

      const cards = Array.from(container.children).filter(
        (el) => el.classList.contains('service-card-wrap')
      ) as HTMLElement[];
      if (cards.length === 0) return;

      const containerLeft = container.getBoundingClientRect().left;
      let currentIndex = 0;
      let minDiff = Infinity;

      cards.forEach((card, idx) => {
        const rect = card.getBoundingClientRect();
        const diff = Math.abs(rect.left - containerLeft);
        if (diff < minDiff) {
          minDiff = diff;
          currentIndex = idx;
        }
      });

      const nextIndex = (currentIndex + 1) % cards.length;
      setActiveMobileIndex(nextIndex);
      const nextCard = cards[nextIndex];
      if (nextCard) {
        const targetLeft =
          container.scrollLeft +
          nextCard.getBoundingClientRect().left -
          container.getBoundingClientRect().left;
        container.scrollTo({
          left: targetLeft,
          behavior: 'smooth',
        });
      }
    };

    intervalId = setInterval(autoScrollNext, 3400);

    const onTouchStart = () => {
      isInteracting = true;
      clearTimeout(timeoutId);
    };

    const onTouchEnd = () => {
      timeoutId = setTimeout(() => {
        isInteracting = false;
      }, 2500);
    };

    const onScroll = () => {
      const cards = Array.from(container.children).filter(
        (el) => el.classList.contains('service-card-wrap')
      ) as HTMLElement[];
      if (cards.length === 0) return;
      const containerLeft = container.getBoundingClientRect().left;
      let closestIdx = 0;
      let minDiff = Infinity;
      cards.forEach((card, idx) => {
        const diff = Math.abs(card.getBoundingClientRect().left - containerLeft);
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = idx;
        }
      });
      setActiveMobileIndex(closestIdx);
    };

    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchend', onTouchEnd, { passive: true });
    container.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchend', onTouchEnd);
      container.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.solutions-header',
        { opacity: 0, y: 35, filter: 'blur(8px)' },
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

      // Cards staggered animation
      gsap.fromTo(
        '.service-card-wrap',
        { opacity: 0, y: 40, filter: 'blur(6px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          stagger: 0.08,
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

      // Budget banner animation
      gsap.fromTo(
        '.services-budget-banner',
        { opacity: 0, y: 35, filter: 'blur(6px)' },
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
    <section
      id="solutions"
      ref={sectionRef}
      className="py-14 sm:py-20 md:py-32 bg-transparent relative overflow-hidden font-body w-full"
    >
      {/* Invisible anchor for backward-compatibility with #services */}
      <div id="services" className="absolute -top-24 pointer-events-none" />

      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#6DD5C4]/4 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#B8C0FF]/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="solutions-header text-center mb-10 sm:mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-[#6DD5C4] font-semibold mb-2 sm:mb-4 font-mono">
            SOLUTIONS &amp; ARCHITECTURE
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-5 leading-tight font-display tracking-tight break-words max-w-4xl mx-auto">
            Engineered Digital Solutions &amp;{' '}
            <span className="bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">
              Business Systems
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#E7D8FF]/75 text-sm sm:text-base md:text-lg leading-relaxed font-light px-2">
            From custom POS and enterprise ERPs to high-converting web applications and AI automations, we build reliable systems tailored to your business.
          </p>
        </div>

        {/* 6 Core Enterprise Solutions Grid */}
        <div
          ref={scrollRef}
          className="flex md:grid flex-row md:grid-cols-2 lg:grid-cols-3 overflow-x-auto md:overflow-visible gap-4 sm:gap-6 snap-x snap-mandatory scrollbar-none pb-4 md:pb-0 w-full mb-6 md:mb-14"
        >
          {enterpriseSolutions.map((service, i) => (
            <div
              key={service.title}
              className="service-card-wrap w-[84vw] max-w-[360px] md:w-full shrink-0 snap-center"
            >
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex md:hidden items-center justify-center gap-1.5 mb-8">
          {enterpriseSolutions.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to solution ${idx + 1}`}
              onClick={() => {
                const container = scrollRef.current;
                if (!container) return;
                const cards = Array.from(container.children).filter((el) =>
                  el.classList.contains('service-card-wrap')
                ) as HTMLElement[];
                const target = cards[idx];
                if (target) {
                  container.scrollTo({
                    left:
                      container.scrollLeft +
                      target.getBoundingClientRect().left -
                      container.getBoundingClientRect().left,
                    behavior: 'smooth',
                  });
                }
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeMobileIndex === idx
                  ? 'w-6 bg-gradient-to-r from-[#6DD5C4] to-[#B8C0FF]'
                  : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Budget-Friendly Custom Systems Highlight Banner */}
        <div className="services-budget-banner p-6 sm:p-8 md:p-12 rounded-[28px] sm:rounded-[32px] border border-[#6DD5C4]/35 bg-gradient-to-r from-[#1A1630]/90 via-[#120F26]/95 to-[#0D0B1A] relative overflow-hidden backdrop-blur-xl shadow-[0_10px_45px_rgba(109,213,196,0.09)]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#6DD5C4]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6DD5C4]/10 border border-[#6DD5C4]/30 text-[#6DD5C4] text-[11px] sm:text-xs font-mono font-semibold tracking-wider uppercase mb-3 sm:mb-4">
                <span>⚡</span> Flexible &amp; Budget-Friendly Pricing
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2.5 sm:mb-3 font-display">
                Need a Custom POS System, ERP, or Mobile App at a{' '}
                <span className="text-gradient-mint">Budget Price</span>?
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-[#E7D8FF]/75 font-light leading-relaxed">
                Whether you need a specialized retail POS, restaurant billing software, delivery tracking system, or custom business portal — we design and develop any system tailored exactly to your budget and operational needs.
              </p>
            </div>
            <a
              href="https://wa.me/94770663154?text=Hello%20Harsh%20Apex,%20I%20would%20like%20to%20discuss%20a%20Custom%20POS,%20ERP,%20or%20Mobile%20App%20tailored%20to%20my%20budget."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto shrink-0 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] text-[#0D0B1A] font-semibold text-xs md:text-sm uppercase tracking-wider font-mono shadow-[0_0_35px_rgba(109,213,196,0.35)] hover:shadow-[0_0_50px_rgba(109,213,196,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer text-center"
            >
              Get Any System on Your Budget →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
