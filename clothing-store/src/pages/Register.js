// ==========================================
// REGISTER PAGE - src/pages/Register.js
// ==========================================

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import './Register.css';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.confirm) {
      setError('Please fill in all fields.');
      return;
    }
    if (form.password !== form.confirm) {
      setError('Passwords do not match.');
      return;
    }
    setError('');
    alert(`Account created for ${form.name}! Welcome to StyleVault!`);
    navigate('/');
  };

  return (
    <div className="login-page">
      {/* Left Banner */}
      <div className="login-banner">
        <div className="banner-overlay">
          <h1>👕 StyleVault</h1>
          <p>Join Thousands of Happy Shoppers!</p>
          <div className="banner-features">
            <div>🎉 Exclusive Member Deals</div>
            <div>🚚 Free Delivery on First Order</div>
            <div>💳 Easy & Secure Checkout</div>
            <div>↩️ 30-Day Returns Guaranteed</div>
          </div>
        </div>
        <img src="/images/tshirt5.webp" alt="Fashion" className="banner-bg-img" />
      </div>

      {/* Right: Form */}
      <div className="login-form-wrap">
        <div className="login-box">
          <div className="login-header">
            <h2>Create Account</h2>
            <p>Join StyleVault and start shopping</p>
          </div>

          {error && <div className="error-msg">⚠️ {error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create a strong password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirm"
                placeholder="Repeat your password"
                value={form.confirm}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-login">Create Account →</button>
          </form>

          <p className="signup-prompt">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
