'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 0.85,
          ease: 'expo.inOut',
          onComplete,
        });
      },
    });

    // Logo entrance - subtle optical sharpness reveal
    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.94, filter: 'blur(10px)' },
      { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.7, ease: 'power2.out' }
    );

    // Progress counter
    const progressObj = { val: 0 };
    tl.to(
      progressObj,
      {
        val: 100,
        duration: 1.6,
        ease: 'power2.inOut',
        onUpdate: () => {
          const v = Math.round(progressObj.val);
          if (counterRef.current) counterRef.current.textContent = `${v.toString().padStart(2, '0')}%`;
          if (progressBarRef.current) progressBarRef.current.style.width = `${v}%`;
        },
      },
      '-=0.2'
    );

    // Subtitle fade
    tl.fromTo(
      textRef.current,
      { opacity: 0 },
      { opacity: 0.6, duration: 0.4, ease: 'power2.out' },
      0.3
    );
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0D0B1A] overflow-hidden"
    >
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#6DD5C4]/5 blur-[140px]" />
      </div>

      {/* Brand Mark */}
      <div ref={logoRef} className="relative mb-12 opacity-0">
        <Image
          src="/logo.png"
          alt="Harsh Apex"
          width={150}
          height={55}
          className="object-contain drop-shadow-[0_0_20px_rgba(184,192,255,0.2)]"
          priority
        />
      </div>

      {/* Hairline Progress Gauge */}
      <div className="w-56 space-y-3">
        <div className="h-[1px] bg-white/10 rounded-full overflow-hidden">
          <div
            ref={progressBarRef}
            className="h-full bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] rounded-full"
            style={{ width: '0%' }}
          />
        </div>
        <div className="flex justify-between items-center text-[10px] tracking-[0.25em] text-[#B8C0FF]/70 uppercase font-mono">
          <span>Loading Experience</span>
          <span ref={counterRef} className="text-white font-medium">00%</span>
        </div>
      </div>

      {/* Agency Credential */}
      <p
        ref={textRef}
        className="absolute bottom-10 text-[10px] tracking-[0.35em] text-[#E7D8FF]/40 uppercase opacity-0 font-body"
      >
        Harsh Apex Digital Solutions
      </p>
    </div>
  );
}
