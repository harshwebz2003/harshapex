'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered', sub: 'Across 15 countries' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', sub: '5-star reviews' },
  { value: 5, suffix: '+', label: 'Years of Excellence', sub: 'Industry expertise' },
  { value: 3, suffix: '×', label: 'Avg. Traffic Growth', sub: 'Within 90 days' },
];

export default function Statistics() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section in
      gsap.fromTo('.stat-card', { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true },
      });

      // Count-up numbers
      stats.forEach((stat, i) => {
        const el = document.querySelector(`#stat-num-${i}`);
        if (!el) return;
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
          onEnter: () => {
            const obj = { val: 0 };
            gsap.to(obj, {
              val: stat.value,
              duration: 2,
              ease: 'power3.out',
              onUpdate: () => {
                el.textContent = Math.round(obj.val).toString();
              },
            });
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-40 bg-[#0D0B1A] relative overflow-hidden">
      {/* Grid overlay texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(184,192,255,1) 1px, transparent 1px), linear-gradient(to right, rgba(184,192,255,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Center glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] rounded-full bg-[#B8C0FF]/8 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-24">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="stat-card text-center p-8 md:p-10 rounded-3xl border border-[#B8C0FF]/10 bg-gradient-to-b from-[#1A1630]/50 to-[#0D0B1A]/80 hover:border-[#B8C0FF]/30 transition-all duration-500 group"
            >
              <div className="text-4xl md:text-6xl font-bold mb-1 tabular-nums"
                style={{ fontFamily: 'Clash Display, sans-serif' }}>
                <span
                  id={`stat-num-${i}`}
                  className="bg-gradient-to-br from-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent"
                >
                  0
                </span>
                <span className="bg-gradient-to-br from-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">
                  {stat.suffix}
                </span>
              </div>
              <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-[#E7D8FF]/40 text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="relative rounded-3xl overflow-hidden border border-[#B8C0FF]/20 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#B8C0FF]/10 via-[#1A1630]/80 to-[#E7D8FF]/10" />
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#B8C0FF] to-transparent" />

          <div className="relative z-10">
            <p className="text-xs tracking-[0.4em] uppercase text-[#B8C0FF] mb-3">Meet the Founder</p>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Clash Display, sans-serif' }}>
              Driven by Passion.<br />
              <span className="bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">Defined by Results.</span>
            </h3>
            <p className="text-[#E7D8FF]/50 max-w-md text-base mt-3">
              Harsh Apex was founded on a simple belief: great design and smart strategy together create unstoppable businesses.
            </p>
          </div>

          {/* Owner photo */}
          <div className="relative z-10 flex-shrink-0">
            <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-2xl overflow-hidden border-2 border-[#B8C0FF]/30">
              <Image src="/images/owner.jpg" alt="Founder" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B1A]/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF] text-[#0D0B1A] text-[10px] font-bold px-3 py-1 rounded-full">
              FOUNDER &amp; CEO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
