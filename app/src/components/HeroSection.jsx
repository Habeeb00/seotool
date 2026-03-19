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
        <h1 className="hero-title animate-fade-in-up delay-1">
          Did You <span className="hero-title-highlight">Overpay</span><br />
          for This Flight?
        </h1>

        <p className="hero-subtitle animate-fade-in-up delay-2">
          Enter your flight details and points spent. We'll compare against
          average redemptions to tell you if you got a good deal — or if better options exist.
        </p>

        <form className="search-bar animate-scale-in delay-3" onSubmit={handleSubmit} id="search-form">
          <div className="search-bar-inner">
            {/* From */}
            <div className="input-group" ref={fromRef}>
              <div className="input-wrapper">
                <svg className="input-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M2 12L6 8M6 8L10 12M6 8V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="rotate(-45 12 12)"/>
                </svg>
                <input
                  type="text"
                  className="search-input"
                  id="input-from"
                  placeholder="From (e.g. NYC)"
                  value={from}
                  onChange={(e) => handleFromChange(e.target.value)}
                  onFocus={() => from && setShowFromDropdown(true)}
                  maxLength={3}
                  autoComplete="off"
                />
              </div>
              {showFromDropdown && fromSuggestions.length > 0 && (
                <div className="airport-dropdown inline-dropdown" id="dropdown-from">
                  {fromSuggestions.map(a => (
                    <button key={a.code} className="dropdown-item" type="button" onClick={() => selectFrom(a)}>
                      <span className="dropdown-code">{a.code}</span>
                      <span className="dropdown-city">{a.city}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="input-divider"></div>

            {/* To */}
            <div className="input-group" ref={toRef}>
              <div className="input-wrapper">
                <svg className="input-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M2 12L6 16M6 16L10 12M6 16V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="rotate(45 12 12)"/>
                </svg>
                <input
                  type="text"
                  className="search-input"
                  id="input-to"
                  placeholder="To (e.g. LON)"
                  value={to}
                  onChange={(e) => handleToChange(e.target.value)}
                  onFocus={() => to && setShowToDropdown(true)}
                  maxLength={3}
                  autoComplete="off"
                />
              </div>
              {showToDropdown && toSuggestions.length > 0 && (
                <div className="airport-dropdown inline-dropdown" id="dropdown-to">
                  {toSuggestions.map(a => (
                    <button key={a.code} className="dropdown-item" type="button" onClick={() => selectTo(a)}>
                      <span className="dropdown-code">{a.code}</span>
                      <span className="dropdown-city">{a.city}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="input-divider"></div>

            {/* Cabin Class */}
            <div className="inline-cabin-pills">
              {['economy', 'business', 'first'].map((c, idx) => (
                <button
                  key={c}
                  type="button"
                  className={`inline-pill ${cabin === c ? 'active' : ''}`}
                  onClick={() => setCabin(c)}
                >
                  {c === 'economy' ? 'Econ' : c === 'business' ? 'Biz' : 'First'}
                </button>
              ))}
            </div>

            <div className="input-divider"></div>

            {/* Points */}
            <div className="input-group">
              <div className="input-wrapper">
                <input
                  type="text"
                  className="search-input points-inline"
                  id="input-points"
                  placeholder="Points (e.g. 60k)"
                  value={points}
                  onChange={(e) => handlePointsChange(e.target.value)}
                  autoComplete="off"
                />
              </div>
            </div>

            {/* Submit */}
            <button type="submit" className="btn-primary search-submit-inline" id="btn-check">
              Check
            </button>
          </div>
        </form>

        <div className="hero-trust animate-fade-in-up delay-4">
          <div className="trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Check real-time award values vs cash
          </div>
        </div>
        
        {/* Mockup visual to anchor the hero section */}
        <div className="hero-mockup-visual animate-fade-in-up delay-5">
           <div className="mockup-header">
              <div className="dots"><span></span><span></span><span></span></div>
              <div className="url-bar">flightpoints.com</div>
           </div>
           <div className="mockup-body">
              <div className="mock-route">
                 <div className="mock-city">
                    <h2>LON</h2>
                    <span>London Heathrow</span>
                 </div>
                 <div className="mock-plane">
                    <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
                       <path d="M21 16V14L13 9V3.5C13 2.67157 12.3284 2 11.5 2C10.6716 2 10 2.67157 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" fill="currentColor"/>
                    </svg>
                 </div>
                 <div className="mock-city">
                    <h2>NYC</h2>
                    <span>New York JFK</span>
                 </div>
              </div>
              <div className="mock-card red">
                 <div className="mock-card-left">
                    <span className="dot"></span> 
                    <strong>Standard Cost</strong>
                 </div>
                 <div className="mock-card-right">80k pts</div>
              </div>
              <div className="mock-card green">
                 <div className="mock-card-left">
                    <span className="dot"></span>
                    <strong>Best Value Option</strong>
                 </div>
                 <div className="mock-card-right">45k pts</div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
