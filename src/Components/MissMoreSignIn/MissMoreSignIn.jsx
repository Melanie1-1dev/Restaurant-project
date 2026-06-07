import React, { useState } from 'react';
import './MissMoreSignIn.css';

const MissMoreSignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { username, password, rememberMe });
  };

  return (
    <div className="login-container">
      {/* Left Side: Hero Image and Text */}
      <div className="login-hero-section">
        {/* Replace this background image URL or local path as needed */}
        <div className="login-hero-image" />
        <div className="login-hero-overlay">
          <div className="login-hero-content">
            <h1 className="login-hero-title">
              Precision in every plate, efficiency in every kitchen.
            </h1>
            <p className="login-hero-subtitle">
              Join thousands of professional chefs managing their inventory and orders with MissMore's intuitive interface.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: Authentication Form */}
      <div className="login-form-section">
        <div className="login-form-wrapper">
          
          {/* Logo */}
          <div className="login-logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 3V11C2 13.2 3.8 15 6 15V21H8V15C10.2 15 12 13.2 12 11V3H10V10H9V3H7V10H6V3H4V10H3V3H2ZM16 3C13.8 3 12 4.8 12 7V13H14V21H16V13H18V21H20V13C22.2 13 24 11.2 24 9V3H16ZM16 11V5C17.1 5 18 5.9 18 7V11H16Z" fill="#A16207"/>
            </svg>
            <span className="login-logo-text">MissMore</span>
          </div>

          {/* Header */}
          <header className="login-header">
            <h2>Sign In</h2>
            <p>Welcome back! Please enter your details.</p>
          </header>

          {/* Form */}
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <div className="password-label-row">
                <label htmlFor="password">Password</label>
                <a href="#forgot" className="forgot-password-link">Forgot Password?</a>
              </div>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-options">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="checkmark"></span>
                Remember this device
              </label>
            </div>

            <button type="submit" className="btn-primary-submit">
              Sign In to MissMore
              <svg className="arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>

          {/* Divider */}
          <div className="form-divider">
            <span>OR CONTINUE WITH</span>
          </div>

          {/* Social Logins */}
          <div className="social-login-row">
            <button type="button" className="btn-social">
              <svg className="social-icon" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335" />
              </svg>
              Google
            </button>
            <button type="button" className="btn-social">
              <svg className="social-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-1.01 2.94 1.07.08 2.18-.52 2.84-1.33z" fill="#000000"/>
              </svg>
              Apple
            </button>
          </div>

          {/* Footer Text */}
          <div className="login-footer">
            <span>New to the kitchen? </span>
            <a href="/landing" className="signup-link">Create an account</a>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default MissMoreSignIn;