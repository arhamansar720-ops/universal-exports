import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms & Conditions — Universal Exports Limited',
  description: 'Terms and Conditions for Universal Exports Limited.',
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <section className="page-hero" style={{ minHeight: 260 }}>
        <div className="hero-bg-ov" style={{ background: 'var(--dark)' }} />
        <div className="page-hero-body">
          <span className="sec-tag">Legal</span>
          <h1 className="page-hero-h1">Terms &amp; Conditions</h1>
          <p className="page-hero-sub">Last updated: July 2026</p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 40px' }}>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--dark)', marginBottom: 12 }}>1. Acceptance of Terms</h2>
          <p style={{ color: '#4B5563', lineHeight: 1.8, marginBottom: 32 }}>
            By accessing or using the services of Universal Exports Limited ("Universal Exports", "we", "us"), you agree to be bound by these Terms &amp; Conditions. If you do not agree, please do not use our services.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--dark)', marginBottom: 12 }}>2. Services</h2>
          <p style={{ color: '#4B5563', lineHeight: 1.8, marginBottom: 32 }}>
            Universal Exports provides international freight forwarding, customs clearance, export documentation, and supply chain management services. All services are subject to applicable local and international trade regulations.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--dark)', marginBottom: 12 }}>3. Client Responsibilities</h2>
          <p style={{ color: '#4B5563', lineHeight: 1.8, marginBottom: 32 }}>
            Clients are responsible for providing accurate and complete information regarding shipments, including correct descriptions, values, and documentation. Universal Exports shall not be liable for delays or penalties arising from incorrect or incomplete information provided by the client.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--dark)', marginBottom: 12 }}>4. Liability Limitation</h2>
          <p style={{ color: '#4B5563', lineHeight: 1.8, marginBottom: 32 }}>
            To the maximum extent permitted by law, Universal Exports shall not be liable for indirect, incidental, or consequential damages arising out of or in connection with the services provided. Our liability is limited to the value of the services rendered for the specific shipment in question.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--dark)', marginBottom: 12 }}>5. Governing Law</h2>
          <p style={{ color: '#4B5563', lineHeight: 1.8, marginBottom: 32 }}>
            These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be subject to the exclusive jurisdiction of the courts of Lagos, Nigeria.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--dark)', marginBottom: 12 }}>6. Modifications</h2>
          <p style={{ color: '#4B5563', lineHeight: 1.8, marginBottom: 32 }}>
            Universal Exports reserves the right to modify these Terms at any time. Changes will be posted on this page with an updated date. Continued use of our services after changes constitutes acceptance of the revised Terms.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--dark)', marginBottom: 12 }}>7. Contact</h2>
          <p style={{ color: '#4B5563', lineHeight: 1.8 }}>
            For questions regarding these Terms, please contact us via the <a href="/contact" style={{ color: 'var(--primary)', fontWeight: 600 }}>Contact page</a>.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
