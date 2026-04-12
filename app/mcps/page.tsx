import { mcps } from '@/lib/data/mcps';
import Link from 'next/link';
import { McpCard } from '@/components/ui/McpCard';

export default function McpsIndexPage() {
  return (
    <div className="prompt-page-body">
      <div className="container prompt-page-nav">
        <Link href="/#mcps" className="prompt-back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Voltar para o hub
        </Link>
      </div>

      <div className="container" style={{ padding: '40px 14px 80px' }}>
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <span className="section-label">✦ CONTEXT PROTOCOL</span>
          <h1 className="section-title">Todos os <span className="text-gradient">MCPs</span></h1>
          <p className="section-description" style={{ margin: '0 auto' }}>
            Documentação, integrações completas e mapeamento avançado com servidores MCP.
          </p>
        </div>

        <div className="tools-grid">
          {mcps.map((mcp) => (
            <McpCard key={mcp.id} mcp={mcp} />
          ))}
        </div>
      </div>
    </div>
  );
}
