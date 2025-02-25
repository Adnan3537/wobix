import React from 'react'
// import SpotLight from '../components/landingpage/SpotLight';
import About from '../components/landingpage/About';
import Bottle from '../components/landingpage/Bottle';
import ProductsSection from '../components/landingpage/ProductsSection';
import TestimonialsSection from '../components/landingpage/TestimonialsSection';
import ContactSection from '../components/landingpage/ContactSection ';
import '../App.css';
import SpotLight from '../components/landingpage/SpotLight';

// import ContactSection from '../components/landingpage/ContactSection';

function LandingPage() {
  return (
    <div>
        <SpotLight />
        <About />
        <Bottle />
        <ProductsSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
  )
}

export default LandingPage;
