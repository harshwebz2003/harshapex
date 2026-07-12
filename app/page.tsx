'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

import Navigation from '@/components/sections/Navigation';
import Hero from '@/components/sections/Hero';
import TrustedBy from '@/components/sections/TrustedBy';
import AgencyIntro from '@/components/sections/AgencyIntro';
import Services from '@/components/sections/Services';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Process from '@/components/sections/Process';
import Projects from '@/components/sections/Projects';
import CaseStudies from '@/components/sections/CaseStudies';
import Statistics from '@/components/sections/Statistics';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';
import WhatsAppButton from '@/components/sections/WhatsAppButton';

const LoadingScreen = dynamic(() => import('@/components/sections/LoadingScreen'), { ssr: false });

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <main className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navigation />
        <Hero />
        <TrustedBy />
        <AgencyIntro />
        <Services />
        <WhyChooseUs />
        <Process />
        <Projects />
        <CaseStudies />
        <Statistics />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
}
