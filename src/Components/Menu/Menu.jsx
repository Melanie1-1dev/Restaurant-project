import { useState } from "react";
import react from "react";
import Link from "react-router-dom";
import "./Menu.css";

const CATEGORIES = ["Drink", "Starter", "Appetizer", "Dessert", "Main"];

const MENU_ITEMS = {
  Drink: [
    { id: 1, name: "Yammy banana", price: "20$", size: 130, top: "37%", left: "36%", img: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=200&q=80", delay: "0s" },
    { id: 2, name: "Mango juice", price: "15$", size: 100, top: "12%", left: "55%", img: "https://images.unsplash.com/photo-1546173159-315724a31696?w=200&q=80", delay: "0.08s" },
    { id: 3, name: "Fresh milk", price: "10$", size: 90, top: "62%", left: "16%", img: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200&q=80", delay: "0.16s" },
  ],
  Starter: [
    { id: 1, name: "Jellof rice", price: "55$", size: 120, top: "20%", left: "14%", img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=200&q=80", delay: "0s" },
    { id: 2, name: "Baked rice", price: "55$", size: 110, top: "55%", left: "22%", img: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=200&q=80", delay: "0.08s" },
    { id: 3, name: "Yammy banana", price: "20$", size: 130, top: "30%", left: "38%", img: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=200&q=80", delay: "0.16s" },
    { id: 4, name: "Raw maize", price: "5000frw", size: 105, top: "8%", left: "58%", img: "https://images.unsplash.com/photo-1601593346740-925612772716?w=200&q=80", delay: "0.24s" },
    { id: 5, name: "Roasted corn", price: "5000frw", size: 100, top: "55%", left: "60%", img: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=200&q=80", delay: "0.32s" },
    { id: 6, name: "Jellof rice", price: "50$", size: 95, top: "68%", left: "42%", img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=200&q=80", delay: "0.4s" },
  ],
  Appetizer: [
    { id: 1, name: "Spring rolls", price: "30$", size: 120, top: "20%", left: "18%", img: "https://images.unsplash.com/photo-1548610762-c3b72f5d4b6a?w=200&q=80", delay: "0s" },
    { id: 2, name: "Chicken wings", price: "45$", size: 110, top: "50%", left: "30%", img: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=200&q=80", delay: "0.1s" },
    { id: 3, name: "Salad bowl", price: "25$", size: 100, top: "18%", left: "54%", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&q=80", delay: "0.2s" },
  ],
  Dessert: [
    { id: 1, name: "Chocolate cake", price: "40$", size: 130, top: "28%", left: "32%", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&q=80", delay: "0s" },
    { id: 2, name: "Ice cream", price: "18$", size: 105, top: "58%", left: "50%", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&q=80", delay: "0.1s" },
    { id: 3, name: "Fruit salad", price: "22$", size: 95, top: "14%", left: "56%", img: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=200&q=80", delay: "0.2s" },
  ],
  Main: [
    { id: 1, name: "Jellof rice", price: "55$", size: 120, top: "20%", left: "14%", img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=200&q=80", delay: "0s" },
    { id: 2, name: "Baked rice", price: "55$", size: 110, top: "55%", left: "22%", img: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=200&q=80", delay: "0.08s" },
    { id: 3, name: "Yammy banana", price: "20$", size: 130, top: "30%", left: "38%", img: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=200&q=80", delay: "0.16s" },
    { id: 4, name: "Raw maize", price: "5000frw", size: 105, top: "8%", left: "58%", img: "https://images.unsplash.com/photo-1601593346740-925612772716?w=200&q=80", delay: "0.24s" },
    { id: 5, name: "Roasted corn", price: "5000frw", size: 100, top: "55%", left: "60%", img: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=200&q=80", delay: "0.32s" },
    { id: 6, name: "Jellof rice", price: "50$", size: 95, top: "68%", left: "42%", img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=200&q=80", delay: "0.4s" },
  ],
};

const NAV_MAIN = [
  { label: "Overview", icon: "◇" },
  { label: "Users", icon: "○" },
  { label: "Clients", icon: "◉" },
];

const NAV_BOTTOM = [
  { label: "Settings", icon: "✦" },
  { label: "My Account", icon: "○" },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Starter");
  const [activeNav, setActiveNav] = useState("Overview");

  const items = MENU_ITEMS[activeCategory] || [];

  return (
    <div className="menu-root">
      {/* HEADER */}
      <header className="menu-header">
        <div className="menu-logo">Miss<span>More</span></div>
        <div className="menu-header-title">Menu</div>
        <div className="menu-header-right">
          <button className="menu-search-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <div className="menu-header-divider" />
          <div className="menu-user">
            <div className="menu-user-text">
              <div className="menu-user-name">Kagabo</div>
              <div className="menu-user-role">Jacques</div>
            </div>
            <div className="menu-avatar">
              <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="15" r="8" fill="#ccc" />
                <ellipse cx="20" cy="34" rx="13" ry="9" fill="#ccc" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      <div className="menu-body">
        {/* SIDEBAR */}
        <aside className="menu-sidebar">
          <div className="menu-sidebar-bg" />
          <div className="menu-sidebar-overlay" />
          <div className="menu-sidebar-content">
            <div className="menu-nav-label">Overview</div>
            {NAV_MAIN.map((item) => (
              <button
                key={item.label}
                className={`menu-nav-item${activeNav === item.label ? " active" : ""}`}
                onClick={() => setActiveNav(item.label)}
              >
                <span className="menu-nav-icon">{item.icon}</span>
                {item.label}
              </button>
            ))}
            <div className="menu-nav-bottom">
              {NAV_BOTTOM.map((item) => (
                <button
                  key={item.label}
                  className={`menu-nav-item${activeNav === item.label ? " active" : ""}`}
                  onClick={() => setActiveNav(item.label)}
                >
                  <span className="menu-nav-icon">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="menu-main">
          {/* CATEGORY TABS */}
          <div className="menu-tabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`menu-tab${activeCategory === cat ? " active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* BUBBLE ARENA */}
          <div className="menu-bubble-arena">
            <div className="menu-bubble-wrapper">
              {/* Big background circle */}
              <div className="menu-big-circle" />

              {/* Food bubbles */}
              {items.map((item) => (
                <div
                  key={item.id + item.name}
                  className="food-bubble"
                  style={{
                    top: item.top,
                    left: item.left,
                    animationDelay: item.delay,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    className="food-bubble-img-wrap"
                    style={{ width: item.size, height: item.size }}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      width={item.size}
                      height={item.size}
                      onError={(e) => { e.target.style.background = "#c8a882"; e.target.src = ""; }}
                    />
                  </div>
                  <div className="food-bubble-name">{item.name}</div>
                  <div className="food-bubble-price">{item.price}</div>
                </div>
              ))}
            </div>

            {/* ADD NEW */}
            <button className="menu-add-btn">Add New</button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Menu;