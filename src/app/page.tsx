import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomeFaq from '@/components/HomeFaq';
import { SERVICES, POSTS } from '@/lib/data';

export const metadata = {
  title: 'Universal Exports Limited — Reliable Export Solutions',
  description: 'Expert export services from Nigeria — Fast, professional, and affordable ocean freight, air freight, and customs clearance.',
};

const PARTNERS = ['Maersk Line', 'MSC', 'CMA CGM', 'DHL Express', 'Bolloré'];

const HOW_IT_WORKS = [
  {
    title: 'Get a Clear Cost Estimation',
    desc: 'Share your cargo details and we respond with a transparent, itemised quote within 2 business hours — no hidden charges.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
        <path d="M6 28V10l10-6 10 6v18H6Z" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M12 28v-8h8v8" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Peace of Mind',
    desc: 'Every shipment is fully insured and tracked in real-time. We handle all risk management so you can focus on your business.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
        <path d="M16 4L6 8v10c0 5.5 4.5 10 10 10s10-4.5 10-10V8L16 4Z" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M11 16l3 3 7-7" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Documentation & Compliance',
    desc: 'We prepare and file all export documents, customs declarations, and regulatory paperwork — keeping you compliant at every border.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
        <rect x="6" y="4" width="20" height="24" rx="2" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5"/>
        <path d="M11 10h10M11 15h10M11 20h6" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Fast Processing',
    desc: 'Our efficient operations minimise delays. We work around the clock to ensure cargo is processed and dispatched on schedule.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
        <circle cx="16" cy="16" r="12" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5"/>
        <path d="M16 9v7l4 4" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Pickup & Delivery',
    desc: 'From your warehouse to the destination port — we coordinate inland transport, loading, shipping, and final-mile delivery.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
        <path d="M4 22h24M4 22V12l8-6h12l4 6v10" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="10" cy="22" r="3" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5"/>
        <circle cx="22" cy="22" r="3" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: '24/7 Support',
    desc: 'Our team is available around the clock to answer questions, provide real-time updates, and resolve any issues during transit.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
        <path d="M8 12c0-4.4 3.6-8 8-8s8 3.6 8 8c0 6-8 14-8 14S8 18 8 12Z" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5"/>
        <circle cx="16" cy="12" r="3" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

const TESTIMONIALS = [
  {
    text: '"Universal Exports transformed how we ship internationally. Their team is professional, responsive, and always delivers on time. We have expanded to 8 new markets thanks to their support."',
    name: 'Aisha Abubakar',
    role: 'CEO, Abubakar Textiles',
    initials: 'AA',
  },
  {
    text: '"Outstanding service from start to finish. The customs clearance process that used to take weeks now takes days. Highly recommended for any business looking to export from West Africa."',
    name: 'Kwame Mensah',
    role: 'Director, GoldCoast Commodities',
    initials: 'KM',
  },
  {
    text: '"We have worked with Universal Exports for 3 years. Their transparent pricing and dedicated support team make them stand out from every other freight forwarder we have tried."',
    name: 'Fatima Okonkwo',
    role: 'Operations Manager, Lagos Foods Ltd',
    initials: 'FO',
  },
  {
    text: '"As a first-time exporter, I was nervous about the complexity. Universal Exports guided me through every step. Now we ship to 12 countries with complete confidence."',
    name: 'Babatunde Nwosu',
    role: 'Founder, NwosuAgro Exports',
    initials: 'BN',
  },
];

// First 3 services for the alternating showcase
const SHOWCASE_SERVICES = [
  {
    slug: 'ocean-freight',
    tag: 'OCEAN FREIGHT',
    title: 'Ocean Freight Solutions',
    desc: 'Cost-effective sea shipping for large cargo volumes. We manage full container loads (FCL) and less-than-container loads (LCL) through trusted global shipping lines, ensuring your goods arrive safely and on schedule.',
    img: 'https://images.pexels.com/photos/2231742/pexels-photo-2231742.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    slug: 'air-freight',
    tag: 'AIR FREIGHT',
    title: 'Air Freight Express',
    desc: 'Time-critical air cargo solutions with guaranteed delivery windows. Ideal for high-value, perishable, or urgent shipments — we partner with leading airlines for reliable door-to-door service worldwide.',
    img: 'https://images.pexels.com/photos/3057963/pexels-photo-3057963.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    slug: 'customs-clearance',
    tag: 'CUSTOMS CLEARANCE',
    title: 'Customs Clearance & Compliance',
    desc: 'Expert handling of all customs documentation, duties, and regulatory compliance — ensuring your shipments clear smoothly at every border with zero delays and full legal compliance.',
    img: 'https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-wrap">
        <div className="hero-body">
          <div className="hero-pill">
            <div className="hero-pill-avatars">
              <img src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=60" alt="" />
              <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=60" alt="" />
              <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60" alt="" />
              <img src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=60" alt="" />
            </div>
            <span className="hero-pill-text">
              <span className="hero-pill-num">20k+</span>
              Satisfied customers around the globe
            </span>
          </div>
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
        <div className="hero-img-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Container logistics"
          />
          <div className="hero-img-ov" />
        </div>
      </section>

      {/* ── PARTNERS ─────────────────────────────────────── */}
      <section className="partners-sec">
        <div className="partners-inner">
          <p className="partners-lbl">We work with more than 500+ companies worldwide</p>
          <div className="partners-row">
            {PARTNERS.map((p) => (
              <div key={p} className="partner-box">
                <span className="partner-box-txt">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────── */}
      <div className="stats-bar">
        <div className="stats-inner">
          {[
            { num: '1500', suf: '+', lbl: 'Clients' },
            { num: '92%', suf: '+', lbl: 'Customer Satisfaction' },
            { num: '24/7', suf: '', lbl: 'Always Support' },
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

      {/* ── ABOUT ────────────────────────────────────────── */}
      <section className="about-sec">
        <div className="about-inner">
          <div>
            <span className="sec-tag">About Us</span>
            <h2 className="sec-h2">With over 15+ years of experience,<br />our team provides top-quality services</h2>
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

      {/* ── WHY CHOOSE US ────────────────────────────────── */}
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
            <span className="sec-tag">Why Choose Us</span>
            <h2 className="sec-h2">Reliable Logistics Solutions Built<br />Around Your Business</h2>
            <p className="sec-p">
              We combine industry expertise, efficient operations, and a customer-focused approach
              to deliver logistics solutions you can depend on — every shipment, every time.
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
                  <div className="why-feat-desc">Our experienced specialists work closely with you to ensure smooth operations and dependable service at every stage.</div>
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
                  <div className="why-feat-desc">No hidden fees or unexpected costs. Clear, competitive pricing so you always know exactly what you pay.</div>
                </div>
              </div>
              <div className="why-feat">
                <div className="why-feat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="why-feat-title">Backed by Customer Satisfaction</div>
                  <div className="why-feat-desc">92%+ of our clients rate our service as excellent. We are committed to building long-term relationships, not just transactions.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section className="how-export-sec" id="how-it-works">
        <div className="how-export-inner">
          <div className="how-export-hdr">
            <div>
              <span className="sec-tag how-export-tag">How It Works</span>
              <h2 className="sec-h2 light">How Our Export Service Works</h2>
              <p className="sec-p light">
                From inquiry to delivery — our streamlined process ensures your cargo moves
                efficiently and safely across global markets.
              </p>
            </div>
            <Link href="/services/ocean-freight" className="how-export-cta-btn">
              Explore all our services
              <span className="arrow-circ" style={{ background: 'rgba(255,255,255,0.15)' }}>
                <svg viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 4l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </div>

          <div className="how-export-grid">
            {HOW_IT_WORKS.map((card) => (
              <div key={card.title} className="how-export-card">
                <div className="how-export-icon">{card.icon}</div>
                <div className="how-export-title">{card.title}</div>
                <div className="how-export-desc">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPORT SERVICES (showcase) ────────────────────── */}
      <section className="export-svc-sec">
        <div className="export-svc-inner">
          <div className="sec-center">
            <span className="sec-tag">Our Services</span>
            <h2 className="sec-h2">Export Solutions Just For Your Business</h2>
            <p className="sec-p">Reliable export services that help your goods move smoothly across global markets.</p>
          </div>

          {SHOWCASE_SERVICES.map((svc, i) => (
            <div key={svc.slug} className={`export-svc-row${i % 2 !== 0 ? ' reverse' : ''}`}>
              <div className="export-svc-img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={svc.img} alt={svc.title} />
              </div>
              <div>
                <span className="sec-tag">{svc.tag}</span>
                <h2 className="export-svc-title">{svc.title}</h2>
                <p className="export-svc-desc">{svc.desc}</p>
                <Link href={`/services/${svc.slug}`} className="export-svc-btn">
                  Learn More
                  <span className="arrow-circ dark">
                    <svg viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 4l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          ))}

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link href="/services/ocean-freight" className="btn-secondary">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="testimonials-sec">
        <div className="testimonials-inner">
          <div className="sec-center">
            <span className="sec-tag">Testimonials</span>
            <h2 className="sec-h2">What Our Customers Say</h2>
            <p className="sec-p" style={{ margin: '0 auto' }}>
              Real feedback from businesses that trust Universal Exports to move their cargo across the globe.
            </p>
          </div>
          <div className="testi-grid">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="testi-card">
                <div className="testi-stars">★★★★★</div>
                <p className="testi-text">{t.text}</p>
                <div className="testi-author">
                  <div className="testi-av">{t.initials}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ─────────────────────────────────── */}
      <section className="blog-sec">
        <div className="blog-inner">
          <div className="sec-center">
            <span className="sec-tag">Blog Post</span>
            <h2 className="sec-h2">Export Tips &amp; Resources</h2>
            <p className="sec-p" style={{ margin: '0 auto' }}>
              Stay informed with expert advice, practical guides, and the latest trends in international trade.
            </p>
          </div>
          <div className="blog-grid">
            {POSTS.slice(0, 3).map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="blog-card">
                <div className="blog-card-img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.img} alt={post.title} className="blog-card-img" />
                </div>
                <div className="blog-card-body">
                  <span className="sec-tag blog-card-tag" style={{ marginBottom: 8 }}>{post.cat}</span>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-desc">{post.exc}</p>
                  <span className="blog-card-link">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMAGE CTA ────────────────────────────────────── */}
      <section className="img-cta-sec">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Container yard" className="cta-bg" />
        <div className="img-cta-ov" />
        <div className="img-cta-body">
          <h2>Don&apos;t Let Export Problems<br />Disrupt Your Day</h2>
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

      {/* ── FAQ ──────────────────────────────────────────── */}
      <HomeFaq />

      <Footer />
    </>
  );
}
