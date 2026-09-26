'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface PricingPlan {
  name: string;
  tagline: string;
  price: string;
  period: string;
  badge?: string;
  popular?: boolean;
  desc: string;
  features: string[];
  cta: string;
  whatsappMessage: string;
}

const businessSuitePlans: PricingPlan[] = [
  {
    name: 'STARTER',
    tagline: 'Essential Tools for Small Businesses',
    price: 'Rs. 49,900/-',
    period: 'one-time',
    desc: 'Perfect entry system for shops, boutiques, and emerging businesses wanting automated billing and stock control.',
    features: [
      'POS & Billing System (Fast & Easy)',
      'Real-time Inventory Management',
      'Customer Database (CRM)',
      'Invoices & Basic Financial Reports',
      'Free Setup & Training Included',
      'Lifetime System Support',
      'No Monthly Hidden Charges (One-Time)',
    ],
    cta: 'Request Free Demo',
    whatsappMessage: 'Hello Harsh Apex, I would like to request a FREE Demo for the Starter Business Suite (Rs. 49,900).',
    popular: false,
  },
  {
    name: 'BUSINESS',
    tagline: 'Complete Business Management',
    price: 'Rs. 89,900/-',
    period: 'one-time',
    badge: 'MOST POPULAR',
    popular: true,
    desc: 'The complete command center to scale operations, manage staff, track inventory, and automate WhatsApp updates.',
    features: [
      'Everything in Starter Package',
      'Advanced Inventory & Profit Reports',
      'HR & Staff Management (Attendance & Leave)',
      'Automated WhatsApp Customer Notifications',
      'Multi-User & Role-Based Access Control',
      'Professional Quotations & Invoices',
      'Free Setup & Hands-on Staff Training',
      'Lifetime Technical Support',
    ],
    cta: 'Request Free Demo',
    whatsappMessage: 'Hello Harsh Apex, I would like to request a FREE Demo for the Business Suite (Rs. 89,900).',
  },
  {
    name: 'ULTIMATE',
    tagline: 'All-in-One Smart Business Solution',
    price: 'Rs. 149,900/-',
    period: 'one-time',
    badge: 'ALL-IN-ONE SMART SUITE',
    popular: false,
    desc: 'The ultimate enterprise solution with connected e-commerce website, 24/7 AI customer chatbot, and custom workflows.',
    features: [
      'Everything in Business Package',
      'Full Website Integration (Connected to POS)',
      '1 Year Free Domain & High-Speed Hosting',
      '24/7 AI Customer Assistant (Smart Chatbot)',
      'Advanced Finance & Cash Flow Analytics',
      'Custom Features (Tailored to your business)',
      'VIP Priority Lifetime Support',
      'Complete Onboarding & Staff Training',
    ],
    cta: 'Request Free Demo',
    whatsappMessage: 'Hello Harsh Apex, I would like to request a FREE Demo for the Ultimate Business Suite (Rs. 149,900).',
  },
];

