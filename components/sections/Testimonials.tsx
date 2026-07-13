'use client';

const testimonials = [
  {
    name: 'Kasun Perera',
    company: 'Hiruzone Tourism',
    role: 'Founder & CEO',
    quote: 'Harsh Apex completely transformed our online presence. The website they built is not just beautiful — it actually brings in clients. Our bookings increased by 40% within the first month.',
    rating: 5,
  },
  {
    name: 'Niluka Fernando',
    company: 'Lanka Hardware',
    role: 'Managing Director',
    quote: 'The e-commerce platform they built for us handles thousands of products with ease. The UX is intuitive and our customers love it. Sales have doubled since launch.',
    rating: 5,
  },
  {
    name: 'Priya Jayawardena',
    company: 'Five Season Salon',
    role: 'Owner',
    quote: 'Working with Harsh Apex was a pleasure from start to finish. They understood our brand perfectly and delivered a website that truly reflects the luxury of our salon.',
    rating: 5,
  },
  {
    name: 'Amara Silva',
    company: 'MCake Shop',
    role: 'Founder',
    quote: 'Incredible attention to detail. Our website looks stunning on every device and the online ordering system is flawless. We\'ve seen a massive uptick in pre-orders.',
    rating: 5,
  },
  {
    name: 'Roshan Bandara',
    company: 'Webcus',
    role: 'CTO',
    quote: 'The technical quality of their work is exceptional. Clean code, fast load times, and they genuinely care about performance. Our Core Web Vitals scores are through the roof.',
    rating: 5,
  },
  {
    name: 'Sameera Wickrama',
    company: 'Premium Clothing',
    role: 'Director',
    quote: 'We\'ve worked with multiple agencies before, but Harsh Apex is on a different level. They delivered on every promise and the final product exceeded all our expectations.',
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-[#B8C0FF] text-sm">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-32 md:py-40 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-[#B8C0FF] mb-4">Client Stories</p>
          <h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: 'Clash Display, sans-serif' }}
          >
            What Our{' '}
            <span className="bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF] bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
        </div>
      </div>

      {/* Slider */}
      <div className="relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0D0B1A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0D0B1A] to-transparent z-10 pointer-events-none" />

        {/* Row 1 — left */}
        <div className="flex gap-5 overflow-hidden mb-5">
          <div className="flex gap-5 shrink-0 animate-marquee">
            {testimonials.slice(0, 3).concat(testimonials.slice(0, 3)).map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
          <div className="flex gap-5 shrink-0 animate-marquee" aria-hidden>
            {testimonials.slice(0, 3).concat(testimonials.slice(0, 3)).map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Row 2 — right */}
        <div className="flex gap-5 overflow-hidden">
          <div className="flex gap-5 shrink-0 animate-marquee-reverse">
            {testimonials.slice(3).concat(testimonials.slice(3)).map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
          <div className="flex gap-5 shrink-0 animate-marquee-reverse" aria-hidden>
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
    <div className="w-80 md:w-96 shrink-0 p-7 rounded-3xl border border-[#B8C0FF]/10 bg-gradient-to-br from-[#1A1630]/60 to-[#0D0B1A]/90 backdrop-blur-sm hover:border-[#B8C0FF]/30 transition-all duration-300 group">
      <StarRating count={testimonial.rating} />
      <p className="text-sm text-[#E7D8FF]/60 leading-relaxed mt-4 mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#B8C0FF] to-[#E7D8FF] flex items-center justify-center text-[#0D0B1A] font-bold text-sm">
          {testimonial.name[0]}
        </div>
        <div>
          <div className="text-white text-sm font-semibold">{testimonial.name}</div>
          <div className="text-[#B8C0FF]/50 text-xs">{testimonial.role}, {testimonial.company}</div>
        </div>
      </div>
    </div>
  );
}
