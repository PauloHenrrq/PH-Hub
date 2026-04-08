'use client';

import { useEffect } from 'react';

export function useCardSpotlight() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.querySelectorAll<HTMLElement>('.glass-card').forEach((card) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--spotlight-x', `${e.clientX - r.left}px`);
        card.style.setProperty('--spotlight-y', `${e.clientY - r.top}px`);
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);
}
