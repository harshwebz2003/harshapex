'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

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

        // Reorder so that Tilnogz, Serendib, Neat Construction, and 3D Scrolling Tourism are always at the top
        const sorted = [...formatted].sort((a, b) => {
          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();
          
          const isA_Top = titleA.includes('tilnogz') || titleA.includes('serendib') || titleA.includes('neat construction') || titleA.includes('3d scrolling') || titleA.includes('luxeceylon');
          const isB_Top = titleB.includes('tilnogz') || titleB.includes('serendib') || titleB.includes('neat construction') || titleB.includes('3d scrolling') || titleB.includes('luxeceylon');
          
          if (isA_Top && !isB_Top) return -1;
          if (!isA_Top && isB_Top) return 1;
          
          if (isA_Top && isB_Top) {
            const order = ['tilnogz', 'serendib', 'neat construction', '3d scrolling', 'luxeceylon'];
            const idxA = order.findIndex(term => titleA.includes(term));
            const idxB = order.findIndex(term => titleB.includes(term));
            return idxA - idxB;
          }
          
          return 0;
        });

        const finalProjects = sorted.map((p, idx) => ({
          ...p,
          recent: idx < 4
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
    <section id="projects" ref={sectionRef} className="py-20 sm:py-28 md:py-40 bg-transparent font-body w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="projects-header flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-16 opacity-0">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-[#6DD5C4] font-semibold mb-3 sm:mb-4 font-mono">Our Work</p>
            <h2
              className="text-3xl sm:text-5xl md:text-6xl font-bold text-white font-display tracking-tight break-words"
            >
              Featured{' '}
              <span className="bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 font-mono">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
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

        {/* Modern 3-Column Grid */}
        <div ref={scrollRef} className="flex md:grid flex-row md:grid-cols-3 overflow-x-auto md:overflow-visible gap-5 sm:gap-8 snap-x snap-mandatory scrollbar-none pb-4 md:pb-0 w-full">
          {filtered.map((project) => (
            <div
              key={project.title}
              onClick={() => {
                if (project.link && project.link !== '#') {
                  window.open(project.link, '_blank');
                }
              }}
              className="project-card group flex flex-col gap-3 sm:gap-4 cursor-pointer w-[80vw] sm:w-[340px] md:w-full shrink-0 snap-center opacity-0"
            >
              {/* Image Frame */}
              <div className="relative w-full aspect-square overflow-hidden rounded-[20px] sm:rounded-[24px] border border-[#B8C0FF]/15 bg-[#120F26]/60 backdrop-blur-md group-hover:border-[#6DD5C4]/40 transition-all duration-500 shadow-md group-hover:shadow-[0_12px_40px_rgba(109,213,196,0.12)]">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 33vw"
                  quality={80}
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                />
                
                {/* Recent Badge */}
                {project.recent && (
                  <div className="absolute top-3.5 left-3.5 z-10 bg-gradient-to-r from-[#6DD5C4] to-[#B8C0FF] text-[#0D0B1A] text-[9px] font-extrabold px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full shadow-lg border border-[#6DD5C4]/30 tracking-wider font-mono">
                    RECENT
                  </div>
                )}

                {/* Dark Hover overlay for arrow icon */}
                <div className="absolute inset-0 bg-[#0D0B1A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-white text-sm sm:text-base">→</span>
                  </div>
                </div>
              </div>

              {/* Title & Category Details below the card */}
              <div className="flex flex-col gap-0.5 sm:gap-1 px-1">
                <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#6DD5C4]/80 font-mono font-medium">
                  {project.category}
                </span>
                <h3 
                  className="text-base sm:text-lg font-bold text-white group-hover:text-[#B8C0FF] transition-colors duration-300 font-display"
                >
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
