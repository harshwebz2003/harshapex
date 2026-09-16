'use client';

import { useTheme } from './ThemeProvider';
import BlackHoleHeroSection from './ui/BlackHoleHeroSection';

export default function GlobalBackground() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-[-1] overflow-hidden select-none"
    >
      <BlackHoleHeroSection
        distance={22}
        elevation={-6}
        roll={-18}
        fov={44}
        diskInner={3}
        diskOuter={15}
        diskThickness={0.25}
        brightness={0.95}
        spinSpeed={0.045}
        grain={0.45}
        doppler={0.35}
        hotColor="#FFF3DE"
        midColor="#FF9838"
        coolColor="#8E3A0B"
        starBrightness={0.35}
        glow={1.1}
        exposure={0.92}
        vignette={0.38}
        steps={220}
        resolution={0.7}
        maxDpr={1.5}
        className={`w-full h-full transition-opacity duration-700 ${
          isLight ? 'opacity-25' : 'opacity-85'
        }`}
      />
      {/* Ambient gradient overlay to seamlessly integrate with brand palette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0B1A]/40 via-transparent to-[#0D0B1A]/80 pointer-events-none" />
    </div>
  );
}
