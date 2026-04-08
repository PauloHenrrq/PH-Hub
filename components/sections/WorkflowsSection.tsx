'use client';

import Link from 'next/link';
import { workflows } from '@/lib/data/workflows';

export default function WorkflowsSection() {
  const currentWorkflows = workflows.slice(0, 3);
  const hasMore = workflows.length > 3;

  return (
    <section className="section section-projetos" id="workflows">
      <div className="container">
        <span className="section-label" data-reveal="fade-up">✦ ANTIGRAVITY</span>
        <h2 className="section-title" data-reveal="fade-up" data-delay="100">
          Sistema de <span className="text-gradient">Workflows</span>
        </h2>
        <p className="section-description" data-reveal="fade-up" data-delay="200">
          Metodologias em pacote. Fluxos de trabalho encapsulados no ecossistema Antigravity para automatizar o roteiro de desenvolvimento, segurança e arquitetura.
        </p>

        <div className="workflows-grid">
          {currentWorkflows.map((workflow, index) => (
            <div
              key={workflow.command}
              className="glass-card workflow-card"
              data-reveal="fade-up"
              data-delay={100 + (index % 3) * 50}
            >
              <div className="workflow-command">{workflow.command}</div>
              <h3>{workflow.title}</h3>
              <p>{workflow.description}</p>
              <div className="workflow-tags">
                {workflow.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div style={{ marginTop: '48px', textAlign: 'center' }}>
            <Link href="/workflows" className="btn btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Ver mais
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
