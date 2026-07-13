

import { useEffect, useRef } from 'react';

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
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let intervalId: NodeJS.Timeout;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (maxScroll <= 0) return; // Only scroll if content overflows (e.g. mobile list)

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
    <section id="pricing" className="py-32 md:py-40 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-[#B8C0FF] mb-4">Investment</p>
          <h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: 'Clash Display, sans-serif' }}
          >
            Transparent{' '}
            <span className="bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-[#E7D8FF]/50 text-lg">
            Choose the plan that fits your ambitions. Every project comes with our premium quality guarantee.
          </p>
        </div>

        {/* Cards */}
        <div ref={scrollRef} className="flex md:grid flex-row md:grid-cols-3 overflow-x-auto md:overflow-visible gap-6 snap-x snap-mandatory scrollbar-none pb-6 md:pb-0 w-full">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-3xl flex flex-col transition-all duration-300 w-[85vw] md:w-full shrink-0 snap-center ${
                plan.popular
                  ? 'border-2 border-[#B8C0FF]/60 bg-gradient-to-br from-[#1A1630]/80 to-[#0D0B1A] shadow-[0_0_60px_rgba(184,192,255,0.15)]'
                  : 'border border-[#B8C0FF]/10 bg-gradient-to-br from-[#1A1630]/30 to-[#0D0B1A]/80 hover:border-[#B8C0FF]/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF] text-[#0D0B1A] text-xs font-bold tracking-wide">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3
                  className="text-xl font-bold text-white mb-2"
                  style={{ fontFamily: 'Clash Display, sans-serif' }}
                >
                  {plan.name}
                </h3>
                <p className="text-sm text-[#E7D8FF]/50 leading-relaxed">{plan.desc}</p>
              </div>

              <div className="mb-8">
                <div
                  className="text-4xl font-bold text-white mb-1"
                  style={{ fontFamily: 'Satoshi, sans-serif' }}
                >
                  {plan.price}
                </div>
                <div className="text-xs text-[#E7D8FF]/40">{plan.period}</div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-[#E7D8FF]/70">
                    <span className="text-[#B8C0FF] shrink-0">✓</span>
                    {f}
                  </li>
                ))}
                {plan.notIncluded.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-[#E7D8FF]/25 line-through">
                    <span className="text-[#E7D8FF]/20 shrink-0">×</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-4 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF] text-[#0D0B1A] hover:shadow-[0_0_30px_rgba(184,192,255,0.4)] hover:scale-105'
                    : 'border border-[#B8C0FF]/30 text-[#E7D8FF] hover:bg-[#B8C0FF]/10 hover:border-[#B8C0FF]'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-[#E7D8FF]/30 text-sm mt-8">
          All prices in Sri Lankan Rupees. Custom quotes available. Book a discovery call to discuss your project.
        </p>
      </div>
    </section>
  );
}
