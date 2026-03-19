import { useState, useRef, useEffect } from 'react';
import { popularAirports } from '../data/benchmarks';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-inner">
        <a href="/" className="navbar-brand" id="navbar-logo">
          <svg className="navbar-logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 17L9 11L13 15L21 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 7H21V13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="navbar-logo-text">flightpoints</span>
        </a>

        <div className="navbar-actions">
          <a href="https://flightpoints.com/pricing" className="btn-get-pro" id="btn-get-pro" target="_blank" rel="noopener noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" />
            </svg>
            Get Pro
          </a>
          <div className="navbar-avatar" id="navbar-avatar">
            <span>U</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
