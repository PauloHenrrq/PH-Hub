'use client';

import { useEffect } from 'react';

export function useRevealEngine() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]');
    const energyConnector = document.getElementById('energyConnector');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Garante que todo elemento que já entrou no campo visual (mesmo em pulos bruscos de cache)
          // receba o 'revealed'. Pega elementos que intersecting ativou, OU que já passaram pra cima.
          if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight - 50) {
            const el = entry.target as HTMLElement;
            const delay = parseInt(el.dataset.delay || '0', 10);
            setTimeout(() => el.classList.add('revealed'), delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));

    if (energyConnector) {
      const connectorObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight - 50) {
              energyConnector.classList.add('revealed');
              connectorObs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 }
      );
      connectorObs.observe(energyConnector);
    }

    return () => observer.disconnect();
  }, []);
}
