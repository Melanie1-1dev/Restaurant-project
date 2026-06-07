import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  UtensilsCrossed, 
  Users, 
  Settings 
} from 'lucide-react';
import './DashboardLayout.css';

const DashboardLayout = () => {
  return (
    <div className="dashboard-container">
      {/* GLOBAL FIXED SIDEBAR */}
      <aside className="sidebar">
        <div className="brand">
          <h1 className="brand-name">MissMori</h1>
          <p className="brand-sub">Kitchen Management</p>
        </div>

        <nav className="nav-menu">
          <NavLink 
            to="/dashbord" 
            className={({ isActive }) => isActive ? "nav-link-wrapper active" : "nav-link-wrapper"}
          >
            <div className="nav-item">
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </div>
          </NavLink>

          <NavLink 
            to="/menu-items" 
            className={({ isActive }) => isActive ? "nav-link-wrapper active" : "nav-link-wrapper"}
          >
            <div className="nav-item">
              <UtensilsCrossed size={20} />
              <span>Menu</span>
            </div>
          </NavLink>

          <NavLink 
            to="/orders" 
            className={({ isActive }) => isActive ? "nav-link-wrapper active" : "nav-link-wrapper"}
          >
            <div className="nav-item">
              <ShoppingBag size={20} />
              <span>Orders</span>
            </div>
          </NavLink>

          <NavLink 
            to="/an-other-order" 
            className={({ isActive }) => isActive ? "nav-link-wrapper active" : "nav-link-wrapper"}
          >
            <div className="nav-item">
              <Users size={20} />
              <span>Customers</span>
            </div>
          </NavLink>

          <div className="nav-link-wrapper">
            <div className="nav-item">
              <Settings size={20} />
              <span>Settings</span>
            </div>
          </div>
        </nav>

        <div className="revenue-card">
          <span className="revenue-label">Today's Revenue</span>
          <h2 className="revenue-amount">45,000 <span className="currency">RWF</span></h2>
          <span className="revenue-stats">↗ 12% from yesterday</span>
          <button className="view-reports-btn">View Reports</button>
        </div>
      </aside>

      {/* DYNAMIC SCROLLING TRACK AREA */}
      <div className="content-render-track">
        <main className="main-content">
          <Outlet /> 
        </main>
        
        {/* FOOTER ACCESSED AT THE BASE OF THE SCREEN STREAM */}
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;