import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroCarousel from '@/components/HeroCarousel';
import { SERVICES } from '@/lib/data';

export const metadata = {
  title: 'Universal Exports Limited â Reliable Export Solutions',
  description: 'Expert export services â Fast, professional, and affordable.',
};

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ââ HERO ââââââââââââââââââââââââââââââââââââââââââââââââ */}
      <section className="hero-wrap">
        <div className="hero-body">
          <div className="hero-pill">
            <div className="hero-pill-avatars">
              {[
                'https://i.pravatar.cc/68?img=12',
                'https://i.pravatar.cc/68?img=32',
                'https://i.pravatar.cc/68?img=47',
                'https://i.pravatar.cc/68?img=5',
              ].map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={src} alt="" />
              ))}
            </div>
            <span className="hero-pill-text">
              <span className="hero-pill-num">20k+</span> Satisfied customer around the globe
            </span>
          </div>
          <h1 className="hero-h1">
            Reliable Export Solutions,<br />Anytime you Need
          </h1>
          <p className="hero-sub">
            Expert export services â Fast, professional, and affordable.
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
        <HeroCarousel />
      </section>

      {/* ââ PARTNERS âââââââââââââââââââââââââââââââââââââââââââ */}
      <section className="partners-sec">
        <div className="partners-inner">
          <p className="partners-lbl">We working with more than 500+ companies</p>
          <div className="partners-row">
            {['Maersk Line', 'MSC', 'CMA CGM', 'DHL Express'].map((p) => (
              <div key={p} className="partner-box">
                <span className="partner-box-txt">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ââ STATS BAR ââââââââââââââââââââââââââââââââââââââââââ */}
      <div className="stats-bar">
        <div className="stats-inner">
          {[
            { num: '1500', suf: '+', lbl: 'Exports' },
            { num: '92%', suf: '+', lbl: 'Customer Satisfaction' },
            { num: '24/7', suf: '', lbl: 'Support' },
          ].map((s) => (
            <div key={s.lbl} className="stat-row-item">
              <div className="stat-item">
                <div className="stat-num">{s.num}<span className="accent">{s.suf}</span></div>
                <div className="stat-lbl">{s.lbl}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ââ ABOUT ââââââââââââââââââââââââââââââââââââââââââââ */}
      <section className="about-sec">
        <div className="about-inner">
          <div>
            <span className="sec-tag">About us</span>
            <h2 className="sec-h2">Connecting Businesses Through Reliable Logistics Solutions</h2>
            <p className="sec-p">
              From port operations to global freight coordination, we provide dependable logistics
              services designed to keep supply chains moving efficiently. Our team is committed to
              delivering excellence, transparency, and long-term value in every shipment.
            </p>
            <Link href="/about" className="about-btn">
              More About Us
              <span className="arrow-circ" style={{ background: '#ffffff' }}>
                <svg viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 4l3 3-3 3" stroke="#0F110F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </div>
          <div className="about-img-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Port container operations"
            />
          </div>
        </div>
      </section>

      {/* ââ WHY CHOOSE US ââââââââââââââââââââââââââââââââââââ */}
      <section className="why-sec" id="why-choose-us">
        <div className="why-inner">
          <div className="why-img-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.pexels.com/photos/3057963/pexels-photo-3057963.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Container port crane"
            />
          </div>
          <div className="why-content">
            <span className="sec-tag">Why Choose us</span>
            <h2 className="sec-h2">Reliable Logistics Solutions Built<br />Around Your Business</h2>
            <p className="sec-p">
              We combine industry expertise, efficient operations, and a customer-focused approach
              to deliver logistics solutions you can depend on. We ensure every shipment is handled
              with precision, transparency, and care.
            </p>
            <div className="why-feats">
              <div className="why-feat">
                <div className="why-feat-icon">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/users.svg" alt="" />
                </div>
                <div>
                  <div className="why-feat-title">Professional Team</div>
                  <div className="why-feat-desc">Our experienced specialists work closely with you to ensure smooth operations, timely communication, and dependable service at every stage.</div>
                </div>
              </div>
              <div className="why-feat">
                <div className="why-feat-icon">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/money-bag.svg" alt="" />
                </div>
                <div>
                  <div className="why-feat-title">Transparent Pricing</div>
                  <div className="why-feat-desc">No hidden fees or unexpected costs. We provide clear, competitive pricing so you always know exactly what you're paying for.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ââ WHY-CHOOSE-US CTA âââââââââââââââââââââââââââââââââââ */}
      <section className="social-cta-sec">
        <div className="social-cta-box">
          <h2 className="social-cta-h2">Trusted by Businesses That Value Reliability</h2>
          <p className="social-cta-p">
            We are committed to delivering exceptional service, efficient logistics solutions, and a
            seamless experience that keeps your operations moving forward.
          </p>
          <Link href="/contact" className="social-cta-btn">
            Book a Call
            <span className="arrow-circ" style={{ background: '#0F110F' }}>
              <svg viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 4l3 3-3 3" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </div>
      </section>

      {/* ââ SERVICES âââââââââââââââââââââââââââââââââââââââââââ */}
      <section className="services-sec">
        <div className="services-inner">
          <div className="sec-center">
            <span className="sec-tag">Our Services</span>
            <h2 className="sec-h2">Export Solutions Just For Your Business</h2>
            <p className="sec-p">Reliable export services that help your goods move smoothly across global markets.</p>
          </div>
          <div className="services-grid">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="svc-card">
                {s.img ? (
                  <img src={s.img} alt={s.title} className="svc-card-img" />
                ) : (
                  <div className="svc-card-img-placeholder" />
                )}
                <div className="svc-card-body">
                  <h3 className="svc-card-title">{s.title}</h3>
                  <p className="svc-card-desc">{s.desc}</p>
                  <span className="svc-card-link">Learn More â</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ââ CTA BAND ââââââââââââââââââââââââââââââââââââââââââ */}
      <section className="cta-band">
        <div className="cta-band-center">
          <h2>Trusted by Businesses That Value Reliability</h2>
          <p>We are committed to delivering exceptional service and efficient logistics solutions.</p>
          <Link href="/contact" className="cta-band-btn">
            Book a Call
            <span className="arrow-circ" style={{ background: 'rgba(255,255,255,0.20)' }}>
              <svg viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 4l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </div>
      </section>

      {/* ââ VIDEO âââââââââââââââââââââââââââââââââââââââââââââââ */}
      <section className="video-sec">
        <div className="video-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Trade and Commerce background"
          />
          <div className="video-bg-ov" />
        </div>
        <div className="video-inner">
          <div className="video-hdr">
            <div className="video-hdr-left">
              <div className="video-av">MC</div>
              <div>
                <div className="video-org">Pakistan Chamber of Commerce &amp; Trade, USA.</div>
                <div className="video-name">Mubashir Chaudhry, DrPH</div>
              </div>
            </div>
            <div className="video-hdr-logo">
              <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
                <circle cx="28" cy="28" r="27" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="rgba(255,255,255,0.08)"/>
                <text x="28" y="22" textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="Figtree,sans-serif" letterSpacing="1">PCC&amp;T</text>
                <text x="28" y="34" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8" fontWeight="600" fontFamily="Figtree,sans-serif" letterSpacing="2">USA</text>
              </svg>
            </div>
          </div>
          <div className="video-embed-wrap">
            <iframe
              src="https://www.youtube.com/embed/igh3nmk_aUw"
              title="Pakistan Chamber of Commerce &amp; Trade, USA â Mubashir Chaudhry, DrPH"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ââ IMAGE CTA ââââââââââââââââââââââââââââââââââââââââââ */}
      <section className="img-cta-sec">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Container yard and cargo" className="cta-bg" />
        <div className="img-cta-ov" />
        <div className="img-cta-body">
          <h2>Ready to Expand Your<br />Business Globally?</h2>
          <p>Our team is here to make the process simple, efficient, and stress-free.</p>
          <Link href="/contact" className="hero-btn">
            Book a Free Call
            <span className="arrow-circ primary">
              <svg viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 4l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
