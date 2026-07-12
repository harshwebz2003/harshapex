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
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuRef.current) return;
    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }
      );
      gsap.fromTo(
        menuRef.current.querySelectorAll('.menu-item'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.08, duration: 0.5, ease: 'power3.out', delay: 0.1 }
      );
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
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? 'bg-[#0D0B1A]/70 backdrop-blur-xl border-b border-[#B8C0FF]/10 py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Image src="/logo.png" alt="Harsh Apex" width={120} height={40} className="object-contain" />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="relative text-sm text-[#E7D8FF]/70 hover:text-[#E7D8FF] transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF] group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={() => scrollTo('#contact')}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF] text-[#0D0B1A] text-sm font-semibold hover:shadow-[0_0_30px_rgba(184,192,255,0.4)] transition-all duration-300 hover:scale-105"
          >
            Book a Call
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 z-10"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-[#E7D8FF] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-6 h-px bg-[#E7D8FF] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-px bg-[#E7D8FF] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-[99] bg-[#0D0B1A]/95 backdrop-blur-2xl flex flex-col items-center justify-center"
        >
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label} className="menu-item">
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-4xl font-light text-[#E7D8FF]/80 hover:text-[#E7D8FF] transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="menu-item mt-4">
              <button
                onClick={() => scrollTo('#contact')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF] text-[#0D0B1A] font-semibold text-lg hover:scale-105 transition-transform"
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
