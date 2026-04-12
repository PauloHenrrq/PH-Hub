'use client';

import { useEffect, ReactNode } from 'react';
import { useRevealEngine } from '@/hooks/useRevealEngine';
import { useCardSpotlight } from '@/hooks/useCardSpotlight';

interface RevealProviderProps {
  children: ReactNode;
}

/**
 * RevealProvider centraliza as orquestrações de animação e interatividade 
 * baseadas no DOM que antes forçavam a HomePage a ser um Client Component.
 */
export default function RevealProvider({ children }: RevealProviderProps) {
  // Ativa a engine de reveal (data-reveal)
  useRevealEngine();
  
  // Ativa o efeito de spotlight nos cards (.glass-card)
  useCardSpotlight();

  // Orquestra a revelação das linhas de construção (data-build-line)
  useEffect(() => {
    const buildLineObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Ativa se estiver visível ou já tiver passado do topo
          if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight - 50) {
            (entry.target as HTMLElement).classList.add('revealed');
            buildLineObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const lines = document.querySelectorAll('[data-build-line]');
    lines.forEach((el) => buildLineObs.observe(el));

    return () => buildLineObs.disconnect();
  }, []);

  return <>{children}</>;
}
