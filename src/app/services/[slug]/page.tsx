import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SERVICES } from '@/lib/data';

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const svc = SERVICES.find((s) => s.slug === params.slug);
  if (!svc) return {};
  return { title: `${svc.title} — Universal Exports`, description: svc.desc };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const svc = SERVICES.find((s) => s.slug === params.slug);
  if (!svc) notFound();

  return (
    <>
      <Navbar />

      {/* ── HERO ─────────────────────────────────── */}
      <section className="page-hero page-hero--short">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={svc.img || 'https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=1600'}
          alt={svc.title}
          className="hero-bg-img"
        />
        <div className="hero-bg-ov" />
        <div className="page-hero-body">
          <span className="sec-tag">Our Services</span>
          <h1 className="page-hero-h1">{svc.title}</h1>
          <p className="page-hero-sub">{svc.desc}</p>
        </div>
      </section>

      {/* ── CONTENT ──────────────────────────────── */}
      <section style={{ padding: '80px 0' }}>
        <div className="svc-page-wrap">
          {/* Sidebar nav */}
          <nav className="svc-sidebar">
            <div className="svc-sidebar-label">All Services</div>
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className={`svc-sidebar-link${s.slug === svc.slug ? ' active' : ''}`}
              >
                {s.title}
                <svg viewBox="0 0 14 14" fill="none">
                  <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            ))}
            <div className="svc-sidebar-cta">
              <p>Ready to get started?</p>
              <Link href="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: 12 }}>
                Get a Quote
              </Link>
            </div>
          </nav>

          {/* Main content */}
          <div className="svc-content">
            <h2>About This Service</h2>
            <p style={{ lineHeight: 1.8, color: 'var(--muted)', marginBottom: 32 }}>
              {svc.desc} Our experienced team handles every aspect of this service,
              from initial planning through to final delivery, ensuring your shipments
              move smoothly across international borders.
            </p>

            <div className="svc-two-col">
              <div className="svc-offers">
                <h3>What We Offer</h3>
                <ul>
                  {svc.offers.map((o) => (
                    <li key={o}>
                      <span className="svc-check">✓</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="svc-benefits">
                <h3>Key Benefits</h3>
                <ul>
                  {svc.benefits.map((b) => (
                    <li key={b}>
                      <span className="svc-check accent">→</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Process */}
            <div className="svc-process">
              <h3>Our Process</h3>
              <div className="svc-process-steps">
                {[
                  { n: '01', t: 'Initial Consultation', d: 'We assess your requirements and design the optimal solution for your shipment.' },
                  { n: '02', t: 'Documentation & Planning', d: 'Our team prepares all required documentation and establishes a clear timeline.' },
                  { n: '03', t: 'Execution', d: 'We coordinate all logistics partners and manage the shipment from end to end.' },
                  { n: '04', t: 'Delivery & Follow-up', d: 'We confirm successful delivery and address any post-shipment requirements.' },
                ].map((s) => (
                  <div key={s.n} className="svc-step">
                    <div className="svc-step-num">{s.n}</div>
                    <div>
                      <div className="svc-step-title">{s.t}</div>
                      <div className="svc-step-desc">{s.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="svc-cta-box">
              <h3>Ready to Ship?</h3>
              <p>
                Get a personalised quote for {svc.title.toLowerCase()} services from our
                logistics experts — we respond within 2 hours.
              </p>
              <div style={{ display: 'flex', gap: 16, marginTop: 24, flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-primary">Book a Free Call</Link>
                <Link href="/about" className="btn-secondary">Learn About Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OTHER SERVICES ───────────────────────── */}
      <section style={{ background: 'var(--light-bg)', padding: '60px 0' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 40px' }}>
          <h2 className="sec-h2" style={{ marginBottom: 32 }}>Other Services</h2>
          <div className="services-grid">
            {SERVICES.filter((s) => s.slug !== svc.slug).slice(0, 3).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="svc-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.img || 'https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=800'}
                  alt={s.title}
                  className="svc-card-img"
                />
                <div className="svc-card-body">
                  <h3 className="svc-card-title">{s.title}</h3>
                  <p className="svc-card-desc">{s.desc.substring(0, 110)}…</p>
                  <span className="svc-card-link">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
