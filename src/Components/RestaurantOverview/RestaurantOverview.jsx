import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RestaurantOverview.css';

const RestaurantOverview = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Check if all required fields are filled
  const isFormValid = formData.name.trim() !== '' && 
                      formData.description.trim() !== '' && 
                      formData.price.trim() !== '';

  const handleSubmit = () => {
    if (!isFormValid) return;

    setIsSubmitting(true);

    // Simulate processing
    setTimeout(() => {
      console.log('Menu item submitted successfully!', formData);
      navigate('/home');
    }, 1000);
  };

  return (
    <div className="overview-viewport">
      
      {/* LEFT SIDEBAR NAVIGATION PANEL */}
      <aside className="overview-sidebar">
        <div className="sidebar-brand-logo">
          Miss<span>More</span>
        </div>
        
        <nav className="sidebar-nav-tree">
          <div className="nav-step-block">
            <div className="step-row-header">
              <span className="step-row-num">1.</span>
              <span className="step-row-txt">Create your restaurant profile</span>
            </div>
            <div className="step-row-subtext">Restaurant information</div>
          </div>
          
          <div className="nav-step-block active-cluster">
            <div className="step-row-header">
              <span className="step-row-num">2.</span>
              <span className="step-row-txt">Restaurant names, address details, details owners</span>
            </div>
            <div className="step-nested-items">
              <div className="nested-item active-target">
                Restaurant Types and Timings
              </div>
            </div>
          </div>
          
          <div className="nav-step-block">
            <div className="step-row-header">
              <span className="step-row-num">3.</span>
              <span className="step-row-txt">Establishments & Cuisine types. Opening hours</span>
            </div>
            <div className="step-nested-items">
              <div className="nested-item standard-dark-weight">
                Create your menu
              </div>
            </div>
          </div>

          <div className="nav-step-footer-block">
            <div className="footer-step-indicator-row">
              <div className="footer-step-circle">4</div>
              <span className="footer-step-txt">Menu, Restaurant, food images</span>
            </div>
          </div>
        </nav>
      </aside>

      {/* RIGHT MAIN WORKSPACE CONTENT */}
      <main className="overview-workspace">
        
        <header className="workspace-header-bar">
          <h1 className="workspace-view-title">Overview</h1>
          
          <div className="workspace-user-profile-cluster">
            <div className="utility-icon-buttons">
              <button className="icon-btn">🔍</button>
              <button className="icon-btn">🔔</button>
            </div>
            <div className="profile-vertical-divider">|</div>
            <div className="profile-user-card">
              <span className="profile-user-name">
                Kagabo<br />Jacques
              </span>
              <div className="profile-user-avatar-placeholder">
                👨‍🍳
              </div>
            </div>
          </div>
        </header>

        <div className="workspace-form-scroll-container">
          
          <div className="horizontal-menu-pill-tabs">
            <button className="menu-pill-tab active">Drink</button>
            <button className="menu-pill-tab">Starter</button>
            <button className="menu-pill-tab">Appetizer</button>
            <button className="menu-pill-tab">Dessert</button>
            <button className="menu-pill-tab">Main</button>
          </div>

          <form className="menu-builder-minimal-form" onSubmit={(e) => e.preventDefault()}>
            
            <div className="minimal-form-group">
              <label className="minimal-field-label">Name <span className="required">*</span></label>
              <input 
                type="text" 
                name="name"
                placeholder="Menu Name" 
                className="minimal-text-input-field" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="minimal-form-group">
              <label className="minimal-field-label">Menu description <span className="required">*</span></label>
              <input 
                type="text" 
                name="description"
                placeholder="Ingredients" 
                className="minimal-text-input-field" 
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="minimal-form-group">
              <label className="minimal-field-label">Image</label>
              <div className="minimal-file-upload-trigger-row">
                <span className="upload-trigger-placeholder-txt">Upload image</span>
              </div>
            </div>

            <div className="minimal-form-group">
              <label className="minimal-field-label">Price <span className="required">*</span></label>
              <input 
                type="text" 
                name="price"
                placeholder="RWF" 
                className="minimal-text-input-field" 
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>

            <div className="menu-builder-action-buttons-row">
              <button 
                type="button" 
                className="action-pill-btn brand-orange-bg"
                onClick={handleSubmit}
                disabled={!isFormValid || isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>

          </form>
        </div>

      </main>
    </div>
  );
};

export default RestaurantOverview;