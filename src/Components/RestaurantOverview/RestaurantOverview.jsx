import React from 'react';
import './RestaurantOverview.css';
import { Link } from 'react-router-dom';
const RestaurantOverview = () => {
  return (
    <div className="overview-viewport">
      
      {/* LEFT SIDEBAR NAVIGATION PANEL */}
      <aside className="overview-sidebar">
        <div className="sidebar-brand-logo">
          Miss<span>More</span>
        </div>
        
        <nav className="sidebar-nav-tree">
          {/* Step 1 */}
          <div className="nav-step-block">
            <div className="step-row-header">
              <span className="step-row-num">1.</span>
              <span className="step-row-txt">Create your restaurant profile</span>
            </div>
            <div className="step-row-subtext">Restaurant information</div>
          </div>
          
          {/* Step 2 Cluster */}
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
          
          {/* Step 3 */}
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

          {/* Step 4 Footer Anchor */}
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
        
        {/* Workspace Top Header Utilities */}
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

        {/* Dynamic Form Workspace Scrolling View */}
        <div className="workspace-form-scroll-container">
          
          {/* Horizontal Pill Category Selector Tabs */}
          <div className="horizontal-menu-pill-tabs">
            <button className="menu-pill-tab active">Drink</button>
            <button className="menu-pill-tab">Starter</button>
            <button className="menu-pill-tab">Appetizer</button>
            <button className="menu-pill-tab">Dessert</button>
            <button className="menu-pill-tab">Main</button>
          </div>

          {/* Minimalist Borderless Profile Input Sheet */}
          <form className="menu-builder-minimal-form" onSubmit={(e) => e.preventDefault()}>
            
            <div className="minimal-form-group">
              <label className="minimal-field-label">Name</label>
              <input 
                type="text" 
                placeholder="Menu Name" 
                className="minimal-text-input-field" 
              />
            </div>

            <div className="minimal-form-group">
              <label className="minimal-field-label">Menu description</label>
              <input 
                type="text" 
                placeholder="Ingredients" 
                className="minimal-text-input-field" 
              />
            </div>

            <div className="minimal-form-group">
              <label className="minimal-field-label">Image</label>
              <div className="minimal-file-upload-trigger-row">
                <span className="upload-trigger-placeholder-txt">Upload image</span>
              </div>
            </div>

            <div className="minimal-form-group">
              <label className="minimal-field-label">Price</label>
              <input 
                type="text" 
                placeholder="RWF" 
                className="minimal-text-input-field" 
              />
            </div>

            {/* Action Group Block Layout */}
            <div className="menu-builder-action-buttons-row">
     <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
                <button type="button" formAction={'submitt'} className="action-pill-btn brand-orange-bg">
                  Submit
                </button>
              </Link>
            </div>

          </form>
        </div>

      </main>
    </div>
  );
};

export default RestaurantOverview;