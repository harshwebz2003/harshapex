'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Compass, Palette, Terminal, Rocket, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '01',
    title: 'Discovery',
    sinhala: 'හඳුනාගැනීම',
    desc: 'We dive deep into your brand, goals, and audience to understand what success looks like for your unique project.',
    icon: Search,
    color: 'from-[#b8c0ff] to-[#e7d8ff]',
    glow: 'rgba(184, 192, 255, 0.15)',
  },
  {
    num: '02',
    title: 'Strategy',
    sinhala: 'සැලසුම්කරණය',
    desc: 'We map out a detailed roadmap — architecture, tech stack, design direction, and milestones — before writing a single line of code.',
    icon: Compass,
    color: 'from-[#e7d8ff] to-[#b8c0ff]',
    glow: 'rgba(231, 216, 255, 0.15)',
  },
  {
    num: '03',
    title: 'Design',
    sinhala: 'නිර්මාණය',
    desc: 'Our designers craft pixel-perfect mockups in Figma, iterating until the visual and UX experience is flawless.',
    icon: Palette,
    color: 'from-[#b8c0ff] to-[#e7d8ff]',
    glow: 'rgba(184, 192, 255, 0.15)',
  },
  {
    num: '04',
    title: 'Development',
    sinhala: 'කේතනය',
    desc: 'Our engineers build your project with clean, optimised, production-ready code — tested and performance-tuned.',
    icon: Terminal,
    color: 'from-[#e7d8ff] to-[#b8c0ff]',
    glow: 'rgba(231, 216, 255, 0.15)',
  },
  {
    num: '05',
    title: 'Launch',
    sinhala: 'දියත් කිරීම',
    desc: 'We deploy with precision, monitor performance, and stay by your side through launch and beyond.',
    icon: Rocket,
    color: 'from-[#b8c0ff] to-[#e7d8ff]',
    glow: 'rgba(184, 192, 255, 0.15)',
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards on scroll
      const cards = sectionRef.current?.querySelectorAll('.process-card-wrapper') ?? [];
      cards.forEach((card, idx) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: idx % 2 === 0 ? -50 : 50, y: 30 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              once: true,
            },
          }
        );
      });

      // Animate center nodes
      const nodes = sectionRef.current?.querySelectorAll('.process-node') ?? [];
      nodes.forEach((node) => {
        gsap.fromTo(
          node,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: node,
              start: 'top 75%',
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-32 md:py-40 bg-[#0D0B1A] relative overflow-hidden">
      {/* Background Glow Meshes matching the Figma vibe */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-[#B8C0FF]/4 blur-[120px] pointer-events-none" />
      <div className="absolute top-2/4 right-0 w-[450px] h-[450px] rounded-full bg-[#e7d8ff]/3 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[300px] rounded-full bg-[#B8C0FF]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-xs tracking-[0.4em] uppercase text-[#B8C0FF] mb-4">Workflow</p>
          <h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: 'Clash Display, sans-serif' }}
          >
            Our{' '}
            <span className="bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-[#E7D8FF]/50 text-lg">
            A proven, structured approach that consistently delivers exceptional results.
          </p>
        </div>

        {/* Winding Vertical Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Winding Wavy Dashed Path (Desktop) */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-48 pointer-events-none hidden md:block">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 500" fill="none">
              <path
                d="M 50 0 C 40 50, 15 50, 15 100 C 15 150, 85 150, 85 200 C 85 250, 15 250, 15 300 C 15 350, 85 350, 85 400 C 85 450, 15 450, 15 500"
                stroke="rgba(184, 192, 255, 0.15)"
                strokeWidth="2.5"
                strokeDasharray="6 6"
              />
            </svg>
          </div>

          {/* Straight Dashed Line (Mobile) */}
          <div className="absolute top-0 bottom-0 left-5 w-px bg-gradient-to-b from-[#B8C0FF]/20 to-transparent border-l border-dashed border-[#B8C0FF]/20 md:hidden" />

          {/* Rows Container */}
          <div className="space-y-16 md:space-y-24 relative">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              const Icon = step.icon;

              return (
                <div
                  key={step.num}
                  className="flex flex-col md:flex-row items-start md:items-center justify-between relative"
                >
                  {/* Left Column (Desktop Card) */}
                  <div className={`w-full md:w-[44%] flex justify-end ${isLeft ? 'md:block' : 'hidden md:block opacity-0 pointer-events-none'}`}>
                    {isLeft && (
                      <div className="process-card-wrapper w-full">
                        <div
                          className="w-full p-8 md:p-10 rounded-[32px] border border-[#B8C0FF]/10 bg-[#120F26]/60 backdrop-blur-md transition-all duration-500 hover:border-[#B8C0FF]/30 group hover:-translate-y-1"
                          style={{ boxShadow: `0 0 50px -12px ${step.glow}` }}
                        >
                          <div className="flex items-center justify-between mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-[#B8C0FF]/5 border border-[#B8C0FF]/15 flex items-center justify-center">
                              <Icon className="w-5 h-5 text-[#B8C0FF]" />
                            </div>
                            <span className="text-xs font-mono text-[#B8C0FF]/40 tracking-widest">{step.num} / STEP</span>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Clash Display, sans-serif' }}>
                            {step.title} <span className="bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent italic font-serif text-lg font-normal ml-1">{step.sinhala}</span>
                          </h3>
                          <p className="text-sm text-[#E7D8FF]/60 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Central Timeline Node (Desktop / Mobile Connector) */}
                  <div className="absolute left-0 md:left-1/2 top-4 md:top-auto md:-translate-x-1/2 z-10">
                    <div className="process-node w-10 h-10 rounded-full border border-[#B8C0FF]/30 bg-[#0D0B1A] flex items-center justify-center shadow-lg shadow-[#B8C0FF]/5 relative">
                      <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF] animate-pulse" />
                    </div>
                  </div>

                  {/* Right Column (Desktop Card / Mobile Default) */}
                  <div className={`w-full md:w-[44%] pl-14 md:pl-0 flex justify-start ${!isLeft ? 'md:block' : 'md:hidden'}`}>
                    <div className="process-card-wrapper w-full">
                      <div
                        className="w-full p-8 md:p-10 rounded-[32px] border border-[#B8C0FF]/10 bg-[#120F26]/60 backdrop-blur-md transition-all duration-500 hover:border-[#B8C0FF]/30 group hover:-translate-y-1"
                        style={{ boxShadow: `0 0 50px -12px ${step.glow}` }}
                      >
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-12 h-12 rounded-2xl bg-[#B8C0FF]/5 border border-[#B8C0FF]/15 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-[#B8C0FF]" />
                          </div>
                          <span className="text-xs font-mono text-[#B8C0FF]/40 tracking-widest">{step.num} / STEP</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Clash Display, sans-serif' }}>
                          {step.title} <span className="bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent italic font-serif text-lg font-normal ml-1">{step.sinhala}</span>
                        </h3>
                        <p className="text-sm text-[#E7D8FF]/60 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Button and Text like the German layout */}
        <div className="mt-28 flex flex-col items-center justify-center text-center">
          <a
            href="#connect"
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-[#B8C0FF]/10 to-[#E7D8FF]/10 border border-[#B8C0FF]/35 text-white font-semibold text-sm hover:border-[#B8C0FF] transition-all duration-300 flex items-center gap-2.5 shadow-lg shadow-[#B8C0FF]/5 hover:shadow-[#B8C0FF]/10"
          >
            Initialize Project Scope
            <ArrowUpRight className="w-4 h-4 text-[#B8C0FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>

          <div className="mt-20 border-t border-[#B8C0FF]/10 pt-10 w-full max-w-2xl">
            <h4
              className="text-2xl md:text-3xl font-bold text-white mb-3"
              style={{ fontFamily: 'Clash Display, sans-serif' }}
            >
              You receive a{' '}
              <span className="bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">
                proven system
              </span>
            </h4>
            <p className="text-[#E7D8FF]/40 text-sm">
              A premium, conversion-optimized website built to convert visitors and dominate search rankings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
