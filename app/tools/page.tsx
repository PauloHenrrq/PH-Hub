'use client';

import Link from 'next/link';
import { tools } from '@/lib/data/tools';
import { ToolCard } from '@/components/ui/ToolCard';

export default function ToolsPage() {
  return (
    <main className="prompt-page-body">
      <div className="container prompt-page-nav">
        <Link href="/#ferramentas" className="prompt-back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Voltar para o hub
        </Link>
      </div>

      <div className="container" style={{ padding: '40px 14px 80px' }}>
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <span className="section-label">✦ ECOSSISTEMA</span>
          <h1 className="section-title">Todas as <span className="text-gradient">Ferramentas</span></h1>
          <p className="section-description" style={{ margin: '0 auto' }}>
            Explorando as tecnologias de ponta que viabilizam o nosso laboratório.
          </p>
        </div>

        <div className="tools-grid">
          {tools.map((tool, index) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>
      </div>
    </main>
  );
}
