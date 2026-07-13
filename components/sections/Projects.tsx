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

const filters = ['All', 'Web', 'E-Commerce', 'Brand', 'App'];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [projectList, setProjectList] = useState<any[]>(initialProjects);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let intervalId: NodeJS.Timeout;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (maxScroll <= 0) return; // Only scroll if content overflows (e.g. mobile list)

        const cards = Array.from(container.children) as HTMLElement[];
        if (cards.length === 0) return;

        let currentIndex = 0;
        let minDiff = Infinity;
        const containerLeft = container.getBoundingClientRect().left;

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
          const targetLeft = container.scrollLeft + nextCard.getBoundingClientRect().left - container.getBoundingClientRect().left;
          container.scrollTo({
            left: targetLeft,
            behavior: 'smooth'
          });
        }
      }, 3500);
    };

    startAutoScroll();

    const pause = () => clearInterval(intervalId);
    const resume = () => {
      clearInterval(intervalId);
      startAutoScroll();
    };

    container.addEventListener('touchstart', pause);
    container.addEventListener('touchend', resume);

    return () => {
      clearInterval(intervalId);
      container.removeEventListener('touchstart', pause);
      container.removeEventListener('touchend', resume);
    };
  }, []);

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

        // Reorder so that Serendib, Neat Construction, and 3D Scrolling Tourism are always at the top
        const sorted = [...formatted].sort((a, b) => {
          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();
          
          const isA_Top = titleA.includes('serendib') || titleA.includes('neat construction') || titleA.includes('3d scrolling') || titleA.includes('luxeceylon');
          const isB_Top = titleB.includes('serendib') || titleB.includes('neat construction') || titleB.includes('3d scrolling') || titleB.includes('luxeceylon');
          
          if (isA_Top && !isB_Top) return -1;
          if (!isA_Top && isB_Top) return 1;
          
          if (isA_Top && isB_Top) {
            const order = ['serendib', 'neat construction', '3d scrolling', 'luxeceylon'];
            const idxA = order.findIndex(term => titleA.includes(term));
            const idxB = order.findIndex(term => titleB.includes(term));
            return idxA - idxB;
          }
          
          return 0;
        });

        const finalProjects = sorted.map((p, idx) => ({
          ...p,
          recent: idx < 3
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
    <section id="projects" ref={sectionRef} className="py-32 md:py-40 bg-transparent">
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

        {/* Modern 3-Column Grid */}
        <div ref={scrollRef} className="flex md:grid flex-row md:grid-cols-3 overflow-x-auto md:overflow-visible gap-8 snap-x snap-mandatory scrollbar-none pb-6 md:pb-0 w-full">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              onClick={() => {
                if (project.link && project.link !== '#') {
                  window.open(project.link, '_blank');
                }
              }}
              className="project-card group flex flex-col gap-4 cursor-pointer w-[85vw] md:w-full shrink-0 snap-center"
            >
              {/* Image Frame */}
              <div className="relative w-full aspect-square overflow-hidden rounded-[24px] border border-[#B8C0FF]/10 bg-[#120F26]/60 backdrop-blur-md group-hover:border-[#B8C0FF]/30 transition-all duration-500 shadow-md">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Recent Badge */}
                {project.recent && (
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF] text-[#0D0B1A] text-[9px] font-extrabold px-3.5 py-1.5 rounded-full shadow-lg border border-[#B8C0FF]/30 tracking-wider">
                    RECENT
                  </div>
                )}

                {/* Dark Hover overlay for arrow icon */}
                <div className="absolute inset-0 bg-[#0D0B1A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-white text-lg">→</span>
                  </div>
                </div>
              </div>

              {/* Title & Category Details below the card */}
              <div className="flex flex-col gap-1.5 px-2">
                <span className="text-[10px] tracking-[0.15em] uppercase text-[#B8C0FF]/50 font-mono font-bold">
                  {project.category}
                </span>
                <h3 
                  className="text-lg font-bold text-white group-hover:text-[#B8C0FF] transition-colors duration-300"
                  style={{ fontFamily: 'Clash Display, sans-serif' }}
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
