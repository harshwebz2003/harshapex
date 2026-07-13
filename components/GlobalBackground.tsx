'use client';

import { useEffect, useRef } from 'react';

export default function GlobalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    // Particle class for background stars
    class Star {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      alpha: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.2 + 0.3;
        this.speedX = Math.random() * 0.05 - 0.025;
        this.speedY = Math.random() * 0.05 - 0.025;
        this.alpha = Math.random() * 0.4 + 0.1;
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
        ctx.fillStyle = `rgba(184, 192, 255, ${this.alpha})`;
        ctx.fill();
      }
    }

    const stars: Star[] = [];
    const starCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 20000));

    for (let i = 0; i < starCount; i++) {
      stars.push(new Star(canvas.width, canvas.height));
    }

    // Drifting background nebulas / glow blobs
    const nebulas = [
      { x: canvas.width * 0.2, y: canvas.height * 0.3, vx: 0.03, vy: 0.02, r: 350, color: 'rgba(184, 192, 255, 0.03)' },
      { x: canvas.width * 0.8, y: canvas.height * 0.7, vx: -0.02, vy: 0.03, r: 400, color: 'rgba(231, 216, 255, 0.02)' },
      { x: canvas.width * 0.5, y: canvas.height * 0.1, vx: 0.015, vy: -0.02, r: 300, color: 'rgba(184, 192, 255, 0.025)' },
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

      // Draw Stars
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
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[-1] bg-[#0D0B1A]"
    />
  );
}
