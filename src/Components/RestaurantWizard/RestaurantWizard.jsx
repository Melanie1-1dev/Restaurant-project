import React from 'react';
import './RestaurantWizard.css';
import { Link } from 'react-router-dom';

const RestaurantWizard = () => {
  return (
    <div className="profile-container">
      {/* Background Section with Hero Text */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="logo">Miss<span>More</span></div>
          <h1 className="hero-title">Create your <br /><span>restaurant</span> profile</h1>
          
          {/* Vertical Stepper */}
          <div className="stepper">
            <div className="step completed">
              <div className="step-number">1</div>
              <div className="step-info">
                <h3>Restaurant information</h3>
                <p>Basic information about your restaurant</p>
              </div>
            </div>
            <div className="step active">
              <div className="step-number">2</div>
              <div className="step-info">
                <h3>Restaurant types & timings</h3>
                <p>Select restaurant type and opening hours</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-info">
                <h3>Create your menu</h3>
                <p>Add menu, restaurant and food images</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-info">
                <h3>Review & publish</h3>
                <p>Review and publish your restaurant profile</p>
              </div>
            </div>
          </div>

          <div className="edit-info-box">
             <span className="lightbulb-icon">💡</span>
             <p>You can always edit these information later</p>
          </div>
        </div>
      </div>

      {/* Form Content Section */}
      <div className="form-section">
        <header className="form-header">
          <div className="header-links">
            <span className="help">❔ Need help?</span>
            <div className="user-profile">
              <img src="https://i.pravatar.cc/100?u=kagabo" alt="Kagabo Jacques" />
              <div className="user-text">
                <span className="user-name">Kagabo Jacques</span>
                <span className="user-role">Restaurant Owner</span>
              </div>
              <span className="chevron">⌄</span>
            </div>
          </div>
        </header>

        <div className="form-card-container">
          <div className="form-card">
            <span className="step-indicator">Step 2 of 4</span>
            <h2 className="form-title">Restaurant Information</h2>
            <p className="form-subtitle">Add basic information about your restaurant.</p>

            <form className="restaurant-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="input-group">
                  <label>Restaurant Type</label>
                  <div className="custom-select">
                    <span className="icon">🏢</span>
                    <select defaultValue="Restaurant">
                      <option value="Restaurant">Restaurant</option>
                      <option value="Pub">Pub</option>
                      <option value="Cafe">Cafe</option>
                    </select>
                  </div>
                </div>
                <div className="input-group">
                  <label>Cuisine Type</label>
                  <div className="custom-select">
                    <span className="icon">🌐</span>
                    <select defaultValue="African">
                      <option value="African">African</option>
                      <option value="Continental">Continental</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-group">
                <label>Opening Hours</label>
                <div className="time-row">
                  <div className="time-picker">
                    <span className="time-label">From</span>
                    <div className="time-input">
                      <span className="icon">🕒</span>
                      <select><option>14:00 PM</option></select>
                    </div>
                  </div>
                  <span className="separator">-</span>
                  <div className="time-picker">
                    <div className="time-input">
                      <span className="icon">🕒</span>
                      <select><option>02:00 AM</option></select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="input-group-1">
                <label>Upload Images (Pictures or logo)</label>
                <div className="upload-zone">
                  <div className="upload-icon">☁️</div>
                  <p className="upload-text">Choose Images</p>
                  <p className="upload-subtext">JPG, PNG up to 5MB</p>
                </div>
              </div>

           <Link to="/restaurant-overview" style={{ textDecoration: 'none', color: 'inherit' }}>
              <button type="submit" className="continue-btn">
                Continue <span>→</span>
              </button>
            </Link>
            </form>
          </div>
        </div>

        {/* Sync System Base Utility Navigation Bar */}
        <footer className="form-navigation-footer">
          <span className="action-draft-link">Save as draft</span>
          <div className="footer-right-meta">
            <span className="nav-back-btn">Back</span>
            <div className="footer-pipe-divider"></div>
            <span className="progress-lbl">Progress: <strong className="orange-pct">50%</strong></span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default RestaurantWizard;