'use client';

import { useState } from 'react';
import { Framework } from '@/lib/data/frameworks';

interface FrameworkCardProps {
  framework: Framework;
  delay?: number;
}

export function FrameworkCard({ framework, delay = 0 }: FrameworkCardProps) {
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
        onClick={framework.detailedContent ? handleOpenModal : undefined}
        data-reveal={delay > 0 ? "fade-up" : undefined}
        data-delay={delay > 0 ? delay : undefined}
        style={{ display: 'flex', flexDirection: 'column', cursor: framework.detailedContent ? 'pointer' : 'default' }}
      >
        <div className="tool-card-icon">{framework.icon}</div>
        
        <span className="tool-tag">{framework.tag}</span>
        
        <h3 className="tool-title-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {framework.name}
          {framework.url && framework.url !== '#' && (
            <a 
              href={framework.url} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="tool-external-link"
              title={`Acessar ${framework.name}`}
              style={{ color: 'var(--text-muted)', display: 'inline-flex', padding: '4px' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          )}
        </h3>

        {framework.motto && (
          <div style={{
            fontStyle: 'italic',
            fontSize: '0.82rem',
            color: 'var(--purple-300)',
            marginBottom: '10px',
            borderLeft: '2px solid var(--purple-500)',
            paddingLeft: '8px',
            lineHeight: 1.4
          }}>
            &ldquo;{framework.motto}&rdquo;
          </div>
        )}

        <p className="tool-desc" style={{ marginBottom: '14px' }}>{framework.description}</p>

        {framework.installCommand && (
          <div style={{
            marginTop: 'auto',
            marginBottom: '14px',
            padding: '6px 10px',
            borderRadius: '6px',
            background: 'rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.74rem',
            color: 'var(--purple-300)',
            overflowX: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>
            $ {framework.installCommand}
          </div>
        )}

        {framework.detailedContent && (
          <button 
            style={{
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
            Ver detalhes
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
        )}
      </div>

      {modalOpen && framework.detailedContent && (
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

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '24px' }}>
              <div style={{ fontSize: '3rem', filter: 'drop-shadow(0 0 16px rgba(155, 91, 255, 0.2))' }}>{framework.icon}</div>
              <div>
                <span className="tool-tag">{framework.tag}</span>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, margin: '4px 0 6px', letterSpacing: '-0.5px' }}>{framework.name}</h2>
                {framework.motto && (
                  <p style={{ margin: 0, fontStyle: 'italic', color: 'var(--purple-300)', fontSize: '0.9rem' }}>
                    &ldquo;{framework.motto}&rdquo;
                  </p>
                )}
              </div>
            </div>

            {framework.installCommand && (
              <div style={{
                marginBottom: '28px',
                padding: '12px 16px',
                borderRadius: '8px',
                background: 'rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(155, 91, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem'
              }}>
                <span style={{ color: 'var(--purple-300)' }}>$ {framework.installCommand}</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Quick Start</span>
              </div>
            )}

            <div style={{ marginBottom: '28px' }}>
              <h4 style={{ color: 'var(--purple-400)', marginBottom: '10px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>Visão Geral</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.7 }}>{framework.detailedContent.overview}</p>
            </div>

            <div style={{ marginBottom: '28px' }}>
              <h4 style={{ color: 'var(--purple-400)', marginBottom: '10px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>Destaques Arquiteturais</h4>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.7, paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {framework.detailedContent.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>

            <div style={{ marginBottom: '36px' }}>
              <h4 style={{ color: 'var(--purple-400)', marginBottom: '10px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>Caso de Uso Ideal</h4>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontStyle: 'italic', borderLeft: '3px solid var(--purple-500)', paddingLeft: '16px', margin: 0 }}>
                {framework.detailedContent.useCase}
              </p>
            </div>

            {framework.url && framework.url !== '#' && (
              <a 
                href={framework.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Acessar Repositório do {framework.name}
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
