'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  type?: 'chars' | 'words' | 'lines';
  animateOnScroll?: boolean;
  once?: boolean;
}

export default function SplitText({
  text,
  className = '',
  delay = 0,
  stagger = 0.04,
  type = 'words',
  animateOnScroll = true,
  once = true,
}: SplitTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const units = type === 'chars' ? text.split('') : text.split(' ');

    el.innerHTML = units
      .map(
        (unit) =>
          `<span class="split-unit" style="display:inline-block; overflow:hidden; vertical-align:top;"><span class="split-inner" style="display:inline-block;">${unit === ' ' ? '&nbsp;' : unit}</span></span>`
      )
      .join(type === 'words' ? ' ' : '');

    const inners = el.querySelectorAll<HTMLElement>('.split-inner');

    const anim = gsap.fromTo(
      inners,
      { yPercent: 120, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power4.out',
        stagger,
        delay,
        paused: animateOnScroll,
      }
    );

    if (animateOnScroll) {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once,
        onEnter: () => anim.play(),
      });
    }

    return () => {
      anim.kill();
    };
  }, [text, delay, stagger, type, animateOnScroll, once]);

  return (
    <span ref={containerRef} className={className}>
      {text}
    </span>
  );
}
