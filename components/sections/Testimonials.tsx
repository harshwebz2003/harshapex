'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Tharindu Lakshan',
    company: 'Tilnogz Photography',
    role: 'Founder & Lead Photographer',
    quote: 'I\'m extremely happy with the website created by Harsh Apex Digital Solutions. They understood exactly what I needed and delivered a modern, professional, and well-organized website with great attention to detail. The entire process was smooth, and their creativity, professionalism, and dedication were impressive. The final result exceeded my expectations and gave my online presence a much more professional look.',
    rating: 5,
    highlight: true,
  },
  {
    name: 'NEAT Construction & Hospitality',
    company: 'NEAT Services W.L.L.',
    role: 'Corporate Management',
    quote: 'A fantastic experience working with Harsh Apex! Professional, responsive, and highly skilled throughout the entire project. They understood our requirements perfectly and delivered a modern, user-friendly website that exceeded our expectations. We are very satisfied with the quality of work and highly recommend their services.',
    rating: 5,
    highlight: true,
  },
  {
    name: 'Nipun Sathsara',
    company: 'Sathsara Enterprises',
    role: 'Business Owner',
    quote: 'I had an excellent experience working with Harsh Apex. The website was designed exactly as I wanted—modern, professional, and user-friendly. The attention to detail, creativity, and responsiveness throughout the project were outstanding. Communication was smooth, deadlines were met, and the final result exceeded my expectations.',
    rating: 5,
    highlight: true,
  },
  {
    name: 'Kasun Perera',
    company: 'Hiruzone Tourism',
    role: 'Founder & CEO',
    quote: 'Harsh Apex completely transformed our online presence. The website they built is not just beautiful — it actually brings in clients. Our bookings increased by 40% within the first month.',
    rating: 5,
    highlight: false,
  },
  {
    name: 'Niluka Fernando',
    company: 'Lanka Hardware',
    role: 'Managing Director',
    quote: 'The e-commerce platform they built for us handles thousands of products with ease. The UX is intuitive and our customers love it. Sales have doubled since launch.',
    rating: 5,
    highlight: false,
  },
  {
    name: 'Priya Jayawardena',
    company: 'Five Season Salon',
    role: 'Owner',
    quote: 'Working with Harsh Apex was a pleasure from start to finish. They understood our brand perfectly and delivered a website that truly reflects the luxury of our salon.',
    rating: 5,
    highlight: false,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-[#6DD5C4] text-xs">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonials-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-40 bg-transparent overflow-hidden font-body">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="testimonials-header text-center opacity-0">
          <p className="text-xs tracking-[0.35em] uppercase text-[#6DD5C4] font-semibold mb-4 font-mono">Client Endorsements</p>
          <h2
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-display tracking-tight"
          >
            What Our{' '}
            <span className="bg-gradient-to-r from-[#6DD5C4] via-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="max-w-lg mx-auto text-[#E7D8FF]/60 text-lg font-light leading-relaxed">
            Authentic feedback from business leaders and founders who partnered with Harsh Apex.
          </p>
        </div>
      </div>

      {/* Slider */}
      <div className="relative group">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-36 bg-gradient-to-r from-[#0D0B1A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-36 bg-gradient-to-l from-[#0D0B1A] to-transparent z-10 pointer-events-none" />

        {/* Row 1 — left (Highlighted top reviews) */}
        <div className="flex gap-6 overflow-hidden mb-6">
          <div className="flex gap-6 shrink-0 animate-marquee">
            {testimonials.slice(0, 3).concat(testimonials.slice(0, 3)).map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
          <div className="flex gap-6 shrink-0 animate-marquee" aria-hidden>
            {testimonials.slice(0, 3).concat(testimonials.slice(0, 3)).map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Row 2 — right */}
        <div className="flex gap-6 overflow-hidden">
          <div className="flex gap-6 shrink-0 animate-marquee-reverse">
            {testimonials.slice(3).concat(testimonials.slice(3)).map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
          <div className="flex gap-6 shrink-0 animate-marquee-reverse" aria-hidden>
            {testimonials.slice(3).concat(testimonials.slice(3)).map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className={`w-[340px] sm:w-[420px] md:w-[460px] shrink-0 p-8 rounded-3xl border transition-all duration-500 group/card shadow-xl flex flex-col justify-between ${
      testimonial.highlight
        ? 'border-[#6DD5C4]/35 bg-gradient-to-br from-[#1A1630]/85 to-[#0D0B1A]/95 shadow-[0_10px_40px_rgba(109,213,196,0.08)] hover:border-[#6DD5C4]/60'
        : 'border-[#B8C0FF]/15 bg-gradient-to-br from-[#1A1630]/70 to-[#0D0B1A]/90 hover:border-[#B8C0FF]/30'
    }`}>
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <StarRating count={testimonial.rating} />
          {testimonial.highlight && (
            <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-0.5 rounded-full bg-[#6DD5C4]/10 text-[#6DD5C4] border border-[#6DD5C4]/25">
              Verified Review
            </span>
          )}
        </div>
        <p className="text-sm md:text-[15px] text-[#E7D8FF]/80 leading-relaxed font-light italic font-editorial">&ldquo;{testimonial.quote}&rdquo;</p>
      </div>

      <div className="flex items-center gap-3.5 pt-6 mt-4 border-t border-white/5">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#6DD5C4] to-[#B8C0FF] flex items-center justify-center text-[#0D0B1A] font-bold text-sm font-display shadow-md shrink-0">
          {testimonial.name[0]}
        </div>
        <div className="overflow-hidden">
          <div className="text-white text-sm font-semibold font-display truncate">{testimonial.name}</div>
          <div className="text-[#6DD5C4]/80 text-xs font-mono truncate">{testimonial.role}, {testimonial.company}</div>
        </div>
      </div>
    </div>
  );
}
