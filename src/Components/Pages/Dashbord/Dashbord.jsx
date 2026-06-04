import React, { useState } from 'react';
import SalesChart from '../../SalesChart'; 
import { 
  LayoutGrid, ShoppingBag, Utensils, Users, UserCheck, 
  Settings, User, Search, Bell, Plus, X, MoreVertical 
} from 'lucide-react';
import './Dashbord.css';
import { Link } from 'react-router-dom';

export default function MissMoreDashbord() {
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

  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newOrder, setNewOrder] = useState({
    client: '', email: '', item: 'Jollof Rice', quantity: 1, price: 14.00
  });

  const weeklySalesData = [
    { day: 'MON', sales: 1200 },
    { day: 'TUE', sales: 1100 },
    { day: 'WED', sales: 1600 },
    { day: 'THU', sales: 900 },
    { day: 'FRI', sales: 1400 },
    { day: 'SAT', sales: 1300 },
    { day: 'SUN', sales: 1800 }
  ];

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

  const filteredOrders = orders.filter(order => {
    const matchesTab = activeTab === 'All' || order.status.toLowerCase() === activeTab.toLowerCase();
    const matchesSearch = order.client.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          order.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="new-order-container">
      
      {/* ================= UNIFIED LEFT SIDEBAR PANEL ================= */}
      <aside className="sidebar-navigation">
        <div className="nav-links-group">
          <div className="brand-section">
            <div className="brand-logo-box"></div>
            <h1 className="brand-name">MissMore</h1>
          </div>
          
          <div className="nav-item-btn active"><LayoutGrid size={18} /> Dashboard</div>
          <Link to="/new-order" style={{ textDecoration: 'none' }}>
            <button className="nav-item-btn"><ShoppingBag size={18} /> New Order</button>
          </Link>
          <button className="nav-item-btn"><Utensils size={18} /> Menu</button>
      <Link to="/an-other-order" style={{textDecoration: 'none'}}><button className="nav-item-btn"><Users size={18} /> Customers</button></Link>
          <button className="nav-item-btn"><Settings size={18} /> Settings</button>
        </div>

        <div className="kitchen-status-card">
          <p className="kitchen-status-title">Kitchen Status</p>
          <div className="kitchen-status-badge">
            <span className="status-indicator-dot"></span>
            <span>All systems ready</span>
          </div>
        </div>
      </aside>

      {/* ================= UNIFIED MAIN WORKSPACE FRAME ================= */}
      <main className="workspace-canvas">
        
        {/* Unified Top Appbar */}
        <header className="top-appbar">
          <h2 className="appbar-title">Welcome back, <span style={{ fontWeight: '400', color: '#64748B' }}>Kapsta 👋</span></h2>
          <div className="appbar-actions">
            <div className="search-wrapper">
              <Search size={16} className="search-icon-inside" />
              <input className="search-input" placeholder="Search overall system..." type="text" />
            </div>
            <div className="admin-profile-node">
              <div className="admin-info">
                <span className="admin-name">Kapsta Jioque</span>
                <span className="admin-role">Admin</span>
              </div>
              <img 
                alt="Admin Profile" 
                className="admin-avatar" 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80" 
              />
            </div>
          </div>
        </header>

        {/* Dashboard Dynamic Scroll Content Frame */}
        <div className="dashboard-scrollable-body">
          
          {/* Row 1: KPI Dashboard Block Cards */}
          <section className="kpi-grid">
            <div className="kpi-card">
              <div className="kpi-icon-wrapper" style={{ backgroundColor: '#FFF7ED', color: '#EA580C' }}><ShoppingBag size={20} /></div>
              <div className="kpi-data">
                <span className="kpi-label">Total Orders</span>
                <div className="kpi-row-value"><span className="kpi-value">{orders.length}</span> <span className="kpi-trend">↑18%</span></div>
              </div>
            </div>
            <div className="kpi-card">
              <div className="kpi-icon-wrapper" style={{ backgroundColor: '#F0FDF4', color: '#16A34A' }}><LayoutGrid size={20} /></div>
              <div className="kpi-data">
                <span className="kpi-label">Total Revenue</span>
                <div className="kpi-row-value"><span className="kpi-value">$2,450</span> <span className="kpi-trend">↑12%</span></div>
              </div>
            </div>
            <div className="kpi-card">
              <div className="kpi-icon-wrapper" style={{ backgroundColor: '#EEF2FF', color: '#4F46E5' }}><Users size={20} /></div>
              <div className="kpi-data">
                <span className="kpi-label">Total Users</span>
                <div className="kpi-row-value"><span className="kpi-value">86</span> <span className="kpi-trend">↑14%</span></div>
              </div>
            </div>
            <div className="kpi-card">
              <div className="kpi-icon-wrapper" style={{ backgroundColor: '#FAFAFA', color: '#525252' }}><UserCheck size={20} /></div>
              <div className="kpi-data">
                <span className="kpi-label">Total Clients</span>
                <div className="kpi-row-value"><span className="kpi-value">53</span> <span className="kpi-trend">↑9%</span></div>
              </div>
            </div>
          </section>

          {/* Row 2: Analytics split mapping engine layout layout */}
          <section className="analytics-grid">
            <div className="chart-card">
              <div className="card-header-row">
                <h3 className="card-heading">Sales Overview</h3>
                <select className="timeline-dropdown" defaultValue="Week">
                  <option value="Week">This Week</option>
                </select>
              </div>
              <SalesChart liveData={weeklySalesData} />
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

          {/* Row 3: Live interactive records grid logs */}
          <section className="orders-section-card">
            <div className="card-header-row" style={{ marginBottom: '16px' }}>
              <h3 className="card-heading">Recent Orders</h3>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ position: 'relative' }}>
                  <Search size={14} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search orders..." 
                    className="table-search-input"
                  />
                </div>
                <button className="btn-new-order" onClick={() => setIsModalOpen(true)}>
                  <Plus size={14} /> New Order
                </button>
              </div>
            </div>

            <div className="filter-tabs-row">
              {['All', 'Pending', 'Preparing', 'Completed'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`tab-btn ${activeTab === tab ? 'active' : ''}`} 
                >
                  {tab}
                </button>
              ))}
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
                  {filteredOrders.map((order) => (
                    <tr key={order.id}>
                      <td style={{ fontWeight: '700', color: '#0F172A' }}>{order.id}</td>
                      <td>
                        <div className="client-profile-cell">
                          <img src={order.avatar} alt="Client" className="client-avatar" />
                          <div>
                            <div style={{ fontWeight: '600', color: '#0F172A' }}>{order.client}</div>
                            <div style={{ fontSize: '12px', color: '#64748B' }}>{order.email}</div>
                          </div>
                        </div>
                      </td>
                      <td style={{ color: '#475569' }}>{order.items}</td>
                      <td style={{ fontWeight: '700', color: '#0F172A' }}>${order.amount.toFixed(2)}</td>
                      <td>
                        <span className={`badge ${order.status.toLowerCase()}`}>{order.status}</span>
                      </td>
                      <td style={{ fontSize: '13px', color: '#64748B' }}>{order.date}</td>
                      <td style={{ color: '#94A3B8', cursor: 'pointer' }}><MoreVertical size={16} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredOrders.length === 0 && (
                <div className="empty-table-fallback">No matching records located in database architecture.</div>
              )}
            </div>
          </section>

          <footer className="dashboard-footer">
            <div>© 2026 MissMore. All Rights Reserved.</div>
            <div className="footer-links">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </footer>
        </div>
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