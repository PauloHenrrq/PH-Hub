import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ToolsSection from '@/components/sections/ToolsSection';
import CtaSection from '@/components/sections/CtaSection';
import RevealProvider from '@/components/providers/RevealProvider';

// Dynamic imports para seções abaixo do fold
const FrameworksSection = dynamic(() => import('@/components/sections/FrameworksSection'));
const PromptsSection = dynamic(() => import('@/components/sections/PromptsSection'));
const WorkflowsSection = dynamic(() => import('@/components/sections/WorkflowsSection'));
const McpsSection = dynamic(() => import('@/components/sections/McpsSection'));
const PortfolioSection = dynamic(() => import('@/components/sections/PortfolioSection'));

export default function HomePage() {
  return (
    <RevealProvider>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ToolsSection />
        <FrameworksSection />
        <PromptsSection />
        <WorkflowsSection />
        <McpsSection />
        <PortfolioSection />
        <CtaSection />
      </main>
      <Footer />
    </RevealProvider>
  );
}
