'use client';

import Link from 'next/link';
import { tools } from '@/lib/data/tools';

export default function ToolsSection() {
  const currentTools = tools.slice(0, 3);
  const hasMore = tools.length > 3;

  return (
    <section className="section section-ferramentas" id="ferramentas">
      <div className="container">
        <span className="section-label" data-reveal="fade-up">✦ CURADORIA</span>
        <h2 className="section-title" data-reveal="fade-up" data-delay="100">
          Conjunto de <span className="text-gradient">Ferramentas</span>
        </h2>
        <p className="section-description" data-reveal="fade-up" data-delay="200">
          A base do laboratório é construída com ferramentas modernas que
          permitem acelerar o desenvolvimento, otimizar interfaces e validar
          modelos com rapidez.
        </p>

        <div className="tools-grid">
          {currentTools.map((tool, index) => (
            <div
              key={tool.name}
              className="glass-card tool-card"
              data-reveal="fade-up"
              data-delay={100 + (index % 3) * 50}
            >
              <div className="tool-card-icon">{tool.icon}</div>
              <span className="tool-tag">{tool.tag}</span>
              <h3>{tool.name}</h3>
              <p className="tool-desc">{tool.description}</p>
              <div className="tool-usage">
                <span className="tool-usage-label">Uso:</span> {tool.usage}
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div style={{ marginTop: '48px', textAlign: 'center' }}>
            <Link href="/tools" className="btn btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Ver mais
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
