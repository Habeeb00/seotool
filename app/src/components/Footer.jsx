import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <svg className="footer-logo-icon" viewBox="0 0 24 24" fill="none" width="24" height="24">
            <path d="M3 17L9 11L13 15L21 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 7H21V13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="footer-logo-text">flightpoints</span>
        </div>

        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>

        <p className="footer-copy">
          © 2026 Flightpoints. All rights reserved. Flight data may vary. Check live availability for accurate pricing.
        </p>
      </div>
    </footer>
  );
}
