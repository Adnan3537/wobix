import React from 'react';
import ProductsSection from '../components/landingpage/ProductsSection';
import TestimonialsSection from '../components/landingpage/TestimonialsSection';
import '../App.css';

function ProductLandingPage() {
  return (
    <div>
      <h2 className="text-center text-2xl font-bold my-6">Our Products</h2>
      <ProductsSection />
      <TestimonialsSection />
    </div>
  );
}

export default ProductLandingPage;
