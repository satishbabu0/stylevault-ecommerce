// ==========================================
// HOME PAGE - src/pages/Home.js
// ==========================================

import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { categories, featuredProducts } from '../data/products';
import './Home.css';

function Home({ onAddToCart }) {
  const navigate = useNavigate();

  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content fade-in">
          <span className="hero-tag">New Arrivals 2026</span>
          <h1>
            Style That<br />
            <span className="hero-accent">Speaks For You</span>
          </h1>
          <p>Explore hundreds of premium outfits for every occasion.<br />Trendy, affordable &amp; customizable.</p>
          <div className="hero-btns">
            <button className="hero-btn-primary" onClick={() => navigate('/products')}>
              Shop Now →
            </button>
            <button className="hero-btn-secondary" onClick={() => navigate('/categories')}>
              Browse Categories
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat"><strong>500+</strong><span>Products</span></div>
            <div className="stat-divider"></div>
            <div className="stat"><strong>50K+</strong><span>Happy Customers</span></div>
            <div className="stat-divider"></div>
            <div className="stat"><strong>100%</strong><span>Authentic</span></div>
          </div>
        </div>
        <div className="hero-image-wrap">
          <div className="hero-image-grid">
            <img src="/images/black-tshirt.webp" alt="Fashion 1" className="hero-img img1" />
            <img src="/images/shirt.webp" alt="Fashion 2" className="hero-img img2" />
            <img src="/images/hoodie.webp" alt="Fashion 3" className="hero-img img3" />
            <img src="/images/ethnic.webp" alt="Fashion 4" className="hero-img img4" />
          </div>
        </div>
      </section>

      {/* OFFER STRIP */}
      <div className="offer-strip">
        <div className="container offer-strip-inner">
          <span>🚚 Free Delivery on orders above ₹999</span>
          <span>↩️ 30 Days Easy Returns</span>
          <span>✅ 100% Authentic Products</span>
          <span>💳 Secure Payment</span>
        </div>
      </div>

      {/* CATEGORIES */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Shop by Category</h2>
            <Link to="/categories" className="see-all">See All →</Link>
          </div>
          <div className="category-grid">
            {categories.map(cat => (
              <div
                key={cat.id}
                className="category-card"
                onClick={() => navigate(`/products?category=${cat.id}`)}
              >
                <div className="cat-img-wrap">
                  <img src={cat.image} alt={cat.name} />
                </div>
                <div className="cat-info">
                  <span className="cat-icon">{cat.icon}</span>
                  <span className="cat-name">{cat.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2>Featured Collection</h2>
            <Link to="/products" className="see-all">View All →</Link>
          </div>
          <div className="product-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section className="promo-banner">
        <div className="container promo-inner">
          <div className="promo-text">
            <h2>🎉 Mega Sale — Up to 60% Off!</h2>
            <p>Limited time offer on selected categories. Don't miss out!</p>
            <button onClick={() => navigate('/products')}>Grab the Deal</button>
          </div>
          <div className="promo-image">
            <img src="/images/tshirt5.webp" alt="Sale" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Why Shop with Us?</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Custom Clothing</h3>
              <p>Design your own outfits with colors, text and unique styles.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧍</div>
              <h3>Virtual Try-On</h3>
              <p>Try clothes on your virtual avatar before you buy.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>Same day and next day delivery options available.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure Payments</h3>
              <p>100% safe and encrypted transactions every time.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
