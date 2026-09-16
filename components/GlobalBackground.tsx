'use client';

import { useTheme } from './ThemeProvider';
import BlackHoleHeroSection from './ui/BlackHoleHeroSection';

export default function GlobalBackground() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // Theme-specific colors:
  // Dark Theme: Mint Lagoon & Dreamy Periwinkle cosmic singularity
  // Light Theme: Midnight Gold & Champagne Radiance singularity
  const hotColor = isLight ? '#FFFFFF' : '#FFF5E4';
  const midColor = isLight ? '#E0C29B' : '#6DD5C4';
  const coolColor = isLight ? '#5E4B43' : '#B8C0FF';

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
        diskThickness={0.25}
        diskDensity={1.1}
        brightness={isLight ? 1.2 : 1.05}
        grain={0.46}
        doppler={0.4}
        hotColor={hotColor}
        midColor={midColor}
        coolColor={coolColor}
        starBrightness={0.45}
        glow={isLight ? 1.35 : 1.2}
        exposure={isLight ? 1.05 : 0.96}
        vignette={isLight ? 0.35 : 0.4}
        steps={220}
        resolution={0.7}
        maxDpr={1.5}
        className={`w-full h-full transition-opacity duration-700 ${
          isLight ? 'opacity-80' : 'opacity-90'
        }`}
      />
      {/* Ambient gradient overlay to seamlessly integrate with brand palette */}
      <div
        className={`absolute inset-0 pointer-events-none transition-colors duration-700 ${
          isLight
            ? 'bg-gradient-to-b from-[#1A1A1A]/40 via-transparent to-[#1A1A1A]/75'
            : 'bg-gradient-to-b from-[#0D0B1A]/40 via-transparent to-[#0D0B1A]/80'
        }`}
      />
    </div>
  );
}
