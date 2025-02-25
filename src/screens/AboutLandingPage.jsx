import React from 'react';

import ContactSection from '../components/landingpage/ContactSection ';
import '../App.css';
import AboutFirst from '../components/aboutpage/AboutFirst';
import AboutSecond from '../components/aboutpage/AboutSecond';
import AboutThird from '../components/aboutpage/AboutThird';
import AboutForth from '../components/aboutpage/AboutForth';
import AboutFifth from '../components/aboutpage/AboutFifth';
import Aboutsixth from '../components/aboutpage/AboutSixth';
// import ContactSection from '../components/landingpage/ContactSection';

function AboutLandingPage() {
  return (
    <div>
      <AboutFirst />
      <AboutSecond />
      <AboutThird />
      <AboutForth />
      <AboutFifth />
      <Aboutsixth />
      <ContactSection />
    </div>
  );
}

export default AboutLandingPage;

