'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

export default function GlobalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const isLight = theme === 'light';

    // Particle star/shimmer colors depending on theme
    // Light mode uses Silver Palette: #F0F0F0, #DEDFE1, #B1B2B4, #7A7B7F, #C3C5C4
    const starColors = isLight
      ? [
          '177, 178, 180', // #B1B2B4 (Titanium Silver)
          '122, 123, 127', // #7A7B7F (Deep Silver)
          '195, 197, 196', // #C3C5C4 (Brushed Silver)
          '240, 240, 240', // #F0F0F0 (Bright Silver Highlight)
          '167, 196, 160', // Eucalyptus subtle shimmer
          '184, 192, 255', // Periwinkle subtle shimmer
        ]
      : [
          '184, 192, 255', // #B8C0FF (Dreamy Periwinkle)
          '231, 216, 255', // #E7D8FF (Periwinkle Light)
          '109, 213, 196', // #6DD5C4 (Mint Lagoon)
          '223, 246, 240', // #DFF6F0 (Mint Light)
        ];

    // Particle class for background stars/shimmers
    class Star {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      alpha: number;
      color: string;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = isLight ? Math.random() * 1.5 + 0.4 : Math.random() * 1.3 + 0.3;
        this.speedX = Math.random() * 0.05 - 0.025;
        this.speedY = Math.random() * 0.05 - 0.025;
        this.alpha = isLight ? Math.random() * 0.3 + 0.1 : Math.random() * 0.45 + 0.15;
        this.color = starColors[Math.floor(Math.random() * starColors.length)];
      }

      update(width: number, height: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        ctx.fill();
      }
    }

    const stars: Star[] = [];
    const starCount = Math.min(85, Math.floor((canvas.width * canvas.height) / 18000));

    for (let i = 0; i < starCount; i++) {
      stars.push(new Star(canvas.width, canvas.height));
    }

    // Drifting background nebulas / glow blobs
    // In Light mode: Silver Palette (#F0F0F0, #DEDFE1, #CDCED0, #B1B2B4) with soft luminance
    const nebulas = isLight
      ? [
          { x: canvas.width * 0.15, y: canvas.height * 0.25, vx: 0.03, vy: 0.02, r: 420, color: 'rgba(240, 240, 240, 0.45)' }, // #F0F0F0 Bright Silver
          { x: canvas.width * 0.85, y: canvas.height * 0.7, vx: -0.02, vy: 0.03, r: 460, color: 'rgba(222, 223, 225, 0.4)' },  // #DEDFE1 Platinum
          { x: canvas.width * 0.35, y: canvas.height * 0.85, vx: 0.025, vy: -0.02, r: 400, color: 'rgba(205, 206, 208, 0.35)' }, // #CDCED0 Light Chrome
          { x: canvas.width * 0.65, y: canvas.height * 0.2, vx: -0.02, vy: 0.025, r: 360, color: 'rgba(177, 178, 180, 0.25)' }, // #B1B2B4 Titanium Silver
        ]
      : [
          { x: canvas.width * 0.15, y: canvas.height * 0.25, vx: 0.03, vy: 0.02, r: 380, color: 'rgba(184, 192, 255, 0.035)' }, // Periwinkle
          { x: canvas.width * 0.85, y: canvas.height * 0.7, vx: -0.02, vy: 0.03, r: 420, color: 'rgba(231, 216, 255, 0.025)' }, // Periwinkle light
          { x: canvas.width * 0.35, y: canvas.height * 0.85, vx: 0.025, vy: -0.02, r: 350, color: 'rgba(109, 213, 196, 0.03)' }, // Mint Lagoon
          { x: canvas.width * 0.65, y: canvas.height * 0.2, vx: -0.02, vy: 0.025, r: 320, color: 'rgba(223, 246, 240, 0.02)' }, // Mint Light
        ];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Nebulas
      nebulas.forEach((nebula) => {
        nebula.x += nebula.vx;
        nebula.y += nebula.vy;

        if (nebula.x < -nebula.r || nebula.x > canvas.width + nebula.r) nebula.vx *= -1;
        if (nebula.y < -nebula.r || nebula.y > canvas.height + nebula.r) nebula.vy *= -1;

        const grad = ctx.createRadialGradient(nebula.x, nebula.y, 0, nebula.x, nebula.y, nebula.r);
        grad.addColorStop(0, nebula.color);
        grad.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(nebula.x, nebula.y, nebula.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // Draw Stars/Shimmers
      stars.forEach((star) => {
        star.update(canvas.width, canvas.height);
        star.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full pointer-events-none z-[-1] transition-colors duration-700 ${
        theme === 'light' ? 'bg-[#EDEDED]' : 'bg-[#0D0B1A]'
      }`}
    />
  );
}
