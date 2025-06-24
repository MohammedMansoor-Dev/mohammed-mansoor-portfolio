import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'; // Import Route and Routes
import Navbar from './components/Navbar';
import Home from './components/Home';
import WorkExp from './components/WorkExp';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="bg-black">
      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<WorkExp />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;