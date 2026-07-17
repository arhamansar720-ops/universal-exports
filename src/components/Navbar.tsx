'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const NAV_LINKS = [
  { label: 'About Us',      href: '/about' },
  { label: 'Why Choose Us', href: '/#why-choose-us' },
  { label: 'How It Works',  href: '/#how-it-works' },
  { label: 'Our Services',  href: '/services' },
  { label: 'Blogs',         href: '/blog' },
  { label: 'FAQ',           href: '/contact#faq' },
];

const ALL_PAGES = [
  { label: 'Home',            href: '/' },
  { label: 'About Us',        href: '/about' },
  { label: 'Our Services',    href: '/services' },
  { label: 'Ocean Freight',   href: '/services' },
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
  const [menuOpen, setMenuOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    if (pathname !== '/') setScrolled(true);
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Universal Exports" width={174} height={56} style={{ height: 56, width: 'auto', objectFit: 'contain' }} />
        </Link>

        <button
          className={`navbar-mobile-btn${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span/><span/><span/>
        </button>

        <div className={`navbar-mobile-menu${menuOpen ? ' open' : ''}`}>
          {NAV_LINKS.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`navbar-mobile-link${pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href.replace('/ocean-freight', ''))) ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="navbar-mobile-cta" onClick={() => setMenuOpen(false)}>
            Book a Free Call
          </Link>
        </div>

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
