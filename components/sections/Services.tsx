'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="4" width="24" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 20v4M19 20v4M6 24h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 11l4 3 4-5 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Web Design',
    desc: 'Visually stunning, conversion-focused websites that make your brand unforgettable across every device.',
    tags: ['UI Design', 'Wireframes', 'Prototyping'],
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
    desc: 'Intuitive interfaces and delightful user experiences engineered to maximise engagement and retention.',
    tags: ['User Research', 'Figma', 'Design Systems'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M8 10l-4 4 4 4M20 10l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 6l-4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Web Development',
    desc: 'Blazing-fast, scalable web applications built with modern tech stacks — React, Next.js, TypeScript.',
    tags: ['Next.js', 'React', 'TypeScript'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3l9 5v12l-9 5-9-5V8l9-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M14 3v17M5 8l9 5 9-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Branding',
    desc: 'Strategic brand identities that communicate authority, trust, and personality to your ideal audience.',
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
    title: 'SEO',
    desc: 'Data-driven SEO strategies that dominate search rankings and drive qualified organic traffic at scale.',
    tags: ['On-page SEO', 'Technical SEO', 'Analytics'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20l6-8 5 6 3-4 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 8h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Digital Strategy',
    desc: 'Full-funnel digital strategies crafted to accelerate growth and outpace your competition.',
    tags: ['Growth Hacking', 'Funnels', 'Analytics'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M13 3l-9 9h6l-2 13 11-13h-7l1-9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Performance Optimization',
    desc: 'Core Web Vitals tuning, image optimization, and code splitting for lightning-fast load times.',
    tags: ['Core Web Vitals', 'Lighthouse', 'CDN'],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // Spotlight glow follows cursor
    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
    // 3D tilt
    const tx = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const ty = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    gsap.to(card, { rotateY: tx, rotateX: ty, duration: 0.4, ease: 'power2.out', transformPerspective: 900 });
  };

  const handleMouseEnter = () => {
    if (glowRef.current) glowRef.current.style.opacity = '1';
  };

  const handleMouseLeave = () => {
    if (glowRef.current) glowRef.current.style.opacity = '0';
    gsap.to(cardRef.current, { rotateY: 0, rotateX: 0, duration: 0.7, ease: 'elastic.out(1, 0.5)' });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative p-8 rounded-3xl border border-[#B8C0FF]/10 bg-gradient-to-br from-[#16132A]/80 to-[#0D0B1A] overflow-hidden hover:border-[#B8C0FF]/40 transition-border duration-300 cursor-default"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Cursor spotlight */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full transition-opacity duration-300"
        style={{
          opacity: 0,
          background: 'radial-gradient(circle, rgba(184,192,255,0.12) 0%, transparent 70%)',
        }}
      />
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#B8C0FF]/5 blur-2xl -translate-y-8 translate-x-8 group-hover:bg-[#B8C0FF]/15 transition-colors duration-500" />

      {/* Number */}
      <div className="absolute top-6 right-7 text-[11px] font-mono text-[#B8C0FF]/20 group-hover:text-[#B8C0FF]/50 transition-colors duration-300">
        0{index + 1}
      </div>

      {/* Icon */}
      <div className="text-[#B8C0FF] mb-6 group-hover:text-[#E7D8FF] transition-colors duration-300 group-hover:scale-110 transform w-fit">
        {service.icon}
      </div>

      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#E7D8FF] transition-colors duration-300"
        style={{ fontFamily: 'Clash Display, sans-serif' }}>
        {service.title}
      </h3>
      <p className="text-[#E7D8FF]/45 text-sm leading-relaxed mb-6">{service.desc}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {service.tags.map((tag) => (
          <span key={tag} className="text-[10px] px-3 py-1 rounded-full bg-[#B8C0FF]/8 text-[#B8C0FF]/70 border border-[#B8C0FF]/15 group-hover:border-[#B8C0FF]/30 transition-colors duration-300">
            {tag}
          </span>
        ))}
      </div>

      {/* Animated arrow */}
      <div className="flex items-center gap-2 text-[#B8C0FF]/0 group-hover:text-[#B8C0FF] transition-all duration-300">
        <span className="text-xs tracking-wide">Explore service</span>
        <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
      </div>

      {/* Bottom border glow */}
      <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#B8C0FF]/0 to-transparent group-hover:via-[#B8C0FF]/40 transition-all duration-500" />
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-card-wrap',
        { opacity: 0, y: 70, scale: 0.94 },
        {
          opacity: 1, y: 0, scale: 1,
          stagger: { amount: 0.6, from: 'start' },
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', once: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-32 md:py-44 bg-[#0A0918] relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#B8C0FF]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#E7D8FF]/4 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-xs tracking-[0.45em] uppercase text-[#B8C0FF] mb-5">What We Do</p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-7 leading-tight"
            style={{ fontFamily: 'Clash Display, sans-serif' }}>
            Services Built for{' '}
            <span className="bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">Growth</span>
          </h2>
          <p className="max-w-lg mx-auto text-[#E7D8FF]/50 text-lg leading-relaxed">
            Every service is designed to deliver measurable impact on your brand and revenue.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div key={service.title} className="service-card-wrap">
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
