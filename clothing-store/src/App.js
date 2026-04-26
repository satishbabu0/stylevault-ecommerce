// ==========================================
// APP.JS - Main Router - src/App.js
// ==========================================

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Products from './pages/Products';
import Categories from './pages/Categories';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import FitRoom from './pages/FitRoom';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item =>
        item.id === product.id && item.selectedSize === product.selectedSize
      );
      if (existing) {
        return prev.map(item =>
          item.id === product.id && item.selectedSize === product.selectedSize
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <Router>
      <Header cartCount={cartCount} />
      <main>
        <Routes>
          <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
          <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/product/:id" element={<ProductDetails onAddToCart={handleAddToCart} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/fitroom" element={<FitRoom onAddToCart={handleAddToCart} />} />
          {/* Fallback */}
          <Route path="*" element={<Home onAddToCart={handleAddToCart} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
