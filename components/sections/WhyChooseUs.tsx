'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface LifecycleStep {
  num: string;
  title: string;
  shortDesc: string;
  category: string;
  icon: string;
}

const lifecycleSteps: LifecycleStep[] = [
  {
    num: '01',
    title: 'Strategy & Architecture',
    shortDesc: 'Comprehensive tech scoping, domain modeling, cloud infrastructure topology, and scalability roadmaps.',
    category: 'Foundation',
    icon: '◈',
  },
  {
    num: '02',
    title: 'UI/UX Engineering',
    shortDesc: 'Behavioral UX flow, optical balancing, responsive design systems, and tactile micro-interactions.',
    category: 'Experience',
    icon: '▲',
  },
  {
    num: '03',
    title: 'Core Development',
    shortDesc: 'Production-grade Next.js, type-safe full-stack codebases, clean architecture, and modular API design.',
    category: 'Engineering',
    icon: '⚡',
  },
  {
    num: '04',
    title: 'Database & Cloud',
    shortDesc: 'Relational & NoSQL schema design, edge data replication, automated failover, and Supabase integration.',
    category: 'Data & Infra',
    icon: '◆',
  },
  {
    num: '05',
    title: 'Automation & AI',
    shortDesc: 'AI workflow integration, background cron tasks, intelligent analytics triggers, and webhook pipelines.',
    category: 'Intelligence',
    icon: '⚙',
  },
  {
    num: '06',
    title: 'Rigorous Testing',
    shortDesc: 'Multi-device cross-browser QA, latency profiling, offline resilience, and zero-compromise security audits.',
    category: 'Reliability',
    icon: '🛡',
  },
  {
    num: '07',
    title: 'Global Deployment',
    shortDesc: 'Zero-downtime CI/CD pipelines, global CDN edge caching, DNS optimization, and instant SSL provision.',
    category: 'Launch',
    icon: '🚀',
  },
  {
    num: '08',
    title: 'Lifetime VIP Support',
    shortDesc: 'Direct founder engineering access, proactive monitoring, regular health updates, and zero lock-in.',
    category: 'Partnership',
    icon: '✦',
  },
];

const metrics = [
  { label: 'Design Quality & Optical Balance', value: 98 },
  { label: 'Client Satisfaction & Retention', value: 97 },
  { label: 'On-Time Milestone Delivery', value: 95 },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Left content entrance
      gsap.fromTo(
        '.why-header-content',
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

      // Journey lifecycle cards
      const stepCards = sectionRef.current?.querySelectorAll('.lifecycle-step-card') ?? [];
      gsap.fromTo(
        stepCards,
        { opacity: 0, y: 35, filter: 'blur(4px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          stagger: 0.06,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.lifecycle-grid-container',
            start: 'top 80%',
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
      id="philosophy"
      ref={sectionRef}
      className="py-16 sm:py-24 md:py-32 bg-transparent font-body relative overflow-hidden w-full scroll-mt-20"
    >
      {/* Invisible anchor for backward compatibility */}
      <span id="why-choose-us" className="sr-only">Why Choose Us</span>

      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-[#6DD5C4]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-[#B8C0FF]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Header & Philosophy Block */}
        <div className="why-header-content grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14 sm:mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#6DD5C4]/30 bg-[#6DD5C4]/10 text-[#6DD5C4] text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6DD5C4] animate-pulse" />
              OUR ENGINEERING PHILOSOPHY
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-5 sm:mb-6 leading-[1.1] font-display tracking-tight break-words">
              We Don&apos;t Just Design.{' '}
              <span className="bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">
                We Build.
              </span>
            </h2>
            <p className="text-[#E7D8FF]/75 text-base sm:text-lg leading-relaxed font-light max-w-2xl">
              We bridge the gap between world-class aesthetic design and rigorous software engineering — taking your
              project from concept to scalable production with bespoke craftsmanship and zero technical compromises.
            </p>
          </div>

          {/* Right Metrics Panel */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#0D0B1A]/70 [.light_&]:bg-[#1A1A1A]/75 backdrop-blur-md border border-[#B8C0FF]/15 shadow-[0_12px_45px_rgba(0,0,0,0.4)]">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
              <span className="text-xs font-mono tracking-widest uppercase text-[#6DD5C4]">Verified Quality Benchmarks</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#6DD5C4]/10 text-[#6DD5C4] border border-[#6DD5C4]/25">
                V2.4 AUDITED
              </span>
            </div>
            <div className="space-y-5">
              {metrics.map((bar) => (
                <div key={bar.label} className="progress-bar-item">
                  <div className="flex justify-between text-xs tracking-wide uppercase mb-2 font-mono">
                    <span className="text-[#E7D8FF]/80 font-sans text-xs">{bar.label}</span>
                    <span className="text-[#6DD5C4] font-semibold">{bar.value}%</span>
                  </div>
                  <div className="h-[3px] bg-white/10 rounded-full overflow-hidden">
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
        </div>

        {/* 8-Stage Complete Lifecycle Visual Journey */}
        <div className="lifecycle-grid-container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 pb-4 border-b border-[#B8C0FF]/15">
            <div>
              <p className="text-xs font-mono tracking-[0.3em] uppercase text-[#6DD5C4] mb-1">END-TO-END EXECUTION</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                The 8-Stage Production Lifecycle
              </h3>
            </div>
            <p className="text-xs text-[#E7D8FF]/60 font-mono">
              Hover or click any stage to inspect the technical delivery protocol
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {lifecycleSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`lifecycle-step-card relative cursor-pointer p-6 rounded-3xl border transition-all duration-300 text-left group flex flex-col justify-between min-h-[220px] ${
                    isActive
                      ? 'border-[#6DD5C4]/70 bg-gradient-to-br from-[#1A1630]/90 to-[#0D0B1A]/95 shadow-[0_12px_40px_rgba(109,213,196,0.18)] scale-[1.02]'
                      : 'border-[#B8C0FF]/15 bg-gradient-to-br from-[#1A1630]/50 to-[#0D0B1A]/70 hover:border-[#6DD5C4]/40 hover:bg-[#1A1630]/75'
                  }`}
                >
                  {/* Top Step Row */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all duration-300 ${
                          isActive
                            ? 'bg-[#6DD5C4] text-[#0D0B1A] font-bold shadow-[0_0_20px_rgba(109,213,196,0.5)]'
                            : 'bg-[#6DD5C4]/10 border border-[#6DD5C4]/25 text-[#6DD5C4] group-hover:scale-110'
                        }`}
                      >
                        <span>{step.icon}</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-mono">
                        <span className="text-[10px] tracking-wider uppercase text-[#E7D8FF]/40">{step.category}</span>
                        <span
                          className={`text-xs font-bold tracking-widest ${
                            isActive ? 'text-[#6DD5C4]' : 'text-[#6DD5C4]/60'
                          }`}
                        >
                          {step.num}
                        </span>
                      </div>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white mb-2 font-display group-hover:text-[#6DD5C4] transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#E7D8FF]/65 leading-relaxed font-light">
                      {step.shortDesc}
                    </p>
                  </div>

                  {/* Flow connector pill */}
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[#6DD5C4]/80 flex items-center gap-1">
                      {idx < 7 ? (
                        <>
                          <span>Stage {step.num}</span>
                          <span className="text-[#B8C0FF]/50">→</span>
                        </>
                      ) : (
                        <span className="text-[#6DD5C4] font-semibold">Continuous Evolution ↺</span>
                      )}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isActive ? 'bg-[#6DD5C4] scale-125 shadow-[0_0_10px_#6DD5C4]' : 'bg-white/20'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
