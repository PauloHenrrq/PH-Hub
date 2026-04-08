import { prompts } from '@/lib/data/prompts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import CopyPromptBtn from '@/components/prompt/CopyPromptBtn';

interface PromptPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return prompts.map((prompt) => ({
    slug: prompt.slug,
  }));
}

export default async function PromptPage({ params }: PromptPageProps) {
  // Await params per Next.js 15+ dynamic route behavior if necessary,
  // but in App Router typically params can be destructured directly.
  // Next 15 actually recommends awaiting params if it's treated asynchronously,
  // but destructuring is valid for standard access.
  const { slug } = await params;

  const prompt = prompts.find((p) => p.slug === slug);

  if (!prompt) {
    notFound();
  }

  const isSoon = prompt.status === 'soon';

  return (
    <div className="prompt-page-body">
      <div className="container">
        <nav className="prompt-page-nav">
          <Link href="/#prompts" className="prompt-back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Voltar para o hub
          </Link>
        </nav>
      </div>

      <main className="prompt-page-content">
        <div className="prompt-frame">
          <div className="frame-corner frame-corner--tl" />
          <div className="frame-corner frame-corner--tr" />
          <div className="frame-corner frame-corner--bl" />
          <div className="frame-corner frame-corner--br" />

          <header className="prompt-frame-header">
            <div className="prompt-frame-meta">
              <span className="prompt-frame-category">{prompt.tag}</span>
              <h1 className="prompt-frame-title">{prompt.title}</h1>
              <p className="prompt-frame-desc">{prompt.description}</p>
            </div>
            {!isSoon && prompt.content && (
              <CopyPromptBtn content={prompt.content} />
            )}
          </header>

          <div className="prompt-frame-divider" />

          <div className="prompt-frame-body">
            {isSoon || !prompt.content ? (
              <div style={{ textAlign: 'center', opacity: 0.6, fontStyle: 'italic', padding: '40px 0' }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '16px' }}>🚧</span>
                Engenharia de prompt em desenvolvimento.<br />
                Volte em breve para acesso aos comandos.
              </div>
            ) : (
              prompt.content
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
