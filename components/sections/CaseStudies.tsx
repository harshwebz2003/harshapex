'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    client: 'Serendib Tourism Webpage',
    category: 'Travel & Tourism',
    headline: '40% increase in bookings in 30 days',
    desc: 'A complete digital transformation — new brand identity, performance-optimised website, and targeted SEO strategy drove a 40% increase in bookings within the first month of launch.',
    img: '/projects/Serendib.png',
    results: ['+40% Bookings', '98 Lighthouse Score', '3× Organic Traffic'],
    color: '#B8C0FF',
  },
  {
    client: 'Neat Construction',
    category: 'Industrial Construction',
    headline: '2× revenue with new digital showcase',
    desc: 'We built a high-performance digital headquarters displaying architectural works and custom estimation tools — resulting in doubled revenue and customer leads within 60 days.',
    img: '/projects/Neat Construction.png',
    results: ['2× Lead Volume', 'Modern UI/UX', '60% Faster Load'],
    color: '#E7D8FF',
  },
  {
    client: '3D Scrolling Tourism Webpage',
    category: 'Luxury Tourism',
    headline: 'Luxury brand identity that tripled premium inquiries',
    desc: 'A bespoke luxury travel experience designed around a rich, interactive 3D scrolling story of Ceylon. Engaged visitors with high-performance animations and high-conversion pathways.',
    img: '/projects/LuxeCeylon.jpg',
    results: ['3× Inquiries', '3D Scrolling Story', 'Premium Brand'],
    color: '#B8C0FF',
  },
];

export default function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let intervalId: NodeJS.Timeout;

    const startAutoScroll = () => {
      if (window.innerWidth >= 768) return;
      intervalId = setInterval(() => {
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          const cardWidth = container.firstElementChild?.getBoundingClientRect().width ?? 280;
          container.scrollBy({ left: cardWidth + 32, behavior: 'smooth' });
        }
      }, 3500);
    };

    startAutoScroll();

    const pause = () => clearInterval(intervalId);
    const resume = () => {
      clearInterval(intervalId);
      startAutoScroll();
    };

    container.addEventListener('touchstart', pause);
    container.addEventListener('touchend', resume);

    return () => {
      clearInterval(intervalId);
      container.removeEventListener('touchstart', pause);
      container.removeEventListener('touchend', resume);
    };
  }, []);

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
        <div ref={scrollRef} className="flex md:flex-col flex-row overflow-x-auto md:overflow-visible gap-8 snap-x snap-mandatory scrollbar-none pb-6 md:pb-0 w-full">
          {cases.map((c, i) => (
            <div
              key={c.client}
              className="case-card group grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-[#B8C0FF]/10 hover:border-[#B8C0FF]/30 transition-all duration-500 w-[85vw] md:w-full shrink-0 snap-center"
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
