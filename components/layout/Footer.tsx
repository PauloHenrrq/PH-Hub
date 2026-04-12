export default function Footer() {
  return (
    <footer className="footer" id="repositorio">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-brand-name">
            <span style={{ color: 'var(--purple-500)' }}>◈</span> PH.hub
          </div>
          <p>Um laboratório pessoal de IA, código e design.</p>
        </div>

        <nav className="footer-links" aria-label="Links do rodapé">
          <a href="#sobre">Sobre</a>
          <a href="#ferramentas">Ferramentas</a>
          <a href="#prompts">Prompts</a>
          <a href="#workflows">Workflows</a>
          <a href="#mcps">MCPs</a>
        </nav>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} PH.hub — Construído com{' '}
            <span style={{ color: 'var(--purple-400)' }}>Next.js</span> e obsessão por detalhe.
          </p>
        </div>
      </div>
    </footer>
  );
}
