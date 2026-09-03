'use client';

import React from 'react';
import { motion, Transition, Variants } from 'framer-motion';

export interface BreathingTextProps {
  label: string;
  fromFontVariationSettings?: string;
  toFontVariationSettings?: string;
  transition?: Transition;
  staggerDuration?: number;
  staggerFrom?: 'first' | 'last' | 'center' | number;
  repeatDelay?: number;
  className?: string;
  letterClassName?: string;
  onClick?: () => void;
}

const BreathingText: React.FC<BreathingTextProps> = ({
  label,
  fromFontVariationSettings = "'wght' 400, 'slnt' 0",
  toFontVariationSettings = "'wght' 800, 'slnt' -4",
  transition = {
    duration: 1.6,
    ease: 'easeInOut',
  },
  staggerDuration = 0.08,
  staggerFrom = 'center',
  repeatDelay = 0.1,
  className = '',
  letterClassName = '',
  onClick,
  ...props
}) => {
  const letterVariants: Variants = {
    initial: {
      fontVariationSettings: fromFontVariationSettings,
      scale: 0.98,
      opacity: 0.95,
    },
    animate: (i: number) => ({
      fontVariationSettings: toFontVariationSettings,
      scale: 1.04,
      opacity: 1,
      transition: {
        ...transition,
        repeat: Infinity,
        repeatType: 'mirror',
        delay: i * staggerDuration,
        repeatDelay: repeatDelay,
      },
    }),
  };

  const getCustomIndex = (index: number, total: number) => {
    if (typeof staggerFrom === 'number') {
      return Math.abs(index - staggerFrom);
    }
    switch (staggerFrom) {
      case 'first':
        return index;
      case 'last':
        return total - 1 - index;
      case 'center':
      default:
        return Math.abs(index - Math.floor(total / 2));
    }
  };

  const letters = label.split('');
  const isGradient = className.includes('text-gradient') || className.includes('bg-clip-text');

  return (
    <span className={`inline-block ${className}`} onClick={onClick} {...props}>
      {letters.map((letter: string, i: number) => (
        <motion.span
          key={`${letter}-${i}`}
          className={`inline-block whitespace-pre transform-gpu ${letterClassName} ${
            isGradient ? 'bg-inherit [-webkit-background-clip:text] [background-clip:text] [-webkit-text-fill-color:transparent]' : ''
          }`}
          aria-hidden="true"
          variants={letterVariants}
          initial="initial"
          animate="animate"
          custom={getCustomIndex(i, letters.length)}
        >
          {letter}
        </motion.span>
      ))}
      <span className="sr-only">{label}</span>
    </span>
  );
};

export { BreathingText };
export default BreathingText;
