'use client';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { POSTS } from '@/lib/data';

const CATS = ['All', 'Trade Compliance', 'Logistics', 'Customs', 'Shipping Guide', 'Supply Chain'];

export default function BlogPage() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? POSTS : POSTS.filter((p) => p.cat === active);

  return (
    <>
      <Navbar />

      {/* ── PAGE HERO ────────────────────────────── */}
      <section className="page-hero page-hero--short">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.pexels.com/photos/3063470/pexels-photo-3063470.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Blog hero"
          className="hero-bg-img"
        />
        <div className="hero-bg-ov" />
        <div className="page-hero-body">
          <span className="sec-tag">Blog</span>
          <h1 className="page-hero-h1">Export Insights &amp;<br />Trade Intelligence</h1>
          <p className="page-hero-sub">
            Expert analysis, practical guides, and the latest news from the world of
            international trade and logistics.
          </p>
        </div>
      </section>

      {/* ── BLOG LIST ────────────────────────────── */}
      <section style={{ padding: '64px 0 80px' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 40px' }}>
          {/* Filter tabs */}
          <div className="blog-filters">
            {CATS.map((c) => (
              <button
                key={c}
                className={`blog-filter-btn${active === c ? ' active' : ''}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="blog-grid">
            {filtered.map((p) => (
              <Link key={p.id} href={`/blog/${p.id}`} className="blog-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.title} />
                <div className="blog-card-body">
                  <div className="blog-cat">{p.cat}</div>
                  <div className="blog-card-title">{p.title}</div>
                  <div className="blog-card-exc">{p.exc.substring(0, 130)}…</div>
                  <div className="blog-card-foot">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div className="blog-av">
                        {p.author.split(' ').map((w) => w[0]).join('')}
                      </div>
                      <span>{p.author} · {p.date}</span>
                    </div>
                    <span>{p.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--muted)' }}>
              No posts in this category yet.
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
