import { workflows } from '@/lib/data/workflows';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import WorkflowClient from '@/components/workflow/WorkflowClient';

interface WorkflowPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return workflows.map((workflow) => ({
    slug: workflow.command.replace('/', ''),
  }));
}

export default async function WorkflowPage({ params }: WorkflowPageProps) {
  const { slug } = await params;
  
  const workflow = workflows.find((w) => w.command.replace('/', '') === slug);

  if (!workflow) {
    notFound();
  }

  return (
    <div className="prompt-page-body">
      <div className="container">
        <nav className="prompt-page-nav">
          <Link href="/#workflows" className="prompt-back-link">
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
              <span className="prompt-frame-category">{workflow.type.toUpperCase()}</span>
              <h1 className="prompt-frame-title">{workflow.command} - {workflow.title}</h1>
              <p className="prompt-frame-desc">{workflow.description}</p>
              
              <div className="workflow-tags" style={{ marginTop: '12px' }}>
                {workflow.tags.map(tag => (
                  <span key={tag} className="prompt-tag" style={{ marginRight: '8px', fontSize: '0.65rem' }}>{tag}</span>
                ))}
              </div>
            </div>
          </header>

          <WorkflowClient content={workflow.content} />
        </div>
      </main>
    </div>
  );
}
