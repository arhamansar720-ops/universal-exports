'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const NAV_LINKS = [
  { label: 'About Us',      href: '/about' },
  { label: 'Why Choose Us', href: '/#why-choose-us' },
  { label: 'How It Works',  href: '/#how-it-works' },
  { label: 'Our Services',  href: '/services/ocean-freight' },
  { label: 'Blogs',         href: '/blog' },
  { label: 'FAQ',           href: '/contact#faq' },
];

const ALL_PAGES = [
  { label: 'Home',            href: '/' },
  { label: 'About Us',        href: '/about' },
  { label: 'Our Services',    href: '/services/ocean-freight' },
  { label: 'Ocean Freight',   href: '/services/ocean-freight' },
  { label: 'Air Freight',     href: '/services/air-freight' },
  { label: 'Customs Clearance', href: '/services/customs-clearance' },
  { label: 'Blog',            href: '/blog' },
  { label: 'Contact',         href: '/contact' },
  { label: 'FAQ',             href: '/contact#faq' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    if (pathname !== '/') setScrolled(true);
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' is-scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <Link href="/" className="navbar-logo">
          {/* Company logo: blue globe with silver swoosh blades */}
          <svg width="44" height="44" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {/* Silver swoosh blades */}
            <g opacity="0.92">
              {/* Top-right blade */}
              <path d="M55 8 Q80 2 88 18 Q72 10 55 14 Z" fill="url(#sw1)"/>
              <path d="M62 5 Q88 -2 95 20 Q80 8 62 12 Z" fill="url(#sw2)" opacity="0.7"/>
              {/* Bottom-left blade */}
              <path d="M45 92 Q20 98 12 82 Q28 90 45 86 Z" fill="url(#sw1)"/>
              <path d="M38 95 Q12 102 5 80 Q20 92 38 88 Z" fill="url(#sw2)" opacity="0.7"/>
              {/* Top-left blade */}
              <path d="M18 30 Q4 14 16 4 Q16 22 24 34 Z" fill="url(#sw1)"/>
              <path d="M12 22 Q-2 4 12 -4 Q10 16 20 28 Z" fill="url(#sw2)" opacity="0.7"/>
              {/* Bottom-right blade */}
              <path d="M82 70 Q96 86 84 96 Q84 78 76 66 Z" fill="url(#sw1)"/>
              <path d="M88 78 Q102 96 88 104 Q90 84 80 72 Z" fill="url(#sw2)" opacity="0.7"/>
            </g>
            {/* Globe base */}
            <circle cx="50" cy="50" r="32" fill="url(#globeGrad)"/>
            {/* Globe shading */}
            <circle cx="50" cy="50" r="32" fill="url(#globeSheen)" opacity="0.5"/>
            {/* Continents (North & South America silhouette) */}
            <g fill="white" opacity="0.92">
              {/* North America */}
              <path d="M36 24 Q42 22 46 26 Q50 24 52 28 Q56 26 58 30 Q60 36 58 42 Q54 46 50 44 Q46 48 42 46 Q38 48 36 44 Q32 40 30 34 Q28 28 32 24 Z"/>
              {/* South America */}
              <path d="M42 52 Q48 50 52 54 Q56 58 54 66 Q52 74 46 76 Q40 74 38 68 Q36 60 38 54 Z"/>
            </g>
            {/* Gradient defs */}
            <defs>
              <linearGradient id="globeGrad" x1="20%" y1="15%" x2="80%" y2="85%">
                <stop offset="0%" stopColor="#5b9ec9"/>
                <stop offset="50%" stopColor="#2b6a9a"/>
                <stop offset="100%" stopColor="#1a4d73"/>
              </linearGradient>
              <radialGradient id="globeSheen" cx="35%" cy="30%" r="55%">
                <stop offset="0%" stopColor="white" stopOpacity="0.25"/>
                <stop offset="100%" stopColor="white" stopOpacity="0"/>
              </radialGradient>
              <linearGradient id="sw1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d0d5dc"/>
                <stop offset="50%" stopColor="#a8aeb8"/>
                <stop offset="100%" stopColor="#c8cdd6"/>
              </linearGradient>
              <linearGradient id="sw2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e8eaed"/>
                <stop offset="100%" stopColor="#9aa0ab"/>
              </linearGradient>
            </defs>
          </svg>
          <span>
            <div className="navbar-logo-txt" style={{ color: 'white' }}>UNIVERSAL</div>
            <div className="navbar-logo-sub" style={{ color: 'rgba(255,255,255,0.65)' }}>Exports Pvt. Ltd.</div>
          </span>
        </Link>

        {/* White pill: nav links + CTA */}
        <div className="navbar-pill">
          <div className="navbar-links">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`navbar-link${
                  pathname === l.href ||
                  (l.href !== '/' && pathname.startsWith(l.href.replace('/ocean-freight', '')))
                    ? ' active'
                    : ''
                }`}
              >
                {l.label}
              </Link>
            ))}

            {/* All Page dropdown */}
            <div ref={dropRef} style={{ position: 'relative' }}>
              <button
                className="navbar-link"
                onClick={() => setDropOpen((o) => !o)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}
              >
                All Page
                <svg viewBox="0 0 14 14" fill="none" style={{ width: 12, height: 12, transition: 'transform .2s', transform: dropOpen ? 'rotate(180deg)' : 'none' }}>
                  <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {dropOpen && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                  background: '#fff', borderRadius: 14, boxShadow: '0 8px 32px rgba(0,0,0,0.13)',
                  border: '1.5px solid #E5E5E0', minWidth: 200, zIndex: 200, overflow: 'hidden',
                }}>
                  {ALL_PAGES.map((p) => (
                    <Link
                      key={p.href + p.label}
                      href={p.href}
                      onClick={() => setDropOpen(false)}
                      style={{
                        display: 'block', padding: '11px 18px',
                        fontSize: 14, fontWeight: 500, color: '#0F110F',
                        transition: 'background .12s, color .12s',
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#FFF4EF'; (e.currentTarget as HTMLElement).style.color = '#E8611A'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = ''; (e.currentTarget as HTMLElement).style.color = '#0F110F'; }}
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <Link href="/contact" className="navbar-cta">
            Book a Call
            <span className="navbar-cta-icon">
              <svg viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const NAV_LINKS = [
  { label: 'About Us',      href: '/about' },
  { label: 'Why Choose Us', href: '/#why-choose-us' },
  { label: 'How It Works',  href: '/#how-it-works' },
  { label: 'Our Services',  href: '/services/ocean-freight' },
  { label: 'Blogs',         href: '/blog' },
  { label: 'FAQ',           href: '/contact#faq' },
];

const ALL_PAGES = [
  { label: 'Home',              href: '/' },
  { label: 'About Us',          href: '/about' },
  { label: 'Our Services',      href: '/services/ocean-freight' },
  { label: 'Ocean Freight',     href: '/services/ocean-freight' },
  { label: 'Air Freight',       href: '/services/air-freight' },
  { label: 'Customs Clearance', href: '/services/customs-clearance' },
  { label: 'Blog',              href: '/blog' },
  { label: 'Contact',           href: '/contact' },
  { label: 'FAQ',               href: '/contact#faq' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    if (pathname !== '/') setScrolled(true);
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' is-scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link href="/" className="navbar-logo">
          <span className="navbar-logo-wrap">
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="7" stroke="white" strokeWidth="1.5"/>
              <path d="M3 10h14" stroke="white" strokeWidth="1.2"/>
              <path d="M10 3c-2 2-3 4.5-3 7s1 5 3 7" stroke="white" strokeWidth="1.2"/>
              <path d="M10 3c2 2 3 4.5 3 7s-1 5-3 7" stroke="white" strokeWidth="1.2"/>
            </svg>
          </span>
          <span>
            <div className="navbar-logo-txt">UNIVERSAL</div>
            <div className="navbar-logo-sub">Exports Pvt. Ltd.</div>
          </span>
        </Link>

        <div className="navbar-pill">
          <div className="navbar-links">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`navbar-link${
                  pathname === l.href ||
                  (l.href !== '/' && pathname.startsWith(l.href.replace('/ocean-freight', '')))
                    ? ' active'
                    : ''
                }`}
              >
                {l.label}
              </Link>
            ))}

            <div ref={dropRef} style={{ position: 'relative' }}>
              <button
                className="navbar-link"
                onClick={() => setDropOpen((o) => !o)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit' }}
              >
                All Page
                <svg viewBox="0 0 14 14" fill="none" style={{ width: 12, height: 12, transition: 'transform .2s', transform: dropOpen ? 'rotate(180deg)' : 'none' }}>
                  <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {dropOpen && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                  background: '#fff', borderRadius: 14,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.13)',
                  border: '1.5px solid #E5E5E0', minWidth: 210, zIndex: 200, overflow: 'hidden',
                }}>
                  {ALL_PAGES.map((p) => (
                    <Link
                      key={p.href + p.label}
                      href={p.href}
                      onClick={() => setDropOpen(false)}
                      style={{
                        display: 'block', padding: '11px 18px',
                        fontSize: 14, fontWeight: 500, color: '#0F110F',
                        textDecoration: 'none',
                        borderBottom: '1px solid #F5F5F2',
                        transition: 'background .12s, color .12s',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.background = '#FFF4EF';
                        (e.currentTarget as HTMLElement).style.color = '#E8611A';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.background = '';
                        (e.currentTarget as HTMLElement).style.color = '#0F110F';
                      }}
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <Link href="/contact" className="navbar-cta">
            Book a Call
            <span className="navbar-cta-icon">
              <svg viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'About Us',      href: '/about' },
  { label: 'Why Choose Us', href: '/#why-choose-us' },
  { label: 'How It Works',  href: '/#how-it-works' },
  { label: 'Our Services',  href: '/services/ocean-freight' },
  { label: 'Blogs',         href: '/blog' },
  { label: 'FAQ',           href: '/contact#faq' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    // Non-home pages start "scrolled" (dark bar)
    if (pathname !== '/') setScrolled(true);
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  return (
    <nav className={`navbar${scrolled ? ' is-scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <Link href="/" className="navbar-logo">
          <span className="navbar-logo-wrap">
            {/* Globe icon */}
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="7" stroke="white" strokeWidth="1.5"/>
              <path d="M3 10h14" stroke="white" strokeWidth="1.2"/>
              <path d="M10 3c-2 2-3 4.5-3 7s1 5 3 7" stroke="white" strokeWidth="1.2"/>
              <path d="M10 3c2 2 3 4.5 3 7s-1 5-3 7" stroke="white" strokeWidth="1.2"/>
            </svg>
          </span>
          <span>
            <div className="navbar-logo-txt">UNIVERSAL</div>
            <div className="navbar-logo-sub">Exports Pvt. Ltd.</div>
          </span>
        </Link>

        {/* White pill: nav links + CTA */}
        <div className="navbar-pill">
          <div className="navbar-links">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`navbar-link${
                  pathname === l.href ||
                  (l.href !== '/' && pathname.startsWith(l.href.replace('/ocean-freight', '')))
                    ? ' active'
                    : ''
                }`}
              >
                {l.label}
              </Link>
            ))}
            <span className="navbar-link" style={{ cursor: 'default', userSelect: 'none' }}>
              All Page
              <svg viewBox="0 0 14 14" fill="none" style={{ display:'inline-block', marginLeft:2, verticalAlign:'middle' }}>
                <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>

          <Link href="/contact" className="navbar-cta">
            Book a Call
            <span className="navbar-cta-icon">
              <svg viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
