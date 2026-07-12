'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1,
          ease: 'power4.inOut',
          onComplete,
        });
      },
    });

    // Logo entrance
    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8, filter: 'blur(20px)' },
      { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' }
    );

    // Progress count
    const obj = { val: 0 };
    tl.to(
      obj,
      {
        val: 100,
        duration: 2,
        ease: 'power1.inOut',
        onUpdate: () => {
          const v = Math.round(obj.val);
          setProgress(v);
          if (counterRef.current) counterRef.current.textContent = `${v}%`;
          if (progressBarRef.current) progressBarRef.current.style.width = `${v}%`;
        },
      },
      '-=0.2'
    );
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0D0B1A] overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#B8C0FF]/10 blur-[120px]" />
      </div>

      {/* Logo */}
      <div ref={logoRef} className="relative mb-16 opacity-0">
        <Image src="/logo.png" alt="Harsh Apex" width={160} height={60} className="object-contain" priority />
      </div>

      {/* Progress */}
      <div className="w-64 space-y-3">
        <div className="h-px bg-white/10 rounded-full overflow-hidden">
          <div
            ref={progressBarRef}
            className="h-full bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF] rounded-full transition-none"
            style={{ width: '0%' }}
          />
        </div>
        <div className="flex justify-between text-xs text-[#B8C0FF]/60 font-mono">
          <span>Loading experience</span>
          <span ref={counterRef}>0%</span>
        </div>
      </div>

      {/* Agency name */}
      <p className="absolute bottom-10 text-[10px] tracking-[0.4em] text-[#B8C0FF]/30 uppercase">
        Harsh Apex Digital Solutions
      </p>
    </div>
  );
}
