import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { popularAirports } from '../data/benchmarks';
import './HeroSection.css';

export default function HeroSection() {
  const navigate = useNavigate();
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [cabin, setCabin] = useState('economy');
  const [points, setPoints] = useState('');
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const fromRef = useRef(null);
  const toRef = useRef(null);

  const filterAirports = (query) => {
    if (!query || query.length < 1) return [];
    const q = query.toLowerCase();
    return popularAirports.filter(a =>
      a.code.toLowerCase().includes(q) ||
      a.city.toLowerCase().includes(q)
    ).slice(0, 6);
  };

  const handleFromChange = (val) => {
    setFrom(val.toUpperCase());
    setFromSuggestions(filterAirports(val));
    setShowFromDropdown(val.length > 0);
  };

  const handleToChange = (val) => {
    setTo(val.toUpperCase());
    setToSuggestions(filterAirports(val));
    setShowToDropdown(val.length > 0);
  };

  const selectFrom = (airport) => {
    setFrom(airport.code);
    setShowFromDropdown(false);
  };

  const selectTo = (airport) => {
    setTo(airport.code);
    setShowToDropdown(false);
  };

  const swapAirports = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!from || !to || !points) return;
    const pts = parseInt(points.replace(/,/g, ''), 10);
    navigate(`/results?from=${from}&to=${to}&cabin=${cabin}&points=${pts}`);
  };

  const handlePointsChange = (val) => {
    const num = val.replace(/[^0-9]/g, '');
    if (num) {
      setPoints(parseInt(num, 10).toLocaleString());
    } else {
      setPoints('');
    }
  };

  // Close dropdowns on click outside
  useEffect(() => {
    const handler = (e) => {
      if (fromRef.current && !fromRef.current.contains(e.target)) setShowFromDropdown(false);
      if (toRef.current && !toRef.current.contains(e.target)) setShowToDropdown(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <section className="hero" id="hero-section">
      {/* Floating decorative elements */}
      <div className="hero-bg-orb hero-bg-orb-1"></div>
      <div className="hero-bg-orb hero-bg-orb-2"></div>
      <div className="hero-bg-orb hero-bg-orb-3"></div>

      <div className="hero-content">
        <div className="hero-badge animate-fade-in-up">
          <span className="badge-dot"></span>
          Award Flight Checker
        </div>

        <h1 className="hero-title animate-fade-in-up delay-1">
          Did You <span className="hero-title-highlight">Overpay</span><br />
          for This Flight?
        </h1>

        <p className="hero-subtitle animate-fade-in-up delay-2">
          Enter your flight details and points spent. We'll compare against
          average redemptions to tell you if you got a good deal — or if better options exist.
        </p>

        <form className="search-card animate-scale-in delay-3" onSubmit={handleSubmit} id="search-form">
          <div className="search-card-inner">
            <div className="search-row">
              {/* From */}
              <div className="input-group" ref={fromRef}>
                <label className="input-label">From</label>
                <div className="input-wrapper">
                  <svg className="input-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M2 12L6 8M6 8L10 12M6 8V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="rotate(-45 12 12)"/>
                  </svg>
                  <input
                    type="text"
                    className="search-input"
                    id="input-from"
                    placeholder="e.g. NYC"
                    value={from}
                    onChange={(e) => handleFromChange(e.target.value)}
                    onFocus={() => from && setShowFromDropdown(true)}
                    maxLength={3}
                    autoComplete="off"
                  />
                </div>
                {showFromDropdown && fromSuggestions.length > 0 && (
                  <div className="airport-dropdown" id="dropdown-from">
                    {fromSuggestions.map(a => (
                      <button key={a.code} className="dropdown-item" type="button" onClick={() => selectFrom(a)}>
                        <span className="dropdown-code">{a.code}</span>
                        <span className="dropdown-city">{a.city}</span>
                        <span className="dropdown-country">{a.country}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Swap button */}
              <button className="swap-btn" type="button" onClick={swapAirports} id="btn-swap" aria-label="Swap airports">
                <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                  <path d="M7 16L3 12M3 12L7 8M3 12H21M17 8L21 12M21 12L17 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* To */}
              <div className="input-group" ref={toRef}>
                <label className="input-label">To</label>
                <div className="input-wrapper">
                  <svg className="input-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M2 12L6 16M6 16L10 12M6 16V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="rotate(45 12 12)"/>
                  </svg>
                  <input
                    type="text"
                    className="search-input"
                    id="input-to"
                    placeholder="e.g. LON"
                    value={to}
                    onChange={(e) => handleToChange(e.target.value)}
                    onFocus={() => to && setShowToDropdown(true)}
                    maxLength={3}
                    autoComplete="off"
                  />
                </div>
                {showToDropdown && toSuggestions.length > 0 && (
                  <div className="airport-dropdown" id="dropdown-to">
                    {toSuggestions.map(a => (
                      <button key={a.code} className="dropdown-item" type="button" onClick={() => selectTo(a)}>
                        <span className="dropdown-code">{a.code}</span>
                        <span className="dropdown-city">{a.city}</span>
                        <span className="dropdown-country">{a.country}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="search-row-bottom">
              {/* Cabin Class */}
              <div className="input-group cabin-group">
                <label className="input-label">Cabin Class</label>
                <div className="cabin-pills" id="cabin-pills">
                  {['economy', 'business', 'first'].map(c => (
                    <button
                      key={c}
                      type="button"
                      className={`cabin-pill ${cabin === c ? 'active' : ''}`}
                      onClick={() => setCabin(c)}
                    >
                      {c.charAt(0).toUpperCase() + c.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Points Used */}
              <div className="input-group points-group">
                <label className="input-label">Points / Miles Used</label>
                <div className="input-wrapper">
                  <svg className="input-icon" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <input
                    type="text"
                    className="search-input"
                    id="input-points"
                    placeholder="e.g. 60,000"
                    value={points}
                    onChange={(e) => handlePointsChange(e.target.value)}
                    autoComplete="off"
                  />
                </div>
              </div>

              {/* Submit */}
              <button type="submit" className="btn-primary search-submit" id="btn-check">
                Check if I Overpaid
                <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </form>

        <div className="hero-trust animate-fade-in-up delay-5">
          <div className="trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            25+ award programs
          </div>
          <div className="trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Real-time data
          </div>
          <div className="trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Free to check
          </div>
        </div>
      </div>
    </section>
  );
}
