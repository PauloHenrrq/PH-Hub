export default function CtaSection() {
  return (
    <section className="section section-cta">
      <div className="container">
        <div className="cta-container">
          <div className="cta-orb-accent" aria-hidden="true" />
          <h2 className="cta-title" data-reveal="fade-up" data-delay="0">
            Explore o <span className="text-gradient">código fonte</span>
          </h2>
          <p className="cta-description" data-reveal="fade-up" data-delay="100">
            Todo este ambiente, desde os componentes React até as configurações abstratas do sistema, estão disponíveis de forma aberta para estudo e experimentação no repositório do GitHub.
          </p>
          <div className="cta-actions" data-reveal="fade-up" data-delay="200">
            <a
              href="https://github.com/PauloHenrrq/PH-Hub"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Ver no GitHub
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
