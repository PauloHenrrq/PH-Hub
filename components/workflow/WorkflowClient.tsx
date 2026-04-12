'use client';

import { useState } from 'react';
import CopyPromptBtn from '@/components/prompt/CopyPromptBtn';

interface WorkflowContent {
  en: string;
  pt: string;
}

interface WorkflowClientProps {
  content: WorkflowContent;
}

export default function WorkflowClient({ content }: WorkflowClientProps) {
  const [lang, setLang] = useState<'en' | 'pt'>('en');

  const currentContent = content[lang];

  return (
    <>
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
      
      {/* O botão de cópia precisa estar sincronizado com o idioma atual */}
      <div className="copy-btn-container" style={{ position: 'absolute', top: '24px', right: '24px' }}>
        <CopyPromptBtn content={currentContent} />
      </div>

      <div className="prompt-frame-divider" />

      <div className="prompt-frame-body">
        <div className="workflow-content-display">
          {currentContent}
        </div>
      </div>
    </>
  );
}
