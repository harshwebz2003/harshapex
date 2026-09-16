'use client';

import { useTheme } from './ThemeProvider';
import BlackHoleHeroSection from './ui/BlackHoleHeroSection';

export default function GlobalBackground() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // Original iconic Interstellar accretion disk colors
  const hotColor = '#FFF3DE';
  const midColor = '#FF9838';
  const coolColor = '#8E3A0B';

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 w-full h-full pointer-events-none z-[-1] overflow-hidden select-none transition-colors duration-700 ${
        isLight ? 'bg-[#1A1A1A]' : 'bg-[#0D0B1A]'
      }`}
    >
      <BlackHoleHeroSection
        distance={22}
        elevation={-6}
        orbitSpeed={1.8}
        spinSpeed={0.14}
        roll={-18}
        fov={44}
        diskInner={3}
        diskOuter={15}
        diskThickness={0.26}
        diskDensity={1.0}
        brightness={1.0}
        grain={0.48}
        doppler={0.35}
        hotColor={hotColor}
        midColor={midColor}
        coolColor={coolColor}
        starBrightness={0.4}
        glow={1.0}
        exposure={0.9}
        vignette={0.28}
        steps={240}
        resolution={0.7}
        maxDpr={1.5}
        className={`w-full h-full transition-opacity duration-700 ${
          isLight ? 'opacity-85' : 'opacity-95'
        }`}
      />
      {/* Ambient gradient overlay to seamlessly integrate with page content */}
      <div
        className={`absolute inset-0 pointer-events-none transition-colors duration-700 ${
          isLight
            ? 'bg-gradient-to-b from-[#1A1A1A]/30 via-transparent to-[#1A1A1A]/70'
            : 'bg-gradient-to-b from-[#0D0B1A]/30 via-transparent to-[#0D0B1A]/70'
        }`}
      />
    </div>
  );
}
