'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  stagger?: number;
  duration?: number;
  highlightWords?: string[];
  highlightClass?: string;
}

export default function AnimatedText({
  children,
  className = '',
  as: Component = 'h2',
  stagger = 0.04,
  duration = 0.85,
  highlightWords = [],
  highlightClass = 'bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent',
}: AnimatedTextProps) {
  const elementRef = useRef<HTMLElement>(null);

  const words = children.split(' ');

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(el.querySelectorAll('.anim-word-inner'), { opacity: 1, y: 0, filter: 'none' });
      return;
    }

    const wordInners = el.querySelectorAll('.anim-word-inner');

    const ctx = gsap.context(() => {
      // Fade in & de-blur on scroll entry, with smooth reverse fade out on scroll exit
      gsap.fromTo(
        wordInners,
        {
          opacity: 0,
          yPercent: 100,
          filter: 'blur(8px)',
        },
        {
          opacity: 1,
          yPercent: 0,
          filter: 'blur(0px)',
          duration: duration,
          stagger: stagger,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [duration, stagger]);

  return (
    <Component ref={elementRef as any} className={`overflow-hidden ${className}`}>
      {words.map((word, i) => {
        const isHighlight = highlightWords.some(
          (hw) => hw.toLowerCase() === word.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
        );

        return (
          <span key={i} className="inline-block overflow-hidden align-top mr-[0.24em] last:mr-0">
            <span
              className={`anim-word-inner inline-block opacity-0 ${
                isHighlight ? highlightClass : ''
              }`}
            >
              {word}
            </span>
          </span>
        );
      })}
    </Component>
  );
}
