'use client';
import { useState } from 'react';

const SLIDES = ['/hero-01.jpg', '/Hero%2002.jpg', '/Hero%2003.jpg'];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const go = (dir: number) => {
    setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);
  };

  return (
    <>
      <div className="hero-img-bg">
        {SLIDES.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt="Container logistics"
            className={`hero-slide-img${i === index ? ' active' : ''}`}
          />
        ))}
      </div>
      <div className="hero-carousel-controls">
        <button type="button" className="hero-carousel-arrow" aria-label="Previous slide" onClick={() => go(-1)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/arrow-left.svg" alt="" />
        </button>
        <button type="button" className="hero-carousel-arrow" aria-label="Next slide" onClick={() => go(1)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/arrow-right.svg" alt="" />
        </button>
      </div>
    </>
  );
}
