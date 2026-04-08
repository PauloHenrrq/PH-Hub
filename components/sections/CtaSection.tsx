export default function CtaSection() {
  return (
    <section className="section section-cta">
      <div className="container">
        <div className="cta-container">
          <div className="cta-orb-accent" aria-hidden="true" />
          <h2 className="cta-title" data-reveal="fade-up" data-delay="0">
            Vamos conversar<br />
            sobre <span className="text-gradient">o próximo</span>
          </h2>
          <p className="cta-description" data-reveal="fade-up" data-delay="100">
            Se você chegou até aqui, provavelmente temos coisas interessantes para trocar.
            Estou aberto a projetos, colaborações e conversas que valham o tempo.
          </p>
          <div className="cta-actions" data-reveal="fade-up" data-delay="200">
            <a
              href="mailto:contato@phub.dev"
              className="btn btn-primary"
            >
              Enviar mensagem
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
