'use client';

export default function PortfolioSection() {
  return (
    <section className="section section-portfolio" id="portfolio">
      <div className="container">
        <div className="build-line build-line--h-left" data-build-line />

        <span className="section-label" data-reveal="fade-up">✦ PORTFÓLIO</span>
        <h2 className="section-title" data-reveal="fade-up" data-delay="100">
          Meu Espaço <span className="text-gradient">Profissional</span>
        </h2>
        
        <p className="section-description" data-reveal="fade-up" data-delay="200">
          Além das ferramentas de IA e comandos do laboratório, explore meus projetos de ponta a ponta,
          trajetória na engenharia de software e stack técnica de produção no meu portfólio oficial.
        </p>

        <div 
          className="glass-card portfolio-showcase-card"
          data-reveal="fade-up"
          data-delay="300"
          style={{
            position: 'relative',
            padding: '48px',
            marginTop: '40px',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid var(--border-color)',
            background: 'rgba(255, 255, 255, 0.01)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
            flexWrap: 'wrap'
          }}
        >
          {/* Efeitos decorativos em degradê */}
          <div 
            style={{
              position: 'absolute',
              top: '-40%',
              right: '-20%',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(155, 91, 255, 0.15) 0%, transparent 70%)',
              zIndex: 0,
              pointerEvents: 'none'
            }} 
          />
          <div 
            style={{
              position: 'absolute',
              bottom: '-30%',
              left: '-10%',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(0, 242, 254, 0.08) 0%, transparent 70%)',
              zIndex: 0,
              pointerEvents: 'none'
            }} 
          />

          <div style={{ flex: '1 1 350px', zIndex: 1 }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--purple-400)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>
              PRODUÇÃO E EXPERIÊNCIA
            </span>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '16px', letterSpacing: '-0.5px' }}>
              Paulo Henrique<span style={{ color: 'var(--purple-500)' }}>.</span>dev
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '32px', fontSize: '1.05rem' }}>
              Desenvolvedor Full-Stack focado em construir aplicações de alta performance, escaláveis e com design imersivo. Explore cases de Next.js, APIs robustas em Node.js e integrações avançadas de nuvem e banco de dados.
            </p>

            <a 
              href="https://ph-portfolio-dev.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              Visitar Portfólio
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>

          {/* Maquete da Interface do Portfólio */}
          <div 
            style={{ 
              flex: '1 1 300px', 
              display: 'flex', 
              justifyContent: 'center', 
              zIndex: 1,
              position: 'relative'
            }}
          >
            <div 
              style={{
                width: '100%',
                maxWidth: '360px',
                height: '240px',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.00) 100%)',
                boxShadow: '0 24px 48px -12px rgba(0,0,0,0.5)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                backdropFilter: 'blur(20px)'
              }}
            >
              {/* Barra de janela do navegador */}
              <div 
                style={{ 
                  height: '36px', 
                  background: 'rgba(255,255,255,0.03)', 
                  borderBottom: '1px solid rgba(255,255,255,0.05)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  padding: '0 16px', 
                  gap: '6px' 
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }} />
                <div 
                  style={{ 
                    marginLeft: '12px', 
                    fontSize: '0.7rem', 
                    color: 'var(--text-muted)', 
                    background: 'rgba(0,0,0,0.2)', 
                    padding: '2px 24px', 
                    borderRadius: '4px',
                    fontFamily: 'monospace'
                  }}
                >
                  ph-portfolio-dev.vercel.app
                </div>
              </div>
              
              {/* Conteúdo interno da Maquete */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'linear-gradient(135deg, var(--purple-500), var(--purple-700))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.2rem', fontWeight: 800, marginBottom: '16px' }}>
                  PH
                </div>
                <div style={{ height: '14px', width: '70%', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', marginBottom: '8px' }} />
                <div style={{ height: '10px', width: '90%', background: 'rgba(255,255,255,0.04)', borderRadius: '3px', marginBottom: '16px' }} />
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ height: '24px', width: '80px', background: 'rgba(155, 91, 255, 0.2)', borderRadius: '12px', border: '1px solid rgba(155, 91, 255, 0.3)' }} />
                  <div style={{ height: '24px', width: '60px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="build-line build-line--h-right" data-build-line />
      </div>
    </section>
  );
}
