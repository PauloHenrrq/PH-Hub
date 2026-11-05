'use client';

import Link from 'next/link';
import { frameworks } from '@/lib/data/frameworks';
import { FrameworkCard } from '@/components/ui/FrameworkCard';

export default function FrameworksPage() {
  return (
    <main className="prompt-page-body">
      <div className="container prompt-page-nav">
        <Link href="/#frameworks" className="prompt-back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Voltar para o hub
        </Link>
      </div>

      <div className="container" style={{ padding: '40px 14px 80px' }}>
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <span className="section-label">✦ ENGENHARIA AGÊNTICA</span>
          <h1 className="section-title">Todos os <span className="text-gradient">Frameworks</span></h1>
          <p className="section-description" style={{ margin: '0 auto' }}>
            Metodologias de governança, meta-prompting, compressão de contexto e TDD projetadas para extrair previsibilidade de agentes autônomos.
          </p>
        </div>

        <div className="tools-grid">
          {frameworks.map((framework) => (
            <FrameworkCard key={framework.id} framework={framework} />
          ))}
        </div>
      </div>
    </main>
  );
}
