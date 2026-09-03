'use client';

import React from 'react';
import Image from 'next/image';

export interface ProjectItem {
  title: string;
  category: string;
  img: string;
  tags?: string[];
  link?: string;
  recent?: boolean;
}

interface ImageAutoSliderProps {
  items?: ProjectItem[];
  reverse?: boolean;
  speedSeconds?: number;
  pauseOnHover?: boolean;
}

export const Component = () => {
  // Images for the infinite scroll - using 21st.dev URLs
  const images = [
    "https://cdn.21st.dev/assets/mirror/0b/0b2eee3635f20ec932fa27ae8db24eb760045aee6dd53c6cd05b01799761b6fb.jpg",
    "https://cdn.21st.dev/assets/mirror/a0/a0e1a6affa10f9d1304e1ec7a0a074efa2e5befddbe5f55ec1674ca4606a7272.jpg",
    "https://cdn.21st.dev/assets/mirror/c5/c50a953b2534eeb024de5eb84901abda556e6a8faa74bb6c13983557f14f02e2.jpg",
    "https://cdn.21st.dev/assets/mirror/2c/2c3bda48c0009be1f143cfed1b28a012de388bcd39d662df550ec1d28966b864.jpg",
    "https://cdn.21st.dev/assets/mirror/df/df5b37ca7d83d93ddbece6430932d006f89d70704f4cf14c91bc724b9653ec9f.jpg",
    "https://cdn.21st.dev/assets/mirror/fe/fe0e5e4058e6fc722507077aa70c1e0fd48ee254ab0bae5512902dc6729ff155.jpg",
    "https://cdn.21st.dev/assets/mirror/6f/6ff6818c9f0e9b6b28eb7f16f650538626b00cf3b10c36eac6840d280c799636.jpg",
    "https://cdn.21st.dev/assets/mirror/97/971ee8523c7efc71ed5323f0b7c386b7b09dde6af9bae9bedd7288ca7a787b40.jpg"
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <>
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 25s linear infinite;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .image-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
      `}</style>
      
      <div className="w-full min-h-[400px] bg-black/40 relative overflow-hidden flex items-center justify-center">
        {/* Scrolling images container */}
        <div className="relative z-10 w-full flex items-center justify-center py-8">
          <div className="scroll-container w-full max-w-7xl">
            <div className="infinite-scroll flex gap-6 w-max hover:[animation-play-state:paused]">
              {duplicatedImages.map((image, index) => (
                <div
                  key={index}
                  className="image-item flex-shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                >
                  <img
                    src={image}
                    alt={`Gallery image ${(index % images.length) + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const ImageAutoSlider: React.FC<ImageAutoSliderProps> = ({
  items = [],
  reverse = false,
  speedSeconds = 35,
  pauseOnHover = true,
}) => {
  if (!items || items.length === 0) return null;

  // Duplicate items 3 times to ensure infinite smooth marquee without gaps on large monitors
  const duplicated = [...items, ...items, ...items];

  const animName = reverse ? 'marquee-reverse-track' : 'marquee-forward-track';

  return (
    <div className="relative w-full overflow-hidden py-4">
      <style>{`
        @keyframes marquee-forward-track {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes marquee-reverse-track {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .slider-mask {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 6%,
            black 94%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 6%,
            black 94%,
            transparent 100%
          );
        }
      `}</style>

      <div className="slider-mask w-full">
        <div
          className={`flex gap-6 md:gap-8 w-max ${
            pauseOnHover ? 'hover:[animation-play-state:paused]' : ''
          }`}
          style={{
            animation: `${animName} ${speedSeconds}s linear infinite`,
          }}
        >
          {duplicated.map((project, idx) => (
            <div
              key={`${project.title}-${idx}`}
              onClick={() => {
                if (project.link && project.link !== '#') {
                  window.open(project.link, '_blank', 'noopener,noreferrer');
                }
              }}
              className="group relative flex-shrink-0 w-[290px] sm:w-[340px] md:w-[390px] lg:w-[420px] rounded-3xl p-3 sm:p-4 bg-gradient-to-br from-[#1A1630]/80 via-[#120F26]/70 to-[#0D0B1A]/90 border border-[#B8C0FF]/15 hover:border-[#6DD5C4]/50 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-[0_20px_50px_rgba(109,213,196,0.18)] hover:-translate-y-1.5"
            >
              {/* Image Frame */}
              <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden bg-black/40 border border-white/5">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 290px, (max-width: 1024px) 390px, 420px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Recent Badge */}
                {project.recent && (
                  <div className="absolute top-3.5 left-3.5 z-10 bg-gradient-to-r from-[#6DD5C4] to-[#B8C0FF] text-[#0D0B1A] text-[9px] sm:text-[10px] font-extrabold px-3 py-1 rounded-full shadow-lg border border-[#6DD5C4]/40 tracking-wider font-mono">
                    RECENT
                  </div>
                )}

                {/* External Link Overlay Button */}
                <div className="absolute inset-0 bg-[#0D0B1A]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs font-medium font-mono transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 shadow-2xl">
                    <span>Explore Live Site</span>
                    <span className="text-sm">↗</span>
                  </div>
                </div>
              </div>

              {/* Project Meta Info */}
              <div className="mt-3.5 px-1 pb-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#6DD5C4] font-mono font-medium truncate">
                    {project.category}
                  </span>
                  <span className="text-xs text-[#B8C0FF]/50 group-hover:text-[#6DD5C4] group-hover:translate-x-0.5 transition-all duration-300 font-mono">
                    ↗
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#B8C0FF] transition-colors duration-300 font-display mt-1 truncate">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Component;
