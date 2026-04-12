import { prompts } from '@/lib/data/prompts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PromptClient from '@/components/prompt/PromptClient';

interface PromptPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return prompts.map((prompt) => ({
    slug: prompt.slug,
  }));
}

export default async function PromptPage({ params }: PromptPageProps) {
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
        <PromptClient 
          tag={prompt.tag} 
          translations={prompt.translations} 
          isSoon={isSoon} 
        />
      </main>
    </div>
  );
}

