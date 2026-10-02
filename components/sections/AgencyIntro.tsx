'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 25, suffix: '+', label: 'Production Systems' },
  { value: 3, suffix: '+', label: 'Years Engineering' },
  { value: 98, suffix: '%', label: 'Client Retention' },
  { value: 3, suffix: '+', label: 'Global Markets' },
];

const pillars = [
  'Strategy',
  'UI/UX',
  'Software Development',
  'Automation',
  'Deployment',
  'VIP Support',
];

export default function AgencyIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal
      gsap.fromTo(
        imageRef.current,
        { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
        {
          clipPath: 'inset(0 0% 0 0)',
          opacity: 1,
          duration: 1.2,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 75%',
            once: true,
          },
        }
      );

      // Text stagger
      gsap.fromTo(
        textRef.current?.querySelectorAll('.reveal') ?? [],
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 75%',
            once: true,
          },
        }
      );

      // Counter animation
      document.querySelectorAll('.stat-num').forEach((el) => {
        const target = parseInt(el.getAttribute('data-target') || '0');
        const suffix = el.getAttribute('data-suffix') || '';
        const obj = { val: 0 };
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.to(obj, {
              val: target,
              duration: 1.5,
              ease: 'power2.out',
              onUpdate: () => {
                el.textContent = Math.round(obj.val) + suffix;
              },
            });
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-14 sm:py-20 md:py-32 bg-transparent overflow-hidden w-full relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header section with watermark */}
        <div className="relative mb-10 sm:mb-16">
          <span
            className="absolute -top-6 sm:-top-10 left-0 text-[75px] sm:text-[140px] md:text-[190px] font-bold text-[#B8C0FF]/5 select-none pointer-events-none leading-none font-display"
          >
            COMPANY
          </span>
          <p className="relative text-xs tracking-[0.35em] uppercase text-[#6DD5C4] font-semibold mb-2 sm:mb-4 font-mono">
            MORE THAN A WEB AGENCY
          </p>
          <h2
            className="relative text-3xl sm:text-5xl md:text-6xl font-bold text-white max-w-3xl leading-[1.08] tracking-[-0.03em] font-display"
          >
            A Technology Studio That Turns Vision Into{' '}
            <span className="bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">
              Scalable Digital Systems
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Founder & Leadership Card (Supporting Role) */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div
              ref={imageRef}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] max-w-md w-full border border-[#B8C0FF]/20 shadow-[0_15px_50px_rgba(0,0,0,0.55)] bg-gradient-to-b from-[#1A1630] to-[#0D0B1A]"
            >
              <Image
                src="/images/owner.jpg"
                alt="Chamilka Harshan - Founder & Lead Architect at Harsh Apex"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B1A] via-transparent to-transparent opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#6DD5C4]/15 via-transparent to-[#B8C0FF]/15 mix-blend-overlay" />

              {/* Prestigious Leadership Plaque */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#0D0B1A]/85 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.7)]">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#6DD5C4] uppercase tracking-wider font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DD5C4] animate-pulse" />
                    Leadership & Architecture
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#6DD5C4]/15 border border-[#6DD5C4]/35 text-[#6DD5C4] text-[10px] font-mono font-medium">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    Verified
                  </span>
                </div>
                <div className="text-white text-base sm:text-lg font-bold font-display tracking-tight">
                  Chamilka Harshan
                </div>
                <div className="text-xs text-[#B8C0FF] font-medium font-mono">
                  Founder &amp; Lead Architect
                </div>
                <div className="text-[11px] text-[#E7D8FF]/60 mt-1 leading-snug font-light">
                  Architecting resilient cloud platforms, custom POS &amp; enterprise business software.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Company Identity & Value Proposition */}
          <div ref={textRef} className="md:col-span-7 space-y-6 sm:space-y-7 font-body">
            <p className="reveal text-lg sm:text-xl text-[#E7D8FF]/90 leading-relaxed font-light">
              <span className="text-white font-semibold">Harsh Apex Digital Solutions</span> builds
              production-ready digital products, business systems, and online experiences engineered for speed, operational efficiency, and long-term scale.
            </p>

            {/* We Combine Pillars Banner */}
            <div className="reveal p-5 sm:p-6 rounded-2xl border border-[#B8C0FF]/20 bg-gradient-to-br from-[#1A1630]/75 to-[#0D0B1A]/85 backdrop-blur-md">
              <div className="text-xs font-mono tracking-[0.2em] text-[#6DD5C4] uppercase mb-3.5 font-semibold flex items-center gap-2">
                <span>⚡</span> We Combine Full-Spectrum Excellence:
              </div>
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm font-medium">
                {pillars.map((pillar) => (
                  <span
                    key={pillar}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-[#B8C0FF]/20 text-[#E7D8FF] hover:border-[#6DD5C4]/50 hover:text-white transition-colors duration-300 font-mono text-[11px] sm:text-xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DD5C4]" />
                    {pillar}
                  </span>
                ))}
              </div>
            </div>

            <p className="reveal text-sm sm:text-base text-[#E7D8FF]/70 leading-relaxed font-light">
              From bespoke retail POS suites and multi-branch inventory engines to high-converting eCommerce web applications and automated AI agents, we partner with ambitious companies to build the reliable software infrastructure that powers daily revenue.
            </p>

            {/* Stats Grid */}
            <div className="reveal grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="p-4 rounded-2xl border border-[#B8C0FF]/15 bg-[#B8C0FF]/5 hover:border-[#6DD5C4]/40 hover:bg-[#6DD5C4]/5 transition-all duration-300"
                >
                  <div
                    className="stat-num text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#6DD5C4] to-[#B8C0FF] bg-clip-text text-transparent font-display tracking-tight"
                    data-target={s.value}
                    data-suffix={s.suffix}
                  >
                    {s.value}{s.suffix}
                  </div>
                  <div className="text-[11px] sm:text-xs tracking-wider uppercase text-[#E7D8FF]/60 mt-1 font-medium leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
