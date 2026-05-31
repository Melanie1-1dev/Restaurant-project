import { useState } from "react";
import "./Menububble.css";

const CATEGORIES = [
  { key: "All",       label: "All",        icon: "◈" },
  { key: "Drink",     label: "Drinks",     icon: "🥤" },
  { key: "Starter",   label: "Starters",   icon: "🥗" },
  { key: "Appetizer", label: "Appetizers", icon: "🍟" },
  { key: "Dessert",   label: "Desserts",   icon: "🍮" },
  { key: "Main",      label: "Main",       icon: "🍛" },
];

const MENU_ITEMS = [
  { id:1,  name:"Jollof Rice",       category:"Main",      price:4500, badge:"Popular",
    img:"https://images.unsplash.com/photo-1653308887777-c50a45806b99?w=800&h=500&fit=crop&crop=center&q=85" },
  { id:2,  name:"Crispy Fries",      category:"Appetizer", price:2000, badge:null,
    img:"https://images.unsplash.com/photo-1630431341973-02e1b662ec35?w=800&h=500&fit=crop&crop=center&q=85" },
  { id:3,  name:"Grilled Chicken",   category:"Main",      price:6500, badge:"Chef's Pick",
    img:"https://images.unsplash.com/photo-1598103442097-8b74394b95c8?w=800&h=500&fit=crop&crop=center&q=85" },
  { id:4,  name:"Baked Rice",        category:"Main",      price:4000, badge:null,
    img:"https://images.unsplash.com/photo-1536304993881-ff86e0c9c1b6?w=800&h=500&fit=crop&crop=center&q=85" },
  { id:5,  name:"Beef & Vegetables", category:"Main",      price:5500, badge:null,
    img:"https://images.unsplash.com/photo-1547592180-85f173990554?w=800&h=500&fit=crop&crop=center&q=85" },
  { id:6,  name:"Banana Juice",      category:"Drink",     price:1500, badge:"Fresh",
    img:"https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=800&h=500&fit=crop&crop=center&q=85" },
  { id:7,  name:"Roasted Meat",      category:"Starter",   price:4800, badge:null,
    img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=500&fit=crop&crop=center&q=85" },
  { id:8,  name:"Chicken Wings",     category:"Appetizer", price:3500, badge:"Hot 🔥",
    img:"https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&h=500&fit=crop&crop=center&q=85" },
  { id:9,  name:"Garden Salad",      category:"Starter",   price:2500, badge:null,
    img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=500&fit=crop&crop=center&q=85" },
  { id:10, name:"Caesar Salad",      category:"Starter",   price:2800, badge:null,
    img:"https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&h=500&fit=crop&crop=center&q=85" },
  { id:11, name:"Tricolored Pasta",  category:"Appetizer", price:3200, badge:"New",
    img:"https://images.unsplash.com/photo-1551183053-bf91798d9f1c?w=800&h=500&fit=crop&crop=center&q=85" },
  { id:12, name:"Cheesy Pizza",      category:"Appetizer", price:2800, badge:null,
    img:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=500&fit=crop&crop=center&q=85" },
  { id:13, name:"Tiramisu",          category:"Dessert",   price:3000, badge:"Sweet",
    img:"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&h=500&fit=crop&crop=center&q=85" },
  { id:14, name:"Mango Smoothie",    category:"Drink",     price:1800, badge:null,
    img:"https://images.unsplash.com/photo-1546173159-315724a31696?w=800&h=500&fit=crop&crop=center&q=85" },
  { id:15, name:"Chocolate Cake",    category:"Dessert",   price:3500, badge:null,
    img:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=500&fit=crop&crop=center&q=85" },
  { id:16, name:"Lemonade",          category:"Drink",     price:1200, badge:null,
    img:"https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=800&h=500&fit=crop&crop=center&q=85" },
  { id:17, name:"Spring Rolls",      category:"Starter",   price:2200, badge:null,
    img:"https://images.unsplash.com/photo-1544250634-d6d8e040e336?w=800&h=500&fit=crop&crop=center&q=85" },
  { id:18, name:"Onion Rings",       category:"Appetizer", price:1900, badge:null,
    img:"https://images.unsplash.com/photo-1639024471283-03518883512d?w=800&h=500&fit=crop&crop=center&q=85" },
];

const NAV_MAIN = [
  { icon:"📊", label:"Overview",  key:"overview" },
  { icon:"👥", label:"Users",     key:"users" },
  { icon:"🤝", label:"Clients",   key:"clients" },
];
const NAV_FOOT = [
  { icon:"⚙️",  label:"Settings",   key:"settings" },
  { icon:"👤", label:"My Account",  key:"account"  },
];

const fmt = (n) => n.toLocaleString() + " RWF";

export default function Menububble() {
  const [activeNav, setActiveNav]   = useState("overview");
  const [activeTab, setActiveTab]   = useState("All");
  const [quantities, setQuantities] = useState({});
  const [toast, setToast]           = useState(null);

  const filtered = activeTab === "All"
    ? MENU_ITEMS
    : MENU_ITEMS.filter((i) => i.category === activeTab);

  const bump = (id, delta) =>
    setQuantities((p) => ({ ...p, [id]: Math.max(0, (p[id] || 0) + delta) }));

  const totalItems = Object.values(quantities).reduce((a, b) => a + b, 0);
  const totalPrice = Object.entries(quantities).reduce((s, [id, q]) => {
    const it = MENU_ITEMS.find((i) => i.id === +id);
    return s + (it ? it.price * q : 0);
  }, 0);

  const showToast = (m) => { setToast(m); setTimeout(() => setToast(null), 2400); };

  return (
    <div className="mm-app">

      {/* SIDEBAR */}
      <aside className="mm-sidebar">
        <div className="mm-logo">Miss<em>More</em></div>
        <nav className="mm-nav">
          {NAV_MAIN.map((n) => (
            <button key={n.key}
              className={"mm-nav-item" + (activeNav === n.key ? " active" : "")}
              onClick={() => setActiveNav(n.key)}>
              <span className="mm-nav-icon">{n.icon}</span>
              <span className="mm-nav-label">{n.label}</span>
            </button>
          ))}
        </nav>
        <div className="mm-sidebar-foot">
          {NAV_FOOT.map((n) => (
            <button key={n.key}
              className={"mm-nav-item" + (activeNav === n.key ? " active" : "")}
              onClick={() => setActiveNav(n.key)}>
              <span className="mm-nav-icon">{n.icon}</span>
              <span className="mm-nav-label">{n.label}</span>
            </button>
          ))}
        </div>
      </aside>

      {/* MAIN */}
      <div className="mm-main">

        {/* TOPBAR */}
        <header className="mm-topbar">
          <span className="mm-topbar-brand">Menu</span>
          <div className="mm-topbar-right">
            <button className="mm-icon-btn" aria-label="Search">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </button>
            <div className="mm-user-chip">
              <div className="mm-avatar">KJ</div>
              <div className="mm-user-text">
                <span className="mm-user-name">Kagabo Jacques</span>
                <span className="mm-user-role">Manager</span>
              </div>
            </div>
          </div>
        </header>

        {/* SCROLL AREA */}
        <div className="mm-scroll">

          {/* PAGE HEADER */}
          <div className="mm-page-head">
            <div>
              <h1 className="mm-title">Menu Overview</h1>
              <p className="mm-sub">{filtered.length} of {MENU_ITEMS.length} items</p>
            </div>
            {totalItems > 0 && (
              <div className="mm-order-pill">
                🛒 <strong>{totalItems}</strong> · {fmt(totalPrice)}
              </div>
            )}
          </div>

          {/* TABS */}
          <div className="mm-tabs-scroll">
            <div className="mm-tabs">
              {CATEGORIES.map((c) => {
                const count = c.key === "All"
                  ? MENU_ITEMS.length
                  : MENU_ITEMS.filter((i) => i.category === c.key).length;
                return (
                  <button key={c.key}
                    className={"mm-tab" + (activeTab === c.key ? " active" : "")}
                    onClick={() => setActiveTab(c.key)}>
                    <span>{c.icon}</span>
                    <span>{c.label}</span>
                    <span className="mm-tab-pill">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* GRID */}
          {filtered.length === 0 ? (
            <div className="mm-empty">🍽️<p>No items here yet.</p></div>
          ) : (
            <div className="mm-grid">
              {filtered.map((item) => {
                const qty = quantities[item.id] || 0;
                return (
                  <div className="mm-card" key={item.id}>

                    {/* IMAGE — aspect-ratio enforced via CSS */}
                    <div className="mm-img-wrap">
                      <img
                        src={item.img}
                        alt={item.name}
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentNode.classList.add("mm-img-fallback");
                        }}
                      />
                      {item.badge && <span className="mm-badge">{item.badge}</span>}
                      {qty > 0   && <span className="mm-qty-dot">{qty}</span>}
                    </div>

                    {/* BODY */}
                    <div className="mm-card-body">
                      <span className="mm-cat-tag">{item.category}</span>
                      <p className="mm-card-name">{item.name}</p>
                      <p className="mm-card-price">{fmt(item.price)}</p>

                      {qty === 0 ? (
                        <button className="mm-btn-add"
                          onClick={() => { bump(item.id, 1); showToast(item.name + " added!"); }}>
                          + Add to order
                        </button>
                      ) : (
                        <div className="mm-qty-row">
                          <button className="mm-q-btn mm-q-minus" onClick={() => bump(item.id, -1)}>−</button>
                          <span className="mm-q-num">{qty}</span>
                          <button className="mm-q-btn mm-q-plus"  onClick={() => bump(item.id, +1)}>+</button>
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* BOTTOM BAR */}
        <footer className="mm-footer">
          <span className="mm-cart-text">
            {totalItems > 0
              ? <><strong>{totalItems} items</strong> &nbsp;·&nbsp; {fmt(totalPrice)}</>
              : <em>No items selected yet</em>}
          </span>
          <button className="mm-add-new"
            onClick={() => showToast("Opening add item form…")}>
            + Add New Item
          </button>
        </footer>

      </div>{/* /mm-main */}

      {toast && <div className="mm-toast" key={toast}>✓ {toast}</div>}
    </div>
  );
}