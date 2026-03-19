import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ResultsSection from './ResultsSection';
import NotFoundCard from './NotFoundCard';
import { getBenchmark, analyzeRedemption, generateAlternatives } from '../data/benchmarks';

export default function ResultsPage() {
  const [searchParams] = useSearchParams();
  const from = searchParams.get('from');
  const to = searchParams.get('to');
  const cabin = searchParams.get('cabin');
  const pointsStr = searchParams.get('points');
  const points = pointsStr ? parseInt(pointsStr, 10) : 0;

  const [result, setResult] = useState(null);
  const [alternatives, setAlternatives] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    setIsLoading(true);
    setResult(null);
    setAlternatives([]);
    setNotFound(false);
    
    if (!from || !to || !cabin || !points) {
      setNotFound(true);
      setIsLoading(false);
      return;
    }

    // Simulate a brief loading state for perceived responsiveness
    const timer = setTimeout(() => {
      const benchmark = getBenchmark(from, to, cabin);

      if (!benchmark) {
        setNotFound(true);
        setIsLoading(false);
        return;
      }

      const analysis = analyzeRedemption(points, benchmark);
      const alts = generateAlternatives(benchmark, points);

      setResult(analysis);
      setAlternatives(alts);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [from, to, cabin, points]);

  // If missing query parameters, handled by notFound

  return (
    <div className="results-page-wrapper">
      {/* Route Header */}
      {!isLoading && !notFound && result && (
        <div className="results-route-header animate-fade-in-up">
          <div className="results-route-inner">
            <button className="btn-back" onClick={() => window.location.href = '/'}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>New Search</span>
            </button>
            <div className="route-display">
              <span className="route-airport">{from}</span>
              <div className="route-divider">
                <div className="route-line"></div>
                <svg className="route-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M2 12h20M22 12l-4-4M22 12l-4 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="route-line"></div>
              </div>
              <span className="route-airport">{to}</span>
            </div>
            <div className="route-cabin-badge">
              {cabin.charAt(0).toUpperCase() + cabin.slice(1)} Class
            </div>
          </div>
        </div>
      )}

      {isLoading && (
        <section className="loading-section" id="loading-section">
          <div className="loading-card animate-scale-in">
            <div className="loading-spinner"></div>
            <p className="loading-text">Analyzing your redemption...</p>
            <p className="loading-subtext">Comparing against thousands of data points</p>
          </div>
        </section>
      )}

      {result && !isLoading && (
        <ResultsSection
          result={result}
          alternatives={alternatives}
          from={from}
          to={to}
          cabin={cabin}
        />
      )}

      {notFound && !isLoading && (
        <NotFoundCard
          from={from || 'Unknown'}
          to={to || 'Unknown'}
          cabin={cabin || 'economy'}
          onReset={() => {
            window.location.href = '/';
          }}
        />
      )}
    </div>
  );
}
