
import Link from 'next/link';
import { mcps } from '@/lib/data/mcps';
import { McpCard } from '@/components/ui/McpCard';

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
            <McpCard
              key={mcp.id}
              mcp={mcp}
              delay={100 + (index % 3) * 50}
            />
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
