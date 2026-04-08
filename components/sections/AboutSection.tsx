const cards = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.5 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4.5" />
        <path d="M14 2l6 6-9 9H5v-6L14 2z" />
      </svg>
    ),
    title: 'Engenharia de Prompts',
    text: 'Criar prompts eficazes é uma habilidade técnica. Documento as estruturas que funcionam, os padrões que escalam e os princípios por trás de resultados consistentes.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Código com Intenção',
    text: 'Todo projeto aqui tem propósito: resolver um problema real, explorar um conceito técnico ou criar algo útil. Código como ferramenta de pensamento, não fim em si mesmo.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
      </svg>
    ),
    title: 'Aprendizado Público',
    text: 'Compartilhar o processo, não só o resultado. Cada prompt publicado, cada ferramenta documentada é um registro de como o pensamento evolui com o tempo.',
  },
];

export default function AboutSection() {
  return (
    <section className="section section-sobre" id="sobre">
      <div className="container">
        <div className="build-line build-line--h-left" data-build-line />

        <span className="section-label" data-reveal="fade-up" data-delay="0">◈ SOBRE</span>
        <h2 className="section-title" data-reveal="fade-up" data-delay="80">
          Um laboratório em<br />
          <span className="text-gradient">modo contínuo</span>
        </h2>
        <p className="section-description" data-reveal="fade-up" data-delay="160">
          Não é um portfólio. É um espaço de experimentação ativa — onde prompts são
          testados, ferramentas são comparadas e projetos nascem de curiosidade genuína.
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
