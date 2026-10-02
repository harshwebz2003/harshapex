'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
      // Animate section in with luxury decel & exit fade out
      gsap.fromTo(
        '.stat-card',
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
            start: 'top 80%',
            end: 'bottom 15%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );

      // Animate quote banner in
      gsap.fromTo(
        '.stat-quote-banner',
        { opacity: 0, y: 35, filter: 'blur(6px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.9,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.stat-quote-banner',
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );

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
    <section
      id="statistics"
      ref={sectionRef}
      className="py-16 sm:py-24 md:py-32 bg-transparent font-body relative overflow-hidden w-full scroll-mt-20"
    >
      {/* Grid texture */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section eyebrow */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs tracking-[0.35em] uppercase text-[#6DD5C4] font-semibold mb-2 font-mono">
            MEASURABLE IMPACT
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-white font-display tracking-tight">
            Proven Performance &amp; Client Trust
          </h2>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-16">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="stat-card text-center p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-[#B8C0FF]/15 bg-gradient-to-b from-[#1A1630]/60 to-[#0D0B1A]/85 hover:border-[#6DD5C4]/40 transition-all duration-500 group hover:scale-[1.02]"
            >
              <div className="text-3xl sm:text-4xl md:text-6xl font-bold mb-1 tabular-nums font-display tracking-tight">
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
              <div className="text-white font-semibold text-xs sm:text-sm mb-1">{stat.label}</div>
              <div className="text-[#E7D8FF]/50 text-[10px] sm:text-xs font-light">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Qualitative Enterprise Credibility Highlight Banner */}
        <div className="stat-quote-banner relative rounded-[28px] sm:rounded-3xl overflow-hidden border border-[#B8C0FF]/20 p-8 sm:p-12 md:p-16 bg-gradient-to-br from-[#1A1630]/85 via-[#120F26]/90 to-[#0D0B1A]/95 text-center shadow-2xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#6DD5C4]/8 via-transparent to-[#B8C0FF]/10 pointer-events-none" />
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-transparent via-[#6DD5C4] to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-transparent via-[#B8C0FF] to-transparent" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#6DD5C4]/30 bg-[#6DD5C4]/10 text-[#6DD5C4] text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] mb-5 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6DD5C4] animate-pulse" />
              THE HARSH APEX COMMITMENT
            </div>

            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-display leading-snug sm:leading-tight tracking-tight mb-8">
              &ldquo;Built to empower startups, established retailers, and enterprises worldwide with{' '}
              <span className="bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">
                zero subscription lock-in
              </span>{' '}
              and{' '}
              <span className="bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">
                100% custom ownership
              </span>
              .&rdquo;
            </blockquote>

            {/* Trust highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-white/10 text-left">
              {[
                { icon: '🔓', title: 'Zero Monthly Lock-In', desc: 'No recurring software tax' },
                { icon: '💼', title: '100% Code Ownership', desc: 'Full intellectual property' },
                { icon: '⚡', title: 'Bespoke Engineering', desc: 'Tailored to your workflow' },
                { icon: '🤝', title: 'Direct VIP Support', desc: 'Founder engineering access' },
              ].map((feat) => (
                <div key={feat.title} className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-base sm:text-lg mb-1">{feat.icon}</div>
                  <div className="text-white text-xs sm:text-sm font-semibold mb-0.5">{feat.title}</div>
                  <div className="text-[#E7D8FF]/50 text-[10px] sm:text-xs font-light">{feat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
