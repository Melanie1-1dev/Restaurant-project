import React, { useState } from 'react';
import { 
  LayoutGrid, ShoppingBag, Utensils, Users, UserCheck, 
  Settings, User, Search, Bell, Plus, X, MoreVertical 
} from 'lucide-react';
import './Dashbord.css';

export default function MissMoriDashbord() {
  // Application Interactive Table State
  const [orders, setOrders] = useState([
    {
      id: '#ORD-00128',
      client: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
      items: 'Jollof Rice, Chicken +1 more',
      amount: 25.00,
      status: 'Completed',
      date: 'May 8, 2024 10:30 AM'
    },
    {
      id: '#ORD-00127',
      client: 'Jane Smith',
      email: 'jane@example.com',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
      items: 'Fried Rice',
      amount: 12.00,
      status: 'Preparing',
      date: 'May 8, 2024 10:15 AM'
    },
    {
      id: '#ORD-00126',
      client: 'Mike Johnson',
      email: 'mike@example.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
      items: 'Salad, Juice +1 more',
      amount: 18.50,
      status: 'Pending',
      date: 'May 8, 2024 10:05 AM'
    }
  ]);

  // Modal display states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newOrder, setNewOrder] = useState({
    client: '', email: '', item: 'Jollof Rice', quantity: 1, price: 14.00
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'item') {
      const prices = { 'Jollof Rice': 14.00, 'Fried Rice': 12.00, 'Chicken': 8.00 };
      setNewOrder(prev => ({ ...prev, [name]: value, price: prices[value] }));
    } else {
      setNewOrder(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleCreateOrder = (e) => {
    e.preventDefault();
    if (!newOrder.client || !newOrder.email) return;

    const totalAmount = newOrder.price * parseInt(newOrder.quantity);
    const orderIdNumber = parseInt(orders[0]?.id.split('-')[1] || '100') + 1;
    
    const formattedOrder = {
      id: `#ORD-00${orderIdNumber}`,
      client: newOrder.client,
      email: newOrder.email,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
      items: `${newOrder.item}${newOrder.quantity > 1 ? ` x${newOrder.quantity}` : ''}`,
      amount: totalAmount,
      status: 'Pending',
      date: new Date().toLocaleString('en-US', { 
        month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true 
      })
    };

    setOrders([formattedOrder, ...orders]);
    setIsModalOpen(false);
    setNewOrder({ client: '', email: '', item: 'Jollof Rice', quantity: 1, price: 14.00 });
  };


  export default function Dashbord() {
  const [activeNav, setActiveNav] = useState("Home");
  const [search,    setSearch]    = useState("");
  const navigate = useNavigate();
  }
  return (
    <div className="missmori-layout">

         {/* ── HEADER ── */}
      <header className="home-header">
        <div className="home-logo">Miss<span>More</span></div>

        <nav className="home-nav">
          {["Home","About","Experience","Contact"].map(item => (
            <button
              key={item}
              className={`home-nav-link${activeNav === item ? " active" : ""}`}
              onClick={() => setActiveNav(item)}
            >
              {item}
            </button>
          ))}
          <button
            className="home-nav-link bold"
            onClick={() => navigate("/dashbord")}
          >
            Dashboard
          </button>
        </nav>

        <div className="home-header-icons">
          {/* Search */}
          <button className="home-icon-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>

          {/* Cart */}
          <button className="home-icon-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9"  cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 001.98 1.61h9.72a2 2 0 001.98-1.69L23 6H6"/>
            </svg>
          </button>

          {/* User */}
          <button className="home-icon-btn" onClick={() => navigate("/login")}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </button>

          {/* Bell */}
          <button className="home-bell-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 01-3.46 0"/>
            </svg>
          </button>
        </div>
      </header>
      
      {/* ================= LEFT SIDEBAR PANEL ================= */}
      <aside className="sidebar">
        <div>
          <div className="brand-logo">MissMori</div>
          
          <nav className="nav-section">
            <div className="nav-item active"><LayoutGrid size={18} /> <span>Overview</span></div>
            <div className="nav-item"><ShoppingBag size={18} /> <span>Orders</span></div>
            <div className="nav-item"><Utensils size={18} /> <span>Menu</span></div>
            <div className="nav-item"><Users size={18} /> <span>Users</span></div>
            <div className="nav-item"><UserCheck size={18} /> <span>Clients</span></div>
            
            <div className="nav-section-title">Account</div>
            <div className="nav-item"><Settings size={18} /> <span>Settings</span></div>
            <div className="nav-item"><User size={18} /> <span>My Account</span></div>
          </nav>
        </div>

        {/* Sidebar Cards Bottom Section */}
        <div className="sidebar-footer-cards">
          <div className="promo-card">
            <h4 className="promo-title">Delicious Food</h4>
            <div className="promo-sub">Made with love</div>
            <button className="btn-promo">Explore Menu</button>
          </div>
          <div className="help-card">
            <div className="help-icon-box"><User size={16} /></div>
            <h4 className="help-title">Need Help?</h4>
            <div className="help-sub">We are here to help</div>
            <button className="btn-help">Contact Support</button>
          </div>
        </div>
      </aside>

      {/* ================= MAIN DASHBOARD WORKSPACE ================= */}
      <main className="main-content">
        
        {/* Top Navbar */}
        <header className="navbar">
          <div className="welcome-text">Welcome back, <span>Kapsta 👋</span></div>
          <div className="navbar-right">
            <div className="nav-icons">
              <Search size={18} style={{ cursor: 'pointer' }} />
              <Bell size={18} style={{ cursor: 'pointer' }} />
            </div>
            <div className="profile-box">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80" alt="Admin" className="profile-img" />
              <div className="profile-info">
                <div className="profile-name">Kapsta Jioque</div>
                <div className="profile-role">Admin</div>
              </div>
            </div>
          </div>
        </header>

        {/* Row 1: 4 Metric Cards */}
        <section className="kpi-grid">
          <div className="kpi-card">
            <div className="kpi-icon-wrapper" style={{ backgroundColor: '#fff3e0', color: '#e65100' }}><ShoppingBag /></div>
            <div className="kpi-data">
              <span className="kpi-label">Total Orders</span>
              <div className="kpi-row-value"><span className="kpi-value">128</span> <span className="kpi-trend">↑18%</span></div>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon-wrapper" style={{ backgroundColor: '#e8f5e9', color: '#2e7d32' }}><LayoutGrid /></div>
            <div className="kpi-data">
              <span className="kpi-label">Total Revenue</span>
              <div className="kpi-row-value"><span className="kpi-value">$2,450</span> <span className="kpi-trend">↑12%</span></div>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon-wrapper" style={{ backgroundColor: '#e8eaf6', color: '#283593' }}><Users /></div>
            <div className="kpi-data">
              <span className="kpi-label">Total Users</span>
              <div className="kpi-row-value"><span className="kpi-value">86</span> <span className="kpi-trend">↑14%</span></div>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon-wrapper" style={{ backgroundColor: '#efebe9', color: '#4e342e' }}><UserCheck /></div>
            <div className="kpi-data">
              <span className="kpi-label">Total Clients</span>
              <div className="kpi-row-value"><span className="kpi-value">53</span> <span className="kpi-trend">↑9%</span></div>
            </div>
          </div>
        </section>

        {/* Row 2: Sales Chart & Popular Items Grid Split */}
        <section className="analytics-grid">
          <div className="chart-card">
            <div className="card-header-row">
              <h3 className="card-heading">Sales Overview</h3>
              <select style={{ border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '12px', padding: '4px' }} defaultValue="Week">
                <option value="Week">This Week</option>
              </select>
            </div>
            {/* Visual Canvas placeholder representing graph line */}
            <div style={{ height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fafafa', border: '1px dashed #e2e8f0', borderRadius: '8px', color: '#a3aed0', fontSize: '13px' }}>
              [ Wavy Line Graph Component Area ]
            </div>
          </div>

          <div className="popular-card">
            <div className="card-header-row">
              <h3 className="card-heading">Popular Items</h3>
              <a href="#viewall" className="view-all-link">View All</a>
            </div>
            <div className="popular-list">
              <div className="popular-item-row">
                <img src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=100&q=80" className="item-thumb" alt="Item" />
                <div className="item-meta-info">
                  <div className="item-name">Jollof Rice</div>
                  <div className="progress-bar-bg"><div className="progress-bar-fill" style={{ width: '85%' }}></div></div>
                </div>
                <span className="item-count-badge">54 Orders</span>
              </div>
              <div className="popular-item-row">
                <img src="https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=100&q=80" className="item-thumb" alt="Item" />
                <div className="item-meta-info">
                  <div className="item-name">Fried Rice</div>
                  <div className="progress-bar-bg"><div className="progress-bar-fill" style={{ width: '65%', backgroundColor: '#f97316' }}></div></div>
                </div>
                <span className="item-count-badge">42 Orders</span>
              </div>
              <div className="popular-item-row">
                <img src="https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=100&q=80" className="item-thumb" alt="Item" />
                <div className="item-meta-info">
                  <div className="item-name">Chicken</div>
                  <div className="progress-bar-bg"><div className="progress-bar-fill" style={{ width: '50%', backgroundColor: '#ef4444' }}></div></div>
                </div>
                <span className="item-count-badge">38 Orders</span>
              </div>
            </div>
          </div>
        </section>

        {/* Row 3: Recent Orders Active Section */}
        <section className="orders-section-card">
          <div className="card-header-row" style={{ marginBottom: '12px' }}>
            <h3 className="card-heading">Recent Orders</h3>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div style={{ position: 'relative' }}>
                <Search size={14} style={{ position: 'absolute', left: '10px', top: '10px', color: '#a3aed0' }} />
                <input type="text" placeholder="Search orders..." style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '6px 12px 6px 30px', fontSize: '13px' }} />
              </div>
              <button className="btn-new-order" onClick={() => setIsModalOpen(true)}>
                <Plus size={14} /> New Order
              </button>
            </div>
          </div>

          <div className="filter-tabs-row">
            <button className="tab-btn active">All</button>
            <button className="tab-btn" style={{ background:'#f1f5f9', color:'#64748b' }}>Pending</button>
            <button className="tab-btn" style={{ background:'#f1f5f9', color:'#64748b' }}>Preparing</button>
            <button className="tab-btn" style={{ background:'#f1f5f9', color:'#64748b' }}>Completed</button>
          </div>

          <div className="table-wrapper">
            <table className="ui-data-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Client</th>
                  <th>Items</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td style={{ fontWeight: '700' }}>{order.id}</td>
                    <td>
                      <div className="client-profile-cell">
                        <img src={order.avatar} alt="Client" className="client-avatar" />
                        <div>
                          <div style={{ fontWeight: '700' }}>{order.client}</div>
                          <div style={{ fontSize: '11px', color: '#a3aed0' }}>{order.email}</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ color: '#707eae' }}>{order.items}</td>
                    <td style={{ fontWeight: '700' }}>${order.amount.toFixed(2)}</td>
                    <td>
                      <span className={`badge ${order.status.toLowerCase()}`}>{order.status}</span>
                    </td>
                    <td style={{ fontSize: '12px', color: '#a3aed0' }}>{order.date}</td>
                    <td style={{ color: '#a3aed0', cursor: 'pointer' }}><MoreVertical size={16} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Global Dashboard Footer Branding */}
        <footer className="dashboard-footer">
          <div>© 2024 MissMori. All Rights Reserved.</div>
          <div className="footer-links">
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }}>Terms of Service</span>
          </div>
        </footer>
      </main>

      {/* ================= ORDER CREATION OVERLAY SYSTEM ================= */}
      {isModalOpen && (
        <div className="modal-dim-overlay">
          <div className="modal-window">
            <div className="modal-header">
              <h3 className="modal-title">Create New Order</h3>
              <button onClick={() => setIsModalOpen(false)} className="btn-close"><X size={18} /></button>
            </div>
            <form onSubmit={handleCreateOrder} style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '16px' }}>
              <div>
                <label className="form-label">Client Name</label>
                <input type="text" name="client" required value={newOrder.client} onChange={handleInputChange} className="form-input" placeholder="John Doe" />
              </div>
              <div>
                <label className="form-label">Client Email</label>
                <input type="email" name="email" required value={newOrder.email} onChange={handleInputChange} className="form-input" placeholder="john@example.com" />
              </div>
              <div className="form-row">
                <div>
                  <label className="form-label">Item</label>
                  <select name="item" value={newOrder.item} onChange={handleInputChange} className="form-select">
                    <option value="Jollof Rice">Jollof Rice</option>
                    <option value="Fried Rice">Fried Rice</option>
                    <option value="Chicken">Chicken</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Qty</label>
                  <input type="number" name="quantity" min="1" value={newOrder.quantity} onChange={handleInputChange} className="form-input" />
                </div>
              </div>
              <div className="summary-box">
                <span className="summary-label">Total Amount:</span>
                <span className="summary-total">${(newOrder.price * newOrder.quantity).toFixed(2)}</span>
              </div>
              <div className="modal-actions">
                <button type="button" onClick={() => setIsModalOpen(false)} className="btn-cancel">Cancel</button>
                <button type="submit" className="btn-submit">Place Order</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}