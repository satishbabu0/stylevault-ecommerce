// ==========================================
// PRODUCT CARD COMPONENT - src/components/ProductCard.js
// ==========================================

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product, onAddToCart }) {
  const navigate = useNavigate();
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    let stars = '★'.repeat(full);
    if (half) stars += '½';
    return stars;
  };

  return (
    <div className="product-card">
      {product.badge && (
        <span className={`card-badge ${product.badge === 'Bestseller' || product.badge === 'Top Rated' ? 'gold' : ''}`}>
          {product.badge}
        </span>
      )}

      <div className="card-image-wrap" onClick={() => navigate(`/product/${product.id}`)}>
        <img src={product.image} alt={product.name} className="card-image" />
        <div className="card-overlay">
          <span>View Details</span>
        </div>
      </div>

      <div className="card-body">
        <p className="card-category">{product.category}</p>
        <h3 className="card-title" onClick={() => navigate(`/product/${product.id}`)}>
          {product.name}
        </h3>

        <div className="card-rating">
          <span className="stars">{renderStars(product.rating)}</span>
          <span className="rating-text">{product.rating} ({product.reviews})</span>
        </div>

        <div className="card-price">
          <span className="price-current">₹{product.price.toLocaleString()}</span>
          <span className="price-original">₹{product.originalPrice.toLocaleString()}</span>
          <span className="price-discount">{discount}% off</span>
        </div>

        <div className="card-actions">
          <button
            className="btn-view"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            View Details
          </button>
          <button
            className="btn-cart"
            onClick={() => onAddToCart && onAddToCart(product)}
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
