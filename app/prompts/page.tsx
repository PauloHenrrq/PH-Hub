'use client';

import Link from 'next/link';
import { prompts } from '@/lib/data/prompts';

export default function PromptsPage() {
  return (
    <main className="prompt-page-body">
      <div className="container prompt-page-nav">
        <Link href="/#prompts" className="prompt-back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Voltar para o hub
        </Link>
      </div>

      <div className="container" style={{ padding: '40px 14px 80px' }}>
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <span className="section-label">✦ ENGENHARIA</span>
          <h1 className="section-title">Todos os <span className="text-gradient">Prompts</span></h1>
          <p className="section-description" style={{ margin: '0 auto' }}>
            Estruturas de alto nível projetadas para extrair o máximo potencial dos modelos de IA.
          </p>
        </div>

        <div className="workflows-grid">
          {prompts.map((prompt) => {
            const t = prompt.translations.pt;
            const isComingSoon = !t.content;
            
            return (
              <div 
                key={prompt.slug} 
                className="glass-card prompt-card"
                style={{ 
                  opacity: 1, 
                  transform: 'none', 
                  display: 'flex', 
                  textDecoration: 'none',
                  position: 'relative'
                }}
              >
                <div className="prompt-card-header">
                  <span className="prompt-tag">{prompt.tag}</span>
                </div>
                <h3>{t.title}</h3>
                <p>{t.description}</p>
                
                <div className="prompt-card-footer">
                  {!isComingSoon ? (
                    <Link href={`/prompts/${prompt.slug}`} className="prompt-card-link stretched-link">
                      Acessar Prompt
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ) : (
                    <span className="prompt-card-link" style={{ color: 'var(--text-muted)', cursor: 'not-allowed' }}>
                      Em breve
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
