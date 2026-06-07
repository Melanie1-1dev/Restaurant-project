import React, { useState } from 'react';
import './RestaurantWizard.css';

const RestaurantWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1 data
    restaurantName: '',
    restaurantCompleteName: '',
    contactNumber: '',
    ownerNumber: '',
    ownerName: '',
    restaurantOwnerName: '',
    // Step 2 data
    restaurantType: 'Restaurant',
    cuisineType: 'African',
    openingFrom: '14:00 pm',
    openingTo: '02:00 pm'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (currentStep === 1) {
      setCurrentStep(2);
    } else {
      alert('Form submission or next phase triggered!');
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  return (
    <div className="wizard-page">
      {/* Universal Top Navigation Header */}
      <nav className="top-nav">
        <div className="brand">Miss<span className="brand-italic">More</span></div>
        <ul className="menu-links">
          <li>Home</li>
          <li>About</li>
          <li className="active-tab">Experience</li>
          <li>Contact</li>
          <li>Dashboard</li>
        </ul>
        <div className="utility-icons">
          <span className="util-icon">🔍</span>
          <span className="util-icon">🛒</span>
          <span className="util-icon">🔔</span>
          <span className="util-icon profile-badge">👤+</span>
        </div>
      </nav>

      {/* Main Workspace Split View */}
      <main className="content-container">
        
        {/* Left Side: Stepper Progress Sidebar Text */}
        <section className="stepper-sidebar">
          
          <div className={`step-text-block ${currentStep === 1 ? 'active-step' : ''}`}>
            <h3>1. create your restaurant profile</h3>
            <p className="orange-highlight-label">Restaurant information</p>
          </div>

          <div className={`step-text-block ${currentStep === 2 ? 'active-step' : ''}`}>
            <h3>2. Restaurant names, address, details, details owners</h3>
            <p className="orange-highlight-label">Restaurant Types and Timings</p>
          </div>

          <div className="step-text-block inactive-future">
            <h3>3. Establishments & Cuisine types. Opening hours</h3>
            <p className="gold-text-label">Create your menu</p>
          </div>

          <div className="step-text-block inactive-future">
            <h3>4. Menu, Restaurant, food images</h3>
          </div>
        </section>

        {/* Right Side: Curved Overlay Glass Form Container */}
        <section className="form-panel-wrapper">
          <div className="glass-form-card">
            
            <form onSubmit={handleNext}>
              
              {/* --- STEP 1 FORM FIELDS --- */}
              {currentStep === 1 && (
                <div className="form-step-view animate-fade-in">
                  <div className="field-section">
                    <h4 className="dark-field-title">Restaurant information</h4>
                    <input 
                      type="text" 
                      name="restaurantName" 
                      placeholder="Restaurant Name" 
                      value={formData.restaurantName} 
                      onChange={handleChange} 
                      required 
                    />
                    <input 
                      type="text" 
                      name="restaurantCompleteName" 
                      placeholder="Restaurant complete Name" 
                      value={formData.restaurantCompleteName} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>

                  <div className="field-section">
                    <h4 className="dark-field-title">Contact numbers @ Restaurant</h4>
                    <div className="phone-input-row">
                      <span className="area-code">+250</span>
                      <input 
                        type="tel" 
                        name="contactNumber" 
                        placeholder="Mobile number" 
                        value={formData.contactNumber} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                  </div>

                  <div className="field-section">
                    <h4 className="dark-field-title">Restaurant owner details</h4>
                    <div className="phone-input-row">
                      <span className="area-code">+250</span>
                      <input 
                        type="tel" 
                        name="ownerNumber" 
                        placeholder="Mobile number" 
                        value={formData.ownerNumber} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    <div className="split-row">
                      <input 
                        type="text" 
                        name="ownerName" 
                        placeholder="Owner Name" 
                        value={formData.ownerName} 
                        onChange={handleChange} 
                      />
                      <input 
                        type="text" 
                        name="restaurantOwnerName" 
                        placeholder="Restaurant owner Name" 
                        value={formData.restaurantOwnerName} 
                        onChange={handleChange} 
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* --- STEP 2 FORM FIELDS (Matching image_75c044.png) --- */}
              {currentStep === 2 && (
                <div className="form-step-view animate-fade-in">
                  <div className="field-section">
                    <h4 className="dark-field-title font-small">
                      Restaurant Type(restaurant, pub, hotel, coffeeshop and others).
                    </h4>
                    <input 
                      type="text" 
                      name="restaurantType" 
                      placeholder="Restaurant" 
                      value={formData.restaurantType} 
                      onChange={handleChange} 
                      required 
                    />
                    <input 
                      type="text" 
                      name="cuisineType" 
                      placeholder="African" 
                      value={formData.cuisineType} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>

                  <div className="field-section">
                    <h4 className="dark-field-title central-align">Opening Hours</h4>
                    <div className="split-row">
                      <div className="prefix-input-container">
                        <span className="inline-label">From |</span>
                        <input 
                          type="text" 
                          name="openingFrom" 
                          placeholder="14:00 pm" 
                          value={formData.openingFrom} 
                          onChange={handleChange} 
                        />
                      </div>
                      <div className="prefix-input-container">
                        <span className="inline-label">To |</span>
                        <input 
                          type="text" 
                          name="openingTo" 
                          placeholder="02:00 pm" 
                          value={formData.openingTo} 
                          onChange={handleChange} 
                        />
                      </div>
                    </div>
                  </div>

                  <div className="field-section">
                    <h4 className="dark-field-title central-align font-bold">
                      Upload images (Pictures or logo)
                    </h4>
                    <div className="file-upload-placeholder-btn">
                      <span>Choose images</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Form Navigation Controls */}
              <div className="action-button-set">
                {currentStep > 1 && (
                  <button type="button" className="wizard-back-btn" onClick={handleBack}>
                    ← Back
                  </button>
                )}
                <button type="submit" className="wizard-submit-btn">
                  {currentStep === 1 ? 'Save & Continue' : 'Finish Setup'}
                </button>
              </div>

            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RestaurantWizard;