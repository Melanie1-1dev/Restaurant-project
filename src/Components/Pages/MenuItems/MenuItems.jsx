import React from 'react';
import './MenuItems.css';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  UtensilsCrossed, 
  Users, 
  Settings, 
  Search, 
  Bell, 
  HelpCircle, 
  Plus, 
  SlidersHorizontal, 
  Grid, 
  Clock, 
  Pencil, 
  Trash2 
} from 'lucide-react';

const MenuItems = () => {
  // Mock Data for Menu Items
  const menuItems = [
    {
      id: 1,
      name: "Grand Truffle Burger",
      description: "Prime beef patty, truffle mayo, caramelized onions, Swiss cheese.",
      price: "8,500 RWF",
      time: "15-20 min",
      status: "ACTIVE",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Rustic Margherita",
      description: "San Marzano tomatoes, buffalo mozzarella, fresh basil, extra virgin olive oil.",
      price: "12,000 RWF",
      time: "12 min",
      status: "ACTIVE",
      image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Creamy Alfredo Shrimp",
      description: "House-made fettuccine, parmesan cream sauce, garlic butter shrimp.",
      price: "10,500 RWF",
      time: "18 min",
      status: "HIDDEN",
      image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Blueberry Stack",
      description: "Fluffy buttermilk pancakes with fresh blueberries and maple syrup.",
      price: "6,500 RWF",
      time: "10 min",
      status: "ACTIVE",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Sushi Selection",
      description: "Chef's choice of 12 premium nigiri and maki rolls.",
      price: "15,000 RWF",
      time: "25 min",
      status: "OUT OF STOCK",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "Tropical Passion",
      description: "Fresh passion fruit, lime juice, mint, and a splash of sparkling water.",
      price: "4,500 RWF",
      time: "5 min",
      status: "ACTIVE",
      image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 7,
      name: "Avocado Quinoa Bowl",
      description: "Organic quinoa, fresh avocado, cherry tomatoes, and lemon-tahini dressing.",
      price: "7,800 RWF",
      time: "8 min",
      status: "ACTIVE",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=500&auto=format&fit=crop"
    }
  ];

  return (
    <div className="dashboard-container">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="brand">
          <h1 className="brand-name">MissMore</h1>
          <p className="brand-sub">Kitchen Management</p>
        </div>

        <nav className="nav-menu">
          <Link to="/dashbord" className="nav-link-wrapper"> 
            <div className="nav-item">
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </div>
          </Link>
          <Link to="/new-order" className="nav-link-wrapper"> 
            <div className="nav-item">
              <ShoppingBag size={20} />
              <span>Orders</span>
            </div>
          </Link>
          <div className="nav-item active">
            <UtensilsCrossed size={20} />
            <span>Menu</span>
          </div>
          <Link to="/an-other-order" className="nav-link-wrapper">    
            <div className="nav-item">
              <Users size={20} />
              <span>Customers</span>
            </div>
          </Link>
          <div className="nav-item">
            <Settings size={20} />
            <span>Settings</span>
          </div>
        </nav>

        <div className="revenue-card">
          <span className="revenue-label">Today's Revenue</span>
          <h2 className="revenue-amount">45,000 <span className="currency">RWF</span></h2>
          <span className="revenue-stats">↗ 12% from yesterday</span>
          <button className="view-reports-btn">View Reports</button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="main-content">
        {/* TOP BAR */}
        <header className="top-header">
          <div className="search-container">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search menu items, ingredients..." className="search-input" />
          </div>
          
          <div className="header-actions">
            <button className="icon-btn">
              <Bell size={20} />
              <span className="notification-dot"></span>
            </button>
            <button className="icon-btn">
              <HelpCircle size={20} />
            </button>
            <div className="user-profile">
              <div className="user-info">
                <span className="user-name">Kagabo Jacques</span>
                <span className="user-role">Admin</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" 
                alt="Profile" 
                className="profile-avatar" 
              />
            </div>
          </div>
        </header>

        {/* DASHBOARD TITLE & ACTIONS */}
        <div className="page-title-section">
          <h1 className="page-title">Menu Management</h1>
          <button className="add-item-btn">
            <Plus size={20} />
            <span>Add New Item</span>
          </button>
        </div>

        {/* BLUE OUTLINE METRICS WRAPPER CONTAINER */}
        <div className="blue-blueprint-wrapper outline-metrics">
          {/* METRIC CARDS */}
          <section className="metrics-summary">
            <div className="metric-card">
              <div className="metric-icon-wrapper total-items">
                <ShoppingBag size={20} />
              </div>
              <div className="metric-details">
                <span className="metric-label">TOTAL ITEMS</span>
                <span className="metric-value">124</span>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon-wrapper active-items">
                <span className="check-icon">✓</span>
              </div>
              <div className="metric-details">
                <span className="metric-label">ACTIVE</span>
                <span className="metric-value">118</span>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon-wrapper out-of-stock-items">
                <span className="ban-icon">⊘</span>
              </div>
              <div className="metric-details">
                <span className="metric-label">OUT OF STOCK</span>
                <span className="metric-value">6</span>
              </div>
            </div>
          </section>
        </div>

        {/* BLUE OUTLINE MAIN CONTENT CANVAS CONTAINER */}
        <div className="blue-blueprint-wrapper outline-content-canvas">
          {/* FILTER NAVIGATION */}
          <div className="filter-toolbar">
            <div className="category-tabs">
              <button className="tab active">All</button>
              <button className="tab">Burgers</button>
              <button className="tab">Pizza</button>
              <button className="tab">Sides</button>
              <button className="tab">Drinks</button>
            </div>
            <div className="toolbar-actions">
              <button className="toolbar-btn"><SlidersHorizontal size={18} /></button>
              <button className="toolbar-btn active-view"><Grid size={18} /></button>
            </div>
          </div>

          {/* MENU ITEMS GRID */}
          <section className="menu-grid">
            {menuItems.map((item) => (
              <div className="menu-card" key={item.id}>
                <div className="card-image-container">
                  <img src={item.image} alt={item.name} className="card-image" />
                  <span className={`status-badge ${item.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {item.status}
                  </span>
                  <span className="item-price">{item.price}</span>
                </div>
                <div className="card-body">
                  <h3 className="item-title">{item.name}</h3>
                  <p className="item-description">{item.description}</p>
                  <div className="card-footer">
                    <span className="prep-time">
                      <Clock size={14} /> {item.time}
                    </span>
                    <div className="item-actions">
                      <button className="action-btn edit-btn"><Pencil size={16} /></button>
                      <button className="action-btn delete-btn"><Trash2 size={16} /></button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* ADD CATEGORY DOTTED CARD */}
            <div className="add-category-card">
              <div className="add-category-content">
                <div className="plus-icon-container">
                  <Plus size={24} />
                </div>
                <h3>New Category</h3>
                <p>ORGANIZE YOUR MENU WITH FOLDERS</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default MenuItems;