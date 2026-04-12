import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ToolsSection from '@/components/sections/ToolsSection';
import CtaSection from '@/components/sections/CtaSection';
import RevealProvider from '@/components/providers/RevealProvider';

// Dynamic imports para seções abaixo do fold
const PromptsSection = dynamic(() => import('@/components/sections/PromptsSection'));
const WorkflowsSection = dynamic(() => import('@/components/sections/WorkflowsSection'));
const McpsSection = dynamic(() => import('@/components/sections/McpsSection'));

export default function HomePage() {
  return (
    <RevealProvider>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ToolsSection />
        <PromptsSection />
        <WorkflowsSection />
        <McpsSection />
        <CtaSection />
      </main>
      <Footer />
    </RevealProvider>
  );
}
