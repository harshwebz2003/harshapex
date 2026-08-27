'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ isLoaded = true }: { isLoaded?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [videoSrc, setVideoSrc] = useState('logo video.mp4');

  // Handle Video Orientation
  useEffect(() => {
    const updateVideoSource = () => {
      const isLandscape = window.matchMedia('(orientation: landscape)').matches;
      setVideoSrc(isLandscape ? 'logo video landscape.mp4' : 'logo video.mp4');
    };
    updateVideoSource();
    const mediaQueryList = window.matchMedia('(orientation: landscape)');
    try {
      mediaQueryList.addEventListener('change', updateVideoSource);
    } catch (e) {
      mediaQueryList.addListener(updateVideoSource);
    }
    return () => {
      try {
        mediaQueryList.removeEventListener('change', updateVideoSource);
      } catch (e) {
        mediaQueryList.removeListener(updateVideoSource);
      }
    };
  }, []);

  // Soft Ambient Glow Follower (only desktop)
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768) return;
    const glow = glowRef.current;
    if (!glow) return;
    const onMove = (e: MouseEvent) => {
      gsap.to(glow, {
        x: e.clientX - 200,
        y: e.clientY - 200,
        duration: 1.2,
        ease: 'power3.out',
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // Fluid Ambient Canvas Blobs (Desktop only to conserve mobile GPU)
  useEffect(() => {
    if (window.innerWidth < 768) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const blobs = [
      { x: canvas.width * 0.2, y: canvas.height * 0.3, r: 280, color: 'rgba(184,192,255,0.10)', vx: 0.2, vy: 0.15 },
      { x: canvas.width * 0.75, y: canvas.height * 0.65, r: 240, color: 'rgba(231,216,255,0.08)', vx: -0.15, vy: 0.2 },
      { x: canvas.width * 0.45, y: canvas.height * 0.75, r: 210, color: 'rgba(109,213,196,0.08)', vx: 0.15, vy: -0.15 },
      { x: canvas.width * 0.8, y: canvas.height * 0.25, r: 180, color: 'rgba(223,246,240,0.06)', vx: -0.1, vy: 0.18 },
    ];

    let animId: number;
    let isVisible = true;
    const handleVis = () => { isVisible = !document.hidden; };
    document.addEventListener('visibilitychange', handleVis);

    const animate = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        blobs.forEach((b) => {
          b.x += b.vx;
          b.y += b.vy;
          if (b.x < -b.r || b.x > canvas.width + b.r) b.vx *= -1;
          if (b.y < -b.r || b.y > canvas.height + b.r) b.vy *= -1;

          const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
          grad.addColorStop(0, b.color);
          grad.addColorStop(1, 'transparent');
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        });
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener('visibilitychange', handleVis);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Luxury Entrance & Scroll Fade-Out Animations
  useEffect(() => {
    if (!isLoaded || !headlineRef.current || !subRef.current || !ctaRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(
        [
          containerRef.current?.querySelector('.hero-badge'),
          headlineRef.current.querySelectorAll('.word-inner'),
          subRef.current,
          ctaRef.current,
          containerRef.current?.querySelectorAll('.hero-stat'),
        ],
        { opacity: 1, y: 0, filter: 'none' }
      );
      return;
    }

    const badge = containerRef.current?.querySelector('.hero-badge');
    const wordInners = headlineRef.current.querySelectorAll('.word-inner');
    const stats = containerRef.current?.querySelectorAll('.hero-stat');

    const tl = gsap.timeline({ delay: 0.1 });

    if (badge) {
      tl.fromTo(
        badge,
        { opacity: 0, y: -12, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.75, ease: 'expo.out' }
      );
    }

    tl.fromTo(
      wordInners,
      { yPercent: 105, opacity: 0, filter: 'blur(8px)' },
      {
        yPercent: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1.0,
        ease: 'expo.out',
        stagger: 0.05,
      },
      '-=0.45'
    )
      .fromTo(
        subRef.current,
        { opacity: 0, y: 22, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.85, ease: 'expo.out' },
        '-=0.6'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.75, ease: 'expo.out' },
        '-=0.55'
      );

    if (stats && stats.length > 0) {
      tl.fromTo(
        stats,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out', stagger: 0.08 },
        '-=0.5'
      );
    }

    // Scroll-Linked Fade-Out on scroll descent
    const ctx = gsap.context(() => {
      gsap.to(
        [headlineRef.current, subRef.current, ctaRef.current, stats, badge],
        {
          opacity: 0,
          y: -40,
          filter: 'blur(6px)',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom 40%',
            scrub: 0.8,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isLoaded]);

  const headline = 'We Craft Digital Experiences That Convert';
  const words = headline.split(' ');

  const scrollDown = () => {
    document.getElementById('trusted')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent w-full"
    >
      {/* Canvas blobs (Desktop only) */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" />

      {/* Video Background */}
      <video
        key={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="hero-video-bg"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Radial overlay for seamless video blending */}
      <div className="hero-radial-overlay absolute inset-0 bg-gradient-to-b from-[#0D0B1A]/80 via-[#0D0B1A]/30 to-[#0D0B1A] pointer-events-none" />

      {/* Interactive mouse follow glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#6DD5C4]/6 via-[#B8C0FF]/8 to-transparent blur-[90px] -z-10 transition-opacity duration-700 hidden md:block"
      />

      {/* Gradient mesh top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8C0FF]/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center pt-28 pb-16 md:pt-0 md:pb-0 w-full">
        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[#6DD5C4]/30 bg-[#6DD5C4]/5 mb-6 sm:mb-8 opacity-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6DD5C4] animate-pulse" />
          <span className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-gradient-dual font-medium uppercase font-mono">
            Premium Digital Agency
          </span>
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] sm:leading-[1.05] tracking-[-0.03em] text-white mb-6 sm:mb-8 font-display break-words"
        >
          {words.map((word, i) => (
            <span
              key={i}
              className="word inline-block mr-[0.22em] last:mr-0 overflow-hidden align-top"
            >
              <span
                className={`word-inner inline-block opacity-0 ${
                  word === 'Convert'
                    ? 'text-gradient-mint'
                    : word === 'Digital'
                    ? 'text-gradient-periwinkle'
                    : ''
                }`}
              >
                {word}
              </span>
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p
          ref={subRef}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#E7D8FF]/70 leading-relaxed mb-8 sm:mb-12 opacity-0 font-body font-light px-2"
        >
          Harsh Apex Digital Solutions crafts high-performance websites, custom POS systems, mobile apps, and tailor-made business software at budget-friendly rates.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 justify-center items-center opacity-0 font-body w-full max-w-md sm:max-w-none mx-auto">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] text-[#0D0B1A] font-semibold text-sm sm:text-base hover:shadow-[0_0_40px_rgba(109,213,196,0.35)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            Start Your Project →
          </button>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full border border-[#B8C0FF]/30 text-[#E7D8FF] text-sm sm:text-base hover:border-[#6DD5C4] hover:text-white hover:bg-[#6DD5C4]/10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            View Our Work
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-12 sm:mt-16 md:mt-20 flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-20">
          {[
            { num: '25+', label: 'Projects Delivered' },
            { num: '3+', label: 'Years Experience' },
            { num: '3+', label: 'Global Countries' },
          ].map((stat) => (
            <div key={stat.label} className="hero-stat text-center opacity-0">
              <div
                className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#6DD5C4] to-[#B8C0FF] bg-clip-text text-transparent font-display tracking-tight"
              >
                {stat.num}
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-[#E7D8FF]/50 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Luxury Scroll Indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 text-[#E7D8FF]/40 hover:text-[#6DD5C4] transition-colors duration-300 group cursor-pointer"
        aria-label="Scroll to content"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-mono">Scroll</span>
        <div className="relative w-[1px] h-9 bg-white/10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#6DD5C4] to-transparent animate-drift" />
        </div>
      </button>
    </section>
  );
}
