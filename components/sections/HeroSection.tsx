'use client';

import { useRef, useEffect, useState } from 'react';

export default function HeroSection() {
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const activeRef = useRef<'a' | 'b'>('a');
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const vA = videoARef.current;
    const vB = videoBRef.current;
    if (!vA || !vB) return;

    vA.classList.add('hero-video--active');

    const swap = () => {
      const incoming = activeRef.current === 'a' ? vB : vA;
      const outgoing = activeRef.current === 'a' ? vA : vB;

      incoming.currentTime = 0;
      incoming.play().catch(() => {});
      incoming.classList.add('hero-video--active');
      outgoing.classList.remove('hero-video--active');
      activeRef.current = activeRef.current === 'a' ? 'b' : 'a';
    };

    vA.addEventListener('ended', swap);
    vB.addEventListener('ended', swap);

    vA.play().catch(() => {});

    return () => {
      vA.removeEventListener('ended', swap);
      vB.removeEventListener('ended', swap);
    };
  }, []);

  useEffect(() => {
    const handler = () => setShowScroll(window.scrollY <= 80);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Video ping-pong */}
      <div className="hero-video-layer" aria-hidden="true">
        <video
          ref={videoARef}
          className="hero-video"
          src="/videos/hero-forward.mp4"
          muted
          playsInline
          preload="auto"
        />
        <video
          ref={videoBRef}
          className="hero-video"
          src="/videos/hero-reversed.mp4"
          muted
          playsInline
          preload="auto"
        />
        <div className="hero-vignette" />
        <div className="hero-video-overlay" />
      </div>

      {/* Content */}
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge" data-reveal="fade-up" data-delay="0">
            ✦ LABORATÓRIO PESSOAL
          </div>
          <h1 className="hero-title" data-reveal="fade-up" data-delay="100">
            PH <span className="text-gradient">HUB</span>
          </h1>
          <p className="hero-subtitle" data-reveal="fade-up" data-delay="200">
            Onde Inteligência Artificial, código e design se encontram. Um hub pessoal 
            de experimentação com prompts de engenharia fina e fluxos de trabalho otimizados.
          </p>
          <div className="hero-actions" data-reveal="fade-up" data-delay="300">
            <a href="#sobre" className="btn btn-primary">
              Explorar
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </a>
            <a href="#prompts" className="btn btn-ghost">Ver Prompts</a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`scroll-indicator${showScroll ? '' : ' hidden'}`} aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-indicator-line" />
      </div>
    </section>
  );
}
