import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import OurTeam from './pages/OurTeam';
import WhyChooseSpondulix from './pages/WhyChooseSpondulix';
import FinancialGuidance from './pages/FinancialGuidance';
import Taxation from './pages/Taxation';
import Audit from './pages/Audit';
import Outsourcing from './pages/Outsourcing';
import LegalAdvisory from './pages/LegalAdvisory';
import KnowledgeHub from './pages/KnowledgeHub';
import ReachUs from './pages/ReachUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/why-choose-spondulix" element={<WhyChooseSpondulix />} />
          <Route path="/financial-guidance" element={<FinancialGuidance />} />
          <Route path="/taxation" element={<Taxation />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/outsourcing" element={<Outsourcing />} />
          <Route path="/legal-advisory" element={<LegalAdvisory />} />
          <Route path="/knowledge-hub" element={<KnowledgeHub />} />
          <Route path="/reach-us" element={<ReachUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;