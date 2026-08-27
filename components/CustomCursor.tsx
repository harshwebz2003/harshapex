'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [hasMouse, setHasMouse] = useState(false);

  useEffect(() => {
    // Only activate cursor on desktop pointer devices with hover capability
    const isDesktopPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches && window.innerWidth >= 768;
    if (!isDesktopPointer) return;
    setHasMouse(true);

    const ring = cursorRingRef.current;
    const dot = cursorDotRef.current;
    if (!ring || !dot) return;

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;
    let isVisible = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        gsap.to([ring, dot], { opacity: 1, duration: 0.3 });
      }

      gsap.to(dot, {
        x: mouseX - 3,
        y: mouseY - 3,
        duration: 0.08,
        ease: 'power2.out',
      });
    };

    const onMouseLeave = () => {
      isVisible = false;
      gsap.to([ring, dot], { opacity: 0, duration: 0.3 });
    };

    // Smooth inertial spring follower for the ring
    const ticker = gsap.ticker.add(() => {
      ringX += (mouseX - ringX - 18) * 0.14;
      ringY += (mouseY - ringY - 18) * 0.14;
      gsap.set(ring, { x: ringX, y: ringY });
    });

    const onEnterLink = () => {
      gsap.to(ring, {
        scale: 1.6,
        borderColor: '#6DD5C4',
        backgroundColor: 'rgba(109, 213, 196, 0.08)',
        duration: 0.35,
        ease: 'power3.out',
      });
      gsap.to(dot, { scale: 0.4, opacity: 0.6, duration: 0.25 });
    };

    const onLeaveLink = () => {
      gsap.to(ring, {
        scale: 1,
        borderColor: '#B8C0FF',
        backgroundColor: 'transparent',
        duration: 0.35,
        ease: 'power3.out',
      });
      gsap.to(dot, { scale: 1, opacity: 1, duration: 0.25 });
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    const updateInteractiveElements = () => {
      document.querySelectorAll('a, button, [role="button"], input, textarea').forEach((el) => {
        el.addEventListener('mouseenter', onEnterLink);
        el.addEventListener('mouseleave', onLeaveLink);
      });
    };

    updateInteractiveElements();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      gsap.ticker.remove(ticker);
    };
  }, []);

  if (!hasMouse) return null;

  return (
    <>
      {/* Precision Ring */}
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-[#B8C0FF]/60 pointer-events-none z-[99999] opacity-0 transition-colors duration-300"
        style={{ willChange: 'transform', transform: 'translate3d(-100px, -100px, 0)' }}
      />
      {/* Center Micro-Dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#E7D8FF] pointer-events-none z-[99999] opacity-0 shadow-[0_0_8px_rgba(231,216,255,0.8)]"
        style={{ willChange: 'transform', transform: 'translate3d(-100px, -100px, 0)' }}
      />
    </>
  );
}
