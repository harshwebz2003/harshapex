'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: 'Do you build POS systems, Mobile Apps, and custom software?',
    a: 'Yes! We specialize in custom Point of Sale (POS) systems, mobile applications (iOS & Android with React Native / Flutter), inventory platforms, and automated business portals. Whether you run a retail shop, restaurant, wholesale business, or service agency, we can engineer any custom system to match your exact workflow.',
  },
  {
    q: 'Can I get a custom business system on a tight or flexible budget?',
    a: 'Absolutely. We believe powerful technology should be accessible to businesses of all sizes. We work closely with you to design modular solutions where you only pay for the essential features you need first, offering budget-friendly milestone pricing with no hidden fees.',
  },
  {
    q: 'How long does a typical website or system project take?',
    a: 'Standard business websites take 1–3 weeks. Custom POS systems and mobile applications typically range from 2–6 weeks depending on requirements such as multi-branch synchronization, barcode scanners, and cloud databases. We provide a guaranteed delivery timeline upfront.',
  },
  {
    q: 'What information do you need to get started?',
    a: 'We start with a quick discovery consultation to understand your business goals, operational requirements, and target audience. For websites, we gather your branding and content; for POS/systems, we map your inventory and checkout flows. We guide you every step of the way.',
  },
  {
    q: 'Do you provide ongoing maintenance, training and support?',
    a: 'Yes! All projects include full staff onboarding, training walkthroughs, and post-launch technical support. We also provide ongoing maintenance retainers covering security updates, server backups, and feature upgrades.',
  },
  {
    q: 'Will my website or web app work seamlessly on mobile devices?',
    a: 'Every digital product we engineer is 100% responsive, optimized for touch gestures, and rigorously tested across smartphones, tablets, laptops, and desktop screens with ultra-fast loading speeds.',
  },
  {
    q: 'Do you offer flexible milestone payment plans?',
    a: 'Yes. We typically structure payments with a standard deposit upfront and milestone payments upon feature approvals. For custom systems and enterprise projects, we can tailor a flexible installment plan that fits your cash flow.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.faq-header',
        { opacity: 0, y: 40, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.9,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );

      const items = sectionRef.current?.querySelectorAll('.faq-item') ?? [];
      gsap.fromTo(
        items,
        { opacity: 0, y: 35, filter: 'blur(5px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          stagger: 0.06,
          duration: 0.85,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'bottom 15%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-20 md:py-32 bg-transparent font-body w-full">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="faq-header text-center mb-8 sm:mb-14">
          <p className="text-xs tracking-[0.35em] uppercase text-[#6DD5C4] font-semibold mb-2 sm:mb-4 font-mono">Questions</p>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-6 font-display tracking-tight break-words"
          >
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3 sm:space-y-3.5">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item rounded-2xl border transition-all duration-500 overflow-hidden ${
                openIndex === i
                  ? 'border-[#6DD5C4]/40 bg-gradient-to-br from-[#1A1630]/80 to-[#0D0B1A]/95 shadow-[0_4px_30px_rgba(109,213,196,0.08)]'
                  : 'border-[#B8C0FF]/15 bg-[#1A1630]/25 hover:border-[#B8C0FF]/30'
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                aria-expanded={openIndex === i}
              >
                <span
                  className="text-white font-medium pr-4 font-display text-base md:text-lg"
                >
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 w-7 h-7 rounded-full border border-[#B8C0FF]/30 flex items-center justify-center text-[#6DD5C4] transition-all duration-400 ease-out ${
                    openIndex === i ? 'bg-gradient-to-r from-[#6DD5C4] to-[#B8C0FF] text-[#0D0B1A] border-transparent rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-6 text-[#E7D8FF]/70 text-sm leading-relaxed font-light">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