const webPlans: PricingPlan[] = [
  {
    name: 'Starter Website',
    tagline: 'Essential Digital Presence',
    price: 'Rs. 15,000',
    period: 'one-time',
    desc: 'Perfect for small businesses and solo entrepreneurs looking to establish a professional digital presence.',
    features: [
      'One-Page High-Converting Website',
      'Mobile Responsive Design',
      'Basic SEO Setup',
      'Contact Form & WhatsApp Integration',
      'Social Media Links',
      '1 Month Free Support',
      'Google Analytics Setup',
    ],
    cta: 'Get Started',
    whatsappMessage: 'Hello Harsh Apex, I would like to discuss the Starter Website Package (Rs. 15,000).',
    popular: false,
  },
  {
    name: 'Growth Website',
    tagline: 'Premium Multi-Page Platform',
    price: 'Rs. 30,000',
    period: 'one-time',
    badge: 'BEST VALUE',
    popular: true,
    desc: 'Ideal for growing businesses that need a powerful, feature-rich digital presence to scale.',
    features: [
      '5-Page Bespoke Website',
      'Premium UI/UX Design & Animations',
      'Advanced Technical SEO Optimisation',
      'CMS Integration / Blog System',
      'Performance & Speed Optimisation',
      '3 Months Free Support',
      'Google Analytics + GTM',
    ],
    cta: 'Start Growing',
    whatsappMessage: 'Hello Harsh Apex, I would like to discuss the Growth Website Package (Rs. 30,000).',
  },
  {
    name: 'Custom Enterprise',
    tagline: 'Bespoke Software & Web Apps',
    price: 'Custom',
    period: 'project',
    desc: 'For premium brands and corporations that demand the absolute best — fully bespoke, no compromises.',
    features: [
      'Unlimited Pages & Custom Architecture',
      'Full E-Commerce / Custom Web Application',
      'Advanced GSAP & Interactive Shaders',
      'Dedicated Project Manager',
      'Priority 24/7 VIP Support',
      '12 Months Free Maintenance',
      'Brand Identity & Performance Audit',
    ],
    cta: 'Book a Discovery Call',
    whatsappMessage: 'Hello Harsh Apex, I would like to discuss a Custom Enterprise project.',
    popular: false,
  },
];

const suiteCapabilities = [
  { icon: '🛒', name: 'POS & Billing', desc: 'Fast & Easy Sales Management' },
  { icon: '📦', name: 'Inventory Management', desc: 'Real-time Stock Control' },
  { icon: '👥', name: 'CRM Customers', desc: 'Manage Customers & Follow-ups' },
  { icon: '📄', name: 'Quotations & Invoices', desc: 'Professional Invoices & Estimates' },
  { icon: '📊', name: 'Finance Reports', desc: 'Sales, Expenses & Profit Reports' },
  { icon: '👔', name: 'HR & Staff Management', desc: 'Attendance, Leave & Staff Control' },
  { icon: '🌐', name: 'Website Integration', desc: 'Connect with Your Website' },
  { icon: '💬', name: 'WhatsApp Notifications', desc: 'Auto Updates to Customers' },
  { icon: '🤖', name: 'AI Customer Assistant', desc: '24/7 Customer Support' },
  { icon: '⚙️', name: 'Owner Dashboard', desc: 'Full Business Overview' },
];

