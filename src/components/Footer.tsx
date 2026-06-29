import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Top row: logo+social LEFT, newsletter RIGHT */}
        <div className="footer-top-row">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-icon">
                <svg viewBox="0 0 17 17" fill="none">
                  <circle cx="8.5" cy="8.5" r="6" stroke="white" strokeWidth="1.3"/>
                  <path d="M2.5 8.5h12" stroke="white" strokeWidth="1.1"/>
                  <path d="M8.5 2.5c-1.7 1.7-2.5 3.8-2.5 6s.8 4.3 2.5 6" stroke="white" strokeWidth="1.1"/>
                  <path d="M8.5 2.5c1.7 1.7 2.5 3.8 2.5 6s-.8 4.3-2.5 6" stroke="white" strokeWidth="1.1"/>
                </svg>
              </span>
              <span>
                <div className="footer-logo-name">UNIVERSAL</div>
                <div className="footer-logo-sub">EXPORTS (PRIVATE) LIMITED</div>
              </span>
            </div>
            <div className="footer-socials">
              <a href="#" className="footer-soc" aria-label="Facebook">
                <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                  <path d="M18 10a8 8 0 10-9.25 7.903V12.89H7.078V10H8.75V8.047c0-1.655.987-2.57 2.495-2.57.723 0 1.478.129 1.478.129v1.626h-.832c-.82 0-1.075.508-1.075 1.03V10h1.83l-.292 2.89h-1.538v5.013A8.002 8.002 0 0018 10z"/>
                </svg>
              </a>
              <a href="#" className="footer-soc" aria-label="X">
                <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                  <path d="M15.05 2h2.494l-5.45 6.23L18.5 18h-5.02l-3.935-5.144L5.13 18H2.635l5.83-6.665L2 2h5.146l3.553 4.698L15.05 2zm-.875 14.39h1.38L5.91 3.41H4.43l9.745 12.98z"/>
                </svg>
              </a>
              <a href="#" className="footer-soc" aria-label="Instagram">
                <svg viewBox="0 0 20 20" fill="currentColor" width="15" height="15">
                  <path fillRule="evenodd" d="M10 2c-2.17 0-2.444.01-3.298.048-.851.04-1.432.174-1.941.372a3.924 3.924 0 00-1.418.923 3.924 3.924 0 00-.923 1.418c-.198.509-.332 1.09-.372 1.94C2.01 7.557 2 7.83 2 10s.01 2.443.048 3.297c.04.852.174 1.432.372 1.941.205.528.48.976.923 1.418.442.443.89.718 1.418.923.509.198 1.09.332 1.94.372C7.557 17.99 7.83 18 10 18s2.443-.01 3.297-.048c.852-.04 1.432-.174 1.941-.372a3.924 3.924 0 001.418-.923 3.924 3.924 0 00.923-1.418c.198-.509.332-1.09.372-1.94.039-.854.048-1.128.048-3.298s-.01-2.444-.048-3.298c-.04-.851-.174-1.432-.372-1.941a3.924 3.924 0 00-.923-1.418 3.924 3.924 0 00-1.418-.923c-.509-.198-1.09-.332-1.94-.372C12.443 2.01 12.17 2 10 2zm0 1.44c2.136 0 2.39.009 3.233.047.78.036 1.203.166 1.485.275.373.145.64.318.92.598.28.28.453.547.598.92.11.282.24.705.275 1.485.038.844.047 1.097.047 3.233s-.009 2.39-.047 3.233c-.036.78-.166 1.203-.275 1.485a2.48 2.48 0 01-.598.92 2.48 2.48 0 01-.92.598c-.282.11-.705.24-1.485.275-.844.038-1.097.047-3.233.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.275a2.48 2.48 0 01-.92-.598 2.48 2.48 0 01-.598-.92c-.11-.282-.24-.705-.275-1.485C3.449 12.39 3.44 12.137 3.44 10s.009-2.39.047-3.233c.036-.78.166-1.203.275-1.485a2.48 2.48 0 01.598-.92 2.48 2.48 0 01.92-.598c.282-.11.705-.24 1.485-.275C7.609 3.45 7.862 3.44 10 3.44zm0 2.452a4.107 4.107 0 100 8.215 4.107 4.107 0 000-8.215zM10 12.667a2.667 2.667 0 110-5.334 2.667 2.667 0 010 5.334zm5.23-6.81a.96.96 0 100-1.92.96.96 0 000 1.92z" clipRule="evenodd"/>
                </svg>
              </a>
              <a href="#" className="footer-soc" aria-label="LinkedIn">
                <svg viewBox="0 0 20 20" fill="currentColor" width="15" height="15">
                  <path fillRule="evenodd" d="M5.372 7.368H2.228v9.844h3.144V7.368zM3.8 6.054a1.826 1.826 0 100-3.652 1.826 1.826 0 000 3.652zM17.998 17.212h-3.14v-4.791c0-1.143-.02-2.612-1.59-2.612-1.593 0-1.836 1.244-1.836 2.529v4.874H8.29V7.368h3.015v1.344h.043c.419-.795 1.444-1.632 2.973-1.632 3.18 0 3.766 2.093 3.766 4.814v5.318h-.089z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-newsletter">
            <p className="footer-newsletter-title">Subscribe to our newsletter!</p>
            <div className="footer-newsletter-form">
              <input type="email" placeholder="Enter your email" className="footer-newsletter-input" />
              <button className="footer-newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        {/* Middle row: 3 link columns + PCCAT seal */}
        <div className="footer-mid-row">
          <div className="footer-col">
            <p className="footer-col-label">Services</p>
            <Link href="/services/ocean-freight" className="footer-col-link">Ocean Freight</Link>
            <Link href="/services/air-freight" className="footer-col-link">Air Freight</Link>
            <Link href="/services/customs-clearance" className="footer-col-link">Customs Clearance</Link>
            <Link href="/services/supply-chain" className="footer-col-link">Supply Chain</Link>
          </div>
          <div className="footer-col">
            <p className="footer-col-label">Company</p>
            <Link href="/about" className="footer-col-link">About Us</Link>
            <Link href="/blog" className="footer-col-link">Blog</Link>
            <Link href="/contact" className="footer-col-link">Contact Us</Link>
            <Link href="/contact#faq" className="footer-col-link">FAQ</Link>
          </div>
          <div className="footer-col">
            <p className="footer-col-label">Legal</p>
            <Link href="#" className="footer-col-link">Terms &amp; Conditions</Link>
            <Link href="#" className="footer-col-link">Privacy Policy</Link>
          </div>
          <div className="footer-seal">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="90" height="90">
              <circle cx="50" cy="50" r="47" stroke="#E8611A" strokeWidth="2.5"/>
              <circle cx="50" cy="50" r="39" stroke="#E8611A" strokeWidth="1.5"/>
              <rect x="26" y="26" width="22" height="14" rx="1" fill="#B22234"/>
              <rect x="26" y="29.3" width="22" height="1.8" fill="white"/>
              <rect x="26" y="32.6" width="22" height="1.8" fill="white"/>
              <rect x="26" y="35.9" width="22" height="1.8" fill="white"/>
              <rect x="26" y="26" width="9" height="8" fill="#3C3B6E"/>
              <circle cx="64" cy="33" r="8" fill="#01411C"/>
              <circle cx="61.5" cy="31" r="5.5" fill="#01411C"/>
              <path d="M68 28 L64.5 36 L70 31 Z" fill="white" opacity="0.9"/>
              <text x="50" y="57" textAnchor="middle" fill="white" fontSize="7" fontWeight="800" fontFamily="sans-serif">PCC&amp;T</text>
              <text x="50" y="66" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="5.5" fontFamily="sans-serif">USA</text>
              <path id="topArc" d="M 14 50 A 36 36 0 0 1 86 50" fill="none"/>
              <text fontSize="5.5" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">
                <textPath href="#topArc" startOffset="10%">CHAMBER OF COMMERCE &amp; TRADE</textPath>
              </text>
              <path id="botArc" d="M 18 58 A 36 36 0 0 0 82 58" fill="none"/>
              <text fontSize="5.5" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">
                <textPath href="#botArc" startOffset="15%">PAKISTAN · USA</textPath>
              </text>
            </svg>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <span>Copyright © <strong>Universal Exports</strong> 2026</span>
        </div>
      </div>
    </footer>
  );
}
