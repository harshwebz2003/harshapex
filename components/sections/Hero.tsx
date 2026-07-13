'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
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

  // Mouse glow
  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    const onMove = (e: MouseEvent) => {
      gsap.to(glow, {
        x: e.clientX - 200,
        y: e.clientY - 200,
        duration: 0.8,
        ease: 'power2.out',
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // Animated canvas blobs
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const blobs = [
      { x: canvas.width * 0.2, y: canvas.height * 0.3, r: 280, color: 'rgba(184,192,255,0.12)', vx: 0.3, vy: 0.2 },
      { x: canvas.width * 0.7, y: canvas.height * 0.6, r: 220, color: 'rgba(231,216,255,0.10)', vx: -0.2, vy: 0.3 },
      { x: canvas.width * 0.5, y: canvas.height * 0.2, r: 180, color: 'rgba(184,192,255,0.08)', vx: 0.15, vy: -0.25 },
    ];

    let animId: number;
    const animate = () => {
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
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Entrance animations
  useEffect(() => {
    if (!headlineRef.current || !subRef.current || !ctaRef.current) return;

    const words = headlineRef.current.querySelectorAll('.word');

    const tl = gsap.timeline({ delay: 2.8 }); // after loading screen

    tl.fromTo(
      words,
      { yPercent: 110, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1, ease: 'power4.out', stagger: 0.1 }
    )
      .fromTo(
        subRef.current,
        { opacity: 0, y: 20, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      );
  }, []);

  const headline = 'We Craft Digital Experiences That Convert';
  const words = headline.split(' ');

  const scrollDown = () => {
    document.getElementById('trusted')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent"
    >
      {/* Canvas blobs */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Video Background */}
      <video
        key={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="hero-video-bg"
      >
        <source src={`/${videoSrc}`} type="video/mp4" />
      </video>

      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px',
        }}
      />

      {/* Mouse glow */}
      <div
        ref={glowRef}
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(184,192,255,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Gradient mesh top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8C0FF]/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#B8C0FF]/20 bg-[#B8C0FF]/5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B8C0FF] animate-pulse" />
          <span className="text-xs tracking-widest text-[#B8C0FF] uppercase">Premium Digital Agency</span>
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-white mb-8"
          style={{ fontFamily: 'Clash Display, sans-serif' }}
        >
          {words.map((word, i) => (
            <span
              key={i}
              className="word inline-block mr-[0.25em] last:mr-0"
              style={{ overflow: 'hidden', verticalAlign: 'top' }}
            >
              <span
                style={{ display: 'inline-block' }}
                className={
                  word === 'Convert' || word === 'Digital'
                    ? 'bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent'
                    : ''
                }
              >
                {word}
              </span>
            </span>
          ))}
        </h1>

        {/* Sub */}
        <p
          ref={subRef}
          className="max-w-2xl mx-auto text-lg md:text-xl text-[#E7D8FF]/60 leading-relaxed mb-12 opacity-0"
        >
          Harsh Apex Digital Solutions crafts high-performance websites, immersive UI/UX, and
          growth-driven digital strategies for forward-thinking brands.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF] text-[#0D0B1A] font-semibold text-base hover:shadow-[0_0_50px_rgba(184,192,255,0.5)] transition-all duration-300 hover:scale-105"
          >
            Start Your Project →
          </button>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full border border-[#B8C0FF]/30 text-[#E7D8FF] text-base hover:border-[#B8C0FF] hover:bg-[#B8C0FF]/10 transition-all duration-300"
          >
            View Our Work
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-20 flex flex-wrap justify-center gap-12 md:gap-20">
          {[
            { num: '50+', label: 'Projects Delivered' },
            { num: '98%', label: 'Client Satisfaction' },
            { num: '5+', label: 'Years Experience' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                {stat.num}
              </div>
              <div className="text-sm text-[#E7D8FF]/40 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#E7D8FF]/40 hover:text-[#E7D8FF]/70 transition-colors group"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#B8C0FF]/50 to-transparent animate-bounce" />
      </button>
    </section>
  );
}
