'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: 'Starter',
    price: 'Rs. 15,000',
    period: 'one-time',
    desc: 'Perfect for small businesses and solo entrepreneurs looking to establish a professional digital presence.',
    features: [
      '5-Page Website',
      'Mobile Responsive Design',
      'Basic SEO Setup',
      'Contact Form Integration',
      'Social Media Links',
      '1 Month Free Support',
      'Google Analytics Setup',
    ],
    notIncluded: ['E-Commerce', 'Custom Animations', 'CMS Integration'],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Growth',
    price: 'Rs. 50,000',
    period: 'one-time',
    desc: 'Ideal for growing businesses that need a powerful, feature-rich digital presence to scale.',
    features: [
      '10-Page Website',
      'Premium UI/UX Design',
      'Advanced SEO Optimisation',
      'CMS Integration',
      'Blog/News Section',
      'Performance Optimisation',
      '3 Months Free Support',
      'Google Analytics + GTM',
      'Custom Animations',
    ],
    notIncluded: ['Full E-Commerce'],
    cta: 'Start Growing',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'project',
    desc: 'For premium brands and corporations that demand the absolute best — fully bespoke, no compromises.',
    features: [
      'Unlimited Pages',
      'Full E-Commerce Platform',
      'Custom Web Application',
      'Advanced Animations & GSAP',
      'Dedicated Project Manager',
      'Priority Support',
      '12 Months Maintenance',
      'SEO + Content Strategy',
      'Performance Audit',
      'Brand Identity Package',
    ],
    notIncluded: [],
    cta: 'Book a Discovery Call',
    popular: false,
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pricing-header',
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

      const cards = sectionRef.current?.querySelectorAll('.pricing-card') ?? [];
      gsap.fromTo(
        cards,
        { opacity: 0, y: 45, filter: 'blur(6px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          stagger: 0.09,
          duration: 0.9,
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

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let intervalId: NodeJS.Timeout;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (maxScroll <= 0) return;

        const cards = Array.from(container.children) as HTMLElement[];
        if (cards.length === 0) return;

        let currentIndex = 0;
        let minDiff = Infinity;
        const containerLeft = container.getBoundingClientRect().left;

        cards.forEach((card, idx) => {
          const rect = card.getBoundingClientRect();
          const diff = Math.abs(rect.left - containerLeft);
          if (diff < minDiff) {
            minDiff = diff;
            currentIndex = idx;
          }
        });

        const nextIndex = (currentIndex + 1) % cards.length;
        const nextCard = cards[nextIndex];
        if (nextCard) {
          const targetLeft = container.scrollLeft + nextCard.getBoundingClientRect().left - container.getBoundingClientRect().left;
          container.scrollTo({
            left: targetLeft,
            behavior: 'smooth'
          });
        }
      }, 3500);
    };

    startAutoScroll();

    const pause = () => clearInterval(intervalId);
    const resume = () => {
      clearInterval(intervalId);
      startAutoScroll();
    };

    container.addEventListener('touchstart', pause);
    container.addEventListener('touchend', resume);

    return () => {
      clearInterval(intervalId);
      container.removeEventListener('touchstart', pause);
      container.removeEventListener('touchend', resume);
    };
  }, []);

  return (
    <section id="pricing" ref={sectionRef} className="py-32 md:py-40 bg-transparent font-body">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="pricing-header text-center mb-16 opacity-0">
          <p className="text-xs tracking-[0.35em] uppercase text-[#6DD5C4] font-semibold mb-4 font-mono">Investment</p>
          <h2
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-display tracking-tight"
          >
            Transparent{' '}
            <span className="bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-[#E7D8FF]/60 text-lg font-light leading-relaxed">
            Clear, honest pricing with no hidden costs. Select the engagement model suited to your scale.
          </p>
        </div>

        {/* Pricing cards */}
        <div ref={scrollRef} className="flex md:grid flex-row md:grid-cols-3 overflow-x-auto md:overflow-visible gap-8 items-stretch snap-x snap-mandatory scrollbar-none pb-6 md:pb-0 w-full">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card relative rounded-3xl p-8 md:p-10 flex flex-col justify-between transition-all duration-500 w-[85vw] md:w-full shrink-0 snap-center opacity-0 ${
                plan.popular
                  ? 'border-2 border-[#6DD5C4]/50 bg-gradient-to-b from-[#1A1630]/90 to-[#0D0B1A]/95 shadow-[0_0_50px_rgba(109,213,196,0.15)] md:-translate-y-2'
                  : 'border border-[#B8C0FF]/15 bg-gradient-to-b from-[#1A1630]/50 to-[#0D0B1A]/80 hover:border-[#6DD5C4]/40 shadow-lg'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#6DD5C4] to-[#B8C0FF] text-[#0D0B1A] text-[10px] font-extrabold px-4 py-1 rounded-full uppercase tracking-wider shadow-md font-mono">
                  Most Popular
                </div>
              )}

              <div>
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-widest text-[#6DD5C4] font-mono font-semibold">{plan.name}</span>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span
                      className="text-4xl md:text-5xl font-bold text-white font-display tracking-tight"
                    >
                      {plan.price}
                    </span>
                    <span className="text-xs text-[#E7D8FF]/40 font-mono">/{plan.period}</span>
                  </div>
                  <p className="text-xs text-[#E7D8FF]/60 mt-3 leading-relaxed font-light">{plan.desc}</p>
                </div>

                <div className="border-t border-white/10 my-6" />

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-[#E7D8FF]/80">
                      <span className="text-[#6DD5C4] text-xs">✓</span>
                      <span className="font-light">{f}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-[#E7D8FF]/30">
                      <span className="text-white/20 text-xs">✕</span>
                      <span className="line-through font-light">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-3.5 rounded-full text-xs uppercase tracking-[0.08em] font-semibold transition-all duration-300 cursor-pointer font-mono ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] text-[#0D0B1A] shadow-[0_0_30px_rgba(109,213,196,0.35)] hover:shadow-[0_0_40px_rgba(109,213,196,0.55)] hover:scale-[1.02] active:scale-[0.98]'
                    : 'border border-[#B8C0FF]/30 text-white hover:border-[#6DD5C4] hover:bg-[#6DD5C4]/10 hover:scale-[1.02] active:scale-[0.98]'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Custom POS & System Pricing Banner */}
        <div className="mt-14 p-8 rounded-3xl border border-[#6DD5C4]/30 bg-gradient-to-r from-[#1A1630]/80 via-[#120F26]/90 to-[#0D0B1A] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-lg">
          <div>
            <div className="text-xs uppercase font-mono tracking-widest text-[#6DD5C4] font-semibold mb-2">Custom Software & POS Development</div>
            <h4 className="text-xl md:text-2xl font-bold text-white font-display">Need a Specialized POS System, Mobile App, or ERP?</h4>
            <p className="text-xs md:text-sm text-[#E7D8FF]/70 mt-1.5 font-light max-w-xl">
              We design and build any custom business management system at flexible, budget-friendly rates tailored to your exact operational requirements.
            </p>
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="shrink-0 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] text-[#0D0B1A] text-xs font-semibold uppercase tracking-wider font-mono shadow-[0_0_25px_rgba(109,213,196,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            Inquire Custom System →
          </button>
        </div>
      </div>
    </section>
  );
}
