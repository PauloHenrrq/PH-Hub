'use client';

import { useRef, useEffect, useCallback } from 'react';

interface CarouselProps {
  children: React.ReactNode;
}

export default function Carousel({ children }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const getItems = useCallback(() => {
    return trackRef.current
      ? Array.from(trackRef.current.querySelectorAll<HTMLElement>('.carousel-item'))
      : [];
  }, []);

  const getVisibleCount = useCallback(() => {
    if (!trackRef.current) return 1;
    const items = getItems();
    if (items.length === 0) return 1;
    const trackW = trackRef.current.clientWidth;
    const itemW = items[0].offsetWidth + 24;
    return Math.max(1, Math.round(trackW / itemW));
  }, [getItems]);

  const getDotCount = useCallback(() => {
    const items = getItems();
    const vis = getVisibleCount();
    return Math.max(1, items.length - vis + 1);
  }, [getItems, getVisibleCount]);

  const updateDots = useCallback(() => {
    if (!dotsRef.current || !trackRef.current) return;
    const dots = dotsRef.current.querySelectorAll<HTMLElement>('.carousel-dot');
    const scrollLeft = trackRef.current.scrollLeft;
    const maxScroll = trackRef.current.scrollWidth - trackRef.current.clientWidth;
    const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
    const activeIdx = Math.round(progress * (dots.length - 1));
    dots.forEach((d, i) => d.classList.toggle('active', i === activeIdx));
  }, []);

  const buildDots = useCallback(() => {
    if (!dotsRef.current) return;
    dotsRef.current.innerHTML = '';
    const count = getDotCount();
    for (let i = 0; i < count; i++) {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Slide ${i + 1}`);
      dot.addEventListener('click', () => {
        const items = getItems();
        if (!trackRef.current || items.length === 0) return;
        const itemW = items[0].offsetWidth + 24;
        trackRef.current.scrollTo({ left: itemW * i, behavior: 'smooth' });
      });
      dotsRef.current.appendChild(dot);
    }
  }, [getDotCount, getItems]);

  useEffect(() => {
    buildDots();
    const handleResize = () => { buildDots(); updateDots(); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [buildDots, updateDots]);

  const scrollBy = (direction: 'prev' | 'next') => {
    const items = getItems();
    if (!trackRef.current || items.length === 0) return;
    const itemW = items[0].offsetWidth + 24;
    trackRef.current.scrollBy({ left: direction === 'next' ? itemW : -itemW, behavior: 'smooth' });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeftStart.current = trackRef.current.scrollLeft;
    trackRef.current.style.scrollSnapType = 'none';
    trackRef.current.style.scrollBehavior = 'auto';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = scrollLeftStart.current - (x - startX.current) * 1.5;
  };

  const handleDragEnd = () => {
    if (!isDragging.current || !trackRef.current) return;
    isDragging.current = false;
    trackRef.current.style.scrollSnapType = 'x mandatory';
    trackRef.current.style.scrollBehavior = 'smooth';
  };

  let scrollTimeout: ReturnType<typeof setTimeout>;
  const handleScroll = () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateDots, 80);
  };

  return (
    <div className="carousel">
      <button
        className="carousel-btn carousel-btn--prev"
        aria-label="Anterior"
        onClick={() => scrollBy('prev')}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <div
        ref={trackRef}
        className="carousel-track"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onScroll={handleScroll}
        onTouchStart={(e) => {
          startX.current = e.touches[0].pageX - (trackRef.current?.offsetLeft ?? 0);
          scrollLeftStart.current = trackRef.current?.scrollLeft ?? 0;
        }}
      >
        {children}
      </div>

      <button
        className="carousel-btn carousel-btn--next"
        aria-label="Próximo"
        onClick={() => scrollBy('next')}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div ref={dotsRef} className="carousel-dots" />
    </div>
  );
}
