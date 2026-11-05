'use client';

import { useState } from 'react';
import { Mcp } from '@/lib/data/mcps';

interface McpCardProps {
  mcp: Mcp;
  delay?: number;
}

export function McpCard({ mcp, delay = 0 }: McpCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalOpen(true);
  };

  const handleCloseModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalOpen(false);
  };

  return (
    <>
      <div
        className="glass-card tool-card"
        onClick={mcp.detailedContent ? handleOpenModal : undefined}
        data-reveal={delay > 0 ? "fade-up" : undefined}
        data-delay={delay > 0 ? delay : undefined}
        style={{ display: 'flex', flexDirection: 'column', cursor: mcp.detailedContent ? 'pointer' : 'default' }}
      >
        <div className="tool-card-icon">{mcp.icon}</div>
        <span className="tool-tag">{mcp.tag}</span>
        <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {mcp.name}
          {mcp.referenceUrl && mcp.referenceUrl !== '#' && (
            <a 
              href={mcp.referenceUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{ color: 'var(--text-muted)', display: 'inline-flex', padding: '4px', zIndex: 10 }}
              title={`Acessar ${mcp.name}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          )}
        </h3>
        <p className="tool-desc">{mcp.description}</p>
        
        {mcp.cliVariant && (
          <div 
            style={{
              marginTop: '12px',
              marginBottom: '12px',
              padding: '8px 10px',
              borderRadius: '8px',
              background: 'rgba(155, 91, 255, 0.08)',
              border: '1px solid rgba(155, 91, 255, 0.2)',
              fontSize: '0.78rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: 'var(--purple-300)', marginBottom: '3px' }}>
              <span>⚡</span> 2ª Opção (Modo Direto):
            </div>
            <code style={{ fontSize: '0.74rem', color: '#fff', background: 'rgba(0,0,0,0.3)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'var(--font-mono)' }}>
              {mcp.cliVariant.command.split('|')[0].trim()}
            </code>
          </div>
        )}

        {mcp.detailedContent && (
          <button 
            style={{
              marginTop: 'auto',
              alignSelf: 'flex-start',
              background: 'none',
              border: 'none',
              color: 'var(--purple-400)',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '6px 0',
              transition: 'color 0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--purple-300)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--purple-400)'}
          >
            Ver mais
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
        )}
      </div>

      {modalOpen && mcp.detailedContent && (
        <div 
          className="tool-modal-overlay" 
          onClick={handleCloseModal}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.75)',
            backdropFilter: 'blur(10px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          <div 
            className="tool-modal-content glass-card"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '650px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              cursor: 'default',
              padding: '40px',
              animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <button 
              onClick={handleCloseModal}
              style={{ position: 'absolute', top: '24px', right: '24px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '6px', borderRadius: '50%', color: 'var(--text-muted)', cursor: 'pointer', transition: 'all 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              onMouseOver={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
              onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '32px' }}>
              <div style={{ fontSize: '3rem', filter: 'drop-shadow(0 0 16px rgba(155, 91, 255, 0.2))' }}>{mcp.icon}</div>
              <div>
                <span className="tool-tag">{mcp.tag}</span>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, margin: '4px 0 8px', letterSpacing: '-0.5px' }}>{mcp.name}</h2>
              </div>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ color: 'var(--purple-400)', marginBottom: '12px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>Visão Geral</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>{mcp.detailedContent.overview}</p>
            </div>

            {mcp.cliVariant && (
              <div style={{
                marginBottom: '32px',
                padding: '20px',
                borderRadius: '12px',
                background: 'rgba(155, 91, 255, 0.06)',
                border: '1px solid rgba(155, 91, 255, 0.25)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                  <span style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    fontWeight: 700,
                    color: 'var(--purple-300)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    ⚡ 2ª Opção Melhorada: Modo Direto (Sem MCP)
                  </span>
                  <a
                    href={mcp.cliVariant.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.8rem', color: 'var(--purple-400)', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  >
                    Doc Oficial ↗
                  </a>
                </div>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', margin: '4px 0 8px', fontWeight: 600 }}>{mcp.cliVariant.name}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: '0 0 12px' }}>
                  {mcp.cliVariant.description}
                </p>
                <div style={{
                  background: 'rgba(0, 0, 0, 0.45)',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--purple-300)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  marginBottom: '10px',
                  overflowX: 'auto'
                }}>
                  $ {mcp.cliVariant.command}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  <strong style={{ color: 'var(--purple-400)' }}>Vantagem:</strong> {mcp.cliVariant.benefit}
                </div>
              </div>
            )}

            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ color: 'var(--purple-400)', marginBottom: '12px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>Destaques</h4>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.7, paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {mcp.detailedContent.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>

            <div style={{ marginBottom: '40px' }}>
              <h4 style={{ color: 'var(--purple-400)', marginBottom: '12px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>Quando Utilizar</h4>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontStyle: 'italic', borderLeft: '3px solid var(--border-active)', paddingLeft: '16px', margin: 0 }}>
                {mcp.detailedContent.useCase}
              </p>
            </div>

            {mcp.referenceUrl && mcp.referenceUrl !== '#' && (
              <a 
                href={mcp.referenceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Acessar {mcp.name} Oficialmente
              </a>
            )}
            <style jsx>{`
              @keyframes slideUp {
                from { opacity: 0; transform: translateY(40px) scale(0.96); }
                to { opacity: 1; transform: translateY(0) scale(1); }
              }
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
            `}</style>
          </div>
        </div>
      )}
    </>
  );
}
