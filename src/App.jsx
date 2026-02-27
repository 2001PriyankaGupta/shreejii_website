import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import { ScrollProgress } from './components/Animations'; // Added this import
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import InstantLoan from './pages/InstantLoan';
import PersonalLoan from './pages/PersonalLoan';
import CarLoan from './pages/CarLoan';
import BikeLoan from './pages/BikeLoan';
import CVLoan from './pages/CVLoan';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

const App = () => {
  const location = useLocation();

  return (
    <div className="main-layout">
      <ScrollProgress /> {/* Added this component */}
      <Header />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/instant-loan" element={<InstantLoan />} />
          <Route path="/personal-loan" element={<PersonalLoan />} />
          <Route path="/car-loan" element={<CarLoan />} />
          <Route path="/bike-loan" element={<BikeLoan />} />
          <Route path="/cv-loan" element={<CVLoan />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>
      </AnimatePresence>

      <Footer />

      <style dangerouslySetInnerHTML={{
        __html: `
        .main-layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        main {
          flex: 1;
        }

        /* GLOBAL UTILITIES for all pages */
        .container {
          max-width: 1280px;
          padding: 0 24px;
          margin: 0 auto;
          width: 100%;
        }

        .gold { color: #D4AF37; }
        
        button {
          cursor: pointer;
          border: none;
          outline: none;
          font-family: inherit;
        }

        /* Page Transition Styles */
        .page-content {
          width: 100%;
          min-height: 100vh;
        }
      ` }} />
    </div>
  );
};

export default App;
