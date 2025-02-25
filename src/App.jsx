
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/landingpage/Header';
import Footer from './components/landingpage/Footer';
import LandingPage from './screens/LandingPage';
// import AboutLandingPage from './screens/AboutLandingPage';
import ProductLandingPage from './screens/ProductLandingPage';
import ContactLandingPage from './screens/ContactLandingPage';
import './App.css';
import AboutLandingPage from './screens/AboutLandingPage';
// import ContactLandingPage from './screens/ContactLandingPage';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutLandingPage />} />
        <Route path="/product" element={<ProductLandingPage />} />
        <Route path="/contact" element={<ContactLandingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
