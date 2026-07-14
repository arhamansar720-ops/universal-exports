TEST_CONTENT_12345 Link from 'next/link';import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SERVICES } from '@/lib/data';

export const metadata = {
  title: 'Universal Exports Limited — Reliable Export Solutions',
  description: 'Expert export services — Fast, professional, and affordable.',
};

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="hero-wrap">
        <div className="hero-body">
          <h1 className="hero-h1">
            Reliable Export Solutions,<br />Anytime you Need
          </h1>
          <p className="hero-sub">
            Expert export services — Fast, professional, and affordable.
          </p>
          <Link href="/contact" className="hero-btn">
            Book a Free Call
            <span className="arrow-circ primary">
              <svg viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 4l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </div>
        <div className="hero-img-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
