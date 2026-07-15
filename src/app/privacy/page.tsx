import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy — Universal Exports Limited',
  description: 'Privacy Policy for Universal Exports Limited.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <section className="page-hero" style={{ minHeight: 260 }}>
        <div className="hero-bg-ov" style={{ background: 'var(--dark)' }} />
        <div className="page-hero-body">
          <span className="sec-tag">Legal</span>
          <h1 className="page-hero-h1">Privacy Policy</h1>
          <p className="page-hero-sub">Last updated: July 2026</p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 40px' }}>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--dark)', marginBottom: 12 }}>1. Information We Collect</h2>
          <p style={{ color: '#4B5563', lineHeight: 1.8, marginBottom: 32 }}>
            We collect information you provide directly to us, including name, email address, phone number, company details, and shipment information when you request a quote, contact us, or use our services.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--dark)', marginBottom: 12 }}>2. How We Use Your Information</h2>
          <p style={{ color: '#4B5563', lineHeight: 1.8, marginBottom: 32 }}>
            We use the information we collect to provide, maintain, and improve our services; process transactions; send transactional and promotional communications; comply with legal obligations; and respond to your inquiries.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--dark)', marginBottom: 12 }}>3. Information Sharing</h2>
          <p style={{ color: '#4B5563', lineHeight: 1.8, marginBottom: 32 }}>
            We do not sell or rent your personal information to third parties. We may share your information with shipping carriers, customs authorities, and other parties necessary to complete your shipment, or when required by law.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--dark)', marginBottom: 12 }}>4. Data Security</h2>
          <p style={{ color: '#4B5563', lineHeight: 1.8, marginBottom: 32 }}>
            We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--dark)', marginBottom: 12 }}>5. Cookies</h2>
          <p style={{ color: '#4B5563', lineHeight: 1.8, marginBottom: 32 }}>
            Our website may use cookies to improve your browsing experience. You can set your browser to refuse cookies, though some parts of our site may not function correctly as a result.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--dark)', marginBottom: 12 }}>6. Your Rights</h2>
          <p style={{ color: '#4B5563', lineHeight: 1.8, marginBottom: 32 }}>
            You have the right to access, correct, or request deletion of your personal data. To exercise these rights, please contact us via the <a href="/contact" style={{ color: 'var(--primary)', fontWeight: 600 }}>Contact page</a>.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--dark)', marginBottom: 12 }}>7. Changes to This Policy</h2>
          <p style={{ color: '#4B5563', lineHeight: 1.8 }}>
            We may update this Privacy Policy from time to time. We will notify you of changes by posting the new policy on this page with an updated date.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
