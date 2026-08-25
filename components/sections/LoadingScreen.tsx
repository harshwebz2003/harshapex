'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

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
          duration: 0.5,
          ease: 'expo.inOut',
          onComplete,
        });
      },
    });

    // Rapid logo sharpness reveal
    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.96 },
      { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out' }
    );

    // Fast, crisp progress counter (0.45s)
    const progressObj = { val: 0 };
    tl.to(
      progressObj,
      {
        val: 100,
        duration: 0.45,
        ease: 'power2.out',
        onUpdate: () => {
          const v = Math.round(progressObj.val);
          if (counterRef.current) counterRef.current.textContent = `${v.toString().padStart(2, '0')}%`;
          if (progressBarRef.current) progressBarRef.current.style.width = `${v}%`;
        },
      },
      '-=0.15'
    );
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0D0B1A] overflow-hidden"
    >
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#6DD5C4]/6 blur-[100px]" />
      </div>

      {/* Brand Mark */}
      <div ref={logoRef} className="relative mb-8 opacity-0">
        <Image
          src="/logo.png"
          alt="Harsh Apex"
          width={130}
          height={48}
          className="object-contain drop-shadow-[0_0_20px_rgba(184,192,255,0.2)]"
          priority
        />
      </div>

      {/* Hairline Progress Gauge */}
      <div className="w-48 space-y-2.5">
        <div className="h-[1.5px] bg-white/10 rounded-full overflow-hidden">
          <div
            ref={progressBarRef}
            className="h-full bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] rounded-full"
            style={{ width: '0%' }}
          />
        </div>
        <div className="flex justify-between items-center text-[10px] tracking-[0.2em] text-[#B8C0FF]/70 uppercase font-mono">
          <span>Harsh Apex</span>
          <span ref={counterRef} className="text-white font-medium">00%</span>
        </div>
      </div>
    </div>
  );
}
