'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import { ImageAutoSlider } from '@/components/ui/image-auto-slider';

gsap.registerPlugin(ScrollTrigger);

const firebaseConfig = {
  apiKey: "AIzaSyDc_iMG5ydjPhRlszWtSHK01YLC_B3skI4",
  authDomain: "harshapex-7e3f7.firebaseapp.com",
  databaseURL: "https://harshapex-7e3f7-default-rtdb.firebaseio.com",
  projectId: "harshapex-7e3f7",
  storageBucket: "harshapex-7e3f7.firebasestorage.app",
  messagingSenderId: "977211625717",
  appId: "1:977211625717:web:15dc38acd6ae563a3ef5bc",
  measurementId: "G-PXVM3SSESQ"
};

// Safe Firebase initialization
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getDatabase(app);

const initialProjects = [
  {
    title: 'Apex Moon Chocolates & Treats',
    category: 'An E-Commerce Website',
    img: '/projects/Apex Moon E-Commerce.png',
    tags: ['E-Commerce', 'Web', 'Brand'],
    link: 'https://e-commerce-one-rho-34.vercel.app/',
    recent: true
  },
  {
    title: 'Tilnogz Photography',
    category: 'Photography Website',
    img: '/projects/Tilnogz Photography.png',
    tags: ['Web', 'Photography', 'Brand'],
    link: 'https://www.tilnogzphotography.com.lk/',
    recent: true
  },
  {
    title: 'Serendib Tourism Webpage',
    category: 'Tourism Webpage',
    img: '/projects/Serendib.png',
    tags: ['Web', 'Tourism'],
    link: 'https://harshwebz2003.github.io/tourism-webpage/#hero',
    recent: true
  },
  {
    title: 'Neat Construction',
    category: 'Industrial Construction',
    img: '/projects/Neat Construction.png',
    tags: ['Web', 'Corporate'],
    link: 'https://www.neat-construction.com/',
    recent: true
  },
  {
    title: '3D Scrolling Tourism Webpage',
    category: 'Luxury Tourism',
    img: '/projects/LuxeCeylon.jpg',
    tags: ['Web', 'Tourism'],
    link: 'https://raveenn10-bit.github.io/Modern-Tourism-/',
    recent: true
  },
  {
    title: 'Hiruzone Tourism',
    category: 'Web Design',
    img: '/projects/Hiruzone Tourism.png',
    tags: ['Web', 'Tourism'],
    link: 'https://hiruzone.netlify.app'
  },
  {
    title: 'Lanka Hardware',
    category: 'E-Commerce',
    img: '/projects/Lanka Hardware.png',
    tags: ['E-Commerce', 'Web'],
    link: 'https://lankahardware.netlify.app'
  },
  {
    title: 'Five Season Salon',
    category: 'Web Design',
    img: '/projects/Five Season Salon.png',
    tags: ['Web', 'Brand'],
    link: 'https://fiveseasonsalon.netlify.app'
  },
  {
    title: 'MCake Shop',
    category: 'E-Commerce',
    img: '/projects/MCake Shop.png',
    tags: ['E-Commerce', 'Web'],
    link: 'https://mcakeshop.netlify.app'
  },
  {
    title: 'Webcus Platform',
    category: 'Web App',
    img: '/projects/Webcus.png',
    tags: ['Web', 'App'],
    link: 'https://tourism-webpage.netlify.app'
  },
  {
    title: 'Clothing Boutique',
    category: 'E-Commerce',
    img: '/projects/Clothing Site.png',
    tags: ['E-Commerce', 'Brand'],
    link: 'https://driftware.netlify.app'
  },
  {
    title: 'E-Commerce Store',
    category: 'E-Commerce',
    img: '/projects/E-Commerce Page.png',
    tags: ['E-Commerce', 'Web'],
    link: 'https://driftware.netlify.app'
  },
  {
    title: 'New Apple Vision',
    category: 'Web Design',
    img: '/projects/New Apple Vision.png',
    tags: ['Web', 'Brand'],
    link: 'https://newapplevision.netlify.app'
  },
  {
    title: 'Restaurant Site',
    category: 'Web Design',
    img: '/projects/Resturant.png',
    tags: ['Web', 'Brand'],
    link: 'https://restaurant.netlify.app'
  },
];

