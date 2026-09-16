'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/sections/Footer';

interface PolicyLayoutProps {
  title: string;
  subtitle: string;
  badge: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function PolicyLayout({
  title,
  subtitle,
  badge,
  lastUpdated,
  children,
}: PolicyLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0D0B1A] text-white selection:bg-[#6DD5C4]/30 selection:text-white relative overflow-x-hidden font-body">
      {/* Ambient background glow elements */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#6DD5C4]/10 via-[#B8C0FF]/5 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-[#B8C0FF]/5 blur-[160px] pointer-events-none -z-10" />

      {/* Top Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0D0B1A]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full bg-white/[0.04] border border-white/15 p-1.5 flex items-center justify-center group-hover:border-[#6DD5C4]/60 transition-colors shadow-[0_0_15px_rgba(109,213,196,0.15)]">
              <Image
                src="/logo.png"
                alt="Harsh Apex Logo"
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-[0.2em] text-white text-sm sm:text-base group-hover:text-[#6DD5C4] transition-colors">
                HARSH APEX
              </span>
              <span className="text-[9px] font-mono tracking-[0.3em] text-[#6DD5C4] uppercase">
                Digital Solutions
              </span>
            </div>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-[#6DD5C4]/50 text-xs font-mono uppercase tracking-wider text-[#E7D8FF] hover:text-white transition-all shadow-sm"
          >
            <span>←</span>
            <span className="hidden sm:inline">Back to</span> Home
          </Link>
        </div>
      </header>

      {/* Hero Header */}
      <section className="pt-16 pb-12 px-6 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#6DD5C4]/30 bg-[#6DD5C4]/5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6DD5C4] animate-pulse" />
          <span className="text-[10px] sm:text-xs tracking-[0.25em] text-[#6DD5C4] font-mono font-medium uppercase">
            {badge}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-white mb-6">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-[#E7D8FF]/70 max-w-2xl mx-auto leading-relaxed font-light">
          {subtitle}
        </p>

        {/* Meta Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 text-xs text-[#B8C0FF]/60 font-mono">
          <span>Official Legal Document</span>
          <span>&bull;</span>
          <span>Last Updated: {lastUpdated}</span>
          <span>&bull;</span>
          <span>Harsh Apex Digital Solutions</span>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-b from-[#1A1630]/70 to-[#120F26]/80 rounded-3xl p-6 sm:p-10 md:p-12 border border-[#B8C0FF]/15 shadow-2xl backdrop-blur-md">
          {children}
        </div>

        {/* Quick Contact & Assistance Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#6DD5C4]/10 via-[#B8C0FF]/10 to-[#E7D8FF]/5 border border-[#6DD5C4]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold font-display text-white mb-1">
              Questions Regarding Our Policies?
            </h3>
            <p className="text-xs sm:text-sm text-[#E7D8FF]/80 font-light">
              Our legal and support desk is available to assist with any clarification or custom agreements.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="mailto:chamilka.ch@gmail.com"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#6DD5C4] to-[#B8C0FF] text-[#0D0B1A] font-bold text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-opacity shadow-lg"
            >
              Email Legal Desk
            </a>
            <a
              href="https://wa.me/94770663154"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full border border-white/20 hover:border-[#6DD5C4]/60 text-white text-xs font-mono uppercase tracking-wider transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
