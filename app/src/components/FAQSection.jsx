import { useState } from 'react';
import './FAQSection.css';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    { q: "Did I overpay for my flight?", a: "To find out, just enter your route and the points you spent. We compare it instantly against real-time benchmarks and historical data to deliver an immediate 'Good' or 'Overpaying' verdict." },
    { q: "Is there a better way to book this flight?", a: "Yes. When we analyze your redemption, we also search for locked alternatives. We'll show you if a better value exists across our 25+ integrated airline loyalty programs." },
    { q: "How accurate is the benchmark data?", a: "Because we track real-time and historical flight data, we provide highly accurate low, average, and high point-brackets for your specific route and cabin class." },
    { q: "Which airline loyalty programs are supported?", a: "We currently support over 25 major airline programs, meaning no matter where you plan to fly, we can help you find the absolute best way to utilize your miles." },
    { q: "Does Flightpoints book flights for me?", a: "No, we are an analytics and discovery platform that gives you the insights to book directly with the airline and save big." },
    { q: "Is the search tool free to use?", a: "Yes! Our award flight checker is 100% free. Just drop in your details to get an instant valuation." },
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-left">
          <div className="faq-badge">HELP CENTER</div>
          <h2 className="faq-title">FAQ</h2>
          <p className="faq-desc">Everything you need to know about maximizing your travel value. Can't find what you're looking for? Reach out to our support team.</p>
          <button className="btn-outline faq-contact">Contact Support →</button>
        </div>

        <div className="faq-right">
          <div className="faq-accordion">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item ${openIdx === idx ? 'open' : ''}`}
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              >
                <div className="faq-q">
                  <span>{faq.q}</span>
                  <svg className="faq-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {openIdx === idx && (
                  <div className="faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
