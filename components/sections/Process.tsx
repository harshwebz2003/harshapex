'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We dive deep into your brand, goals, and audience to understand what success looks like for your unique project.',
    icon: '⬡',
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'We map out a detailed roadmap — architecture, tech stack, design direction, and milestones — before writing a single line of code.',
    icon: '◈',
  },
  {
    num: '03',
    title: 'Design',
    desc: 'Our designers craft pixel-perfect mockups in Figma, iterating until the visual and UX experience is flawless.',
    icon: '◇',
  },
  {
    num: '04',
    title: 'Development',
    desc: 'Our engineers build your project with clean, optimised, production-ready code — tested and performance-tuned.',
    icon: '⬢',
  },
  {
    num: '05',
    title: 'Launch',
    desc: 'We deploy with precision, monitor performance, and stay by your side through launch and beyond.',
    icon: '◉',
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate the connecting line
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1,
          duration: 1.5,
          ease: 'power3.inOut',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', once: true },
        }
      );
    }

    // Steps stagger
    const steps = sectionRef.current?.querySelectorAll('.process-step') ?? [];
    gsap.fromTo(
      steps,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', once: true },
      }
    );
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-32 md:py-40 bg-[#0A0918] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.4em] uppercase text-[#B8C0FF] mb-4">How We Work</p>
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

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-[#B8C0FF]/10">
            <div
              ref={lineRef}
              className="h-full bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF]"
              style={{ transformOrigin: 'left center', transform: 'scaleX(0)' }}
            />
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, i) => (
              <div key={step.num} className="process-step relative">
                {/* Vertical connector (mobile) */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute left-5 top-16 w-px h-full bg-gradient-to-b from-[#B8C0FF]/30 to-transparent" />
                )}

                <div className="flex flex-col lg:items-center lg:text-center">
                  {/* Circle */}
                  <div className="relative z-10 w-10 h-10 rounded-full border-2 border-[#B8C0FF] bg-[#0A0918] flex items-center justify-center mb-6 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF]" />
                  </div>

                  <div className="text-xs text-[#B8C0FF]/40 mb-2 font-mono">{step.num}</div>
                  <h3
                    className="text-lg font-bold text-white mb-3"
                    style={{ fontFamily: 'Clash Display, sans-serif' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#E7D8FF]/40 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
