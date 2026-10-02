'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Product {
  id: string;
  badge: string;
  badgeColor: {
    bg: string;
    border: string;
    text: string;
    glow: string;
  };
  title: string;
  tagline: string;
  highlights: string[];
  primaryAction: {
    label: string;
    href: string;
    external?: boolean;
    isGradient?: boolean;
  };
  secondaryAction?: {
    label: string;
    href: string;
    external?: boolean;
  };
  accentColor: string;
}

const flagshipProducts: Product[] = [
  {
    id: 'smart-suite',
    badge: 'FLAGSHIP SUITE',
    badgeColor: {
      bg: 'bg-[#FF8C38]/15',
      border: 'border-[#FF8C38]/40',
      text: 'text-[#FF8C38]',
      glow: 'rgba(255, 140, 56, 0.25)',
    },
    title: 'All-In-One Smart Business Suite',
    tagline: 'The Complete Operating System for Growing Businesses',
    highlights: [
      'POS & High-Speed Billing',
      'Real-Time Inventory & Multi-Branch Sync',
      'CRM, Leads & Customer History',
      'Automated Finance & P&L Reports',
      '24/7 AI Chatbot Integration',
      'Instant WhatsApp Customer Notifications',
    ],
    primaryAction: {
      label: 'Live Demo',
      href: 'https://saas.harshapex.com.lk/login',
      external: true,
      isGradient: true,
    },
    secondaryAction: {
      label: 'Request Suite Demo',
      href: 'https://wa.me/94770663154?text=Hello%20Harsh%20Apex,%20I%20would%20like%20a%20demo%20of%20the%20Smart%20Business%20Suite.',
      external: true,
    },
    accentColor: '#FF8C38',
  },
  {
    id: 'universal-pos',
    badge: 'RETAIL & RESTAURANT',
    badgeColor: {
      bg: 'bg-[#6DD5C4]/15',
      border: 'border-[#6DD5C4]/40',
      text: 'text-[#6DD5C4]',
      glow: 'rgba(109, 213, 196, 0.25)',
    },
    title: 'Universal POS & Retail System',
    tagline: 'High-Speed Billing & Multi-Branch Stock Control',
    highlights: [
      '1-Click Rapid Checkout & Barcode Scanner',
      'Custom Barcode & Product Label Generation',
      'Direct Thermal Receipt & Kitchen Order Printing',
      'Profit Margin & Top-Selling Item Analytics',
      'Multi-User Roles & Shift Cash Audits',
      'Offline Resilience with Instant Cloud Sync',
    ],
    primaryAction: {
      label: 'Inquire POS System',
      href: 'https://wa.me/94770663154?text=Hello%20Harsh%20Apex,%20I%20would%20like%20to%20inquire%20about%20the%20Universal%20POS%20%26%20Retail%20System.',
      external: true,
      isGradient: false,
    },
    accentColor: '#6DD5C4',
  },
  {
    id: 'device-pos',
    badge: 'ELECTRONICS & IMEI',
    badgeColor: {
      bg: 'bg-[#B8C0FF]/15',
      border: 'border-[#B8C0FF]/40',
      text: 'text-[#B8C0FF]',
      glow: 'rgba(184, 192, 255, 0.25)',
    },
    title: 'Device & iPhone POS Platform',
    tagline: 'Specialized for Mobile & Electronics Retailers',
    highlights: [
      'Granular IMEI & Serial Number Tracking',
      'Battery Health & Cosmetic Grade Logging',
      'Customer Trade-In, Buyback & Exchange System',
      'Automated Warranty Cards & Terms Printing',
      'Pre-Owned vs. Brand New Stock Segregation',
      'Technician Job Sheets & Repair Status Tracker',
    ],
    primaryAction: {
      label: 'Inquire Device POS',
      href: 'https://wa.me/94770663154?text=Hello%20Harsh%20Apex,%20I%20would%20like%20to%20inquire%20about%20the%20Device%20%26%20iPhone%20POS%20Platform.',
      external: true,
      isGradient: false,
    },
    accentColor: '#B8C0FF',
  },
  {
    id: 'service-laundry',
    badge: 'SERVICE AUTOMATION',
    badgeColor: {
      bg: 'bg-[#34D399]/15',
      border: 'border-[#34D399]/40',
      text: 'text-[#34D399]',
      glow: 'rgba(52, 211, 153, 0.25)',
    },
    title: 'Service & Laundry Management SaaS',
    tagline: 'Automated Order Intake, Invoicing & Tracking',
    highlights: [
      'Automated Order Intake, Pickup & Delivery Scheduling',
      'WhatsApp Status Alerts (Ready, Dispatched, Delivered)',
      'Garment & Item Barcode Heat-Tagging Support',
      'Daily Cash Flow & Driver Settlement Audits',
      'Customer Loyalty Points & Prepaid Packages',
      'Real-Time Turnaround & Delayed Order Flags',
    ],
    primaryAction: {
      label: 'Inquire Laundry Platform',
      href: 'https://wa.me/94770663154?text=Hello%20Harsh%20Apex,%20I%20would%20like%20to%20inquire%20about%20the%20Service%20%26%20Laundry%20Management%20SaaS.',
      external: true,
      isGradient: false,
    },
    accentColor: '#34D399',
  },
];

