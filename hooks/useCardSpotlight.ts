'use client';

import { useEffect } from 'react';

/**
 * useCardSpotlight gerencia o efeito de luz nos cards (.glass-card).
 * Otimizado para usar delegação de eventos, evitando loops em todos os cards da página.
 */
export function useCardSpotlight() {
  useEffect(() => {
    let rafId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY, target } = e;

      if (rafId) return;

      rafId = window.requestAnimationFrame(() => {
        const card = (target as HTMLElement).closest('.glass-card') as HTMLElement | null;

        if (card) {
          const rect = card.getBoundingClientRect();
          const x = clientX - rect.left;
          const y = clientY - rect.top;
          
          card.style.setProperty('--spotlight-x', `${x}px`);
          card.style.setProperty('--spotlight-y', `${y}px`);
        }
        
        rafId = null;
      });
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
}
