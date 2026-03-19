import './BottomCTA.css';

export default function BottomCTA() {
  return (
    <section className="ctab-section">
      <div className="ctab-container">
        <h2 className="ctab-title">
          Stop Guessing.<br />
          <span className="text-secondary">Start Booking Smarter.</span>
        </h2>
        <p className="ctab-subtitle">
          Check before you book. Get real-time award values to guarantee you get the best flight for your points.
        </p>

        <form className="ctab-form" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="text" 
            placeholder="Search any route..." 
            className="ctab-input"
            required
          />
          <button type="submit" className="btn-primary ctab-btn">See better deals →</button>
        </form>
      </div>
    </section>
  );
}
