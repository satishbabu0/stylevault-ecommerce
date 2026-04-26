// ==========================================
// FOOTER COMPONENT - src/components/Footer.js
// ==========================================

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-col">
            <h3>👕 StyleVault</h3>
            <p>Your ultimate fashion destination. Trendy, affordable, and customizable clothing for every occasion.</p>
            <div className="social-icons">
              <span>📘</span>
              <span>📸</span>
              <span>🐦</span>
              <span>▶️</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">All Products</Link></li>
              <li><Link to="/categories">Categories</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Create Account</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Categories</h4>
            <ul>
              <li><Link to="/products?category=tshirts">T-Shirts</Link></li>
              <li><Link to="/products?category=shirts">Shirts</Link></li>
              <li><Link to="/products?category=hoodies">Hoodies</Link></li>
              <li><Link to="/products?category=jeans">Jeans</Link></li>
              <li><Link to="/products?category=ethnic">Ethnic Wear</Link></li>
              <li><Link to="/products?category=sportswear">Sportswear</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Customer Care</h4>
            <ul>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#returns">Returns & Refunds</a></li>
              <li><a href="#track">Track My Order</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
            <div className="contact-info">
              <p>📞 1800-123-4567</p>
              <p>✉️ support@stylevault.in</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2026 StyleVault Fashion Store. All Rights Reserved.</p>
          <div className="payment-icons">
            <span>💳 Visa</span>
            <span>💳 Mastercard</span>
            <span>📱 UPI</span>
            <span>💰 COD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
