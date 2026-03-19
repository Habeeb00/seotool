import './BannerCTA.css';

export default function BannerCTA() {
  return (
    <section className="banner-cta-section">
      <div className="banner-cta-container">
        <div className="banner-left">
          <div className="banner-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 17L9 11L13 15L21 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 7H21V13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="banner-text">
            <h2>Don't Waste Your <span>Miles</span></h2>
            <p>Most travelers overpay by 20–30%. Protect your points and unlock smarter bookings.</p>
          </div>
        </div>
        <div className="banner-right">
          <a href="https://flightpoints.com/pricing" target="_blank" rel="noopener noreferrer" className="btn-primary banner-btn">Get Flightpoints →</a>
        </div>
      </div>
    </section>
  );
}
