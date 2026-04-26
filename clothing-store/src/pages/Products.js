// ==========================================
// PRODUCTS PAGE - src/pages/Products.js
// ==========================================

import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import './Products.css';

function Products({ onAddToCart }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('default');
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const categoryParam = searchParams.get('category') || '';
  const searchQuery = searchParams.get('search') || '';

  // Filter products
  let filtered = [...products];

  if (categoryParam) {
    filtered = filtered.filter(p => p.category === categoryParam);
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

  // Sort
  if (sortBy === 'price-low') filtered.sort((a, b) => a.price - b.price);
  else if (sortBy === 'price-high') filtered.sort((a, b) => b.price - a.price);
  else if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating);
  else if (sortBy === 'discount') {
    filtered.sort((a, b) => {
      const da = ((a.originalPrice - a.price) / a.originalPrice);
      const db = ((b.originalPrice - b.price) / b.originalPrice);
      return db - da;
    });
  }

  const currentCat = categories.find(c => c.id === categoryParam);

  return (
    <div className="products-page">
      {/* Page Header */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span> / </span>
            {categoryParam
              ? <><Link to="/categories">Categories</Link><span> / </span><span>{currentCat?.name}</span></>
              : searchQuery
              ? <span>Search: "{searchQuery}"</span>
              : <span>All Products</span>
            }
          </div>
          <h1>
            {categoryParam
              ? `${currentCat?.icon} ${currentCat?.name}`
              : searchQuery
              ? `Results for "${searchQuery}"`
              : '🛍️ All Products'
            }
          </h1>
          <p>{filtered.length} products found</p>
        </div>
      </div>

      <div className="container products-layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-section">
            <h3>Categories</h3>
            <ul className="cat-list">
              <li>
                <button
                  className={!categoryParam ? 'active' : ''}
                  onClick={() => setSearchParams({})}
                >
                  All Products <span>{products.length}</span>
                </button>
              </li>
              {categories.map(cat => (
                <li key={cat.id}>
                  <button
                    className={categoryParam === cat.id ? 'active' : ''}
                    onClick={() => setSearchParams({ category: cat.id })}
                  >
                    {cat.icon} {cat.name}
                    <span>{products.filter(p => p.category === cat.id).length}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Price Range</h3>
            <div className="price-filter">
              <div className="price-labels">
                <span>₹{priceRange[0]}</span>
                <span>₹{priceRange[1]}</span>
              </div>
              <input
                type="range"
                min="0" max="5000" step="100"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                className="range-slider"
              />
            </div>
            <div className="price-btns">
              {[[0,999],[1000,1999],[2000,3499],[3500,5000]].map(([min,max]) => (
                <button
                  key={min}
                  className={priceRange[0]===min && priceRange[1]===max ? 'active' : ''}
                  onClick={() => setPriceRange([min, max])}
                >
                  ₹{min} – ₹{max}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="products-main">
          {/* Toolbar */}
          <div className="products-toolbar">
            <p className="results-count">
              Showing <strong>{filtered.length}</strong> products
            </p>
            <div className="sort-bar">
              <span>Sort by:</span>
              {[
                { value: 'default', label: 'Relevance' },
                { value: 'price-low', label: 'Price: Low' },
                { value: 'price-high', label: 'Price: High' },
                { value: 'rating', label: 'Top Rated' },
                { value: 'discount', label: 'Best Discount' },
              ].map(opt => (
                <button
                  key={opt.value}
                  className={sortBy === opt.value ? 'sort-btn active' : 'sort-btn'}
                  onClick={() => setSortBy(opt.value)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          {filtered.length > 0 ? (
            <div className="products-grid">
              {filtered.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <span>😔</span>
              <h3>No products found</h3>
              <p>Try a different search or browse all categories.</p>
              <button onClick={() => setSearchParams({})}>View All Products</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Products;
