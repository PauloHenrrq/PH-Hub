import Link from 'next/link';
import { frameworks } from '@/lib/data/frameworks';
import { FrameworkCard } from '@/components/ui/FrameworkCard';

export default function FrameworksSection() {
  const currentFrameworks = frameworks.slice(0, 3);
  const hasMore = frameworks.length > 3;

  return (
    <section className="section section-frameworks" id="frameworks">
      <div className="container">
        <div className="build-line build-line--h-left" data-build-line />

        <span className="section-label" data-reveal="fade-up">✦ ENGENHARIA AGÊNTICA</span>
        <h2 className="section-title" data-reveal="fade-up" data-delay="100">
          Frameworks de <span className="text-gradient">IA & Agentes</span>
        </h2>
        <p className="section-description" data-reveal="fade-up" data-delay="200">
          Metodologias de governança, meta-prompting e arquitetura de contexto que disciplinam coding agents, cortam desperdício de tokens e transformam sessões caóticas em entregas de engenharia.
        </p>

        <div className="tools-grid">
          {currentFrameworks.map((framework, index) => (
            <FrameworkCard 
              key={framework.id} 
              framework={framework} 
              delay={100 + (index % 3) * 50} 
            />
          ))}
        </div>

        {hasMore && (
          <div style={{ marginTop: '48px', textAlign: 'center' }}>
            <Link href="/frameworks" className="btn btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Ver todos os frameworks
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
