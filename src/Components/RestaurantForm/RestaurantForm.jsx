import React, { useState } from 'react';
import './RestaurantForm.css';

const RestaurantForm = () => {
  // Use state to manage the active step (1 of 4)
  const [currentStep, setCurrentStep] = useState(1);
  
  // Basic form state to reflect in the preview card
  const [restaurantName, setRestaurantName] = useState('Tom Yummy Restaurant');
  const [restaurantType, setRestaurantType] = useState('Fast Food');

  const steps = [
    { num: 1, title: 'Restaurant Information', desc: 'Tell us about your restaurant' },
    { num: 2, title: 'Contact Details', desc: 'Add contact information' },
    { num: 3, title: 'Menu Setup', desc: 'Add your menu and prices' },
    { num: 4, title: 'Finish', desc: 'Review and publish' }
  ];

  // Function to navigate to the next step
  const handleContinue = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      alert("Setup finalized! Finalizing publishing process.");
    }
  };

  const handleSaveDraft = () => {
    alert("Draft saved successfully.");
  };

  return (
    <div className="setup-wrapper">
      {/* 1. TOP NAVBAR */}
      <nav className="top-navbar">
        <div className="brand-logo">
          Miss <span className="logo-accent">More</span>
        </div>
        <div className="nav-right">
          <div className="help-link">❔ Need help?</div>
          <div className="user-profile">
            <div className="user-info">
              <div className="user-name">Kagabo Jacques</div>
              <div className="user-role">Restaurant Owner</div>
            </div>
            <img src="https://i.pravatar.cc/150?u=kjacques" alt="avatar" className="user-avatar" />
            <div className="chevron">⌄</div>
          </div>
        </div>
      </nav>

      <div className="main-layout">
        {/* 2. LEFT SIDEBAR (STEPPER) */}
        <aside className="sidebar-stepper">
          <h2 className="sidebar-title">Restaurant Setup</h2>
          <p className="sidebar-subtitle">Let's set up your restaurant in a few simple steps.</p>
          
          <div className="stepper-list">
            {steps.map(step => (
              <div key={step.num} className={`step-item ${currentStep >= step.num ? 'active-step' : ''}`}>
                <div className="step-circle">{step.num}</div>
                <div className="step-text">
                  <div className="step-title">{step.title}</div>
                  <div className="step-desc">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="sidebar-info-card">
            💡 You can always edit these information later in the settings panel.
          </div>
        </aside>

        {/* 3. CENTER FORM AREA (DYNAMIC CONTENT) */}
        <main className="form-content-area">
          {currentStep === 1 && (
            <div className="form-fade-in">
              <header className="form-header">
                <div className="step-indicator">STEP 1 OF 4</div>
                <h1 className="main-form-title">Restaurant Information</h1>
                <p className="form-instruction">Add basic information about your restaurant to help customers find you.</p>
              </header>

              <div className="form-grid">
                <div className="input-group">
                  <label>Restaurant Name</label>
                  <input type="text" placeholder="Enter restaurant name" value={restaurantName} onChange={(e) => setRestaurantName(e.target.value)} />
                </div>
                <div className="input-group dropdown-group">
                  <label>Restaurant Type</label>
                  <select value={restaurantType} onChange={(e) => setRestaurantType(e.target.value)}>
                    <option>Fast Food</option>
                    <option>Fine Dining</option>
                    <option>Cafe</option>
                  </select>
                </div>
                <div className="input-group full-width location-input">
                  <label>Location</label>
                  <div className="input-icon-wrapper">
                    <span className="icon">📍</span>
                    <input type="text" defaultValue="Kigali, Rwanda" />
                    <span className="end-icon">🗺️</span>
                  </div>
                </div>
                <div className="input-group phone-input">
                  <label>Phone Number</label>
                  <div className="input-icon-wrapper">
                    <span className="icon">📞</span>
                    <input type="text" defaultValue="+250 788 123 456" />
                  </div>
                </div>
                <div className="input-group owner-input">
                  <label>Owner Name</label>
                  <div className="input-icon-wrapper">
                    <span className="icon">👤</span>
                    <input type="text" defaultValue="Kagabo Jacques" />
                  </div>
                </div>
                <div className="input-group time-input">
                  <label>Opening Time</label>
                  <div className="input-icon-wrapper">
                    <span className="icon">🕒</span>
                    <input type="text" defaultValue="08:00 AM" />
                    <span className="end-icon">⌄</span>
                  </div>
                </div>
                <div className="input-group time-input">
                  <label>Closing Time</label>
                  <div className="input-icon-wrapper">
                    <span className="icon">🕒</span>
                    <input type="text" defaultValue="10:00 PM" />
                    <span className="end-icon">⌄</span>
                  </div>
                </div>
              </div>

              <div className="form-section">
                <label className="section-label">Restaurant Image</label>
                <div className="upload-dashed-zone">
                  <div className="upload-icon">📷</div>
                  <div className="upload-main-text">Upload Restaurant Image</div>
                  <div className="upload-sub-text">PNG, JPG up to 5MB. A high-quality photo of your dining area works best.</div>
                </div>
              </div>
            </div>
          )}

          {currentStep > 1 && (
            <div className="form-fade-in placeholder-step">
              <h1>Content for Step {currentStep}</h1>
              <p>Configuration panel for {steps[currentStep-1].title} goes here.</p>
            </div>
          )}
        </main>

        {/* 4. RIGHT PREVIEW SIDEBAR */}
        <aside className="preview-sidebar">
          <h3 className="preview-label">Preview</h3>
          
          <div className="preview-card-mockup">
            {/* Dark background from image_f0744c.png implicitly applied via CSS */}
            <div className="card-image-bg"></div>
            <div className="card-details">
              <div className="food-icon-circle">🍴</div>
              <h2 className="preview-restaurant-name">{restaurantName}</h2>
              <p className="preview-tagline">The best Thai flavors in town</p>
              
              <ul className="preview-info-list">
                <li>📍 Kigali, Rwanda</li>
                <li>📞 +250 788 123 456</li>
                <li>🍴 {restaurantType}</li>
                <li>🕒 Open: 08:00 AM - 10:00 PM</li>
              </ul>
              
              <div className="ready-status-badge">✅ Ready to continue</div>
            </div>
          </div>
        </aside>
      </div>

      {/* 5. BOTTOM PERSISTENT FOOTER */}
      <footer className="action-footer">
        <div className="footer-progress">
          <div className="mini-progress-dots">
            {[1, 2, 3, 4].map(dotNum => (
              <span key={dotNum} className={`progress-dot ${currentStep >= dotNum ? 'filled' : ''}`}>{dotNum}</span>
            ))}
          </div>
          <span className="progress-text">Progress {(currentStep / 4) * 100}%</span>
        </div>
        
        <div className="footer-buttons">
          <button className="btn-secondary" onClick={handleSaveDraft}>💾 Save Draft</button>
          <button className="btn-primary" onClick={handleContinue}>Continue →</button>
        </div>
      </footer>
    </div>
  );
};

export default RestaurantForm;