const filters = ['All', 'Web', 'Photography', 'E-Commerce', 'Brand', 'App'];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('slider');
  const [projectList, setProjectList] = useState<any[]>(initialProjects);

  // Left to right auto-scroll on mobile view
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let isInteracting = false;
    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    const autoScrollNext = () => {
      if (window.innerWidth >= 768 || isInteracting) return;
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (maxScroll <= 10) return;

      const cards = Array.from(container.children).filter((el) =>
        el.classList.contains('project-card')
      ) as HTMLElement[];
      if (cards.length === 0) return;

      const containerLeft = container.getBoundingClientRect().left;
      let currentIndex = 0;
      let minDiff = Infinity;

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
        const targetLeft =
          container.scrollLeft +
          nextCard.getBoundingClientRect().left -
          container.getBoundingClientRect().left;
        container.scrollTo({
          left: targetLeft,
          behavior: 'smooth',
        });
      }
    };

    intervalId = setInterval(autoScrollNext, 3500);

    const onTouchStart = () => {
      isInteracting = true;
      clearTimeout(timeoutId);
    };

    const onTouchEnd = () => {
      timeoutId = setTimeout(() => {
        isInteracting = false;
      }, 2500);
    };

    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchend', onTouchEnd);
    };
  }, [activeFilter, projectList]);

  // Load projects dynamically from Firebase Realtime Database
  useEffect(() => {
    const projectsRef = ref(db, 'projects');
    const unsubscribe = onValue(projectsRef, (snapshot) => {
      if (snapshot.exists()) {
        const rawList = snapshot.val();
        const formatted = Object.values(rawList).map((p: any, idx: number) => {
          let tagsArr: string[] = [];
          if (Array.isArray(p.tags)) {
            tagsArr = p.tags;
          } else if (typeof p.tags === 'string') {
            tagsArr = p.tags.split(',').map((t: string) => t.trim());
          }

          let imgPath = p.img || '';
          if (imgPath.startsWith('Assests/')) {
            imgPath = imgPath.replace('Assests/', '/projects/');
          } else if (!imgPath.startsWith('/') && !imgPath.startsWith('http')) {
            imgPath = '/projects/' + imgPath;
          }

          // Map category/filter tags based on project details
          if (tagsArr.length === 0) {
            tagsArr = ['Web'];
          }

          return {
            title: p.title || '',
            category: p.category || '',
            img: imgPath,
            tags: tagsArr,
            link: p.link || '#',
            recent: false
          };
        });

        // Merge Firebase projects with initial local projects so newly added items are never lost
        const combined: any[] = [...formatted];
        initialProjects.forEach((initP) => {
          if (!combined.some((p) => p.link === initP.link || p.title.toLowerCase() === initP.title.toLowerCase())) {
            combined.unshift({ ...initP, recent: !!initP.recent });
          }
        });

        // Reorder so that Apex Moon, Tilnogz, Serendib, Neat Construction, and 3D Scrolling Tourism are always at the top
        const sorted = [...combined].sort((a, b) => {
          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();
          
          const order = ['apex moon', 'tilnogz', 'serendib', 'neat construction', '3d scrolling', 'luxeceylon'];
          const idxA = order.findIndex(term => titleA.includes(term));
          const idxB = order.findIndex(term => titleB.includes(term));

          const isA_Top = idxA !== -1;
          const isB_Top = idxB !== -1;
          
          if (isA_Top && !isB_Top) return -1;
          if (!isA_Top && isB_Top) return 1;
          
          if (isA_Top && isB_Top) {
            return idxA - idxB;
          }
          
          return 0;
        });

        const finalProjects = sorted.map((p, idx) => ({
          ...p,
          recent: idx < 5
        }));

        setProjectList(finalProjects);
      }
    });

    return () => unsubscribe();
  }, []);

  // Recalculate GSAP ScrollTrigger markers to prevent layout shift glitches
  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, [projectList]);

  const filtered =
    activeFilter === 'All'
      ? projectList
      : projectList.filter((p) => p.tags.includes(activeFilter));

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
  }, [projectList]); // Re-run intro animations when dynamic list loads

  // Initial scroll trigger animation
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.projects-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
        }
      );

      gsap.fromTo(
        '.project-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.9,
          ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [projectList]);

  // Re-animate on filter change
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const cards = sectionRef.current?.querySelectorAll('.project-card') ?? [];
    gsap.fromTo(
      cards,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, stagger: 0.05, duration: 0.6, ease: 'expo.out' }
    );
  }, [activeFilter]);

  return (
    <section id="projects" ref={sectionRef} className="py-12 sm:py-20 md:py-32 bg-transparent font-body w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="projects-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-[#6DD5C4] font-semibold mb-2 sm:mb-3 font-mono">Our Work</p>
            <h2
              className="text-3xl sm:text-5xl md:text-6xl font-bold text-white font-display tracking-tight break-words"
            >
              Featured{' '}
              <span className="bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
          </div>

          {/* Controls: Filter tabs & View mode toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            {/* View Mode Switcher */}
            <div className="flex items-center self-start sm:self-auto p-1 rounded-full bg-[#120F26]/80 border border-[#B8C0FF]/20 backdrop-blur-md">
              <button
                onClick={() => setViewMode('slider')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'slider'
                    ? 'bg-gradient-to-r from-[#6DD5C4] to-[#B8C0FF] text-[#0D0B1A] font-bold shadow-[0_0_15px_rgba(109,213,196,0.3)]'
                    : 'text-[#E7D8FF]/60 hover:text-white'
                }`}
                title="Continuous Infinite Auto-Slider View"
              >
                <span>⟷</span>
                <span>Auto Slider</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-gradient-to-r from-[#6DD5C4] to-[#B8C0FF] text-[#0D0B1A] font-bold shadow-[0_0_15px_rgba(109,213,196,0.3)]'
                    : 'text-[#E7D8FF]/60 hover:text-white'
                }`}
                title="Structured Grid View"
              >
                <span>⊞</span>
                <span>Grid</span>
              </button>
            </div>

            {/* Filter tabs */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 font-mono">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    activeFilter === f
                      ? 'bg-gradient-to-r from-[#6DD5C4] to-[#B8C0FF] text-[#0D0B1A] font-semibold shadow-[0_0_20px_rgba(109,213,196,0.3)]'
                      : 'border border-[#B8C0FF]/20 text-[#E7D8FF]/60 hover:border-[#6DD5C4]/40 hover:text-white'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Informative Sub-bar */}
        <div className="flex items-center justify-between text-xs text-[#B8C0FF]/60 font-mono mb-6 px-1">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#6DD5C4] animate-pulse"></span>
            <span>
              {viewMode === 'slider'
                ? 'Infinite showcase • Hover card to pause • Click to visit live site ↗'
                : 'Interactive grid view • Click any card to visit live site ↗'}
            </span>
          </div>
          <span className="hidden sm:inline text-[#E7D8FF]/50">{filtered.length} Projects Showcase</span>
        </div>

        {/* View Mode: Auto Slider */}
        {viewMode === 'slider' ? (
          <div className="w-full flex flex-col gap-6 -mx-4 sm:mx-0 overflow-hidden">
            {activeFilter === 'All' ? (
              <>
                {/* Track 1: Forward Infinite Stream */}
                <ImageAutoSlider
                  items={filtered.slice(0, Math.ceil(filtered.length / 2))}
                  reverse={false}
                  speedSeconds={38}
                  pauseOnHover={true}
                />
                {/* Track 2: Reverse Infinite Stream */}
                <ImageAutoSlider
                  items={filtered.slice(Math.ceil(filtered.length / 2))}
                  reverse={true}
                  speedSeconds={44}
                  pauseOnHover={true}
                />
              </>
            ) : (
              /* Single focused infinite stream for selected category */
              <ImageAutoSlider
                items={filtered}
                reverse={false}
                speedSeconds={Math.max(26, filtered.length * 8)}
                pauseOnHover={true}
              />
            )}
          </div>
        ) : (
          /* View Mode: Modern 3-Column Responsive Grid */
          <div ref={scrollRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full">
            {filtered.map((project) => (
              <div
                key={project.title}
                onClick={() => {
                  if (project.link && project.link !== '#') {
                    window.open(project.link, '_blank', 'noopener,noreferrer');
                  }
                }}
                className="project-card group relative flex flex-col gap-3.5 p-4 rounded-3xl bg-gradient-to-br from-[#1A1630]/70 via-[#120F26]/60 to-[#0D0B1A]/80 border border-[#B8C0FF]/15 hover:border-[#6DD5C4]/50 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-[0_16px_40px_rgba(109,213,196,0.15)] hover:-translate-y-1.5"
              >
                {/* Image Frame */}
                <div className="relative w-full aspect-[16/11] overflow-hidden rounded-2xl border border-white/5 bg-black/40">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={85}
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Recent Badge */}
                  {project.recent && (
                    <div className="absolute top-3.5 left-3.5 z-10 bg-gradient-to-r from-[#6DD5C4] to-[#B8C0FF] text-[#0D0B1A] text-[9px] sm:text-[10px] font-extrabold px-3 py-1 rounded-full shadow-lg border border-[#6DD5C4]/40 tracking-wider font-mono">
                      RECENT
                    </div>
                  )}

                  {/* Hover overlay with CTA */}
                  <div className="absolute inset-0 bg-[#0D0B1A]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs font-medium font-mono transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 shadow-2xl">
                      <span>Explore Live Site</span>
                      <span className="text-sm">↗</span>
                    </div>
                  </div>
                </div>

                {/* Title & Category Details below the card */}
                <div className="flex flex-col gap-1 px-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#6DD5C4] font-mono font-medium truncate">
                      {project.category}
                    </span>
                    <span className="text-xs text-[#B8C0FF]/50 group-hover:text-[#6DD5C4] group-hover:translate-x-0.5 transition-all duration-300 font-mono">
                      ↗
                    </span>
                  </div>
                  <h3
                    className="text-base sm:text-lg font-bold text-white group-hover:text-[#B8C0FF] transition-colors duration-300 font-display truncate"
                  >
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
