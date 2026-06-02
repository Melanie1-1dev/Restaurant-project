import { useState } from "react";
import "./Order2.css";
import { Link } from "react-router-dom";
/* ── constants ───────────────────────────────── */
const NAV_MAIN   = [
  { label: "Overview", icon: "◇" },
  { label: "Tables",   icon: "⊤" },
  { label: "Orders",   icon: "☰" },
  { label: "Menus",    icon: "≡" },
];
const NAV_BOTTOM = [
  { label: "Settings",   icon: "⚙" },
  { label: "My Account", icon: "○" },
];

const FILTERS = ["New", "Delivered", "Rejected", "All"];
const FILTER_KEY = { New:"active-new", Delivered:"active-delivered", Rejected:"active-rejected", All:"active-all" };

const CATEGORIES = [
  { name: "Desert",    badge: "new" },
  { name: "Main",      badge: "new" },
  { name: "Drink",     badge: "default" },
  { name: "Appetizer", badge: "new" },
  { name: "Starter",   badge: "new" },
];

const STATS = [
  { label: "Delivered", value: 6  },
  { label: "Waiting",   value: 12 },
  { label: "Rejected",  value: 1  },
  { label: "All",       value: 30 },
];

const FOOD_IMGS = [
  "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=100&q=80",
  "https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=100&q=80",
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&q=80",
  "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=100&q=80",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100&q=80",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=100&q=80",
  "https://images.unsplash.com/photo-1540189549336-e6e99eb4b2a0?w=100&q=80",
];

const ALL_ORDERS = Array.from({ length: 10 }, (_, i) => ({
  id:    i + 1,
  label: `Order ${i + 1}`,
  name:  "Tom yummy *2",
  price: "2000$",
  type:  "Guest",
  phone: "0784567825",
  img:   FOOD_IMGS[i % FOOD_IMGS.length],
  status: i < 3 ? "new" : i < 7 ? "waiting" : "rejected",
}));

function getNow() {
  return new Date().toLocaleDateString("en-GB", {
    day: "2-digit", month: "long", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
}

/* ── component ───────────────────────────────── */
const Order2 = () => {
  const [activeNav,    setActiveNav]    = useState("Orders");
  const [activeFilter, setActiveFilter] = useState("All");
  const [selected,     setSelected]     = useState(null);

  const filtered = ALL_ORDERS.filter(o => {
    if (activeFilter === "All")       return true;
    if (activeFilter === "New")       return o.status === "new";
    if (activeFilter === "Delivered") return o.status === "delivered";
    if (activeFilter === "Rejected")  return o.status === "rejected";
    return true;
  });

  return (
    <div className="ord-root">

      {/* ── HEADER ── */}
      <header className="ord-header">
        <div className="ord-logo">Miss<span>More</span></div>
        <div className="ord-header-title">Orders</div>
        <div className="ord-header-right">
          <button className="ord-search-btn">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>
          <div className="ord-divider"/>
          <div className="ord-user">
            <div className="ord-user-text">
              <div className="ord-user-name">Kagabo</div>
              <div className="ord-user-role">Jacques</div>
            </div>
            <div className="ord-avatar">
              <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="15" r="8" fill="#ccc"/>
                <ellipse cx="20" cy="34" rx="13" ry="9" fill="#ccc"/>
              </svg>
            </div>
          </div>
        </div>
      </header>

      <div className="ord-body">

        {/* ── SIDEBAR ── */}
        <aside className="ord-sidebar">
          <div className="ord-sidebar-top">
            <div className="ord-sidebar-logo">Miss<span>More</span></div>
          </div>

          <nav className="ord-sidebar-nav">
            {NAV_MAIN.map(item => (
              <button
                key={item.label}
                className={`ord-nav-item${activeNav === item.label ? " active" : ""}`}
                onClick={() => setActiveNav(item.label)}
              >
                <span className="ord-nav-icon">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>

          <div className="ord-sidebar-bottom">
            {NAV_BOTTOM.map(item => (
              <button
                key={item.label}
                className={`ord-nav-item${activeNav === item.label ? " active" : ""}`}
                onClick={() => setActiveNav(item.label)}
              >
                <span className="ord-nav-icon">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </aside>

        {/* ── MAIN ── */}
        <div className="ord-main">
          <div className="ord-bg-img"/>

          {/* ── ORDER LIST ── */}
          <div className="ord-list-section">

            {/* Filter tabs */}
            <div className="ord-filters">
              {FILTERS.map(f => (
                <button
                  key={f}
                  className={`ord-filter-btn ${activeFilter === f ? FILTER_KEY[f] : "inactive"}`}
                  onClick={() => setActiveFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Timestamp */}
            <div className="ord-timestamp">{getNow()}</div>

            {/* Scrollable cards */}
            <div className="ord-scroll">
              {filtered.map((order, i) => (
                <div
                  key={order.id}
                  className={`ord-card${selected === order.id ? " selected" : ""}`}
                  style={{ animationDelay: `${i * 0.05}s` }}
                  onClick={() => setSelected(order.id === selected ? null : order.id)}
                >
                  <div className="ord-card-num">{order.label}</div>
                  <img
                    src={order.img}
                    alt={order.name}
                    className="ord-card-img"
                    onError={e => { e.target.style.background = "#e0d4c8"; e.target.src = ""; }}
                  />
                  <div className="ord-card-info">
                    <div className="ord-card-name">{order.name}</div>
                    <div className="ord-card-price">{order.price}</div>
                  </div>
                  <div className="ord-card-right">
                    <div className="ord-card-type">{order.type}</div>
                    <div className="ord-card-phone">{order.phone}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT PANEL ── */}
          <div className="ord-right-panel">

            {/* Stats */}
            <div className="ord-stats">
              {STATS.map(s => (
                <div className="ord-stat-row" key={s.label}>
                  <span className="ord-stat-label">{s.label}</span>
                  <span className="ord-stat-value">{s.value}</span>
                </div>
              ))}
            </div>

            {/* Add Order */}
            <div className="ord-add-title">Add Order</div>
            <div className="ord-add-sub">
              <span>Create new Order</span>
              <div className="ord-add-plus">+</div>
            </div>

            {/* Category rows */}
            {CATEGORIES.map(cat => (
              <div className="ord-cat-row" key={cat.name}>
                <span className="ord-cat-name">{cat.name}</span>
                <span className={`ord-cat-badge ${cat.badge === "new" ? "new-b" : "default-b"}`}>
                  {cat.badge === "new" ? "New" : "Default"}
                </span>
              </div>
            ))}

            {/* Explore more */}
         <Link to="/dashbord"> <button className="ord-explore-btn">
              Explore more
              <div className="ord-explore-arrow">›</div>
            </button> </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Order2;