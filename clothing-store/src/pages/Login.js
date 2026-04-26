// ==========================================
// LOGIN PAGE - src/pages/Login.js
// ==========================================

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    alert(`Welcome back! Logged in as ${email}`);
    navigate('/');
  };

  return (
    <div className="login-page">
      {/* Left Banner */}
      <div className="login-banner">
        <div className="banner-overlay">
          <h1>👕 StyleVault</h1>
          <p>Your Ultimate Fashion Destination</p>
          <div className="banner-features">
            <div>✅ Exclusive Members Discounts</div>
            <div>✅ Track Your Orders</div>
            <div>✅ Save Your Wishlist</div>
            <div>✅ Fast Checkout</div>
          </div>
        </div>
        <img src="/images/hoodie.webp" alt="Fashion" className="banner-bg-img" />
      </div>

      {/* Right: Form */}
      <div className="login-form-wrap">
        <div className="login-box">
          <div className="login-header">
            <h2>Welcome Back!</h2>
            <p>Login to your StyleVault account</p>
          </div>

          {error && <div className="error-msg">⚠️ {error}</div>}

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <a href="#forgot" className="forgot-link">Forgot Password?</a>
            </div>

            <button type="submit" className="btn-login">Login →</button>
          </form>

          <div className="divider"><span>OR</span></div>

          <button className="btn-google">🔵 Continue with Google</button>

          <p className="signup-prompt">
            Don't have an account? <Link to="/register">Create Account</Link>
          </p>

          {/* Category links */}
          <div className="quick-browse">
            <p>Quick Browse:</p>
            <div className="browse-links">
              <Link to="/products?category=tshirts">T-Shirts</Link>
              <Link to="/products?category=shirts">Shirts</Link>
              <Link to="/products?category=hoodies">Hoodies</Link>
              <Link to="/products?category=ethnic">Ethnic</Link>
              <Link to="/products?category=jeans">Jeans</Link>
              <Link to="/products?category=sportswear">Sports</Link>
              <Link to="/products?category=jackets">Jackets</Link>
              <Link to="/products?category=accessories">Accessories</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
