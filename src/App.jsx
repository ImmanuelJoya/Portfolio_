import { HelmetProvider } from 'react-helmet-async';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SEO from './components/SEO';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ScrollToTop from './hooks/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
      
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-900 text-white">
          <SEO />
          <Navbar />
          <div className=""> {/* Add padding-top to account for fixed navbar */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
