import React from 'react'
import Heading from './components/Heading/Heading'
import HeroSection from './components/HeroSection/HeroSection'
import AboutSection from './components/AboutSection/AboutSection'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'
import ServicesSection from './components/ServicesSection/ServicesSection'
import ReviewSection from './components/ReviewSection/ReviewSection'
import ContactsSection from './components/ContactsSection/ContactsSection'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'







function App() {
  return (
    
      <div className='main'>
      {/* <Header /> */}
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <ReviewSection />
      <ContactsSection />
      {/* <Footer /> */}

      
      
      </div>
    
  )
}

export default App
