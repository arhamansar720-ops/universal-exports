import Link from 'next/link';
import Navbar from '@/components/Navbar';
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

      {/* ── HERO ─────────────────────────────────── */}
      {/* Figma: blue-gray gradient bg, centered text, container render on right */}
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
        {/* Decorative container render on right */}
        <div className="hero-img-right">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=900"
            alt="Container logistics"
          />
        </div>
      </section>

      {/* ── PARTNERS ─────────────────────────────── */}
      {/* Figma: white bg, "We working with more than 500+ companies", 4 logo boxes */}
      <section className="partners-sec">
        <div className="partners-inner">
          <p className="partners-lbl">We working with more than 500+ companies</p>
          <div className="partners-row">
            {['LOGO', 'BOGO', 'POWER\nMODULE', 'logo–\nipsum'].map((p) => (
              <div key={p} className="partner-box">
                <span className="partner-box-txt">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────── */}
      {/* Figma: white bg, 3 stats */}
      <div className="stats-bar">
        <div className="stats-inner">
          {[
            { num: '1500', suf: '+', lbl: 'Exports' },
            { num: '92%', suf: '+', lbl: 'Customer Satisfaction' },
            { num: '24/7', suf: '', lbl: 'Support' },
          ].map((s, i) => (
            <div key={s.lbl} className="stat-row-item">
              <div className="stat-item">
                <div className="stat-num">{s.num}<span className="accent">{s.suf}</span></div>
                <div className="stat-lbl">{s.lbl}</div>
              </div>
              {i < 2 && <div className="stat-div" />}
            </div>
          ))}
        </div>
      </div>

      {/* ── ABOUT ────────────────────────────────── */}
      {/* Figma: text left, port image right */}
      <section className="about-sec">
        <div className="about-inner">
          <div>
            <span className="sec-tag">About us</span>
            <h2 className="sec-h2">Connecting Businesses Through<br />Reliable Logistics Solutions</h2>
            <p className="sec-p">
              From port operations to global freight coordination, we provide dependable logistics
              services designed to keep supply chains moving efficiently. Our team is committed to
              delivering excellence, transparency, and long-term value in every shipment.
            </p>
            <Link href="/about" className="about-btn">
              More About Us
              <span className="arrow-circ primary">
                <svg viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 4l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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

      {/* ── WHY CHOOSE US ────────────────────────── */}
      {/* Figma: image left, text+features right */}
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
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="why-feat-title">Professional Team</div>
                  <div className="why-feat-desc">Our experienced specialists work closely with you to ensure smooth operations, timely communication, and dependable service at every stage.</div>
                </div>
              </div>
              <div className="why-feat">
                <div className="why-feat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20">
                    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="why-feat-title">Transparent Pricing</div>
                  <div className="why-feat-desc">No hidden fees or unexpected costs. We provide clear, competitive pricing so you always know exactly what you&apos;re paying for.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND (orange) ────────────────────── */}
      {/* Figma: orange bg, centered, single "Book a Call" button */}
      <section className="cta-band">
        <div className="cta-band-center">
          <h2>Trusted by Businesses That Value Reliability</h2>
          <p>
            We are committed to delivering exceptional service, efficient logistics solutions, and a
            seamless experience that keeps your operations moving forward.
          </p>
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

      {/* ── HOW IT WORKS ─────────────────────────── */}
      {/* Figma: dark orange gradient bg, 6 steps in 2-col grid, "Book a Call" at bottom */}
      <section className="process-sec" id="how-it-works">
        <div className="process-inner">
          <div className="sec-center">
            <span className="sec-tag" style={{ background: 'rgba(255,255,255,0.12)', color: 'white', borderColor: 'rgba(255,255,255,0.20)' }}>How it Works</span>
            <h2 className="sec-h2 light">A Simple Process From Inquiry to Delivery</h2>
            <p className="sec-p light">
              We make exporting straightforward and hassle-free. From understanding your requirements
              to ensuring your cargo reaches its destination, our team guides you through every step
              of the journey.
            </p>
          </div>
          <div className="process-grid">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Share Your Requirements',
                desc: 'Tell us what you need to ship, your destination, and any specific requirements. Our team will review the details and recommend the best solution.',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Receive a Customized Quote',
                desc: 'We prepare a clear, competitive quotation based on your shipment details, ensuring complete transparency from the start.',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Documentation & Planning',
                desc: 'Our specialists assist with export documentation, compliance requirements, and shipment planning to avoid delays and complications.',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Cargo Handling & Transport',
                desc: 'Your goods are carefully processed, loaded, and transported through trusted logistics networks to ensure safe and efficient movement.',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Track Your Shipment',
                desc: 'Stay informed throughout the journey with regular updates and shipment visibility, giving you confidence at every stage.',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Successful Delivery',
                desc: 'We coordinate the final delivery and confirm completion, ensuring your cargo arrives safely and on schedule.',
              },
            ].map((p) => (
              <div key={p.title} className="proc-card">
                <div className="proc-icon">{p.icon}</div>
                <div className="proc-title">{p.title}</div>
                <div className="proc-desc">{p.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link href="/contact" className="cta-band-btn">
              Book a Call
              <span className="arrow-circ" style={{ background: 'rgba(255,255,255,0.20)' }}>
                <svg viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 4l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────── */}
      {/* Figma: white bg, 3-column, 6 services with "Learn More →" */}
      <section className="services-sec">
        <div className="services-inner">
          <div className="sec-center">
            <span className="sec-tag">Our Services</span>
            <h2 className="sec-h2">Export Solutions Just For Your Business</h2>
            <p className="sec-p">
              From documentation and freight management to customs coordination and delivery, we
              provide reliable export services that help your goods move smoothly across global markets.
            </p>
          </div>
          <div className="services-grid">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="svc-card">
                {s.img ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={s.img} alt={s.title} className="svc-card-img" />
                ) : (
                  <div className="svc-card-img-placeholder" />
                )}
                <div className="svc-card-body">
                  <h3 className="svc-card-title">{s.title}</h3>
                  <p className="svc-card-desc">{s.desc}</p>
                  <span className="svc-card-link">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO / TESTIMONIAL ───────────────────── */}
      {/* Figma: YouTube embed — Pakistan Chamber of Commerce & Trade, USA */}
      <section className="video-sec">
        <div className="video-inner">
          <div className="video-card">
            <div className="video-card-header">
              <div className="video-card-author">
                <div className="video-av">MC</div>
                <div>
                  <div className="video-org">Pakistan Chamber of Commerce &amp; Trade, USA.</div>
                  <div className="video-name">Mubashir Chaudhry, DPH</div>
                </div>
              </div>
              <div className="video-seal">
                <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
                  <circle cx="30" cy="30" r="28" stroke="#E8611A" strokeWidth="1.5"/>
                  <circle cx="30" cy="30" r="22" stroke="#E8611A" strokeWidth="1"/>
                  <text x="30" y="23" textAnchor="middle" fill="#E8611A" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif">CHAMBER OF</text>
                  <text x="30" y="30" textAnchor="middle" fill="#E8611A" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif">COMMERCE</text>
                  <text x="30" y="37" textAnchor="middle" fill="#E8611A" fontSize="4" fontFamily="sans-serif">PCCAT · USA</text>
                </svg>
              </div>
            </div>
            <div className="video-embed-wrap">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Trade &amp; Commerce"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── IMAGE CTA ────────────────────────────── */}
      {/* Figma: orange container + airplane background, "Ready to Expand Your Business Globally?" */}
      <section className="img-cta-sec">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Container yard and cargo"
          className="cta-bg"
        />
        <div className="img-cta-ov" />
        <div className="img-cta-body">
          <h2>Ready to Expand Your<br />Business Globally?</h2>
          <p>
            Whether you&apos;re shipping your first container or managing ongoing international
            exports, our team is here to make the process simple, efficient, and stress-free.
            Let&apos;s discuss the right solution for your business.
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
      </section>

      <Footer />
    </>
  );
}
