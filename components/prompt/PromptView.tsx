'use client';

import { useState } from 'react';

interface PromptViewProps {
  category: string;
  title: string;
  description: string;
  content: string;
}

export default function PromptView({ category, title, description, content }: PromptViewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="prompt-frame">
      <div className="frame-corner frame-corner--tl" />
      <div className="frame-corner frame-corner--tr" />
      <div className="frame-corner frame-corner--bl" />
      <div className="frame-corner frame-corner--br" />

      <div className="prompt-frame-header">
        <div className="prompt-frame-meta">
          <span className="prompt-frame-category">{category}</span>
          <h1 className="prompt-frame-title">{title}</h1>
          <p className="prompt-frame-desc">{description}</p>
        </div>
        <button
          className={`prompt-copy-btn${copied ? ' copied' : ''}`}
          onClick={handleCopy}
          aria-label="Copiar prompt"
        >
          {copied ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Copiado!
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copiar
            </>
          )}
        </button>
      </div>

      <div className="prompt-frame-divider" />
      <pre className="prompt-frame-body">{content}</pre>
    </div>
  );
}
