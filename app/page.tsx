'use client';

import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ToolsSection from '@/components/sections/ToolsSection';
import PromptsSection from '@/components/sections/PromptsSection';
import WorkflowsSection from '@/components/sections/WorkflowsSection';
import CtaSection from '@/components/sections/CtaSection';
import { useRevealEngine } from '@/hooks/useRevealEngine';
import { useCardSpotlight } from '@/hooks/useCardSpotlight';

function HomePage() {
  useRevealEngine();
  useCardSpotlight();

  // Build lines reveal
  useEffect(() => {
    const buildLineObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('revealed');
            buildLineObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('[data-build-line]').forEach((el) =>
      buildLineObs.observe(el)
    );

    return () => buildLineObs.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ToolsSection />
        <PromptsSection />
        <WorkflowsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
