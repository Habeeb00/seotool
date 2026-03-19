import { useState } from 'react';
import './FeaturesSection.css';

export default function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-content">
          <h2 className="features-title">
            Did I Overpay? <br />
            <span className="text-primary">Know the value</span><br />
            of your points.
          </h2>
          <p className="features-desc">
            Stop spending hours manually searching. We compare your flight against 25+ airline loyalty programs to tell you instantly if your redemption is a good deal or if you're overpaying.
          </p>
        </div>
        <div className="features-action">
          <a href="/pricing" className="btn-primary btn-large">See Plans & Pricing →</a>
          <p className="features-note">Join thousands of travelers maximizing their miles today.</p>
        </div>
      </div>
    </section>
  );
}
