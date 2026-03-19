import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import BlogSection from './components/BlogSection';
import BannerCTA from './components/BannerCTA';
import BottomCTA from './components/BottomCTA';
import ResultsPage from './components/ResultsPage';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import './App.css';

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <BannerCTA />
      <FAQSection />
      <BottomCTA />
    </>
  );
}

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
