import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ResultsPage from './components/ResultsPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
