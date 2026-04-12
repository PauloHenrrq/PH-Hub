'use client';

import Link from 'next/link';
import { workflows } from '@/lib/data/workflows';

export default function WorkflowsPage() {
  return (
    <main className="prompt-page-body">
      <div className="container prompt-page-nav">
        <Link href="/#workflows" className="prompt-back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Voltar para o hub
        </Link>
      </div>

      <div className="container" style={{ padding: '40px 14px 80px' }}>
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <span className="section-label">✦ SISTEMAS</span>
          <h1 className="section-title">Todos os <span className="text-gradient">Workflows</span></h1>
          <p className="section-description" style={{ margin: '0 auto' }}>
            Diretrizes completas e autônomas do nosso agente no código profundo.
          </p>
        </div>

        <div className="workflows-grid">
          {workflows.map((workflow, index) => {
            const slug = workflow.command.replace('/', '');
            return (
              <Link
                href={`/workflows/${slug}`}
                key={workflow.command}
                className="glass-card workflow-card"
                style={{ opacity: 1, transform: 'none', display: 'flex', textDecoration: 'none' }} /* Force visibility & flex */
              >
                <div className="workflow-command">{workflow.command}</div>
                <h3>{workflow.title}</h3>
                <p>{workflow.description}</p>
                <div className="workflow-tags">
                  {workflow.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
