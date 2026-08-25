'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: 'How long does a typical website project take?',
    a: 'Most projects are delivered within 2–6 weeks, depending on complexity. A standard 5-page business website typically takes 2–3 weeks, while complex e-commerce or custom web applications may take 4–8 weeks. We always provide a clear timeline upfront.',
  },
  {
    q: 'What information do you need to get started?',
    a: 'We start with a discovery call to understand your business, goals, target audience, and any existing brand assets. You\'ll need to provide your logo (if you have one), any copy/content for the site, and examples of websites you admire. We\'ll guide you through everything.',
  },
  {
    q: 'Do you provide ongoing maintenance and support?',
    a: 'Yes! All plans include post-launch support. Our Growth and Enterprise plans include extended maintenance periods. We also offer monthly maintenance retainers for businesses that need ongoing updates, security monitoring, and performance optimisation.',
  },
  {
    q: 'Will my website work on mobile devices?',
    a: 'Absolutely. Every website we build is fully responsive and tested across all major devices — smartphones, tablets, laptops, and desktops. We use a mobile-first design approach to ensure the best experience on every screen size.',
  },
  {
    q: 'Do you help with content and copywriting?',
    a: 'We can advise on content structure and provide guidance on what makes great web copy. For full copywriting services, we partner with professional writers. We\'re happy to incorporate your existing content or help you create new, SEO-optimised copy.',
  },
  {
    q: 'Can I update the website myself after launch?',
    a: 'Yes — for CMS-based projects (like WordPress or headless CMS setups), we provide a full handover walkthrough so you can manage your content independently. We also provide documentation and a 30-day support window for any questions.',
  },
  {
    q: 'What happens if I\'m not happy with the design?',
    a: 'Client satisfaction is our top priority. Our process includes design approval stages where you review and provide feedback before we proceed. We include up to two rounds of revisions per design stage. We won\'t move forward until you love what you see.',
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Yes. For larger projects, we typically work with a 50% deposit upfront and the remaining 50% on delivery. For Enterprise projects, we can arrange milestone-based payment structures. Get in touch to discuss what works for you.',
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
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
        }
      );

      const items = sectionRef.current?.querySelectorAll('.faq-item') ?? [];
      gsap.fromTo(
        items,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.06,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-40 bg-transparent font-body">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="faq-header text-center mb-16 opacity-0">
          <p className="text-xs tracking-[0.35em] uppercase text-[#6DD5C4] font-semibold mb-4 font-mono">Questions</p>
          <h2
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-display tracking-tight"
          >
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item rounded-2xl border transition-all duration-500 overflow-hidden opacity-0 ${
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
