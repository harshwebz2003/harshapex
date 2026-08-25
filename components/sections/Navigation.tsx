'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuRef.current) return;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(
        menuRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: 'power2.out' }
      );
      gsap.fromTo(
        menuRef.current.querySelectorAll('.menu-item'),
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, stagger: 0.06, duration: 0.5, ease: 'expo.out', delay: 0.1 }
      );
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-out font-body ${
          scrolled
            ? 'bg-[#0D0B1A]/80 backdrop-blur-2xl border-b border-white/8 py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]">
            <Image src="/logo.png" alt="Harsh Apex" width={120} height={40} className="object-contain" priority />
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

          {/* CTA */}
          <button
            onClick={() => scrollTo('#contact')}
            className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] text-[#0D0B1A] text-xs font-semibold uppercase tracking-[0.08em] shadow-[0_0_25px_rgba(109,213,196,0.3)] hover:shadow-[0_0_35px_rgba(109,213,196,0.5)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer font-mono"
          >
            Book a Call
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 z-10 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-[#E7D8FF] transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-6 h-px bg-[#E7D8FF] transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-px bg-[#E7D8FF] transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-[99] bg-[#0D0B1A]/95 backdrop-blur-2xl flex flex-col items-center justify-center font-body"
        >
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label} className="menu-item opacity-0">
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-3xl sm:text-4xl font-light text-[#E7D8FF]/80 hover:text-white transition-colors cursor-pointer font-display"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="menu-item mt-4 opacity-0">
              <button
                onClick={() => scrollTo('#contact')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] text-[#0D0B1A] font-semibold text-base shadow-[0_0_30px_rgba(109,213,196,0.4)] hover:scale-[1.03] transition-all duration-300 cursor-pointer font-mono uppercase tracking-wider"
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
