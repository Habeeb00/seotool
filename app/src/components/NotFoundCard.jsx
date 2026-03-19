import './NotFoundCard.css';

export default function NotFoundCard({ from, to, cabin, onReset }) {
  return (
    <section className="not-found-section" id="not-found-section">
      <div className="not-found-card animate-scale-in">
        <div className="not-found-emoji">🔍</div>
        <h3 className="not-found-title">Route Not Found</h3>
        <p className="not-found-text">
          We don't have benchmark data for <strong>{from}</strong> → <strong>{to}</strong> in{' '}
          <strong>{cabin}</strong> class yet.
        </p>
        <p className="not-found-subtext">
          But Flightpoints searches 25+ airline programs in real-time. Try searching there for the best rates.
        </p>
        <div className="not-found-actions">
          <a
            href={`https://flightpoints.com/search?from=${from}&to=${to}&cabin=${cabin}`}
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Search on Flightpoints
            <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <button className="btn-secondary" onClick={onReset}>
            Try another route
          </button>
        </div>
      </div>
    </section>
  );
}
