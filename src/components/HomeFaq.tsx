'use client';
import { useState } from 'react';

const FAQS = [
  {
    q: 'What types of cargo do you handle?',
    a: 'We handle a wide range of cargo including general goods, perishables, dangerous goods (IMDG/IATA certified), oversized freight, and time-sensitive shipments. Contact us with your cargo details and we will advise the best solution.',
  },
  {
    q: 'How long does it take to get a quote?',
    a: 'We typically respond with a detailed, itemised quote within 2 business hours. For complex or specialised shipments, it may take up to 24 hours. You can request a quote through our website, by email, or by phone.',
  },
  {
    q: 'Do you handle customs documentation?',
    a: 'Yes — customs documentation is one of our core services. We prepare and file all required export and import declarations, HS code classification, Form NXP, Certificate of Origin, and any product-specific certificates such as NAFDAC or SON approvals.',
  },
  {
    q: 'Which countries do you ship to?',
    a: 'We ship to destinations worldwide including Europe, North America, Asia, the Middle East, and across Africa. Our network covers major ports globally, with dedicated lanes for key trade corridors from West Africa.',
  },
  {
    q: 'What happens if my cargo is delayed?',
    a: 'Our team monitors all shipments in real-time and proactively communicates any delays. We work quickly to resolve issues — whether at customs, port, or in transit — and keep you updated at every step until your cargo is delivered.',
  },
];

export default function HomeFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="faq-sec" id="faq" style={{ background: 'var(--light-bg)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 48px' }}>
        <div className="sec-center">
          <span className="sec-tag">Questions &amp; Answers</span>
          <h2 className="sec-h2">Frequently Asked Questions</h2>
          <p className="sec-p" style={{ margin: '0 auto' }}>
            Find answers to the most common questions about our export services and how we work.
          </p>
        </div>

        <div style={{ maxWidth: 760, margin: '40px auto 0' }}>
          {FAQS.map((item, i) => (
            <div key={i} className={`faq-item${open === i ? ' is-open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                {item.q}
                <span className="faq-icon">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <div className="faq-a">{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
