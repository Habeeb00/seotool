import { useEffect, useState } from 'react';
import { formatPoints } from '../data/benchmarks';
import './ResultsSection.css';

export default function ResultsSection({ result, alternatives, from, to, cabin }) {
  const [animatedPoints, setAnimatedPoints] = useState(0);
  const [showInsights, setShowInsights] = useState(false);
  const [showAlternatives, setShowAlternatives] = useState(false);

  useEffect(() => {
    // Animate the points counter
    const target = result.userPoints;
    const duration = 1200;
    const start = performance.now();

    const animate = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimatedPoints(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    // Stagger the sections
    const t1 = setTimeout(() => setShowInsights(true), 600);
    const t2 = setTimeout(() => setShowAlternatives(true), 1000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [result]);

  const verdictClass = `verdict-${result.color}`;

  // Calculate percentage bar
  const barPercent = Math.min(
    ((result.userPoints - result.lowPoints) / (result.highPoints - result.lowPoints)) * 100,
    100
  );

  const avgPercent =
    ((result.avgPoints - result.lowPoints) / (result.highPoints - result.lowPoints)) * 100;

  return (
    <section className="results-section" id="results-section">
      <div className="results-container">

        {/* === Top Row: Verdict + Insights === */}
        <div className="results-top-row">

          {/* Left Column: Verdict + Insights */}
          <div className="results-left-col">
            {/* === Verdict Card === */}
            <div className={`verdict-card ${verdictClass} animate-scale-in`} id="verdict-card">
              <h2 className="verdict-title">{result.verdict}</h2>
              <p className="verdict-message">{result.message}</p>

              <div className="verdict-stats">
                <div className="stat">
                  <span className="stat-label">You Paid</span>
                  <span className="stat-value stat-user">{formatPoints(animatedPoints)} pts</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat">
                  <span className="stat-label">Average</span>
                  <span className="stat-value stat-avg">{formatPoints(result.avgPoints)} pts</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat">
                  <span className="stat-label">Best Known</span>
                  <span className="stat-value stat-best">{formatPoints(result.lowPoints)} pts</span>
                </div>
              </div>

              {/* Visual bar */}
              <div className="verdict-bar-container">
                <div className="verdict-bar-track">
                  <div
                    className="verdict-bar-fill"
                    style={{ width: `${barPercent}%` }}
                  ></div>
                  <div
                    className="verdict-bar-avg-marker"
                    style={{ left: `${avgPercent}%` }}
                  >
                    <span className="avg-marker-label">avg</span>
                  </div>
                  <div
                    className={`verdict-bar-user-marker ${verdictClass}`}
                    style={{ left: `${Math.min(barPercent, 98)}%` }}
                  >
                    <span className="user-marker-label">you</span>
                  </div>
                </div>
                <div className="verdict-bar-labels">
                  <span>{formatPoints(result.lowPoints)}</span>
                  <span>{formatPoints(result.highPoints)}</span>
                </div>
              </div>

              {result.difference > 0 && (
                <div className="verdict-highlight">
                  You're paying <strong>{formatPoints(result.difference)}</strong> points more than average ({Math.abs(result.percentage)}% higher)
                </div>
              )}
              {result.difference < 0 && (
                <div className="verdict-highlight verdict-highlight-good">
                  You're saving <strong>{formatPoints(Math.abs(result.difference))}</strong> points compared to average ({Math.abs(result.percentage)}% lower)
                </div>
              )}
            </div>

            {/* === Insight Section === */}
            {showInsights && (
              <div className="insights-card animate-fade-in-up" id="insights-card">
                <div className="insights-header">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M9.663 17H14.336M12 3V4M18.364 5.636L17.657 6.343M21 12H20M4 12H3M6.343 6.343L5.636 5.636M8 17.01V18C8 19.657 9.343 21 11 21H13C14.657 21 16 19.657 16 18V17.01M12 4C8.686 4 6 6.686 6 10C6 12.572 7.528 14.786 9.727 15.725C10.02 15.853 10.135 16.194 10.098 16.514L10 17H14L13.902 16.514C13.865 16.194 13.98 15.853 14.273 15.725C16.472 14.786 18 12.572 18 10C18 6.686 15.314 4 12 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3>Route Insights</h3>
                </div>
                <div className="insights-list">
                  {result.detailMessages.map((msg, i) => (
                    <div key={i} className={`insight-item animate-fade-in-up delay-${i + 1}`}>
                      <div className="insight-bullet"></div>
                      <p>{msg}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* === Right Column: Locked Alternatives === */}
          <div className="results-right-col">
            {showAlternatives && alternatives.length > 0 && (
              <div className="alternatives-section animate-fade-in-up" id="alternatives-section">
                <div className="alternatives-header">
                  <div className="alternatives-badge">
                    🔥 We found {alternatives.length} better ways
                  </div>
                  <h3 className="alternatives-title">Cheaper Options Available</h3>
                  <p className="alternatives-subtitle">
                    Unlock these cheaper options on Flightpoints
                  </p>
                </div>

                <div className="alternatives-grid">
                  {alternatives.slice(0, 3).map((alt, i) => (
                    <div key={i} className={`alternative-card ${i === 0 ? 'alt-best' : ''} animate-fade-in-up delay-${i + 1}`}>
                      <div className="alt-content">
                        <div className="alt-header">
                          <span className="alt-label">{alt.label}</span>
                          {i === 0 && <span className="alt-tag">Best Value</span>}
                        </div>
                        <div className="alt-points">
                          <span className="alt-points-value">{formatPoints(alt.points)}</span>
                          <span className="alt-points-label">pts</span>
                        </div>
                        <div className="alt-bottom-row">
                          <div className="alt-savings">
                            Save {formatPoints(alt.savings)} pts
                          </div>
                          <a 
                            href={`https://flightpoints.com/search?from=${from}&to=${to}&cabin=${cabin}&sort=best_value`} 
                            className="btn-primary alt-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Get
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="cta-section" id="cta-section">
                  <a
                    href={`https://flightpoints.com/search?from=${from}&to=${to}&cabin=${cabin}&sort=best_value`}
                    className="btn-primary cta-button"
                    id="btn-see-deals"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See Better Deals
                    <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                      <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <p className="cta-note">Free to search · No credit card required</p>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
