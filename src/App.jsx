import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SEO from './components/SEO';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-900 text-white">
          <SEO />
          <Navbar />
          <div className="pt-20"> {/* Add padding-top to account for fixed navbar */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Certifications />
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
