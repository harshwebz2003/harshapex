'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Hiruzone Tourism',
    category: 'Web Design',
    img: '/projects/Hiruzone Tourism.png',
    tags: ['Web', 'Tourism'],
  },
  {
    title: 'Lanka Hardware',
    category: 'E-Commerce',
    img: '/projects/Lanka Hardware.png',
    tags: ['E-Commerce', 'Web'],
  },
  {
    title: 'Five Season Salon',
    category: 'Web Design',
    img: '/projects/Five Season Salon.png',
    tags: ['Web', 'Brand'],
  },
  {
    title: 'MCake Shop',
    category: 'E-Commerce',
    img: '/projects/MCake Shop.png',
    tags: ['E-Commerce', 'Web'],
  },
  {
    title: 'Webcus Platform',
    category: 'Web App',
    img: '/projects/Webcus.png',
    tags: ['Web', 'App'],
  },
  {
    title: 'Clothing Boutique',
    category: 'E-Commerce',
    img: '/projects/Clothing Site.png',
    tags: ['E-Commerce', 'Brand'],
  },
  {
    title: 'E-Commerce Store',
    category: 'E-Commerce',
    img: '/projects/E-Commerce Page.png',
    tags: ['E-Commerce', 'Web'],
  },
  {
    title: 'New Apple Vision',
    category: 'Web Design',
    img: '/projects/New Apple Vision.png',
    tags: ['Web', 'Brand'],
  },
  {
    title: 'Restaurant Site',
    category: 'Web Design',
    img: '/projects/Resturant.png',
    tags: ['Web', 'Brand'],
  },
];

const filters = ['All', 'Web', 'E-Commerce', 'Brand', 'App'];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.project-card') ?? [];
    gsap.fromTo(
      cards,
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.08,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true },
      }
    );
  }, []);

  // Re-animate on filter change
  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.project-card') ?? [];
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, stagger: 0.06, duration: 0.5, ease: 'power3.out' }
    );
  }, [activeFilter]);

  return (
    <section id="projects" ref={sectionRef} className="py-32 md:py-40 bg-[#0D0B1A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-[#B8C0FF] mb-4">Our Work</p>
            <h2
              className="text-4xl md:text-6xl font-bold text-white"
              style={{ fontFamily: 'Clash Display, sans-serif' }}
            >
              Featured{' '}
              <span className="bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeFilter === f
                    ? 'bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF] text-[#0D0B1A] font-semibold'
                    : 'border border-[#B8C0FF]/20 text-[#E7D8FF]/50 hover:border-[#B8C0FF]/50 hover:text-[#E7D8FF]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className="project-card break-inside-avoid group relative overflow-hidden rounded-3xl border border-[#B8C0FF]/10 hover:border-[#B8C0FF]/30 transition-all duration-500 cursor-pointer"
            >
              <div className={`relative w-full ${i % 3 === 0 ? 'aspect-[4/3]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[3/4]'}`}>
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B1A]/90 via-[#0D0B1A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Info reveal */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
                  <p className="text-xs text-[#B8C0FF] mb-1 tracking-wider uppercase">{project.category}</p>
                  <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Clash Display, sans-serif' }}>
                    {project.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-2 text-[#E7D8FF]/60 text-sm">
                    <span>View project</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
