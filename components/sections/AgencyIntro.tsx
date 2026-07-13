'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { num: '50+', label: 'Projects' },
  { num: '5+', label: 'Years' },
  { num: '98%', label: 'Satisfaction' },
  { num: '15', label: 'Countries' },
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
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
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
        const obj = { val: 0 };
        ScrollTrigger.create({
          trigger: el,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.to(obj, {
              val: target,
              duration: 1.5,
              ease: 'power2.out',
              onUpdate: () => {
                el.textContent = Math.round(obj.val) + (el.getAttribute('data-suffix') || '');
              },
            });
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 md:py-40 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Big bg text */}
        <div className="relative mb-20">
          <span
            className="absolute -top-10 left-0 text-[120px] md:text-[200px] font-bold text-[#B8C0FF]/5 select-none pointer-events-none leading-none"
            style={{ fontFamily: 'Clash Display, sans-serif' }}
          >
            ABOUT
          </span>
          <p className="relative text-xs tracking-[0.4em] uppercase text-[#B8C0FF] mb-4">Who We Are</p>
          <h2
            className="relative text-4xl md:text-6xl font-bold text-white max-w-2xl leading-tight"
            style={{ fontFamily: 'Clash Display, sans-serif' }}
          >
            A Studio That Turns{' '}
            <span className="bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">
              Vision
            </span>{' '}
            Into Reality
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative rounded-3xl overflow-hidden aspect-[4/3]">
            <Image
              src="/images/owner.jpg"
              alt="Harsh Apex Team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#B8C0FF]/20 to-transparent mix-blend-overlay" />
          </div>

          {/* Text */}
          <div ref={textRef} className="space-y-8">
            <p className="reveal text-lg text-[#E7D8FF]/70 leading-relaxed">
              We are <span className="text-[#E7D8FF] font-medium">Harsh Apex Digital Solutions</span> — a premium
              digital agency specialising in crafting high-performance websites and immersive digital
              experiences that don&apos;t just look beautiful, they drive results.
            </p>
            <p className="reveal text-base text-[#E7D8FF]/50 leading-relaxed">
              From startups to established enterprises, we partner with brands who demand the best.
              Every pixel, every interaction, and every line of code is crafted with precision and purpose.
            </p>

            {/* Stats */}
            <div className="reveal grid grid-cols-2 gap-6 pt-4">
              {stats.map((s) => (
                <div key={s.label} className="p-5 rounded-2xl border border-[#B8C0FF]/10 bg-[#B8C0FF]/5">
                  <div
                    className="text-3xl font-bold bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                  >
                    {s.num}
                  </div>
                  <div className="text-sm text-[#E7D8FF]/50 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
