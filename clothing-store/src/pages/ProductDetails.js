// ==========================================
// PRODUCT DETAILS PAGE - src/pages/ProductDetails.js
// ==========================================

import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './ProductDetails.css';

function ProductDetails({ onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="not-found">
        <div className="container">
          <span>😕</span>
          <h2>Product Not Found</h2>
          <p>This product does not exist or has been removed.</p>
          <button onClick={() => navigate('/products')}>Browse Products</button>
        </div>
      </div>
    );
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const related = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const renderStars = (rating) => {
    return '★'.repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? '½' : '');
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size!');
      return;
    }
    onAddToCart && onAddToCart({ ...product, selectedSize, selectedColor, quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="product-details-page">
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb" style={{ padding: '20px 0 10px', fontSize: 13, color: '#888' }}>
          <Link to="/" style={{ color: '#888' }}>Home</Link>
          <span> / </span>
          <Link to="/products" style={{ color: '#888' }}>Products</Link>
          <span> / </span>
          <Link to={`/products?category=${product.category}`} style={{ color: '#888' }}>
            {product.category}
          </Link>
          <span> / </span>
          <span style={{ color: '#333' }}>{product.name}</span>
        </div>

        {/* Main detail layout */}
        <div className="detail-layout">
          {/* LEFT: Image */}
          <div className="detail-images">
            <div className="main-image-wrap">
              <img src={product.image} alt={product.name} className="main-image" />
              {product.badge && (
                <span className={`card-badge ${product.badge === 'Bestseller' || product.badge === 'Top Rated' ? 'gold' : ''}`}>
                  {product.badge}
                </span>
              )}
              <div className="discount-tag">-{discount}%</div>
            </div>
            <div className="image-thumbnails">
              <img src={product.image} alt="thumb" className="thumb active" />
              <div className="thumb placeholder">+3 more</div>
            </div>
          </div>

          {/* RIGHT: Info */}
          <div className="detail-info">
            <p className="detail-category">{product.category.toUpperCase()}</p>
            <h1 className="detail-title">{product.name}</h1>

            {/* Rating */}
            <div className="detail-rating">
              <span className="stars">{renderStars(product.rating)}</span>
              <span className="rating-val">{product.rating}</span>
              <span className="rating-reviews">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="detail-price">
              <span className="price-current">₹{product.price.toLocaleString()}</span>
              <span className="price-original">₹{product.originalPrice.toLocaleString()}</span>
              <span className="price-discount">{discount}% OFF</span>
            </div>

            <p className="offer-tag">🎉 Inclusive of all taxes • Free delivery on this order</p>

            {/* Description */}
            <div className="detail-desc">
              <h3>About this item</h3>
              <p>{product.description}</p>
            </div>

            {/* Color selector */}
            {product.colors && product.colors[0] !== 'Multiple' && (
              <div className="selector-group">
                <label>Color: <strong>{selectedColor || 'Select'}</strong></label>
                <div className="color-options">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      className={`color-btn ${selectedColor === color ? 'active' : ''}`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size selector */}
            <div className="selector-group">
              <label>Size: <strong>{selectedSize || 'Select a size'}</strong></label>
              <div className="size-options">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="selector-group">
              <label>Quantity:</label>
              <div className="qty-control">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(Math.min(10, quantity + 1))}>+</button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="detail-actions">
              <button
                className={`btn-add-cart ${added ? 'success' : ''}`}
                onClick={handleAddToCart}
              >
                {added ? '✅ Added to Cart!' : '🛒 Add to Cart'}
              </button>
              <button className="btn-buy-now" onClick={handleAddToCart}>
                ⚡ Buy Now
              </button>
            </div>

            {/* Delivery info */}
            <div className="delivery-info">
              <div className="delivery-item">
                <span>🚚</span>
                <div>
                  <strong>Free Delivery</strong>
                  <p>Estimated delivery in 3–5 business days</p>
                </div>
              </div>
              <div className="delivery-item">
                <span>↩️</span>
                <div>
                  <strong>30-Day Returns</strong>
                  <p>Easy returns within 30 days of purchase</p>
                </div>
              </div>
              <div className="delivery-item">
                <span>✅</span>
                <div>
                  <strong>100% Authentic</strong>
                  <p>Verified genuine product</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="related-section">
            <div className="section-header">
              <h2>Similar Products</h2>
              <Link to={`/products?category=${product.category}`} className="see-all">
                View All →
              </Link>
            </div>
            <div className="related-grid">
              {related.map(p => (
                <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
