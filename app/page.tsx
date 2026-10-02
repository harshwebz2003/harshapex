'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

import Navigation from '@/components/sections/Navigation';
import Hero from '@/components/sections/Hero';
import TrustedBy from '@/components/sections/TrustedBy';
import AgencyIntro from '@/components/sections/AgencyIntro';
import Services from '@/components/sections/Services';
import ProductsShowcase from '@/components/sections/ProductsShowcase';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import TechStack from '@/components/sections/TechStack';
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
      <main className="w-full max-w-full overflow-x-clip">
        {/* 1. Global Navigation */}
        <Navigation />

        {/* 2. Hero Section (with background video preserved) */}
        <Hero isLoaded={true} />

        {/* 3. Trusted By / Client Marquee */}
        <TrustedBy />

        {/* 4. Agency Intro (Company Overview & Positioning) */}
        <AgencyIntro />

        {/* 5. Services (Core Enterprise Solutions) */}
        <Services />

        {/* 6. Products Showcase (Flagship Business Suites) */}
        <ProductsShowcase />

        {/* 7. Why Choose Us (We Don't Just Design. We Build.) */}
        <WhyChooseUs />

        {/* 8. Modern Technology Stack */}
        <TechStack />

        {/* 9. Development Process */}
        <Process />

        {/* 10. Selected Work & Projects */}
        <Projects />

        {/* 11. Case Studies */}
        <CaseStudies />

        {/* 12. Statistics & Measurable Results */}
        <Statistics />

        {/* 13. Client Testimonials */}
        <Testimonials />

        {/* 14. Transparent Pricing & Investment */}
        <Pricing />

        {/* 15. Frequently Asked Questions */}
        <FAQ />

        {/* 16. Final Call To Action */}
        <CTA />

        {/* 17. Footer */}
        <Footer />

        {/* Floating WhatsApp Quick Action Button */}
        <WhatsAppButton />
      </main>
    </>
  );
}
