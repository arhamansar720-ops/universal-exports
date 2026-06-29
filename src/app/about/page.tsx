import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Us — Universal Exports Limited',
  description: 'Since 2008, Universal Exports has been connecting Nigerian businesses to global markets.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* ── PAGE HERO ────────────────────────────── */}
      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600&q=85"
          alt="Container ship"
          className="hero-bg-img"
        />
        <div className="hero-bg-ov" />
        <div className="page-hero-body">
          <span className="sec-tag">About Us</span>
          <h1 className="page-hero-h1">
            Nigeria&apos;s Most Trusted<br />Export Partner
          </h1>
          <p className="page-hero-sub">
            Since 2008, we have been the bridge between Nigerian businesses and global markets —
            delivering speed, compliance, and peace of mind on every shipment.
          </p>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────── */}
      <div className="stats-bar">
        <div className="stats-inner">
          {[
            { num: '15+', suf: '', lbl: 'Years of Experience' },
            { num: '2,417', suf: '+', lbl: 'Shipments Delivered' },
            { num: '180', suf: '+', lbl: 'Countries Reached' },
            { num: '98', suf: '%', lbl: 'Client Satisfaction' },
          ].map((s, i) => (
            <>
              <div key={s.lbl} className="stat-item">
                <div className="stat-num">{s.num}<span className="accent">{s.suf}</span></div>
                <div className="stat-lbl">{s.lbl}</div>
              </div>
              {i < 3 && <div className="stat-div" />}
            </>
          ))}
        </div>
      </div>

      {/* ── STORY SECTION ────────────────────────── */}
      <section className="about-sec" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="about-inner">
          <div className="about-img-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
              alt="Our operations"
            />
            <div className="about-badge">
              <div className="about-badge-num">15+</div>
              <div className="about-badge-lbl">Years in Business</div>
            </div>
          </div>
          <div>
            <span className="sec-tag">Our Story</span>
            <h2 className="sec-h2">Built on Trust,<br />Driven by Excellence</h2>
            <p className="sec-p">
              Universal Exports Limited was founded in Lagos in 2008 by a team of seasoned
              trade professionals who saw a gap in the market: Nigerian businesses needed a
              logistics partner that understood both local regulations and global supply chains.
            </p>
            <p className="sec-p" style={{ marginTop: 16 }}>
              From a small customs brokerage office on Lagos Island, we have grown into
              Nigeria&apos;s premier full-service export company, handling everything from
              ocean freight and air cargo to trade consulting and regulatory compliance.
            </p>
            <p className="sec-p" style={{ marginTop: 16 }}>
              Today, our team of 120+ logistics specialists manages thousands of shipments
              annually, serving clients across manufacturing, agriculture, oil &amp; gas,
              consumer goods, and technology sectors.
            </p>
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────── */}
      <section className="values-sec" style={{ background: 'var(--light-bg)', padding: '80px 0' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 40px' }}>
          <div className="sec-center">
            <span className="sec-tag">Our Values</span>
            <h2 className="sec-h2">What Drives Everything We Do</h2>
            <p className="sec-p">
              Our core values are not slogans — they are the principles our team lives by
              in every shipment, every document, and every client interaction.
            </p>
          </div>
          <div className="values-grid">
            {[
              {
                icon: '🎯',
                title: 'Reliability',
                desc: 'We do what we say. Our clients trust us because we deliver on our commitments — on time, every time, with full transparency.',
              },
              {
                icon: '⚖️',
                title: 'Integrity',
                desc: 'We operate with complete honesty in all our dealings, from accurate quoting to truthful status reporting and regulatory compliance.',
              },
              {
                icon: '💡',
                title: 'Innovation',
                desc: 'We continuously invest in technology and processes to provide our clients with faster, smarter, and more cost-effective logistics solutions.',
              },
              {
                icon: '🤝',
                title: 'Partnership',
                desc: 'We see ourselves as an extension of our clients\' teams — sharing in their success and working proactively to solve their challenges.',
              },
              {
                icon: '🌍',
                title: 'Global Mindset',
                desc: 'We think internationally from day one, with deep knowledge of global trade corridors and international regulations across all major markets.',
              },
              {
                icon: '✅',
                title: 'Compliance',
                desc: 'We maintain the highest standards of regulatory compliance, protecting our clients from penalties and ensuring smooth customs clearance.',
              },
            ].map((v) => (
              <div key={v.title} className="value-card">
                <div className="value-icon">{v.icon}</div>
                <div className="value-title">{v.title}</div>
                <div className="value-desc">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────── */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 40px' }}>
          <div className="sec-center">
            <span className="sec-tag">Leadership</span>
            <h2 className="sec-h2">Meet Our Team</h2>
            <p className="sec-p">
              Our leadership team brings together decades of experience in international
              logistics, trade finance, and supply chain management.
            </p>
          </div>
          <div className="team-grid">
            {[
              { init: 'AO', name: 'Adebayo Okafor', role: 'Chief Executive Officer', bio: '20+ years in international trade. Former VP at Maersk West Africa.' },
              { init: 'EM', name: 'Emmanuel Mensah', role: 'Chief Operations Officer', bio: 'Expert in port operations and container logistics across West Africa.' },
              { init: 'PN', name: 'Priya Nair', role: 'Head of Customs & Compliance', bio: 'Certified customs broker with 15 years in Nigerian trade regulations.' },
              { init: 'AC', name: 'Amaka Chukwu', role: 'Head of Business Development', bio: 'Drives strategic partnerships and new market development across Africa.' },
            ].map((m) => (
              <div key={m.name} className="team-card">
                <div className="team-av">{m.init}</div>
                <div className="team-name">{m.name}</div>
                <div className="team-role">{m.role}</div>
                <div className="team-bio">{m.bio}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────── */}
      <section className="cta-band">
        <div className="cta-band-inner">
          <h2>Ready to Start Exporting with Confidence?</h2>
          <div className="cta-band-btns">
            <Link href="/contact" className="btn-white">Book a Free Call</Link>
            <Link href="/services/ocean-freight" className="btn-outline-white">Our Services</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
