import './OfferBanner.css';
import { useState, useEffect } from 'react';

export default function OfferBanner() {
  const [time, setTime] = useState({ hours: 47, minutes: 53, seconds: 47 });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) return { hours: 0, minutes: 0, seconds: 0 };
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!visible) return null;

  const pad = (n) => n.toString().padStart(2, '0');

  return (
    <div className="offer-banner" id="offer-banner">
      <div className="offer-banner-content">
        <span className="offer-text">
          EXTRA <strong>14% off</strong> for <strong>FIRST TIME USERS</strong> Ends in
        </span>
        <div className="countdown">
          <span className="countdown-unit">{pad(time.hours)}</span>
          <span className="countdown-sep">:</span>
          <span className="countdown-unit">{pad(time.minutes)}</span>
          <span className="countdown-sep">:</span>
          <span className="countdown-unit">{pad(time.seconds)}</span>
        </div>
        <button className="offer-cta" id="offer-cta">Get Offer</button>
      </div>
      <button className="offer-close" onClick={() => setVisible(false)} id="offer-close" aria-label="Close banner">
        ✕
      </button>
    </div>
  );
}
