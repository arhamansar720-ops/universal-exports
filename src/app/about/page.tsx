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
          src="https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=1600"
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
              src="https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Our operations"
            />
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
              { icon: '🎯', title: 'Reliability', desc: 'We do what we say. Our clients trust us because we deliver on our commitments — on time, every time, with full transparency.' },
              { icon: '⚖️', title: 'Integrity', desc: 'We operate with complete honesty in all our dealings, from accurate quoting to truthful status reporting and regulatory compliance.' },
              { icon: '💡', title: 'Innovation', desc: 'We continuously invest in technology and processes to provide our clients with faster, smarter, and more cost-effective logistics solutions.' },
              { icon: '🤝', title: 'Partnership', desc: "We see ourselves as an extension of our clients' teams — sharing in their success and working proactively to solve their challenges." },
              { icon: '🌍', title: 'Global Mindset', desc: 'We think internationally from day one, with deep knowledge of global trade corridors and international regulations across all major markets.' },
              { icon: '✅', title: 'Compliance', desc: 'We maintain the highest standards of regulatory compliance, protecting our clients from penalties and ensuring smooth customs clearance.' },
            ].map((v) => (
              <div key={v.title} className="val-card">
                <div style={{ fontSize: 28, marginBottom: 16 }}>{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginTop: 0 }}>
            {[
              { init: 'AO', name: 'Adebayo Okafor', role: 'Chief Executive Officer', bio: '20+ years in international trade. Former VP at Maersk West Africa.' },
              { init: 'EM', name: 'Emmanuel Mensah', role: 'Chief Operations Officer', bio: 'Expert in port operations and container logistics across West Africa.' },
              { init: 'PN', name: 'Priya Nair', role: 'Head of Customs & Compliance', bio: 'Certified customs broker with 15 years in Nigerian trade regulations.' },
              { init: 'AC', name: 'Amaka Chukwu', role: 'Head of Business Development', bio: 'Drives strategic partnerships and new market development across Africa.' },
            ].map((m) => (
              <div key={m.name} className="val-card" style={{ textAlign: 'center' }}>
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: 'var(--primary)', color: 'var(--white)',
                  fontSize: 20, fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>{m.init}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--dark)', marginBottom: 4 }}>{m.name}</h3>
                <div style={{ fontSize: 13, color: 'var(--primary)', fontWeight: 600, marginBottom: 14 }}>{m.role}</div>
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────── */}
      <section className="cta-band">
        <div className="cta-band-center">
          <h2>Ready to Start Exporting with Confidence?</h2>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginTop: 8 }}>
            <Link href="/contact" className="cta-band-btn">Book a Free Call</Link>
            <Link href="/services/ocean-freight" className="cta-band-btn">Our Services</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
