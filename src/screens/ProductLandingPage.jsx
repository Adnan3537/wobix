import React from 'react';
import '../App.css';
import ProductPage from '../components/productpage/ProductPage';
import ProductHeader from '../components/productpage/ProductHeader';

function ProductLandingPage() {
  return (
    <div>
      <ProductHeader /> 
      <ProductPage />   
    </div>
  );
}

export default ProductLandingPage;
