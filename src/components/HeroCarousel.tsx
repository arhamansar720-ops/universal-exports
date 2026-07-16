'use client';
import { useState, useEffect, useCallback } from 'react';

const SLIDES = [
  { src: 'https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Container ship at sea' },
  { src: 'https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Container port terminal' },
  { src: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Global cargo logistics' },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const next = useCallback(() => setActive(a => (a + 1) % SLIDES.length), []);
  const prev = useCallback(() => setActive(a => (a - 1 + SLIDES.length) % SLIDES.length), []);
  useEffect(() => { const t = setInterval(next, 5000); return () => clearInterval(t); }, [next]);

  return (
    <>
      <div className="hero-img-bg">
        {SLIDES.map((s, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} src={s.src} alt={s.alt} className={`hero-slide-img${i === active ? ' active' : ''}`} />
        ))}
        <div className="hero-img-ov" />
      </div>
      <div className="hero-carousel-controls">
        <button type="button" className="hero-carousel-arrow" onClick={prev} aria-label="Previous slide">
          <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
            <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button type="button" className="hero-carousel-arrow" onClick={next} aria-label="Next slide">
          <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
            <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </>
  );
}
