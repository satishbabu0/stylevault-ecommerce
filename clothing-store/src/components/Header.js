// ==========================================
// HEADER COMPONENT - src/components/Header.js
// ==========================================

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchText.trim())}`);
      setSearchText('');
    }
  };

  return (
    <header className="header">
      {/* Top bar */}
      <div className="header-top">
        <div className="container header-top-inner">
          <span>🎉 Free Shipping on orders above ₹999</span>
          <div className="header-top-links">
            <Link to="/login">Login</Link>
            <span>|</span>
            <Link to="/register">Create Account</Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="header-main">
        <div className="container header-main-inner">
          {/* Logo */}
          <Link to="/" className="logo">
            <span className="logo-icon">👕</span>
            <div className="logo-text">
              <span className="logo-brand">StyleVault</span>
              <span className="logo-sub">Fashion Store</span>
            </div>
          </Link>

          {/* Search bar */}
          <form className="search-bar" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search for clothes, brands..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button type="submit" className="search-btn">🔍</button>
          </form>

          {/* Right icons */}
          <div className="header-icons">
            <Link to="/login" className="icon-btn">
              <span className="icon">👤</span>
              <span className="icon-label">Account</span>
            </Link>
            <Link to="/cart" className="icon-btn cart-icon">
              <span className="icon">🛒</span>
              <span className="icon-label">Cart</span>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        <div className="container navbar-inner">
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>🏠 Home</Link>
          <Link to="/products" className="nav-link" onClick={() => setMenuOpen(false)}>🛍️ All Products</Link>
          <Link to="/categories" className="nav-link" onClick={() => setMenuOpen(false)}>📋 Categories</Link>
          <Link to="/products?category=tshirts" className="nav-link" onClick={() => setMenuOpen(false)}>👕 T-Shirts</Link>
          <Link to="/products?category=shirts" className="nav-link" onClick={() => setMenuOpen(false)}>👔 Shirts</Link>
          <Link to="/products?category=hoodies" className="nav-link" onClick={() => setMenuOpen(false)}>🧥 Hoodies</Link>
          <Link to="/products?category=jeans" className="nav-link" onClick={() => setMenuOpen(false)}>👖 Jeans</Link>
          <Link to="/products?category=ethnic" className="nav-link" onClick={() => setMenuOpen(false)}>🎎 Ethnic</Link>
          <Link to="/products?category=sportswear" className="nav-link" onClick={() => setMenuOpen(false)}>⚽ Sportswear</Link>
          <Link to="/fitroom" className="nav-link fitroom-nav" onClick={() => setMenuOpen(false)}>🧍 FitRoom</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
