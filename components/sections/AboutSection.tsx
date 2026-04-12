const cards = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'Conjunto de Ferramentas',
    text: 'Recursos, utilitários e aplicações de desenvolvimento consolidadas. Soluções e ferramentas essenciais prontas para acelerar a construção de qualquer projeto técnico.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    title: 'Engenharia de Prompts',
    text: 'Modelos e estruturas validadas de comunicação com IA. Desde frameworks básicos a roteiros avançados de raciocínio, otimizados para máxima extração de valor.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
      </svg>
    ),
    title: 'Sistema de Workflows',
    text: 'Fluxos de trabalhos integrados e sequenciais. Padronização de processos inteiros — desde a inicialização de projetos até a revisão autônoma do código.',
  },
];

export default function AboutSection() {
  return (
    <section className="section section-sobre" id="sobre">
      <div className="container">
        <div className="build-line build-line--h-left" data-build-line />

        <span className="section-label" data-reveal="fade-up" data-delay="0">◈ VISÃO GERAL</span>
        <h2 className="section-title" data-reveal="fade-up" data-delay="80">
          Um gostinho do<br />
          <span className="text-gradient">Hub</span>
        </h2>
        <p className="section-description" data-reveal="fade-up" data-delay="160">
          Este espaço é uma documentação viva de recursos arquitetados para automação, performance e precisão. Aqui você encontrará um ecossistema projetado para elevar fluxos de trabalho e ampliar horizontes de desenvolvimento utilizando IA.
        </p>

        <div className="about-grid">
          {cards.map((card, i) => (
            <div
              className="glass-card about-card"
              key={card.title}
              data-reveal="fade-up"
              data-delay={String(i * 100 + 200)}
            >
              <div className="about-card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

        <div className="build-line build-line--h-right" data-build-line />
      </div>
    </section>
  );
}
