import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroCarousel from '@/components/HeroCarousel';
import HomeFaq from '@/components/HomeFaq';
import { SERVICES, PARTNERS, POSTS } from '@/lib/data';

export const metadata = {
  title: 'Universal Exports Limited — Reliable Export Solutions',
  description: 'Expert export services — Fast, professional, and affordable.',
};

const HOW_STEPS = [
  { tag: 'STEP 01', icon: '💰', title: 'Get a Clear Cost Estimation', desc: 'Share your cargo details and we respond with a transparent, itemised quote within 2 business hours — no hidden charges.' },
  { tag: 'STEP 02', icon: '🛡️', title: 'Peace of Mind', desc: 'Every shipment is fully insured and tracked in real-time. We handle all risk management so you can focus on your business.' },
  { tag: 'STEP 03', icon: '📄', title: 'Documentation & Compliance', desc: 'We prepare and file all export documents, customs declarations, and regulatory paperwork — keeping you compliant at every border.' },
  { tag: 'STEP 04', icon: '⚡', title: 'Fast Processing', desc: 'Our efficient operations minimise delays. We work around the clock to ensure cargo is processed and dispatched on schedule.' },
  { tag: 'STEP 05', icon: '🚚', title: 'Pickup & Delivery', desc: 'From your warehouse to the destination port — we coordinate inland transport, loading, shipping, and final-mile delivery.' },
  { tag: 'STEP 06', icon: '📞', title: '24/7 Support', desc: 'Our team is available around the clock to handle any questions, updates, or urgent requirements throughout your shipment journey.' },
];

const TESTIMONIALS = [
  { name: 'Aisha Abubakar', role: 'CEO, Abubakar Textiles', initials: 'AA', text: 'Universal Exports transformed how we ship internationally. Their team is professional, responsive, and always delivers on time. We have expanded to 8 new markets thanks to their support.' },
  { name: 'Kwame Mensah', role: 'Director, GoldCoast Commodities', initials: 'KM', text: 'Outstanding service from start to finish. The customs clearance process that used to take weeks now takes days. Highly recommended for any business looking to export from West Africa.' },
  { name: 'Fatima Okonkwo', role: 'Operations Manager, Lagos Foods Ltd', initials: 'FO', text: 'We have worked with Universal Exports for 3 years. Their transparent pricing and dedicated support team make them stand out from every other freight forwarder we have tried.' },
  { name: 'Samuel Owusu', role: 'Founder, Owusu Trading Co.', initials: 'SO', text: 'As a first-time exporter, I was nervous about the complexity. Universal Exports guided me through every step with patience and expertise. Our first shipment arrived without a single issue.' },
];

