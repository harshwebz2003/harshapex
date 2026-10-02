'use client';

import React from 'react';

interface TechItem {
  name: string;
  category: string;
  desc: string;
  badge: string;
  color: string;
  icon: React.ReactNode;
}

const verifiedTechStack: TechItem[] = [
  {
    name: 'Next.js 16',
    category: 'Framework & Edge',
    desc: 'App Router, Turbopack, Server Actions & Edge Caching',
    badge: 'v16.0',
    color: '#6DD5C4',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 19.5h20L12 2zm0 3.84L18.49 17.5H5.51L12 5.84z" />
      </svg>
    ),
  },
  {
    name: 'React 19',
    category: 'UI Architecture',
    desc: 'Concurrent React Engine, Server Components & Fluid UI',
    badge: 'v19.0',
    color: '#B8C0FF',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    category: 'Type Safety',
    desc: 'Strict type contracts, zero-runtime overhead, enterprise scalability',
    badge: 'v5.5+',
    color: '#6DD5C4',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <path d="M8 8h8M12 8v8M16 12h2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    category: 'Design System',
    desc: 'Zero-runtime utility engine, dark/light optical variables',
    badge: 'v4.0',
    color: '#E7D8FF',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 12c1.5-2 3.5-3 6-3 3.5 0 5 2 7 2 1.5 0 2.5-.5 3-1-1 2-2.5 3-5 3-3.5 0-5-2-7-2-1.5 0-3 .5-4 1z" />
        <path d="M2 17c1.5-2 3.5-3 6-3 3.5 0 5 2 7 2 1.5 0 2.5-.5 3-1-1 2-2.5 3-5 3-3.5 0-5-2-7-2-1.5 0-3 .5-4 1z" />
      </svg>
    ),
  },
  {
    name: 'Supabase',
    category: 'Relational Database',
    desc: 'Scalable PostgreSQL, Row-Level Security, Edge Realtime',
    badge: 'Cloud Postgres',
    color: '#6DD5C4',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.5 2L3 13.5h7.5L9.5 22 21 9.5h-8.5L12.5 2z" />
      </svg>
    ),
  },
  {
    name: 'Firebase',
    category: 'Cloud Backend',
    desc: 'NoSQL Firestore, push notifications & identity token flows',
    badge: 'Serverless',
    color: '#FFD3B6',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 19l8-15 4 8-12 7z" />
        <path d="M12 4l8 15-8-4-8 4 8-15z" />
      </svg>
    ),
  },
  {
    name: 'GSAP Motion',
    category: 'Animation Engine',
    desc: 'ScrollTrigger, buttery 60+ FPS GPU-accelerated motion',
    badge: 'GreenSock',
    color: '#6DD5C4',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    category: 'Backend Runtime',
    desc: 'High-throughput async event loops, custom REST/GraphQL APIs',
    badge: 'LTS',
    color: '#B8C0FF',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'WebGL Raymarching',
    category: 'Interactive 3D & Shaders',
    desc: 'Custom GLSL mathematical fragment shaders & 3D canvas',
    badge: 'GLSL / 3D',
    color: '#E7D8FF',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <line x1="3" y1="12" x2="21" y2="12" />
      </svg>
    ),
  },
];

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="py-16 sm:py-24 md:py-32 bg-transparent relative overflow-hidden font-body w-full border-t border-[#B8C0FF]/10 scroll-mt-20"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] rounded-full bg-[#6DD5C4]/4 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mb-12 sm:mb-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#6DD5C4]/30 bg-[#6DD5C4]/10 text-[#6DD5C4] text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6DD5C4] animate-pulse" />
            BUILT WITH MODERN TECHNOLOGY
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight font-display tracking-tight break-words">
            Engineered With{' '}
            <span className="bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">
              Industry-Standard Stacks
            </span>
          </h2>
          <p className="text-[#E7D8FF]/70 text-base sm:text-lg leading-relaxed font-light">
            We architect every digital product on battle-tested, high-throughput technologies built for instant load speeds, 
            zero lock-in, and lifelong stability.
          </p>
        </div>
      </div>

      {/* Marquee Track 1 (Leftward Flow) */}
      <div className="relative w-full overflow-hidden mb-6">
        {/* Edge Gradient Masks for subtle fading */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#0D0B1A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#0D0B1A] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 sm:gap-6 overflow-hidden">
          <div className="flex gap-4 sm:gap-6 shrink-0 animate-marquee hover:[animation-play-state:paused]">
            {verifiedTechStack.map((tech) => (
              <div
                key={`track1-a-${tech.name}`}
                className="group flex items-center gap-4 px-5 py-3.5 sm:px-6 sm:py-4 rounded-2xl sm:rounded-3xl border border-[#B8C0FF]/15 bg-gradient-to-r from-[#1A1630]/80 via-[#120F26]/85 to-[#0D0B1A]/90 hover:border-[#6DD5C4]/50 backdrop-blur-md shadow-lg hover:shadow-[0_8px_30px_rgba(109,213,196,0.15)] transition-all duration-300 hover:scale-[1.03]"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-[#6DD5C4] bg-[#6DD5C4]/10 border border-[#6DD5C4]/25 group-hover:scale-110 transition-transform duration-300 shrink-0"
                  style={{ color: tech.color }}
                >
                  {tech.icon}
                </div>
                <div className="text-left whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-base font-bold text-white font-display group-hover:text-[#6DD5C4] transition-colors">
                      {tech.name}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#E7D8FF]/70">
                      {tech.badge}
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#E7D8FF]/55 font-light max-w-[210px] truncate">
                    {tech.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless continuous marquee loop */}
          <div
            className="flex gap-4 sm:gap-6 shrink-0 animate-marquee hover:[animation-play-state:paused]"
            aria-hidden="true"
          >
            {verifiedTechStack.map((tech) => (
              <div
                key={`track1-b-${tech.name}`}
                className="group flex items-center gap-4 px-5 py-3.5 sm:px-6 sm:py-4 rounded-2xl sm:rounded-3xl border border-[#B8C0FF]/15 bg-gradient-to-r from-[#1A1630]/80 via-[#120F26]/85 to-[#0D0B1A]/90 hover:border-[#6DD5C4]/50 backdrop-blur-md shadow-lg hover:shadow-[0_8px_30px_rgba(109,213,196,0.15)] transition-all duration-300 hover:scale-[1.03]"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-[#6DD5C4] bg-[#6DD5C4]/10 border border-[#6DD5C4]/25 group-hover:scale-110 transition-transform duration-300 shrink-0"
                  style={{ color: tech.color }}
                >
                  {tech.icon}
                </div>
                <div className="text-left whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-base font-bold text-white font-display group-hover:text-[#6DD5C4] transition-colors">
                      {tech.name}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#E7D8FF]/70">
                      {tech.badge}
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#E7D8FF]/55 font-light max-w-[210px] truncate">
                    {tech.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Track 2 (Rightward Reverse Flow for Visual Grandeur) */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#0D0B1A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#0D0B1A] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 sm:gap-6 overflow-hidden">
          <div className="flex gap-4 sm:gap-6 shrink-0 animate-marquee-reverse hover:[animation-play-state:paused]">
            {[...verifiedTechStack].reverse().map((tech) => (
              <div
                key={`track2-a-${tech.name}`}
                className="group flex items-center gap-3.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl border border-[#B8C0FF]/15 bg-[#1A1630]/60 hover:border-[#B8C0FF]/40 backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="w-2 h-2 rounded-full bg-[#6DD5C4] animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold text-white/90 font-mono">
                  {tech.name}
                </span>
                <span className="text-[10px] text-[#E7D8FF]/50 uppercase tracking-wider font-mono">
                  / {tech.category}
                </span>
              </div>
            ))}
          </div>

          {/* Duplicate set for reverse continuous loop */}
          <div
            className="flex gap-4 sm:gap-6 shrink-0 animate-marquee-reverse hover:[animation-play-state:paused]"
            aria-hidden="true"
          >
            {[...verifiedTechStack].reverse().map((tech) => (
              <div
                key={`track2-b-${tech.name}`}
                className="group flex items-center gap-3.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl border border-[#B8C0FF]/15 bg-[#1A1630]/60 hover:border-[#B8C0FF]/40 backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="w-2 h-2 rounded-full bg-[#6DD5C4] animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold text-white/90 font-mono">
                  {tech.name}
                </span>
                <span className="text-[10px] text-[#E7D8FF]/50 uppercase tracking-wider font-mono">
                  / {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
