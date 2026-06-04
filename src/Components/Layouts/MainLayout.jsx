import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  Utensils, 
  LayoutGrid, 
  Receipt, // ◄── Fixed: Changed from ReceiptLong
  Group, 
  Settings, 
  User 
} from 'lucide-react';
import './MainLayout.css'; 

export default function MainLayout() {
  const location = useLocation();

  // Helper to check which link is active for styling
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <div className="page-container">
      
      {/* ── PERSISTENT SIDEBAR ── */}
      <aside className="sidebar-panel" style={{ display: 'flex' }}>
        <div className="sidebar-brand">
          <div className="brand-icon-box">
            <Utensils size={20} />
          </div>
          <h1 className="brand-title">MissMori</h1>
        </div>

        <nav className="sidebar-nav">
          <Link to="/dashbord" className={`nav-button ${isActive('/dashbord')}`}>
            <LayoutGrid size={20} />
            <span>Overview</span>
          </Link>

          <Link to="/new-order" className={`nav-button ${isActive('/new-order')}`}>
            <Receipt size={20} /> {/* ◄── Fixed icon element here */}
            <span>Orders</span>
          </Link>

          <button className="nav-button">
            <Utensils size={20} />
            <span>Menu</span>
          </button>

          <button className="nav-button">
            <Group size={20} />
            <span>Users</span>
          </button>

          <div className="system-section">
            <p className="section-label">System</p>
            <button className="nav-button">
              <Settings size={20} />
              <span>Settings</span>
            </button>
            <button className="nav-button">
              <User size={20} />
              <span>My Account</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* ── DYNAMIC PAGE CONTENT ── */}
      <main className="content-canvas">
        {/* The Outlet renders whatever child route is active (Dashboard, NewOrder, etc.) */}
        <Outlet />
      </main>
      
    </div>
  );
}