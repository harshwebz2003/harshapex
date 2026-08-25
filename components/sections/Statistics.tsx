'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 25, suffix: '+', label: 'Projects Delivered', sub: 'Across diverse industries' },
  { value: 3, suffix: '+', label: 'Years Experience', sub: 'Industry craft & leadership' },
  { value: 3, suffix: '+', label: 'Countries Reached', sub: 'Global client partnerships' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', sub: 'Verified 5-star ratings' },
];

export default function Statistics() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Animate section in with luxury decel
      gsap.fromTo('.stat-card', { opacity: 0, y: 35 }, {
        opacity: 1, y: 0, stagger: 0.08, duration: 0.85, ease: 'expo.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
      });

      // Count-up numbers with smooth exponential decel
      stats.forEach((stat, i) => {
        const el = document.querySelector(`#stat-num-${i}`);
        if (!el) return;
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
          onEnter: () => {
            const obj = { val: 0 };
            gsap.to(obj, {
              val: stat.value,
              duration: 1.8,
              ease: 'power2.out',
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
    <section ref={sectionRef} className="py-32 md:py-40 bg-transparent relative overflow-hidden font-body">
      {/* Grid overlay texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(109,213,196,1) 1px, transparent 1px), linear-gradient(to right, rgba(184,192,255,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Center glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] rounded-full bg-[#6DD5C4]/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-24">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="stat-card text-center p-8 md:p-10 rounded-3xl border border-[#B8C0FF]/15 bg-gradient-to-b from-[#1A1630]/60 to-[#0D0B1A]/85 hover:border-[#6DD5C4]/40 transition-all duration-500 group opacity-0 hover:scale-[1.02]"
            >
              <div className="text-4xl md:text-6xl font-bold mb-1 tabular-nums font-display tracking-tight">
                <span
                  id={`stat-num-${i}`}
                  className="bg-gradient-to-br from-[#6DD5C4] to-[#B8C0FF] bg-clip-text text-transparent"
                >
                  0
                </span>
                <span className="bg-gradient-to-br from-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">
                  {stat.suffix}
                </span>
              </div>
              <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-[#E7D8FF]/50 text-xs font-light">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="relative rounded-3xl overflow-hidden border border-[#B8C0FF]/20 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#6DD5C4]/8 via-[#1A1630]/85 to-[#B8C0FF]/10" />
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#6DD5C4] to-transparent" />

          <div className="relative z-10">
            <p className="text-xs tracking-[0.35em] uppercase text-[#6DD5C4] font-semibold mb-3 font-mono">Meet the Founder</p>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 font-display tracking-tight leading-tight">
              Driven by Passion.<br />
              <span className="bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">Defined by Results.</span>
            </h3>
            <p className="text-[#E7D8FF]/60 max-w-md text-base mt-3 font-light leading-relaxed">
              Harsh Apex was founded on a steadfast commitment: marrying elite design with engineered performance to build unstoppable digital flagships.
            </p>
          </div>

          {/* Owner photo */}
          <div className="relative z-10 flex-shrink-0">
            <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-2xl overflow-hidden border border-[#6DD5C4]/30 shadow-xl">
              <Image src="/images/owner.jpg" alt="Founder" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B1A]/40 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#6DD5C4] to-[#B8C0FF] text-[#0D0B1A] text-[9px] font-bold px-3 py-1 rounded-full shadow-lg font-mono tracking-wider">
              FOUNDER &amp; CEO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
