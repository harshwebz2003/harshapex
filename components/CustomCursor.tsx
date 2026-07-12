'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = cursorRingRef.current;
    const dot = cursorDotRef.current;
    if (!ring || !dot) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(dot, { x: mouseX - 4, y: mouseY - 4, duration: 0.1, ease: 'power2.out' });
    };

    const ticker = gsap.ticker.add(() => {
      ringX += (mouseX - ringX - 20) * 0.12;
      ringY += (mouseY - ringY - 20) * 0.12;
      gsap.set(ring, { x: ringX, y: ringY });
    });

    const onEnterLink = () => {
      gsap.to(ring, { scale: 1.8, opacity: 0.6, duration: 0.3, ease: 'power2.out' });
      gsap.to(dot, { scale: 0, duration: 0.3 });
    };
    const onLeaveLink = () => {
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.out' });
      gsap.to(dot, { scale: 1, duration: 0.3 });
    };

    window.addEventListener('mousemove', onMouseMove);
    document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', onEnterLink);
      el.addEventListener('mouseleave', onLeaveLink);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <>
      {/* Ring */}
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-[#B8C0FF] pointer-events-none z-[9999] mix-blend-difference"
        style={{ willChange: 'transform' }}
      />
      {/* Dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#E7D8FF] pointer-events-none z-[9999]"
        style={{ willChange: 'transform' }}
      />
    </>
  );
}
