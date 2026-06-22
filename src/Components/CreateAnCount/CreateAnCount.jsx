import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateAnCount.css';

const CreateAnCount = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setIsLoading(true);

    // Simulate account creation (replace with real API call)
    setTimeout(() => {
      console.log('Account created successfully!', { username, email, password });
      
      setIsLoading(false);
      setSuccess(true);

      // Redirect to home after showing success message
      setTimeout(() => {
        navigate('/home');
      }, 1500);
    }, 1200);
  };

  const handleGoogleSignUp = () => {
    setIsLoading(true);
    console.log('Initiating Google Sign-Up...');
    
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      setTimeout(() => navigate('/home'), 1500);
    }, 1000);
  };

  const handleAppleSignUp = () => {
    setIsLoading(true);
    console.log('Initiating Apple Sign-Up...');
    
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      setTimeout(() => navigate('/home'), 1500);
    }, 1000);
  };

  // Show success screen
  if (success) {
    return (
      <div className="auth-page-container success-screen">
        <div className="success-content">
          <div className="success-icon">🎉</div>
          <h2>Account Created Successfully!</h2>
          <p>Welcome to MissMore, {username || 'Chef'}!</p>
          <p>Redirecting you to the home page...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page-container">
      {/* Hero / Left Visual Banner */}
      <div className="auth-hero-banner">
        <div className="auth-hero-bg-wrapper">
          <img 
            src="image_304d66.png" 
            alt="Delicious burger backdrop layout" 
            className="auth-source-img-fallback"
          />
        </div>
        <div className="auth-hero-overlay">
          <div className="auth-hero-logo">MissMore</div>
          <div className="auth-hero-text-content">
            <h1 className="auth-hero-headline">Welcome Back !</h1>
            <p className="auth-hero-sub-text">
              Indulge your taste buds at MissMore, where every flavor tells a delicious story.
            </p>
            <div className="auth-carousel-indicators">
              <span className="indicator active"></span>
              <span className="indicator"></span>
              <span className="indicator"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Form Panel / Right Panel */}
      <div className="auth-form-panel">
        <div className="auth-card-wrapper">
          <h2 className="auth-card-title">Create Account</h2>
          <p className="auth-card-subtitle">Join our MissMore community today.</p>

          <form onSubmit={handleSubmit} className="auth-form-element">
            {/* Username */}
            <div className="auth-input-container">
              <label htmlFor="username">User name</label>
              <div className="auth-input-icon-wrapper">
                <svg className="input-field-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Email */}
            <div className="auth-input-container">
              <label htmlFor="email">Email</label>
              <div className="auth-input-icon-wrapper">
                <svg className="input-field-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <input
                  type="email"
                  id="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Password */}
            <div className="auth-input-container">
              <label htmlFor="password">Password</label>
              <div className="auth-input-icon-wrapper">
                <svg className="input-field-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="auth-submit-btn" disabled={isLoading}>
              {isLoading ? 'Creating Account...' : 'Create Account'}
              {!isLoading && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="auth-divider">
            <span>OR SIGN UP WITH</span>
          </div>

          {/* Social Buttons */}
          <div className="auth-social-row">
            <button type="button" className="social-btn" onClick={handleGoogleSignUp} disabled={isLoading}>
              <svg className="google-svg" viewBox="0 0 24 24" width="16" height="16">
                {/* Google SVG paths... */}
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335" />
              </svg>
              <span>Google</span>
            </button>

            <button type="button" className="social-btn" onClick={handleAppleSignUp} disabled={isLoading}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-1.01 2.94 1.07.08 2.18-.52 2.84-1.33z"/>
              </svg>
              <span>Apple</span>
            </button>
          </div>

          <div className="auth-footer-alternate-link">
            Already have an account? <a href="/" className="accent-link">login</a>
          </div>
        </div>

        <footer className="auth-global-footer">
          <a href="/privacy">Privacy Policy</a>
          <span className="footer-dot">•</span>
          <a href="/terms">Terms of Service</a>
        </footer>
      </div>
    </div>
  );
};

export default CreateAnCount;