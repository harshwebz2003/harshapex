'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    num: '01',
    title: 'Precision Craft',
    desc: 'Every layout, interaction, and line of code is obsessively refined for flawless performance and aesthetic poise.',
    icon: '◈',
  },
  {
    num: '02',
    title: 'Conversion Architecture',
    desc: 'Beauty backed by behavioural psychology, structured user journeys, and data-proven design systems.',
    icon: '▲',
  },
  {
    num: '03',
    title: 'Modern Technology',
    desc: 'Built on Next.js 16, TypeScript, Tailwind CSS, and GPU-accelerated motion engines for unmatched speed.',
    icon: '◆',
  },
  {
    num: '04',
    title: 'Enduring Partnership',
    desc: 'We provide continuous iteration, performance observability, and strategic advisory post-launch.',
    icon: '⬢',
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Left content entrance & exit fade
      gsap.fromTo(
        '.why-left-content',
        { opacity: 0, y: 40, filter: 'blur(6px)' },
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

      // Progress bars fill
      const progressFills = sectionRef.current?.querySelectorAll('.progress-fill') ?? [];
      progressFills.forEach((fill) => {
        const target = (fill as HTMLElement).dataset.width;
        gsap.fromTo(
          fill,
          { width: '0%' },
          {
            width: `${target}%`,
            duration: 1.2,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: fill,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse',
            },
          }
        );
      });

      // Right grid cards with bidirectional fade in/out
      const items = sectionRef.current?.querySelectorAll('.why-item') ?? [];
      gsap.fromTo(
        items,
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-20 md:py-32 bg-transparent font-body w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-center">
          {/* Left Column */}
          <div className="why-left-content">
            <p className="text-xs tracking-[0.35em] uppercase text-[#6DD5C4] font-semibold mb-3 sm:mb-4 font-mono">Why Choose Us</p>
            <h2
              className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight font-display tracking-tight break-words"
            >
              What Sets Us{' '}
              <span className="bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">
                Apart
              </span>
            </h2>
            <p className="text-[#E7D8FF]/70 text-base sm:text-lg leading-relaxed font-light">
              We combine creative excellence with technical precision to deliver digital solutions that are as
              effective as they are beautiful.
            </p>

            {/* Progress bars */}
            <div className="mt-8 sm:mt-10 space-y-5 sm:space-y-6">
              {[
                { label: 'Design Quality & Optical Balance', value: 98 },
                { label: 'Client Satisfaction & Retention', value: 97 },
                { label: 'On-Time Milestone Delivery', value: 95 },
              ].map((bar) => (
                <div key={bar.label} className="progress-bar-item">
                  <div className="flex justify-between text-xs tracking-wide uppercase mb-2 font-mono">
                    <span className="text-[#E7D8FF]/70 font-sans">{bar.label}</span>
                    <span className="text-[#6DD5C4] font-medium">
                      {bar.value}%
                    </span>
                  </div>
                  <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] rounded-full progress-fill"
                      data-width={bar.value}
                      style={{ width: '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — cards */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {reasons.map((r) => (
              <div
                key={r.num}
                className="why-item p-5 sm:p-6 rounded-3xl border border-[#B8C0FF]/15 bg-gradient-to-br from-[#1A1630]/60 to-[#0D0B1A]/80 hover:border-[#6DD5C4]/40 transition-all duration-500 group hover:scale-[1.02] shadow-lg hover:shadow-[0_10px_35px_rgba(109,213,196,0.08)]"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#6DD5C4]/10 border border-[#6DD5C4]/25 flex items-center justify-center text-lg text-[#6DD5C4]">
                    <span>{r.icon}</span>
                  </div>
                  <span className="text-xs text-[#6DD5C4]/60 font-mono tracking-widest">{r.num}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2 font-display">
                  {r.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#E7D8FF]/60 leading-relaxed font-light">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