const EXPORT_SVCS = [
  { tag: 'OCEAN FREIGHT', title: 'Ocean Freight Solutions', desc: 'Cost-effective sea shipping for large cargo volumes. We manage full container loads (FCL) and less-than-container loads (LCL) through trusted global shipping lines, ensuring your goods arrive safely and on schedule.', img: 'https://images.pexels.com/photos/2231742/pexels-photo-2231742.jpeg?auto=compress&cs=tinysrgb&w=800', slug: 'ocean-freight' },
  { tag: 'AIR FREIGHT', title: 'Air Freight Express', desc: 'Time-critical air cargo solutions with guaranteed delivery windows. Ideal for high-value, perishable, or urgent shipments — we partner with leading airlines for reliable door-to-door service worldwide.', img: 'https://images.pexels.com/photos/3057963/pexels-photo-3057963.jpeg?auto=compress&cs=tinysrgb&w=800', slug: 'air-freight' },
  { tag: 'CUSTOMS CLEARANCE', title: 'Customs Clearance & Compliance', desc: 'Expert handling of all customs documentation, duties, and regulatory compliance — ensuring your shipments clear smoothly at every border with zero delays and full legal compliance.', img: 'https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=800', slug: 'customs-clearance' },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="hero-wrap">
        <div className="hero-body">
          <div className="hero-pill">
            <div className="hero-pill-avatars">
              <span>A</span><span>B</span><span>C</span>
            </div>
            <span className="hero-pill-text">
              <span className="hero-pill-num">1500+</span> Trusted Clients
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
        <HeroCarousel />
      </section>

      {/* ── PARTNERS ─────────────────────────────────────────── */}
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

      {/* ── STATS BAR ────────────────────────────────────────── */}
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

      {/* ── ABOUT ──────────────────────────────────────────── */}
      <section className="about-sec">
        <div className="about-inner">
          <div>
            <span className="sec-tag">About us</span>
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
            <img src="https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Port container operations" />
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ──────────────────────────────────── */}
      <section className="why-sec" id="why-choose-us">
        <div className="why-inner">
          <div className="why-img-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.pexels.com/photos/3057963/pexels-photo-3057963.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Container port crane" />
          </div>
          <div className="why-content">
            <span className="sec-tag">Why Choose us</span>
            <h2 className="sec-h2">Reliable Logistics Solutions Built<br />Around Your Business</h2>
            <p className="sec-p">
              We combine industry expertise, efficient operations, and a customer-focused approach
              to deliver logistics solutions you can depend on.
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
                  <div className="why-feat-desc">Our experienced specialists work closely with you to ensure smooth operations and dependable service.</div>
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
                  <div className="why-feat-desc">No hidden fees or unexpected costs. Clear, competitive pricing so you always know what you pay.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────── */}
      <section className="how-export-sec" id="how-it-works">
        <div className="how-export-inner">
          <div className="how-export-hdr">
            <span className="sec-tag">HOW IT WORKS</span>
            <h2 className="sec-h2">How Our Export Service Works</h2>
            <p className="sec-p">From inquiry to delivery — our streamlined process ensures your cargo moves efficiently and safely across global markets.</p>
            <Link href="/services" className="how-export-cta-btn">
              Explore all our services
              <svg viewBox="0 0 14 14" fill="none" width="14" height="14">
                <path d="M2 7h10M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
          <div className="how-export-grid">
            {HOW_STEPS.map((step) => (
              <div key={step.tag} className="how-export-card">
                <span className="how-export-tag">{step.tag}</span>
                <div className="how-export-icon">{step.icon}</div>
                <div className="how-export-title">{step.title}</div>
                <p className="how-export-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPORT SERVICES ──────────────────────────────────── */}
      <section className="export-svc-sec">
        <div className="export-svc-inner">
          <div className="sec-center">
            <span className="sec-tag">OUR SERVICES</span>
            <h2 className="sec-h2">Export Solutions Just For Your Business</h2>
            <p className="sec-p">Reliable export services that help your goods move smoothly across global markets.</p>
          </div>
          {EXPORT_SVCS.map((svc, i) => (
            <div key={svc.slug} className={`export-svc-row${i % 2 === 1 ? ' reverse' : ''}`}>
              <div className="export-svc-img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={svc.img} alt={svc.title} />
              </div>
              <div>
                <span className="export-svc-tag">{svc.tag}</span>
                <h3 className="export-svc-title">{svc.title}</h3>
                <p className="export-svc-desc">{svc.desc}</p>
                <Link href={`/services/${svc.slug}`} className="export-svc-btn">
                  Learn More
                  <svg viewBox="0 0 14 14" fill="none" width="14" height="14">
                    <path d="M2 7h10M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/services" className="how-export-cta-btn">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* ── VIDEO ─────────────────────────────────────────────── */}
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
            </div>
            <div className="video-embed-wrap">
              <iframe
                src="https://www.youtube.com/embed/igh3nmk_aUw"
                title="Pakistan Chamber of Commerce &amp; Trade, USA — Mubashir Chaudhry, DPH"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── IMAGE CTA ────────────────────────────────────────── */}
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

      {/* ── TESTIMONIALS ────────────────────────────────────── */}
      <section className="testimonials-sec">
        <div className="testimonials-inner">
          <div className="sec-center">
            <span className="sec-tag">TESTIMONIALS</span>
            <h2 className="sec-h2">What Our Customers Say</h2>
            <p className="sec-p">Real feedback from businesses that trust Universal Exports to move their cargo across the globe.</p>
          </div>
          <div className="testi-grid">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="testi-card">
                <div className="testi-stars">★★★★★</div>
                <p className="testi-text">&ldquo;{t.text}&rdquo;</p>
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

      {/* ── BLOG ─────────────────────────────────────────────── */}
      <section className="blog-sec">
        <div className="blog-inner">
          <div className="sec-center">
            <span className="sec-tag">BLOG POST</span>
            <h2 className="sec-h2">Export Tips &amp; Resources</h2>
            <p className="sec-p">Stay informed with expert insights on export regulations, logistics trends, and trade opportunities.</p>
          </div>
          <div className="blog-card-grid">
            {POSTS.slice(0, 3).map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="blog-card">
                <div className="blog-card-img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.img} alt={post.title} className="blog-card-img" />
                </div>
                <div className="blog-card-body">
                  <span className="blog-card-tag">{post.cat}</span>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-desc">{post.exc}</p>
                  <span className="blog-card-link">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="faq-sec" id="faq">
        <div className="faq-inner">
          <div className="sec-center">
            <span className="sec-tag">FAQ</span>
            <h2 className="sec-h2">Frequently Asked Questions</h2>
            <p className="sec-p">Everything you need to know about our export services.</p>
          </div>
          <HomeFaq />
        </div>
      </section>

      <Footer />
    </>
  );
}
