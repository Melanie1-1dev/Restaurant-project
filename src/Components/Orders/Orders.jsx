import { useState } from "react";
import "./Orders.css";

const NAV_ITEMS = [
  { label: "Overview", icon: "◇" },
  { label: "Tables", icon: "⊤" },
  { label: "Orders", icon: "☰" },
  { label: "Menus", icon: "☰" },
];

const NAV_BOTTOM = [
  { label: "Settings", icon: "○" },
  { label: "My Account", icon: "⌀" },
];

const CATEGORIES = ["Desert", "Main", "Drink", "Appetizer", "Starter"];

const MOCK_ORDERS = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  label: `Order ${i + 1}`,
  name: "Tom yummy *2",
  price: "2000$",
  type: "Guest",
  phone: "0784567825",
  image: `https://images.unsplash.com/photo-${
    ["1504674900247-0877df9cc836", "1555939594-58d7cb561ad1",
     "1546069901-ba9599a7e63c", "1512621776951-a57141f2eefd",
     "1567620905732-2d1ec7ab7445", "1565299624946-b28f40a0ae38",
     "1540189549336-e6e99eb4b2a0", "1482049016688-2d3e1b311543",
     "1540420773420-3366772f4999", "1563379926898-05f4575a45d8"][i]
  }?w=100&q=80`,
  status: i < 2 ? "new" : i < 8 ? "waiting" : "rejected",
}));

const STATS = [
  { label: "Delivered", value: 6 },
  { label: "Waiting", value: 12 },
  { label: "Rejected", value: 1 },
  { label: "All", value: 30 },
];

const FILTERS = ["New", "Delivered", "Rejected", "All"];
const FILTER_CLASS = { New: "new", Delivered: "delivered", Rejected: "rejected", All: "all" };

function getNow() {
  return new Date().toLocaleDateString("en-GB", {
    day: "2-digit", month: "long", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
}

export default function Orders() {
  const [activeNav, setActiveNav] = useState("Orders");
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const filteredOrders = MOCK_ORDERS.filter((o) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "New") return o.status === "new";
    if (activeFilter === "Delivered") return o.status === "delivered";
    if (activeFilter === "Rejected") return o.status === "rejected";
    return true;
  });

  return (
    <div className="orders-root">
      {/* Background */}
      <div className="orders-bg" />

      {/* Top Header */}
      <header className="orders-header">
        <div className="orders-logo">Miss<span>More</span></div>
        <div className="orders-header-title">Orders</div>
        <div className="orders-header-right">
          <button className="orders-search-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <div className="orders-header-divider" />
          <div className="orders-user">
            <div className="orders-user-text">
              <div className="orders-user-name">Kagabo</div>
              <div className="orders-user-role">Jacques</div>
            </div>
            <div className="orders-avatar">
              <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="15" r="8" fill="#ccc" />
                <ellipse cx="20" cy="34" rx="13" ry="9" fill="#ccc" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      <div className="orders-body">
        {/* Sidebar */}
        <aside className="orders-sidebar">
          <div className="orders-sidebar-logo">Miss<span>More</span></div>
          <nav className="orders-nav">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                className={`orders-nav-item${activeNav === item.label ? " active" : ""}`}
                onClick={() => setActiveNav(item.label)}
              >
                <span className="orders-nav-icon">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
          <div className="orders-nav-bottom">
            {NAV_BOTTOM.map((item) => (
              <button
                key={item.label}
                className="orders-nav-item"
                onClick={() => setActiveNav(item.label)}
              >
                <span className="orders-nav-icon">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </aside>

        {/* Main */}
        <main className="orders-main">
          {/* Order List Section */}
          <div className="orders-list-section">
            <div className="orders-list-header">
              <div>
                <div className="orders-list-title">Orders</div>
                <div className="orders-timestamp">{getNow()}</div>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="orders-filters">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  className={`orders-filter-btn ${activeFilter === f ? FILTER_CLASS[f] : "inactive"}`}
                  onClick={() => setActiveFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Order Cards */}
            <div className="orders-scroll">
              {filteredOrders.map((order) => (
                <div
                  key={order.id}
                  className={`order-card${selectedOrder === order.id ? " selected" : ""}`}
                  onClick={() => setSelectedOrder(order.id === selectedOrder ? null : order.id)}
                >
                  <div className="order-label">{order.label}</div>
                  <img
                    src={order.image}
                    alt={order.name}
                    className="order-card-img"
                    onError={(e) => { e.target.style.background = "#e8e0d8"; e.target.src = ""; }}
                  />
                  <div className="order-card-info">
                    <div className="order-card-name">{order.name}</div>
                    <div className="order-card-price">{order.price}</div>
                  </div>
                  <div className="order-card-right">
                    <div className="order-card-type">{order.type}</div>
                    <div className="order-card-phone">{order.phone}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel */}
          <div className="orders-right-panel">
            {/* Stats */}
            <div className="orders-stats">
              {STATS.map((s) => (
                <div key={s.label} className="orders-stat-row">
                  <span className="orders-stat-label">{s.label}</span>
                  <span className="orders-stat-value">{s.value}</span>
                </div>
              ))}
            </div>

            {/* Add Order */}
            <div className="orders-add-panel">
              <div className="orders-add-title">Add Order</div>
              <div className="orders-add-subtitle">
                <span>Create new Order</span>
                <div className="orders-add-plus">+</div>
              </div>

              <div className="orders-cat-rows">
                {CATEGORIES.map((cat) => (
                  <div key={cat} className="orders-cat-row">
                    <span className="orders-cat-name">{cat}</span>
                    <span className={`orders-cat-badge ${cat === "Drink" ? "default-badge" : "new-badge"}`}>
                      {cat === "Drink" ? "Default" : "New"}
                    </span>
                  </div>
                ))}
              </div>

              <button className="orders-explore-btn">
                Explore more
                <div className="orders-explore-arrow">›</div>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}