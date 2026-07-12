'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    client: 'Hiruzone Tourism',
    category: 'Travel & Tourism',
    headline: '40% increase in bookings in 30 days',
    desc: 'A complete digital transformation — new brand identity, performance-optimised website, and targeted SEO strategy drove a 40% increase in bookings within the first month of launch.',
    img: '/projects/Hiruzone Tourism.png',
    results: ['+40% Bookings', '98 Lighthouse Score', '3× Organic Traffic'],
    color: '#B8C0FF',
  },
  {
    client: 'Lanka Hardware',
    category: 'E-Commerce',
    headline: '2× revenue with new e-commerce platform',
    desc: 'We built a high-performance e-commerce platform handling 5,000+ SKUs with intuitive UX, fast search, and streamlined checkout — resulting in doubled revenue within 60 days.',
    img: '/projects/Lanka Hardware.png',
    results: ['2× Revenue', '5,000+ Products', '60% Faster Checkout'],
    color: '#E7D8FF',
  },
  {
    client: 'Five Season Salon',
    category: 'Local Business',
    headline: 'Luxury brand identity that tripled inquiries',
    desc: 'From brand strategy to website launch, we created a luxury salon experience online that authentically reflected the premium in-person experience — tripling online appointment inquiries.',
    img: '/projects/Five Season Salon.png',
    results: ['3× Inquiries', 'Premium Brand', 'Mobile-First Design'],
    color: '#B8C0FF',
  },
];

export default function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.case-card') ?? [];
    gsap.fromTo(
      cards,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', once: true },
      }
    );
  }, []);

  return (
    <section id="case-studies" ref={sectionRef} className="py-32 md:py-40 bg-[#0D0B1A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <p className="text-xs tracking-[0.4em] uppercase text-[#B8C0FF] mb-4">Deep Dives</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              className="text-4xl md:text-6xl font-bold text-white max-w-lg leading-tight"
              style={{ fontFamily: 'Clash Display, sans-serif' }}
            >
              Case{' '}
              <span className="bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">
                Studies
              </span>
            </h2>
            <p className="max-w-sm text-[#E7D8FF]/50 text-base">
              Real projects. Real results. Here&apos;s how we&apos;ve helped brands grow.
            </p>
          </div>
        </div>

        {/* Case cards */}
        <div className="space-y-8">
          {cases.map((c, i) => (
            <div
              key={c.client}
              className="case-card group grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-[#B8C0FF]/10 hover:border-[#B8C0FF]/30 transition-all duration-500"
            >
              {/* Image side */}
              <div className={`relative aspect-[16/9] md:aspect-auto overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <Image
                  src={c.img}
                  alt={c.client}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0D0B1A]/60 to-transparent" />
              </div>

              {/* Content side */}
              <div className={`p-8 md:p-12 bg-gradient-to-br from-[#1A1630]/60 to-[#0D0B1A]/90 flex flex-col justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs tracking-widest uppercase text-[#B8C0FF]/60">{c.category}</span>
                  <span className="w-1 h-1 rounded-full bg-[#B8C0FF]/30" />
                  <span className="text-xs tracking-widest uppercase text-[#B8C0FF]/60">{c.client}</span>
                </div>
                <h3
                  className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight"
                  style={{ fontFamily: 'Clash Display, sans-serif' }}
                >
                  {c.headline}
                </h3>
                <p className="text-[#E7D8FF]/50 text-sm leading-relaxed mb-8">{c.desc}</p>

                {/* Results pills */}
                <div className="flex flex-wrap gap-3">
                  {c.results.map((r) => (
                    <span
                      key={r}
                      className="px-4 py-2 rounded-full bg-[#B8C0FF]/10 border border-[#B8C0FF]/20 text-sm text-[#B8C0FF] font-medium"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
