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
