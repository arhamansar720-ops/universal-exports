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
              {/* Facebook */}
              <a href="#" className="footer-soc" aria-label="Facebook">
                <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                  <path d="M18 10a8 8 0 10-9.25 7.903V12.89H7.078V10H8.75V8.047c0-1.655.987-2.57 2.495-2.57.723 0 1.478.129 1.478.129v1.626h-.832c-.82 0-1.075.508-1.075 1.03V10h1.83l-.292 2.89h-1.538v5.013A8.002 8.002 0 0018 10z"/>
                </svg>
              </a>
              {/* X / Twitter */}
              <a href="#" className="footer-soc" aria-label="X">
                <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                  <path d="M15.05 2h2.494l-5.45 6.23L18.5 18h-5.02l-3.935-5.144L5.13 18H2.635l5.83-6.665L2 2h5.146l3.553 4.698L15.05 2zm-.875 14.39h1.38L5.91 3.41H4.43l9.745 12.98z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="footer-soc" aria-label="Instagram">
                <svg viewBox="0 0 20 20" fill="currentColor" width="15" height="15">
                  <path fillRule="evenodd" d="M10 2c-2.17 0-2.444.01-3.298.048-.851.04-1.432.174-1.941.372a3.924 3.924 0 00-1.418.923 3.924 3.924 0 00-.923 1.418c-.198.509-.332 1.09-.372 1.94C2.01 7.557 2 7.83 2 10s.01 2.443.048 3.297c.04.852.174 1.432.372 1.941.205.528.48.976.923 1.418.442.443.89.718 1.418.923.509.198 1.09.332 1.94.372C7.557 17.99 7.83 18 10 18s2.443-.01 3.297-.048c.852-.04 1.432-.174 1.941-.372a3.924 3.924 0 001.418-.923 3.924 3.924 0 00.923-1.418c.198-.509.332-1.09.372-1.94.039-.854.048-1.128.048-3.298s-.01-2.444-.048-3.298c-.04-.851-.174-1.432-.372-1.941a3.924 3.924 0 00-.923-1.418 3.924 3.924 0 00-1.418-.923c-.509-.198-1.09-.332-1.94-.372C12.443 2.01 12.17 2 10 2zm0 1.44c2.136 0 2.39.009 3.233.047.78.036 1.203.166 1.485.275.373.145.64.318.92.598.28.28.453.547.598.92.11.282.24.705.275 1.485.038.844.047 1.097.047 3.233s-.009 2.39-.047 3.233c-.036.78-.166 1.203-.275 1.485a2.48 2.48 0 01-.598.92 2.48 2.48 0 01-.92.598c-.282.11-.705.24-1.485.275-.844.038-1.097.047-3.233.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.275a2.48 2.48 0 01-.92-.598 2.48 2.48 0 01-.598-.92c-.11-.282-.24-.705-.275-1.485C3.449 12.39 3.44 12.137 3.44 10s.009-2.39.047-3.233c.036-.78.166-1.203.275-1.485a2.48 2.48 0 01.598-.92 2.48 2.48 0 01.92-.598c.282-.11.705-.24 1.485-.275C7.609 3.45 7.862 3.44 10 3.44zm0 2.452a4.107 4.107 0 100 8.215 4.107 4.107 0 000-8.215zM10 12.667a2.667 2.667 0 110-5.334 2.667 2.667 0 010 5.334zm5.23-6.81a.96.96 0 100-1.92.96.96 0 000 1.92z" clipRule="evenodd"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="footer-soc" aria-label="LinkedIn">
                <svg viewBox="0 0 20 20" fill="currentColor" width="15" height="15">
                  <path fillRule="evenodd" d="M5.372 7.368H2.228v9.844h3.144V7.368zM3.8 6.054a1.826 1.826 0 100-3.652 1.826 1.826 0 000 3.652zM17.998 17.212h-3.14v-4.791c0-1.143-.02-2.612-1.59-2.612-1.593 0-1.836 1.244-1.836 2.529v4.874H8.29V7.368h3.015v1.344h.043c.419-.795 1.444-1.632 2.973-1.632 3.18 0 3.766 2.093 3.766 4.814v5.318h-.089z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <p className="footer-newsletter-title">Subscribe to our newsletter!</p>
            <div className="footer-newsletter-form">
              <input type="email" placeholder="Enter your email" className="footer-newsletter-input" />
              <button className="footer-newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        {/* Middle row: Useful Links + PCCAT seal */}
        <div className="footer-mid-row">
          <div className="footer-links-group">
            <p className="footer-links-label">Useful Links</p>
            <div className="footer-useful-links">
              <Link href="/services/ocean-freight">Services</Link>
              <Link href="/about">Projects</Link>
              <Link href="/about">About us</Link>
              <Link href="/contact">Contact us</Link>
              <Link href="#">Terms &amp; conditions</Link>
            </div>
          </div>
          {/* PCCAT seal placeholder */}
          <div className="footer-seal">
            <div className="footer-seal-circle">
              <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="60" height="60">
                <circle cx="30" cy="30" r="28" stroke="#E8611A" strokeWidth="2"/>
                <circle cx="30" cy="30" r="22" stroke="#E8611A" strokeWidth="1"/>
                <text x="30" y="24" textAnchor="middle" fill="#E8611A" fontSize="5" fontWeight="bold">CHAMBER OF</text>
                <text x="30" y="31" textAnchor="middle" fill="#E8611A" fontSize="5" fontWeight="bold">COMMERCE</text>
                <text x="30" y="38" textAnchor="middle" fill="#E8611A" fontSize="4.5">PCCAT · USA</text>
              </svg>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        {/* Bottom copyright */}
        <div className="footer-bottom">
          <span>Copyright © <strong>Universal Exports</strong> 2026</span>
        </div>
      </div>
    </footer>
  );
}
