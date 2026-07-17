import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SERVICES } from '@/lib/data';

export const metadata = {
  title: 'Our Services — Universal Exports Limited',
  description:
    'Explore our full range of export services including ocean freight, air freight, customs clearance, and more.',
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* ── PAGE HEADER ──────────────────────────────────────────────── */}
      <section className="svc-page-hero">
        <div className="svc-page-hero-inner">
          <span className="sec-tag">OUR SERVICES</span>
          <h1 className="sec-h2">Export Solutions Built for Your Business</h1>
          <p className="sec-p">
            From ocean freight to customs clearance — we handle every step so
            your cargo moves reliably across global markets.
          </p>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────────────────── */}
      <section className="svc-page-sec">
        <div className="svc-page-inner">
          {SERVICES.map((svc) => (
            <div key={svc.slug} className="svc-page-card">
              <div className="svc-page-img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={svc.img} alt={svc.title} />
              </div>
              <div className="svc-page-card-body">
                <span className="export-svc-tag">{svc.title}</span>
                <h2 className="svc-page-card-title">{svc.title}</h2>
                <p className="svc-page-card-desc">{svc.desc}</p>

                {svc.offers && svc.offers.length > 0 && (
                  <ul className="svc-page-offers">
                    {svc.offers.map((o: string) => (
                      <li key={o}>{o}</li>
                    ))}
                  </ul>
                )}

                <Link href={`/services/${svc.slug}`} className="export-svc-btn">
                  Learn More
                  <svg viewBox="0 0 14 14" fill="none" width="14" height="14">
                    <path
                      d="M2 7h10M8 4l3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────────────── */}
      <section className="svc-page-cta">
        <div className="svc-page-cta-inner">
          <h2>Ready to Ship with Confidence?</h2>
          <p>
            Book a free consultation and let our team design the right export
            solution for your business.
          </p>
          <Link href="/contact" className="hero-btn">
            Book a Free Call
            <span className="arrow-circ primary">
              <svg viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7h10M8 4l3 3-3 3"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
