'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    num: '01',
    title: 'Premium Quality',
    desc: 'We never cut corners. Every project is built to the highest standard with meticulous attention to detail, from pixel-perfect design to clean, optimised code.',
    icon: '◈',
  },
  {
    num: '02',
    title: 'Results-Driven',
    desc: 'We measure success by your success. Every decision we make is backed by data and aimed at delivering measurable improvements to your bottom line.',
    icon: '⬡',
  },
  {
    num: '03',
    title: 'Fast Delivery',
    desc: 'We respect your time. Our streamlined process ensures projects are delivered on schedule without sacrificing quality or cutting corners.',
    icon: '◉',
  },
  {
    num: '04',
    title: 'Dedicated Support',
    desc: 'We don\'t disappear after launch. Our team provides ongoing support, maintenance, and optimisation to keep your digital presence at its peak.',
    icon: '⬢',
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.why-item') ?? [];
    gsap.fromTo(
      items,
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', once: true },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-40 bg-[#0D0B1A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-[#B8C0FF] mb-4">Why Choose Us</p>
            <h2
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'Clash Display, sans-serif' }}
            >
              What Sets Us{' '}
              <span className="bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">
                Apart
              </span>
            </h2>
            <p className="text-[#E7D8FF]/50 text-lg leading-relaxed">
              We combine creative excellence with technical precision to deliver digital solutions that are as
              effective as they are beautiful.
            </p>

            {/* Progress bars */}
            <div className="mt-10 space-y-5">
              {[
                { label: 'Design Quality', value: 98 },
                { label: 'Client Satisfaction', value: 97 },
                { label: 'On-Time Delivery', value: 95 },
              ].map((bar) => (
                <div key={bar.label} className="progress-bar-item">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[#E7D8FF]/70">{bar.label}</span>
                    <span className="text-[#B8C0FF]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      {bar.value}%
                    </span>
                  </div>
                  <div className="h-px bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF] rounded-full progress-fill"
                      data-width={bar.value}
                      style={{ width: '0%', transition: 'width 1.5s ease' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((r) => (
              <div
                key={r.num}
                className="why-item p-6 rounded-3xl border border-[#B8C0FF]/10 bg-gradient-to-br from-[#1A1630]/50 to-[#0D0B1A]/80 hover:border-[#B8C0FF]/30 transition-all duration-300 group"
              >
                <div className="text-2xl text-[#B8C0FF] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {r.icon}
                </div>
                <div className="text-xs text-[#B8C0FF]/40 mb-2 font-mono">{r.num}</div>
                <h3 className="text-base font-bold text-white mb-3" style={{ fontFamily: 'Clash Display, sans-serif' }}>
                  {r.title}
                </h3>
                <p className="text-xs text-[#E7D8FF]/40 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
