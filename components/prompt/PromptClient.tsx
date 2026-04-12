'use client';

import { useState } from 'react';
import CopyPromptBtn from '@/components/prompt/CopyPromptBtn';

interface Translation {
  title: string;
  description: string;
  content: string;
}

interface PromptClientProps {
  tag: string;
  translations: {
    en: Translation;
    pt: Translation;
  };
  isSoon: boolean;
}

export default function PromptClient({ tag, translations, isSoon }: PromptClientProps) {
  const [lang, setLang] = useState<'en' | 'pt'>('pt'); // Default to PT-BR for consistency

  const current = translations[lang];

  return (
    <div className="prompt-frame">
      <div className="frame-corner frame-corner--tl" />
      <div className="frame-corner frame-corner--tr" />
      <div className="frame-corner frame-corner--bl" />
      <div className="frame-corner frame-corner--br" />

      <header className="prompt-frame-header">
        <div className="prompt-frame-meta">
          <span className="prompt-frame-category">{tag}</span>
          <h1 className="prompt-frame-title">{current.title}</h1>
          <p className="prompt-frame-desc">{current.description}</p>
          
          <div className="language-switcher">
            <button 
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
            <div className="lang-divider">|</div>
            <button 
              className={`lang-btn ${lang === 'pt' ? 'active' : ''}`}
              onClick={() => setLang('pt')}
            >
              PT-BR
            </button>
          </div>
        </div>
        {!isSoon && current.content && (
          <CopyPromptBtn content={current.content} />
        )}
      </header>

      <div className="prompt-frame-divider" />

      <div className="prompt-frame-body">
        {isSoon || !current.content ? (
          <div style={{ textAlign: 'center', opacity: 0.6, fontStyle: 'italic', padding: '40px 0' }}>
            <span style={{ fontSize: '2rem', display: 'block', marginBottom: '16px' }}>🚧</span>
            {lang === 'pt' ? (
              <>
                Engenharia de prompt em desenvolvimento.<br />
                Volte em breve para acesso aos comandos.
              </>
            ) : (
              <>
                Prompt engineering in development.<br />
                Check back soon for command access.
              </>
            )}
          </div>
        ) : (
          <div className="workflow-content-display">
            {current.content}
          </div>
        )}
      </div>
    </div>
  );
}
