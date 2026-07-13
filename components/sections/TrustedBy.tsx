

const companies = [
  'Hiruzone Tourism', 'Lanka Hardware', 'Five Season Salon', 'MCake Shop',
  'Webcus', 'E-Commerce Co.', 'Clothing Boutique', 'New Apple Vision',
  'Hiruzone Tourism', 'Lanka Hardware', 'Five Season Salon', 'MCake Shop',
];

export default function TrustedBy() {
  return (
    <section id="trusted" className="py-20 bg-transparent border-y border-[#B8C0FF]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <p className="text-center text-xs tracking-[0.4em] uppercase text-[#B8C0FF]/40">
          Trusted by Innovative Companies
        </p>
      </div>

      <div className="relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0D0B1A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0D0B1A] to-transparent z-10 pointer-events-none" />

        {/* Marquee */}
        <div className="flex gap-12 overflow-hidden">
          <div
            className="flex gap-12 shrink-0 animate-marquee"
          >
            {companies.map((name, i) => (
              <div
                key={i}
                className="flex items-center gap-2 shrink-0 px-6 py-3 rounded-full border border-[#B8C0FF]/10 bg-[#B8C0FF]/5"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8C0FF]" />
                <span className="text-sm text-[#E7D8FF]/50 whitespace-nowrap font-medium">{name}</span>
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div
            className="flex gap-12 shrink-0 animate-marquee"
            aria-hidden
          >
            {companies.map((name, i) => (
              <div
                key={i}
                className="flex items-center gap-2 shrink-0 px-6 py-3 rounded-full border border-[#B8C0FF]/10 bg-[#B8C0FF]/5"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8C0FF]" />
                <span className="text-sm text-[#E7D8FF]/50 whitespace-nowrap font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