const suiteGuarantees = [
  { icon: '🌐', title: '1 Year Free Domain & Hosting', subtitle: 'Included with Website Integration' },
  { icon: '🎓', title: 'Free Setup & Training', subtitle: 'Complete hands-on staff onboarding' },
  { icon: '🛡️', title: 'Lifetime Technical Support', subtitle: 'Always here to keep your business running' },
  { icon: '⚙️', title: 'Custom Features Available', subtitle: 'Tailored specifically to your business flow' },
  { icon: '💳', title: 'No Monthly Hidden Charges', subtitle: 'One-time investment, zero subscription fees' },
  { icon: '🏷️', title: 'Flexible Scalability', subtitle: 'Customizable based on exact requirements' },
];

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<'suite' | 'web'>('suite');
  const sectionRef = useRef<HTMLElement>(null);

  const currentPlans = activeTab === 'suite' ? businessSuitePlans : webPlans;

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
  }, [activeTab]);

  const handleCtaClick = (plan: PricingPlan) => {
    const encoded = encodeURIComponent(plan.whatsappMessage);
    window.open(`https://wa.me/94770663154?text=${encoded}`, '_blank');
  };

  return (
    <section id="pricing" ref={sectionRef} className="py-12 sm:py-20 md:py-32 bg-transparent font-body w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="pricing-header text-center mb-10 sm:mb-14">
          <p className="text-xs tracking-[0.35em] uppercase text-[#6DD5C4] font-semibold mb-2 sm:mb-3 font-mono">
            Smart Solutions & Investment
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4 font-display tracking-tight break-words">
            Transparent{' '}
            <span className="bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">
              Packages
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#E7D8FF]/70 text-base sm:text-lg font-light leading-relaxed px-2">
            Why pay for 5 separate software tools when 1 integrated system does it all? Run your entire enterprise from one high-performance dashboard with zero monthly subscription fees.
          </p>

          {/* Category Toggle Tabs */}
          <div className="mt-7 sm:mt-9 inline-flex p-1.5 rounded-full border border-[#B8C0FF]/20 bg-[#0D0B1A]/70 backdrop-blur-md shadow-lg">
            <button
              onClick={() => setActiveTab('suite')}
              className={`px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer font-mono ${
                activeTab === 'suite'
                  ? 'bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] text-[#0D0B1A] shadow-[0_0_25px_rgba(109,213,196,0.35)] scale-[1.02]'
                  : 'text-[#E7D8FF]/70 hover:text-white hover:bg-white/5'
              }`}
            >
              🚀 Smart Business Suite (POS & ERP)
            </button>
            <button
              onClick={() => setActiveTab('web')}
              className={`px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer font-mono ${
                activeTab === 'web'
                  ? 'bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] text-[#0D0B1A] shadow-[0_0_25px_rgba(109,213,196,0.35)] scale-[1.02]'
                  : 'text-[#E7D8FF]/70 hover:text-white hover:bg-white/5'
              }`}
            >
              🌐 Web Design & Development
            </button>
          </div>
        </div>

        {/* 3 Main Pricing Packages in a Balanced Grid Layout (One After One) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-12 sm:mb-16 w-full">
          {currentPlans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card relative rounded-3xl p-6 sm:p-8 md:p-9 flex flex-col justify-between transition-all duration-500 w-full ${
                plan.popular
                  ? 'border-2 border-[#6DD5C4]/60 bg-gradient-to-b from-[#1A1630]/95 to-[#0D0B1A]/98 shadow-[0_0_50px_rgba(109,213,196,0.2)] md:-translate-y-2'
                  : 'border border-[#B8C0FF]/15 bg-gradient-to-b from-[#1A1630]/60 to-[#0D0B1A]/85 hover:border-[#6DD5C4]/40 shadow-lg hover:shadow-[0_10px_35px_rgba(109,213,196,0.1)]'
              }`}
            >
              {/* Badge */}
              {(plan.badge || plan.popular) && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#6DD5C4] to-[#B8C0FF] text-[#0D0B1A] text-[9px] sm:text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-md font-mono whitespace-nowrap">
                  {plan.badge || 'Most Popular'}
                </div>
              )}

              <div>
                <div className="mb-4 sm:mb-6">
                  <span className="text-xs uppercase tracking-widest text-[#6DD5C4] font-mono font-bold">{plan.name}</span>
                  <div className="text-[11px] sm:text-xs text-[#E7D8FF]/60 font-medium mt-0.5">{plan.tagline}</div>
                  <div className="mt-3 sm:mt-4 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-display tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs text-[#E7D8FF]/50 font-mono">/{plan.period}</span>
                  </div>
                  <p className="text-xs text-[#E7D8FF]/70 mt-3 leading-relaxed font-light">{plan.desc}</p>
                </div>

                <div className="border-t border-white/10 my-4 sm:my-6" />

                {/* Features */}
                <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#E7D8FF]/85">
                      <span className="text-[#6DD5C4] text-sm shrink-0 font-bold">✓</span>
                      <span className="font-light leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <button
                onClick={() => handleCtaClick(plan)}
                className={`w-full py-3.5 sm:py-4 rounded-full text-xs uppercase tracking-[0.08em] font-semibold transition-all duration-300 cursor-pointer font-mono flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] text-[#0D0B1A] shadow-[0_0_30px_rgba(109,213,196,0.35)] hover:shadow-[0_0_45px_rgba(109,213,196,0.55)] hover:scale-[1.02] active:scale-[0.98]'
                    : 'border border-[#B8C0FF]/30 text-white hover:border-[#6DD5C4] hover:bg-[#6DD5C4]/10 hover:scale-[1.02] active:scale-[0.98]'
                }`}
              >
                <span>{plan.cta}</span>
                <span className="text-base">→</span>
              </button>

              {/* Demo Site Link — Smart Business Suite only */}
              {activeTab === 'suite' && (
                <a
                  href="https://saas.harshapex.com.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 w-full py-2.5 rounded-full text-[10px] uppercase tracking-[0.1em] font-semibold font-mono flex items-center justify-center gap-1.5 border border-[#6DD5C4]/25 text-[#6DD5C4]/80 hover:text-[#6DD5C4] hover:border-[#6DD5C4]/60 hover:bg-[#6DD5C4]/8 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>🖥</span>
                  <span>View Live Demo</span>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* 10 Suite Capabilities in a Clean Structured Grid (Shown for Business Suite) */}
        {activeTab === 'suite' && (
          <div className="mb-12 sm:mb-16">
            <div className="text-center mb-6">
              <span className="text-xs uppercase tracking-widest text-[#6DD5C4] font-mono font-bold">
                10 Built-In Power Modules Included In The Suite
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-display mt-1">
                Everything Your Business Needs In One Place
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
              {suiteCapabilities.map((cap) => (
                <div
                  key={cap.name}
                  className="p-4 sm:p-5 rounded-2xl border border-[#B8C0FF]/15 bg-[#1A1630]/40 backdrop-blur-sm hover:border-[#6DD5C4]/40 hover:bg-[#1A1630]/70 transition-all duration-300 group shadow-md"
                >
                  <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{cap.icon}</div>
                  <div className="text-xs sm:text-sm font-bold text-white font-display leading-tight">{cap.name}</div>
                  <div className="text-[10px] sm:text-[11px] text-[#E7D8FF]/60 mt-1.5 leading-snug font-light">{cap.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Value Guarantees Grid (from Flyer) */}
        {activeTab === 'suite' && (
          <div className="mb-10 sm:mb-14 p-6 sm:p-8 rounded-3xl border border-[#B8C0FF]/15 bg-gradient-to-br from-[#1A1630]/60 to-[#0D0B1A]/80 backdrop-blur-md shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
              {suiteGuarantees.map((g) => (
                <div key={g.title} className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#6DD5C4]/10 border border-[#6DD5C4]/25 flex items-center justify-center text-xl shrink-0">
                    {g.icon}
                  </div>
                  <div>
                    <h5 className="text-sm sm:text-base font-bold text-white font-display">{g.title}</h5>
                    <p className="text-xs text-[#E7D8FF]/65 font-light mt-0.5">{g.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Free Demo CTA Banner (100% English) */}
        <div className="p-6 sm:p-8 md:p-10 rounded-3xl border border-[#6DD5C4]/40 bg-gradient-to-r from-[#1A1630]/90 via-[#120F26]/95 to-[#0D0B1A] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-2xl">
          <div>
            <div className="text-[11px] sm:text-xs uppercase font-mono tracking-widest text-[#6DD5C4] font-bold mb-1.5 flex items-center justify-center md:justify-start gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#6DD5C4] animate-pulse" />
              Live Demo Available Now
            </div>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-display">
              Test Drive Your Custom System with a Free Live Walkthrough
            </h4>
            <p className="text-xs md:text-sm text-[#E7D8FF]/75 mt-2 font-light max-w-2xl leading-relaxed">
              Contact our engineering team directly via WhatsApp for an interactive live demo tailored specifically to your retail store, restaurant, or business operations.
            </p>
          </div>
          <a
            href="https://wa.me/94770663154?text=Hello%20Harsh%20Apex,%20I%20would%20like%20to%20request%20a%20FREE%20Live%20Demo%20for%20the%20Smart%20Business%20System."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto shrink-0 px-8 py-4 rounded-full bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] text-[#0D0B1A] text-xs sm:text-sm font-bold uppercase tracking-wider font-mono shadow-[0_0_30px_rgba(109,213,196,0.35)] hover:scale-105 active:scale-95 transition-all duration-300 text-center flex items-center justify-center gap-2.5"
          >
            <span>Request Free Demo on WhatsApp</span>
            <span className="text-base">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
