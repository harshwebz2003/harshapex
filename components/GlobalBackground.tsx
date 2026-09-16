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
      {/* Light mode midnight gold ambient glow UNDER the black hole */}
      {isLight && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-700 opacity-60"
          style={{
            backgroundImage: `
              radial-gradient(at 0% 0%, #5E4B43 0px, transparent 55%),
              radial-gradient(at 100% 0%, #382C27 0px, transparent 50%),
              radial-gradient(at 50% 50%, #1A1A1A 0px, transparent 65%),
              radial-gradient(at 100% 100%, #5E4B43 0px, transparent 55%),
              radial-gradient(at 0% 100%, #302621 0px, transparent 50%),
              linear-gradient(135deg, #1A1A1A 0%, #382C27 35%, #5E4B43 70%, #1A1A1A 100%)
            `,
          }}
        />
      )}
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
        steps={140}
        resolution={0.6}
        maxDpr={1.15}
        className="w-full h-full transition-opacity duration-700 opacity-95"
      />
      {/* Ambient gradient overlay to seamlessly integrate with page content */}
      <div
        className={`absolute inset-0 pointer-events-none transition-colors duration-700 ${
          isLight
            ? 'bg-gradient-to-b from-[#1A1A1A]/20 via-transparent to-[#1A1A1A]/60'
            : 'bg-gradient-to-b from-[#0D0B1A]/20 via-transparent to-[#0D0B1A]/60'
        }`}
      />
    </div>
  );
}
