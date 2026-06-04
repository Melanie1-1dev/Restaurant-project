import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { 
  LayoutGrid, 
  Receipt, 
  Utensils, 
  Users, 
  Settings, 
  Search, 
  UserPlus, 
  Plus, 
  Minus, 
  Check 
} from 'lucide-react';
import './NewOrder.css';

export default function NewOrder() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // 1. Initialize the cart as an empty array or with default objects
  const [cart, setCart] = useState([
    { id: 1, name: 'Authentic Jollof Rice', price: 18.50, qty: 1, img: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=150&q=80' },
    { id: 2, name: 'Grilled Chicken', price: 22.00, qty: 1, img: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=150&q=80' },
    { id: 3, name: 'Garden Salad', price: 12.50, qty: 1, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=150&q=80' }
  ]);

  const menuItems = [
    { id: 1, name: 'Authentic Jollof Rice', price: 18.50, category: 'Main Dish', desc: 'Slow-cooked rice in savory tomato base with aromatic spices.', img: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=400&q=80' },
    { id: 2, name: 'Special Fried Rice', price: 16.00, category: 'Main Dish', desc: 'Wok-fried premium long grain rice with garden fresh vegetables.', img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400&q=80' },
    { id: 3, name: 'Grilled Chicken', price: 22.00, category: 'Main Dish', desc: 'Herb-marinated organic chicken breast charred to perfection.', img: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=400&q=80' },
    { id: 4, name: 'Garden Salad', price: 12.50, category: 'Sides', desc: 'Local seasonal greens with house-made vinaigrette dressing.', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80' },
    { id: 5, name: 'Tropical Hibiscus Tea', price: 4.50, category: 'Drinks', desc: 'Chilled house-brewed hibiscus tea infused with fresh mint.', img: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=400&q=80' },
    { id: 6, name: 'Fresh Ginger Lemonade', price: 5.00, category: 'Drinks', desc: 'Zesty organic ginger root squeezed with fresh lemon juice.', img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80' }
  ];

  /* ── CART INTERACTION HANDLERS ── */
  
  // Add item from catalog to checkout panel
  const handleAddToOrder = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem => 
          cartItem.id === item.id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem
        );
      }
      return [...prevCart, { id: item.id, name: item.name, price: item.price, qty: 1, img: item.img }];
    });
  };

  // Adjust quantities inside the checkout panel
  const handleUpdateQuantity = (id, amount) => {
    setCart(prevCart => 
      prevCart.map(item => {
        if (item.id === id) {
          const newQty = item.qty + amount;
          return newQty > 0 ? { ...item, qty: newQty } : item;
        }
        return item;
      })
    );
  };

  // Wipe item entirely out of order list
  const handleRemoveFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  // ── MATHEMATICAL LIVE PRICING ENGINE ──
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;
  const totalItemsCount = cart.reduce((acc, item) => acc + item.qty, 0);

  const filteredMenuItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="new-order-container">
      
      {/* Sidebar Layout */}
      <aside className="sidebar-navigation">
        <div className="nav-links-group">
          <div className="brand-section">
            <div className="brand-logo-box"></div>
            <h1 className="brand-name">MissMore</h1>
          </div>
       <Link to="/dashbord" style={{textDecoration: 'none'}}><button className="nav-item-btn"><LayoutGrid size={18} /> Dashboard</button></Link>
          <button className="nav-item-btn active"><Receipt size={18} /> New Order</button>
          <button className="nav-item-btn"><Utensils size={18} /> Menu</button>
          <button className="nav-item-btn"><Users size={18} /> Customers</button>
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

      {/* Primary Workspace Frame */}
      <main className="workspace-canvas">
        <header className="top-appbar">
          <h2 className="appbar-title">New Order</h2>
          <div className="appbar-actions">
            <div className="search-wrapper">
              <Search size={16} className="search-icon-inside" />
              <input className="search-input" placeholder="Search orders..." type="text" />
            </div>
            <div className="admin-profile-node">
              <div className="admin-info">
                <span className="admin-name">Chef de Cuisine</span>
                <span className="admin-role">Admin Panel</span>
              </div>
              <img 
                alt="Chef" 
                className="admin-avatar" 
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=100&q=80" 
              />
            </div>
          </div>
        </header>

        <div className="workspace-grid">
          <section className="menu-management-column">
            <div className="client-selection-card">
              <h3 className="card-label">Select Client</h3>
              <div className="client-input-row">
                <div className="client-search-wrapper">
                  <Search size={18} className="client-search-icon" />
                  <input className="client-search-input" placeholder="Search or select client..." type="text" />
                </div>
                <button className="add-client-btn"><UserPlus size={18} /></button>
              </div>
            </div>

            <div className="menu-header-row">
              <h3 className="section-headline">Menu Items</h3>
              <div className="category-pill-group">
                {['All', 'Main Dish', 'Sides', 'Drinks'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`pill-button ${activeCategory === cat ? 'active' : ''}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="food-item-grid">
              {filteredMenuItems.map((food) => (
                <div key={food.id} className="food-item-card">
                  <div className="food-hero-frame">
                    <img className="food-hero-img" src={food.img} alt={food.name} />
                    <div className="card-price-tag">${food.price.toFixed(2)}</div>
                  </div>
                  <div className="food-card-body">
                    <h4 className="food-card-title">{food.name}</h4>
                    <p className="food-card-desc">{food.desc}</p>
                    {/* CRITICAL ACTION: Triggers handleAddToOrder handler */}
                    <button 
                      onClick={() => handleAddToOrder(food)} 
                      className="add-order-action-btn"
                    >
                      <Plus size={14} /> Add to Order
                    </button>
                  </div>
                </div>
              ))}
              {filteredMenuItems.length === 0 && (
                <p className="no-items-fallback">No items available in this category.</p>
              )}
            </div>
          </section>

          {/* Dynamic Billing Layout */}
          <aside className="billing-cart-aside">
            <div className="cart-header-block">
              <h3 className="cart-headline">Current Order</h3>
              <span className="cart-counter-pill">{totalItemsCount} {totalItemsCount === 1 ? 'Item' : 'Items'}</span>
            </div>

            <div className="cart-items-scroller">
              {cart.map((item) => (
                <div key={item.id} className="cart-item-node">
                  <img className="cart-item-thumb" src={item.img} alt={item.name} />
                  <div className="cart-item-details">
                    <h5 className="cart-item-name">{item.name}</h5>
                    <div className="cart-item-controls">
                      <div className="qty-stepper-box">
                        {/* CRITICAL ACTIONS: Stepper Increments / Decrements */}
                        <button onClick={() => handleUpdateQuantity(item.id, -1)} className="stepper-btn">
                          <Minus size={12} />
                        </button>
                        <span className="stepper-value">{item.qty}</span>
                        <button onClick={() => handleUpdateQuantity(item.id, 1)} className="stepper-btn">
                          <Plus size={12} />
                        </button>
                      </div>
                      {/* CRITICAL ACTION: Wipe item clean from order array list */}
                      <button onClick={() => handleRemoveFromCart(item.id)} className="remove-item-link">
                        Remove
                      </button>
                    </div>
                  </div>
                  <span className="cart-item-price-label">${(item.price * item.qty).toFixed(2)}</span>
                </div>
              ))}
              {cart.length === 0 && (
                <p className="empty-cart-text">Your checkout basket is empty.</p>
              )}
            </div>

            <div className="checkout-calculation-box">
              <div className="calc-row"><span>Subtotal</span><span className="calc-val">${subtotal.toFixed(2)}</span></div>
              <div className="calc-row"><span>Tax (8%)</span><span className="calc-val">${tax.toFixed(2)}</span></div>
              <div className="calc-row-total">
                <span className="total-label-text">Total</span>
                <span className="total-price-text">${total.toFixed(2)}</span>
              </div>
              <button className="checkout-submit-btn" onClick={() => alert('Processing Checkout Order Engine...')}>
                <Check size={18} /> Place Order
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}