
import Link from 'next/link';
import { mcps } from '@/lib/data/mcps';

export default function McpsSection() {
  const currentMcps = mcps.slice(0, 3);
  const hasMore = mcps.length > 3;

  return (
    <section className="section section-mcps" id="mcps">
      <div className="container">
        <div className="build-line build-line--h-left" data-build-line />

        <span className="section-label" data-reveal="fade-up">✦ CONTEXT PROTOCOL</span>
        <h2 className="section-title" data-reveal="fade-up" data-delay="100">
          Integrações <span className="text-gradient">MCP</span>
        </h2>
        <p className="section-description" data-reveal="fade-up" data-delay="200">
          Model Context Protocol estende a percepção da IA ao mundo externo. Documentação em tempo real, automação de navegador e manipulação de sistema direto do kernel do hub.
        </p>

        <div className="tools-grid">
          {currentMcps.map((mcp, index) => (
            <a
              href={mcp.referenceUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={mcp.id}
              className="glass-card tool-card"
              data-reveal="fade-up"
              data-delay={100 + (index % 3) * 50}
              style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}
            >
              <div className="tool-card-icon" style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
                {mcp.icon}
              </div>
              <span className="tool-tag">{mcp.tag}</span>
              <h3>{mcp.name}</h3>
              <p className="tool-desc">{mcp.description}</p>
              
              <div className="tool-usage" style={{ marginTop: 'auto', borderTop: 'none', paddingTop: 0 }}>
                <span 
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--purple-400)', fontWeight: 600, textDecoration: 'none' }}
                >
                  Documentação e Ref
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        {hasMore && (
          <div style={{ marginTop: '48px', textAlign: 'center' }}>
            <Link href="/mcps" className="btn btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
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
