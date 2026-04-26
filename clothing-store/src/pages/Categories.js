// ==========================================
// CATEGORIES PAGE - src/pages/Categories.js
// ==========================================

import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { categories, products } from '../data/products';
import './Categories.css';

function Categories() {
  const navigate = useNavigate();

  return (
    <div className="categories-page">
      {/* Page Header */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span> / </span>
            <span>Categories</span>
          </div>
          <h1>📋 All Categories</h1>
          <p>Browse our complete collection of men's fashion</p>
        </div>
      </div>

      <div className="container categories-content">
        <div className="categories-grid">
          {categories.map(cat => {
            const count = products.filter(p => p.category === cat.id).length;
            const catProducts = products.filter(p => p.category === cat.id).slice(0, 3);

            return (
              <div
                key={cat.id}
                className="category-block"
                onClick={() => navigate(`/products?category=${cat.id}`)}
              >
                <div className="cat-block-header">
                  <div className="cat-block-image">
                    <img src={cat.image} alt={cat.name} />
                    <div className="cat-block-overlay">
                      <span>{cat.icon}</span>
                    </div>
                  </div>
                  <div className="cat-block-info">
                    <h2>{cat.name}</h2>
                    <p>{count} Products Available</p>
                    <button className="cat-shop-btn">Shop Now →</button>
                  </div>
                </div>

                <div className="cat-preview-products">
                  {catProducts.map(product => (
                    <div key={product.id} className="cat-preview-item">
                      <img src={product.image} alt={product.name} />
                      <div className="cat-preview-info">
                        <p className="cat-preview-name">{product.name}</p>
                        <p className="cat-preview-price">₹{product.price.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Categories;
