'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Trigger progress bar fill on scroll
export function useProgressBars(sectionRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const bars = sectionRef.current?.querySelectorAll<HTMLElement>('.progress-fill') ?? [];
    bars.forEach((bar) => {
      const w = bar.dataset.width ?? '0';
      ScrollTrigger.create({
        trigger: bar,
        start: 'top 85%',
        once: true,
        onEnter: () => { bar.style.width = `${w}%`; },
      });
    });
  }, [sectionRef]);
}
