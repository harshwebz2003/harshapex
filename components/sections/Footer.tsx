'use client';

import Image from 'next/image';

const links = {
  Services: ['Web Design', 'UI/UX Design', 'Web Development', 'Branding', 'SEO', 'Performance'],
  Company: ['About Us', 'Our Work', 'Process', 'Pricing', 'Blog'],
  Contact: ['chamilka.ch@gmail.com', '+94 77 066 3154', 'Sri Lanka'],
};

const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/harshapex', icon: 'f' },
  { label: 'Instagram', href: 'https://www.instagram.com/c_harshz/', icon: '◯' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/chamilka-harshan', icon: 'in' },
  { label: 'GitHub', href: 'https://github.com/chamilka-ch', icon: 'gh' },
];

export default function Footer() {
  return (
    <footer className="bg-[#080616] border-t border-[#B8C0FF]/10">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Image src="/logo.png" alt="Harsh Apex" width={130} height={48} className="object-contain mb-6" />
            <p className="text-sm text-[#E7D8FF]/40 leading-relaxed mb-8">
              Crafting world-class digital experiences that convert visitors into loyal customers.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-[#B8C0FF]/20 flex items-center justify-center text-xs text-[#B8C0FF]/50 hover:border-[#B8C0FF]/60 hover:text-[#B8C0FF] hover:bg-[#B8C0FF]/10 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section} className={section === 'Contact' ? 'col-span-2 md:col-span-1' : 'col-span-1'}>
              <h4
                className="text-xs tracking-[0.3em] uppercase text-[#B8C0FF] mb-6"
                style={{ fontFamily: 'Clash Display, sans-serif' }}
              >
                {section}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <span className="text-sm text-[#E7D8FF]/40 hover:text-[#E7D8FF]/80 transition-colors cursor-pointer">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-12 border-t border-[#B8C0FF]/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h4
                className="text-lg font-bold text-white mb-1"
                style={{ fontFamily: 'Clash Display, sans-serif' }}
              >
                Stay in the loop
              </h4>
              <p className="text-sm text-[#E7D8FF]/40">Digital insights, case studies, and design inspiration.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 md:w-64 px-5 py-3 rounded-full bg-[#B8C0FF]/5 border border-[#B8C0FF]/15 text-white text-sm outline-none focus:border-[#B8C0FF]/40 placeholder:text-[#E7D8FF]/20 transition-colors"
              />
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#B8C0FF] to-[#E7D8FF] text-[#0D0B1A] text-sm font-semibold hover:shadow-[0_0_20px_rgba(184,192,255,0.3)] transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#B8C0FF]/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#E7D8FF]/30">
          <p>© {new Date().getFullYear()} Harsh Apex Digital Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-[#E7D8FF]/60 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-[#E7D8FF]/60 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
