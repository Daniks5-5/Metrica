import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import ReviewSection from './components/ReviewSection/ReviewSection';
import ContactsSection from './components/ContactsSection/ContactsSection';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <div className='main'>
      <Router  basename="/Metrica">
        <Routes>
          <Route path="/" element={
            <>
             <Header />
              <HeroSection />
              <AboutSection />
              <ProjectsSection />
              <ServicesSection />
              <ReviewSection />
              <ContactsSection />
              <Footer />
            </>
          } />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutSection />} />
        </Routes>
     
      </Router>
    </div>
  );
}

export default App;