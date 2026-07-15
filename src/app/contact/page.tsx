'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FAQS } from '@/lib/data';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', service: '', message: '',
  });
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Navbar />

      {/* ── PAGE HERO ────────────────────────────── */}
      <section className="page-hero page-hero--short">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=85"
          alt="Team"
          className="hero-bg-img"
        />
        <div className="hero-bg-ov" />
        <div className="page-hero-body">
          <span className="sec-tag">Contact Us</span>
          <h1 className="page-hero-h1">Get in Touch with<br />Our Export Experts</h1>
          <p className="page-hero-sub">
            Ready to start shipping? Have a question? Our team responds within 2 hours on business days.
          </p>
        </div>
      </section>

      {/* ── CONTACT SECTION ──────────────────────── */}
      <section style={{ padding: '80px 0', background: 'var(--light-bg)' }}>
        <div className="contact-wrap">
          {/* Info side */}
          <div className="contact-info">
            <h2 className="sec-h2" style={{ fontSize: 32 }}>Let&apos;s Talk Logistics</h2>
            <p className="sec-p" style={{ marginTop: 12 }}>
              Whether you need a quick quote, help with documentation, or want to discuss
              a long-term partnership, our team is here to help.
            </p>

            <div className="contact-details">
              {[
                { label: 'Email', value: 'info@universalexports.ng', href: 'mailto:info@universalexports.ng' },
                { label: 'Phone', value: '+234 (0) 1 234 5678', href: 'tel:+23412345678' },
                { label: 'Address', value: '14 Freight House, Victoria Island\nLagos, Nigeria 101001', href: '#' },
                { label: 'Hours', value: 'Mon–Fri: 8am–6pm WAT\nEmergency: 24/7', href: '#' },
              ].map((d) => (
                <div key={d.label} className="contact-detail-item">
                  <div className="contact-detail-label">{d.label}</div>
                  <a href={d.href} className="contact-detail-val" style={{ whiteSpace: 'pre-line' }}>
                    {d.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Form side */}
          <div className="contact-form-wrap">
            {sent ? (
              <div className="contact-success">
                <div className="contact-success-icon">✓</div>
                <h3>Message Received!</h3>
                <p>
                  Thank you for reaching out. One of our export specialists will be in touch
                  within 2 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3>Send Us a Message</h3>
                <div className="form-row">
                  <div className="form-field">
                    <label>Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="e.g. Adebayo Okafor" />
                  </div>
                  <div className="form-field">
                    <label>Email Address *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@company.com" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label>Phone Number</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+234 ..." />
                  </div>
                  <div className="form-field">
                    <label>Company Name</label>
                    <input name="company" value={form.company} onChange={handleChange} placeholder="Your company" />
                  </div>
                </div>
                <div className="form-field">
                  <label>Service of Interest</label>
                  <select name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a service…</option>
                    <option>Ocean Freight Export</option>
                    <option>Air Freight Export</option>
                    <option>Customs Clearance</option>
                    <option>Container & Cargo Management</option>
                    <option>Export Documentation</option>
                    <option>Trade & Logistics Consulting</option>
                  </select>
                </div>
                <div className="form-field">
                  <label>Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell us about your shipment or enquiry…" />
                </div>
                <button type="submit" className="form-submit">
                  Send Message
                  <span className="arrow-circ" style={{ background: 'rgba(255,255,255,0.25)' }}>
                    <svg viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 4l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────── */}
      <section id="faq" style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 40px' }}>
          <div className="sec-center">
            <span className="sec-tag">FAQ</span>
            <h2 className="sec-h2">Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {FAQS.map((f, i) => (
              <div key={i} className={`faq-item${open === i ? ' is-open' : ''}`}>
                <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                  <span>{f.q}</span>
                  <span className="faq-icon">{open === i ? '−' : '+'}</span>
                </button>
                {open === i && <div className="faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
