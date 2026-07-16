import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroCarousel from '@/components/HeroCarousel';

export const metadata = {
  title: 'Universal Exports Limited — Reliable Export Solutions',
  description: 'Expert export services — Fast, professional, and affordable.',
};

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
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
          <p className="partners-lbl">We working with more than 500+ companies</p>
          <div className="partners-row">
            {['Maersk Line', 'MSC', 'CMA CGM', 'DHL Express', 'Bolloré'].map((p) => (
              <div key={p} className="partner-box">
                <span className="partner-box-txt">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────── */}
      <div className="stats-bar">
        <div className="stats-inner">
          {[
            { num: '1500+', lbl: 'Clients' },
            { num: '92%+', lbl: 'Customer Satisfaction' },
            { num: '24/7', lbl: 'Always Support' },
          ].map((s, i) => (
            <div key={s.lbl} className="stat-row-item">
              <div className="stat-item">
                <div className="stat-num">{s.num}</div>
                <div className="stat-lbl">{s.lbl}</div>
              </div>
              {i < 2 && <div className="stat-div" />}
            </div>
          ))}
        </div>
      </div>

      {/* ── ABOUT ─────────────────────────────────────────────── */}
      <section className="about-sec">
        <div className="about-inner">
          <div>
            <span className="sec-tag">About us</span>
            <h2 className="sec-h2">With over 15+ years of experience, our team provides top-quality services</h2>
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

      {/* ── WHY CHOOSE OUR SERVICES ────────────────────────── */}
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
            <h2 className="sec-h2">Why choose our Services</h2>
            <p className="sec-p">
              We combine industry expertise, efficient operations, and a customer-focused approach
              to deliver logistics solutions you can depend on — every shipment, every time.
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
                  <div className="why-feat-desc">No hidden fees or unexpected costs. We provide clear, competitive pricing so you always know exactly what you are paying for.</div>
                </div>
              </div>
              <div className="why-feat">
                <div className="why-feat-icon">
                  <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="why-feat-title">Backed by Customer Satisfaction</div>
                  <div className="why-feat-desc">Our 92%+ satisfaction rate reflects our commitment to exceeding expectations — with responsive support, proactive updates, and reliable delivery.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW OUR EXPORT SERVICE WORKS ──────────────────── */}
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
            <Link href="/services" className="how-export-cta-btn">
              Explore all our services
              <span className="arrow-circ" style={{ background: 'rgba(255,255,255,0.15)' }}>
                <svg viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 4l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </div>
          <div className="how-export-grid">
            {[
              {
                icon: (
                  <svg viewBox="0 0 32 32" fill="none" width="32" height="32">
                    <circle cx="16" cy="16" r="15" fill="rgba(255,255,255,0.12)"/>
                    <path d="M16 9v14M11 13h7a2 2 0 010 4h-6a2 2 0 010 4h8" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                ),
                title: 'Get a Clear Cost Estimation',
                desc: 'Share your cargo details and we respond with a transparent, itemised quote within 2 business hours — no hidden charges.',
              },
              {
                icon: (
                  <svg viewBox="0 0 32 32" fill="none" width="32" height="32">
                    <circle cx="16" cy="16" r="15" fill="rgba(255,255,255,0.12)"/>
                    <path d="M10 16l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Peace of Mind',
                desc: 'Every shipment is fully insured and tracked in real-time. We handle all risk management so you can focus on your business.',
              },
              {
                icon: (
                  <svg viewBox="0 0 32 32" fill="none" width="32" height="32">
                    <circle cx="16" cy="16" r="15" fill="rgba(255,255,255,0.12)"/>
                    <rect x="9" y="10" width="14" height="12" rx="2" stroke="white" strokeWidth="1.8"/>
                    <path d="M13 10V8h6v2" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                    <path d="M13 15h6M13 18h4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
                title: 'Documentation & Compliance',
                desc: 'We prepare and file all export documents, customs declarations, and regulatory paperwork — keeping you compliant at every border.',
              },
              {
                icon: (
                  <svg viewBox="0 0 32 32" fill="none" width="32" height="32">
                    <circle cx="16" cy="16" r="15" fill="rgba(255,255,255,0.12)"/>
                    <path d="M8 16h16M20 12l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Fast Processing',
                desc: 'Our efficient operations minimise delays. We work around the clock to ensure cargo is processed and dispatched on schedule.',
              },
              {
                icon: (
                  <svg viewBox="0 0 32 32" fill="none" width="32" height="32">
                    <circle cx="16" cy="16" r="15" fill="rgba(255,255,255,0.12)"/>
                    <rect x="8" y="12" width="16" height="10" rx="2" stroke="white" strokeWidth="1.8"/>
                    <path d="M11 12V10a2 2 0 014 0v2M17 12V10a2 2 0 014 0v2" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
                  </svg>
                ),
                title: 'Pickup & Delivery',
                desc: 'From your warehouse to the destination port — we coordinate inland transport, loading, shipping, and final-mile delivery.',
              },
              {
                icon: (
                  <svg viewBox="0 0 32 32" fill="none" width="32" height="32">
                    <circle cx="16" cy="16" r="15" fill="rgba(255,255,255,0.12)"/>
                    <path d="M16 9v7l4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="16" cy="16" r="7" stroke="white" strokeWidth="1.8"/>
                  </svg>
                ),
                title: '24/7 Support',
                desc: 'Our team is available around the clock to answer questions, provide real-time updates, and resolve any issues during transit.',
              },
            ].map((item) => (
              <div key={item.title} className="how-export-card">
                <div className="how-export-icon">{item.icon}</div>
                <h3 className="how-export-title">{item.title}</h3>
                <p className="how-export-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR EXPORT SERVICES (alternating image/text) ─── */}
      <section className="export-svc-sec">
        <div className="export-svc-inner">
          <div className="sec-center">
            <span className="sec-tag">Our Services</span>
            <h2 className="sec-h2">Our Export Services</h2>
            <p className="sec-p" style={{ margin: '0 auto' }}>
              From quick arrangements to full logistics management, we provide reliable solutions for every export need.
            </p>
          </div>
          {[
            {
              title: 'Export your stuff',
              subtitle: 'Ocean Freight',
              desc: 'Cost-effective sea shipping for large cargo volumes. We manage full container loads (FCL) and less-than-container loads (LCL) across all major global trade lanes with full tracking.',
              img: 'https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=800',
              href: '/services/ocean-freight',
              reverse: false,
            },
            {
              title: 'Export your stuff',
              subtitle: 'Air Freight',
              desc: 'Time-critical air cargo solutions with guaranteed delivery windows. Ideal for high-value, perishable, or urgent goods requiring fast international transit.',
              img: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800',
              href: '/services/air-freight',
              reverse: true,
            },
            {
              title: 'Export your stuff',
              subtitle: 'Customs Clearance',
              desc: 'Expert handling of all customs documentation, duties, and regulatory compliance — ensuring your shipments clear smoothly at every border with zero delays.',
              img: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800',
              href: '/services/customs-clearance',
              reverse: false,
            },
          ].map((svc) => (
            <div key={svc.href} className={`export-svc-row${svc.reverse ? ' reverse' : ''}`}>
              <div className="export-svc-img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={svc.img} alt={svc.subtitle} />
              </div>
              <div className="export-svc-content">
                <span className="sec-tag">{svc.subtitle}</span>
                <h3 className="export-svc-title">{svc.title}</h3>
                <p className="export-svc-desc">{svc.desc}</p>
                <Link href={svc.href} className="export-svc-btn">
                  Learn More
                  <span className="arrow-circ primary">
                    <svg viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 4l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          ))}
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
            {[
              {
                init: 'AA', name: 'Aisha Abubakar', role: 'CEO, Abubakar Textiles',
                text: 'Universal Exports transformed how we ship internationally. Their team is professional, responsive, and always delivers on time. We have expanded to 8 new markets thanks to their support.',
              },
              {
                init: 'KM', name: 'Kwame Mensah', role: 'Director, GoldCoast Commodities',
                text: 'Outstanding service from start to finish. The customs clearance process that used to take weeks now takes days. Highly recommended for any business looking to export from West Africa.',
              },
              {
                init: 'FO', name: 'Fatima Okonkwo', role: 'Operations Manager, Lagos Foods Ltd',
                text: 'We have worked with Universal Exports for 3 years. Their transparent pricing and dedicated support team make them stand out from every other freight forwarder we have tried.',
              },
              {
                init: 'BN', name: 'Babatunde Nwosu', role: 'Founder, NwosuAgro Exports',
                text: 'As a first-time exporter, I was nervous about the complexity. Universal Exports guided me through every step. Now we ship to 12 countries with complete confidence.',
              },
            ].map((t) => (
              <div key={t.name} className="testi-card">
                <div className="testi-stars">★★★★★</div>
                <p className="testi-text">&ldquo;{t.text}&rdquo;</p>
                <div className="testi-author">
                  <div className="testi-av">{t.init}</div>
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

      {/* ── BLOG / TIPS ──────────────────────────────────── */}
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
            {[
              {
                tag: 'Export Guide',
                title: 'How to Prepare Your Export Documentation',
                desc: 'A step-by-step guide to the essential documents required for international shipping — from commercial invoices to certificates of origin.',
                img: 'https://images.pexels.com/photos/4386339/pexels-photo-4386339.jpeg?auto=compress&cs=tinysrgb&w=600',
              },
              {
                tag: 'Logistics',
                title: 'Choosing Between Ocean and Air Freight',
                desc: 'Understand the trade-offs between sea and air cargo — cost, speed, cargo type, and route considerations to help you make the right choice.',
                img: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=600',
              },
              {
                tag: 'Compliance',
                title: 'Navigating Nigerian Export Regulations',
                desc: 'Everything you need to know about Nigerian export laws, SON certification, NAFDAC requirements, and NXP compliance for your business.',
                img: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=600',
              },
            ].map((post) => (
              <Link key={post.title} href="/blog" className="blog-card">
                <div className="blog-card-img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.img} alt={post.title} />
                </div>
                <div className="blog-card-body">
                  <span className="blog-card-tag">{post.tag}</span>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-desc">{post.desc}</p>
                  <span className="blog-card-link">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — DON'T LET EXPORT PROBLEMS DISRUPT YOUR DAY */}
      <section className="img-cta-sec">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Container yard and cargo"
          className="cta-bg"
        />
        <div className="img-cta-ov" />
        <div className="img-cta-body">
          <h2>Don&apos;t Let Export Problems<br />Disrupt Your Day</h2>
          <p>Our expert team handles every challenge so your cargo keeps moving — no matter what.</p>
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
      <section className="faq-sec" id="faq">
        <div className="faq-inner">
          <div className="sec-center">
            <span className="sec-tag">Questions &amp; Answers</span>
            <h2 className="sec-h2">Frequently Asked Questions</h2>
            <p className="sec-p" style={{ margin: '0 auto' }}>
              Find answers to the most common questions about our export services and how we work.
            </p>
          </div>
          <div className="faq-list">
            {[
              {
                q: 'What types of cargo do you handle?',
                a: 'We handle all types of export cargo including agricultural products, manufactured goods, consumer products, industrial equipment, and hazardous materials (with appropriate documentation). Contact us for specialised cargo requirements.',
              },
              {
                q: 'How long does it take to get a quote?',
                a: 'We respond to all quote requests within 2 business hours. For complex multi-modal shipments, we may require up to 24 hours to provide a fully detailed proposal with all options.',
              },
              {
                q: 'Do you handle customs documentation?',
                a: 'Yes, we provide complete export documentation services including Form NXP, certificates of origin, commercial invoices, packing lists, and all other regulatory filings required for your destination country.',
              },
              {
                q: 'Which countries do you ship to?',
                a: 'We ship to over 180 countries worldwide across all major trade lanes. We have established partnerships with agents in Europe, North America, Asia, and the Middle East for seamless door-to-door delivery.',
              },
              {
                q: 'What happens if my cargo is delayed?',
                a: 'We proactively monitor all shipments and communicate any delays immediately. Our team works to resolve issues quickly, and all shipments are covered by comprehensive cargo insurance for your protection.',
              },
            ].map((item, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-q">
                  <span>{item.q}</span>
                  <span className="faq-arrow">+</span>
                </summary>
                <div className="faq-a"><p>{item.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
