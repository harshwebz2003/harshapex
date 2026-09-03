'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    client: 'Kekulama Eco Cabana',
    category: 'Eco Resort & Hospitality',
    headline: '40% increase in direct bookings in 30 days',
    desc: 'A complete digital transformation — new brand identity, performance-optimised website, ambient sounds, and targeted SEO strategy drove a 40% increase in bookings within the first month of launch.',
    img: '/projects/Kekulama Eco Cabana.jpg',
    results: ['+40% Direct Bookings', '98 Lighthouse Score', '3× Organic Traffic'],
    color: '#6DD5C4',
  },
  {
    client: 'Neat Construction',
    category: 'Industrial Construction',
    headline: '2× revenue with new digital showcase',
    desc: 'We built a high-performance digital headquarters displaying architectural works and custom estimation tools — resulting in doubled revenue and customer leads within 60 days.',
    img: '/projects/Neat Construction.png',
    results: ['2× Lead Volume', 'Modern UI/UX', '60% Faster Load'],
    color: '#B8C0FF',
  },
  {
    client: '3D Scrolling Tourism Webpage',
    category: 'Luxury Tourism',
    headline: 'Luxury brand identity that tripled premium inquiries',
    desc: 'A bespoke luxury travel experience designed around a rich, interactive 3D scrolling story of Ceylon. Engaged visitors with high-performance animations and high-conversion pathways.',
    img: '/projects/LuxeCeylon.jpg',
    results: ['3× Inquiries', '3D Scrolling Story', 'Premium Brand'],
    color: '#E7D8FF',
  },
];

export default function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="case-studies" ref={sectionRef} className="py-12 sm:py-20 md:py-32 bg-transparent font-body w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="casestudies-header mb-8 sm:mb-14">
          <p className="text-xs tracking-[0.35em] uppercase text-[#6DD5C4] font-semibold mb-2 sm:mb-3 font-mono">Deep Dives</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <h2
              className="text-3xl sm:text-5xl md:text-6xl font-bold text-white max-w-lg leading-tight font-display tracking-tight break-words"
            >
              Case{' '}
              <span className="bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">
                Studies
              </span>
            </h2>
            <p className="max-w-sm text-[#E7D8FF]/60 text-sm sm:text-base font-light">
              Real projects. Real results. Here&apos;s how we&apos;ve helped ambitious brands accelerate growth.
            </p>
          </div>
        </div>

        {/* Case cards */}
        <div ref={scrollRef} className="flex md:flex-col flex-row overflow-x-auto md:overflow-visible gap-4 sm:gap-8 snap-x snap-mandatory scrollbar-none pb-4 md:pb-0 w-full">
          {cases.map((c, i) => (
            <div
              key={c.client}
              className="case-card group grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-[#B8C0FF]/15 hover:border-[#6DD5C4]/40 transition-all duration-500 w-[82vw] max-w-[420px] md:max-w-none md:w-full shrink-0 snap-center shadow-lg hover:shadow-[0_15px_50px_rgba(109,213,196,0.1)]"
            >
              {/* Image side */}
              <div className={`relative aspect-[16/10] md:aspect-auto min-h-[200px] sm:min-h-[260px] md:min-h-[320px] overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <Image
                  src={c.img}
                  alt={c.client}
                  fill
                  sizes="(max-width: 640px) 82vw, (max-width: 1024px) 50vw, 50vw"
                  quality={80}
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0D0B1A]/70 via-[#0D0B1A]/20 to-transparent" />
              </div>

              {/* Content side */}
              <div className={`p-6 sm:p-8 md:p-12 bg-gradient-to-br from-[#1A1630]/70 to-[#0D0B1A]/90 flex flex-col justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6 font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase">
                  <span className="text-[#6DD5C4] font-medium">{c.category}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-[#E7D8FF]/60">{c.client}</span>
                </div>
                <h3
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight font-display tracking-tight"
                >
                  {c.headline}
                </h3>
                <p className="text-[#E7D8FF]/60 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 font-light">{c.desc}</p>

                {/* Results pills */}
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {c.results.map((r) => (
                    <span
                      key={r}
                      className="px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#6DD5C4]/10 border border-[#6DD5C4]/25 text-[11px] sm:text-xs text-[#6DD5C4] font-mono tracking-wide font-medium"
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
