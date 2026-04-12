import Carousel from '@/components/ui/Carousel';
import { prompts } from '@/lib/data/prompts';
import Link from 'next/link';

export default function PromptsSection() {
  return (
    <section className="section section-prompts" id="prompts">
      <div className="container">
        <div className="build-line build-line--h-left" data-build-line />

        <span className="section-label" data-reveal="fade-up" data-delay="0">◈ PROMPTS</span>
        <h2 className="section-title" data-reveal="fade-up" data-delay="80">
          Prompts de<br />
          <span className="text-gradient">engenharia real</span>
        </h2>
        <p className="section-description" data-reveal="fade-up" data-delay="160">
          Não são templates genéricos. São estruturas testadas que transformam qualquer
          modelo em uma ferramenta de alta precisão. Cada prompt tem uma função específica.
        </p>

        <div data-reveal="fade-up" data-delay="240">
          <Carousel>
            {prompts.slice(0, 4).map((prompt) => {
              const cardClass = 'glass-card prompt-card';
              const t = prompt.translations.pt;

              return (
                <div className="carousel-item" key={prompt.slug}>
                  <div className={cardClass}>
                    <div className="prompt-card-header">
                      <span className="prompt-tag">{prompt.tag}</span>
                    </div>
                    <h3>{t.title}</h3>
                    <p>{t.description}</p>
                    <div className="prompt-card-footer">
                      {t.content ? (
                        <Link href={`/prompts/${prompt.slug}`} className="prompt-card-link stretched-link">
                          Ler engenharia de prompt
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ) : (
                        <span className="prompt-card-link" style={{ color: 'var(--text-muted)', cursor: 'not-allowed' }}>
                          Em construção...
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                          </svg>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* See More Card */}
            <div className="carousel-item">
              <Link href="/prompts" className="glass-card prompt-card prompt-card--see-more">
                <span className="see-more-text">Ver mais</span>
              </Link>
            </div>

          </Carousel>
        </div>

        <div className="build-line build-line--h-right" data-build-line />
      </div>
    </section>
  );
}
