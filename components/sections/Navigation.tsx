'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '../ThemeProvider';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
];

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (menuRef.current) {
        gsap.fromTo(
          menuRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: 'power2.out' }
        );
        gsap.fromTo(
          menuRef.current.querySelectorAll('.menu-item'),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.05, duration: 0.4, ease: 'expo.out', delay: 0.05 }
        );
      }
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    document.body.style.overflow = '';
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 60);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-out font-body ${
          scrolled
            ? 'bg-[#0D0B1A]/85 backdrop-blur-2xl border-b border-white/8 py-3 sm:py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent py-4 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]">
            <Image src="/logo.png" alt="Harsh Apex" width={110} height={36} className="object-contain sm:w-[120px] sm:h-[40px]" priority />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="relative text-sm text-[#E7D8FF]/70 hover:text-white transition-colors duration-300 group py-1 tracking-[0.03em] cursor-pointer"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#6DD5C4] to-[#B8C0FF] group-hover:w-full transition-all duration-300 ease-out" />
                </button>
              </li>
            ))}
          </ul>

          {/* Right Actions: Theme Toggle + CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle light/dark theme"
              className="relative p-2.5 rounded-full border border-[#B8C0FF]/25 bg-white/[0.04] text-[#B8C0FF] hover:border-[#6DD5C4] hover:bg-white/[0.08] hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm cursor-pointer group"
              title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            >
              {theme === 'dark' ? (
                <svg className="w-4 h-4 fill-none stroke-current stroke-2 group-hover:rotate-45 transition-transform duration-500" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg className="w-4 h-4 fill-none stroke-current stroke-2 group-hover:-rotate-12 transition-transform duration-500" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            {/* CTA */}
            <button
              onClick={() => scrollTo('#contact')}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] text-[#0D0B1A] text-xs font-semibold uppercase tracking-[0.08em] shadow-[0_0_25px_rgba(109,213,196,0.3)] hover:shadow-[0_0_35px_rgba(109,213,196,0.5)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer font-mono"
            >
              Book a Call
            </button>
          </div>

          {/* Mobile Actions (Theme Toggle + Hamburger) */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle light/dark theme"
              className="p-2.5 min-w-[42px] min-h-[42px] flex items-center justify-center rounded-full border border-[#B8C0FF]/25 bg-white/[0.04] text-[#B8C0FF] hover:border-[#6DD5C4] active:scale-90 transition-all duration-300"
            >
              {theme === 'dark' ? (
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col gap-1.5 p-2.5 min-w-[44px] min-h-[44px] justify-center items-center z-10 cursor-pointer rounded-full bg-white/[0.04] border border-white/10 active:scale-90 transition-all"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-[1.5px] bg-[#E7D8FF] transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-[#E7D8FF] transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-[#E7D8FF] transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-[1000] bg-[#0D0B1A]/98 backdrop-blur-2xl flex flex-col items-center justify-center font-body p-6"
        >
          {/* Close button at top right */}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/[0.06] border border-white/15 flex items-center justify-center text-white text-lg active:scale-95 transition-all"
          >
            ✕
          </button>

          <ul className="flex flex-col items-center gap-6 w-full max-w-xs">
            {navLinks.map((link) => (
              <li key={link.label} className="menu-item opacity-0 w-full text-center">
                <button
                  onClick={() => scrollTo(link.href)}
                  className="w-full py-2 text-2xl sm:text-3xl font-medium text-[#E7D8FF]/90 hover:text-white transition-colors cursor-pointer font-display"
                >
                  {link.label}
                </button>
              </li>
            ))}

            <li className="menu-item opacity-0 flex items-center justify-center gap-3 pt-4 border-t border-white/10 w-full">
              <span className="text-xs font-mono tracking-widest text-[#E7D8FF]/60 uppercase">Theme:</span>
              <button
                onClick={toggleTheme}
                className="px-4 py-2 rounded-full border border-[#B8C0FF]/30 bg-white/[0.06] text-xs font-mono text-[#6DD5C4] flex items-center gap-2"
              >
                {theme === 'dark' ? '☀️ Switch to Light' : '🌙 Switch to Dark'}
              </button>
            </li>

            <li className="menu-item pt-2 opacity-0 w-full">
              <button
                onClick={() => scrollTo('#contact')}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] text-[#0D0B1A] font-semibold text-sm shadow-[0_0_30px_rgba(109,213,196,0.4)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer font-mono uppercase tracking-wider text-center"
              >
                Book a Call
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