function ProductCard({ product }: { product: Product }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;

    const tx = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const ty = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    gsap.to(card, { rotateY: tx, rotateX: ty, duration: 0.35, ease: 'power2.out', transformPerspective: 1000 });
  };

  const handleMouseEnter = () => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (glowRef.current) glowRef.current.style.opacity = '1';
  };

  const handleMouseLeave = () => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (glowRef.current) glowRef.current.style.opacity = '0';
    gsap.to(cardRef.current, { rotateY: 0, rotateX: 0, duration: 0.5, ease: 'power2.out' });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="product-card group relative p-6 sm:p-8 md:p-9 rounded-[30px] border border-[#B8C0FF]/15 bg-gradient-to-b from-[#181432]/90 via-[#110E24]/95 to-[#0D0B1A] flex flex-col justify-between overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-white/25"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Dynamic Cursor Spotlight */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full transition-opacity duration-300"
        style={{
          opacity: 0,
          background: `radial-gradient(circle, ${product.badgeColor.glow} 0%, transparent 70%)`,
        }}
      />

      {/* Top Ambient Corner Flare */}
      <div
        className="absolute top-0 right-0 w-36 h-36 rounded-full blur-3xl -translate-y-12 translate-x-12 pointer-events-none transition-opacity duration-500 opacity-30 group-hover:opacity-60"
        style={{ backgroundColor: product.accentColor }}
      />

      <div className="relative z-10">
        {/* Header: Badge & Status */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase border ${product.badgeColor.bg} ${product.badgeColor.border} ${product.badgeColor.text}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            {product.badge}
          </span>
          <span className="text-[11px] font-mono text-[#E7D8FF]/40 tracking-widest uppercase">
            Production Ready
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 font-display tracking-tight leading-snug">
          {product.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#6DD5C4] font-medium font-mono mb-6 leading-relaxed">
          {product.tagline}
        </p>

        {/* Feature Highlights with Checkmarks */}
        <div className="space-y-3 mb-8 pt-4 border-t border-white/8">
          {product.highlights.map((feat) => (
            <div key={feat} className="flex items-start gap-3 text-xs sm:text-sm text-[#E7D8FF]/85 font-light">
              <span
                className="shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold"
                style={{
                  backgroundColor: `${product.accentColor}20`,
                  color: product.accentColor,
                  border: `1px solid ${product.accentColor}50`,
                }}
              >
                ✓
              </span>
              <span className="leading-snug">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="relative z-10 pt-4 border-t border-white/8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        {product.primaryAction.isGradient ? (
          <a
            href={product.primaryAction.href}
            target={product.primaryAction.external ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="flex-1 py-3 px-5 rounded-2xl bg-gradient-to-r from-[#FF8C38] via-[#FFA35C] to-[#6DD5C4] text-[#0D0B1A] font-semibold text-xs sm:text-sm font-mono uppercase tracking-wider text-center shadow-[0_0_25px_rgba(255,140,56,0.35)] hover:shadow-[0_0_35px_rgba(255,140,56,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>{product.primaryAction.label}</span>
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
        ) : (
          <a
            href={product.primaryAction.href}
            target={product.primaryAction.external ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="flex-1 py-3 px-5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-[#6DD5C4]/50 text-white font-semibold text-xs sm:text-sm font-mono uppercase tracking-wider text-center transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(109,213,196,0.2)]"
          >
            <span>{product.primaryAction.label}</span>
            <span className="font-bold">→</span>
          </a>
        )}

        {product.secondaryAction && (
          <a
            href={product.secondaryAction.href}
            target={product.secondaryAction.external ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="py-3 px-5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-[#E7D8FF]/90 font-medium text-xs sm:text-sm font-mono uppercase tracking-wider text-center transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>{product.secondaryAction.label}</span>
          </a>
        )}
      </div>

      {/* Bottom glowing line */}
      <div
        className="absolute bottom-0 left-6 right-6 h-[1.5px] transition-all duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: `linear-gradient(to right, transparent, ${product.accentColor}, transparent)`,
        }}
      />
    </div>
  );
}

export default function ProductsShowcase() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.products-header',
        { opacity: 0, y: 35, filter: 'blur(8px)' },
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

      // Cards staggered animation
      gsap.fromTo(
        '.product-card-wrap',
        { opacity: 0, y: 40, filter: 'blur(6px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          stagger: 0.1,
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

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-14 sm:py-20 md:py-32 bg-transparent relative overflow-hidden font-body w-full"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-[550px] h-[550px] rounded-full bg-[#FF8C38]/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full bg-[#6DD5C4]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header section with watermark */}
        <div className="products-header text-center mb-10 sm:mb-16 relative">
          <span className="absolute -top-6 sm:-top-10 left-1/2 -translate-x-1/2 text-[70px] sm:text-[130px] md:text-[180px] font-bold text-[#B8C0FF]/5 select-none pointer-events-none leading-none font-display">
            PRODUCTS
          </span>
          <p className="relative text-xs tracking-[0.35em] uppercase text-[#6DD5C4] font-semibold mb-2 sm:mb-4 font-mono">
            HARSH APEX PRODUCTS
          </p>
          <h2 className="relative text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-5 leading-tight font-display tracking-tight break-words max-w-3xl mx-auto">
            Flagship Software Systems &amp;{' '}
            <span className="bg-gradient-to-r from-[#FF8C38] via-[#6DD5C4] to-[#B8C0FF] bg-clip-text text-transparent">
              Platforms
            </span>
          </h2>
          <p className="relative max-w-2xl mx-auto text-[#E7D8FF]/75 text-sm sm:text-base md:text-lg leading-relaxed font-light px-2">
            Explore our ready-to-deploy, battle-tested software suites designed to eliminate subscription fees and run your entire business effortlessly.
          </p>
        </div>

        {/* 4 Flagship Product Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {flagshipProducts.map((product) => (
            <div key={product.id} className="product-card-wrap w-full">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
