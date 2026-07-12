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
  const [activeFilter, setActiveFilter] = useState('All');
  const [projectList, setProjectList] = useState<any[]>(initialProjects);

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
            recent: idx < 3 // Top 3 projects are flagged as RECENT
          };
        });
        setProjectList(formatted);
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
              onClick={() => {
                if (project.link && project.link !== '#') {
                  window.open(project.link, '_blank');
                }
              }}
              className="project-card break-inside-avoid group relative overflow-hidden rounded-3xl border border-[#B8C0FF]/10 hover:border-[#B8C0FF]/30 transition-all duration-500 cursor-pointer"
            >
              <div className={`relative w-full ${i % 3 === 0 ? 'aspect-[4/3]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[3/4]'}`}>
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Recent Badge */}
                {project.recent && (
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF] text-[#0D0B1A] text-[10px] font-bold px-3.5 py-1.5 rounded-full shadow-lg border border-[#B8C0FF]/30 tracking-wider">
                    RECENT
                  </div>
                )}

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
