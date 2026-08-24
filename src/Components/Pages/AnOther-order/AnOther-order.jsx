import { useState } from "react";
import "./AnOther-order.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.jpg";  // ← your new logo

/* ── data ─────────────────────────────────────── */
const NAV = [
  { label:"Dashboard",  icon:"◇", path:"/dashbord" },
  { label:"New Order",  icon:"🛒", path:"/new-order" },
  { label:"Menu",       icon:"≡", path:"/menu-items" },
  { label:"Customers",  icon:"👥", path:"/an-other-order" },
];

const STEPS = ["Confirm Details","Choose Restaurant","Select Table","Order Food"];

const RESTAURANTS = [
  {
    id:1, name:"MissMore Downtown",
    addr:"124 Culinary Ave, Central District",
    rating:"4.7", reviews:"900",
    img:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80",
    badge:"Select Table In",
  },
  {
    id:2, name:"MissMore Harbor",
    addr:"58 Sea View St, South Dock",
    rating:"4.7", reviews:"900",
    img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80",
  },
  {
    id:3, name:"MissMore Garden",
    addr:"15 Botanical Garden Ave",
    rating:"4.8", reviews:"950",
    img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80",
  },
];

const TABLES = [
  { id:"t1", label:"",         type:"chair", row:0, col:0 },
  { id:"t2", label:"",         type:"chair", row:0, col:1 },
  { id:"t3", label:"",         type:"chair", row:0, col:2 },
  { id:"t4", label:"",         type:"chair", row:0, col:3 },
  { id:"b1", label:"B-01 (Booth)", type:"booth-left",  row:1, col:0 },
  { id:"b2", label:"B-02 (Booth)", type:"booth-right", row:1, col:2 },
  { id:"t5", label:"",         type:"chair", row:2, col:0 },
  { id:"t6", label:"",         type:"chair", row:2, col:1 },
  { id:"t7", label:"",         type:"chair", row:2, col:2 },
  { id:"t8", label:"",         type:"chair", row:2, col:3 },
];

const ORDER_ITEMS = [
  {
    id:1, name:"Signature Truffle Pasta",
    qty:"x1", price:24.00,
    img:"https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=100&q=80",
  },
  {
    id:2, name:"Citrus Glazed Salmon",
    qty:"x2", price:56.00,
    img:"https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=100&q=80",
  },
];

const OCCASIONS = ["Standard Dining","Birthday","Anniversary","Business Meeting","Date Night"];

/* ── component ───────────────────────────────── */
export default function AnOtherOrder() {
  const [activeNav,   setActiveNav]   = useState("Customers");
  const [activeStep,  setActiveStep]  = useState(0);
  const [guestName,   setGuestName]   = useState("");
  const [phone,       setPhone]       = useState("");
  const [guestCount,  setGuestCount]  = useState(2);
  const [occasion,    setOccasion]    = useState("Standard Dining");
  const [selectedRest,setSelectedRest]= useState(1);
  const [selectedTbl, setSelectedTbl] = useState("b1");

  const subtotal = ORDER_ITEMS.reduce((s,i) => s + i.price, 0);
  const tax      = +(subtotal * 0.08).toFixed(2);
  const total    = +(subtotal + tax).toFixed(2);

  return (
    <div className="no-root">

      {/* ── SIDEBAR ── */}
      <aside className="no-sidebar">
          {/* Logo */}
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <div className="home-logo">
              <img src={logo} alt="Fast Food Logo" className="logo-img" />
            </div>
          </Link>

        <nav className="no-nav">
          {NAV.map(item => (
            <Link to={item.path} key={item.label} style={{ textDecoration: 'none' }}>
              <button
                className={`no-nav-item${activeNav === item.label ? " active" : ""}`}
                onClick={() => setActiveNav(item.label)}
              >
                <span className="no-nav-icon">{item.icon}</span>
                {item.label}
              </button>
            </Link>
          ))}
        </nav>

        <div className="no-nav-config-label">Configuration</div>
      <Link to="/profile-dashboard" style={{textDecoration: 'none'}}>  <div style={{ padding:"0 12px" }}>
          <button className="no-nav-item">
            <span className="no-nav-icon">⚙</span>Settings
          </button>
        </div>
      </Link>

        <div className="no-sidebar-user">
          <div className="no-user-avatar">KJ</div>
          <div>
            <div className="no-user-name">Kapsta Joque</div>
            <div className="no-user-role">System Group</div>
          </div>
          <button className="no-user-more">⋯</button>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <div className="no-main">

        {/* TOP BAR */}
        <div className="no-topbar">
          <div className="no-steps">
            {STEPS.map((s, i) => (
              <div
                key={s}
                className={`no-step${i === activeStep ? " active" : ""}${i < activeStep ? " done" : ""}`}
                onClick={() => setActiveStep(i)}
              >
                <div className="no-step-num">{i < activeStep ? "✓" : i + 1}</div>
                {s}
              </div>
            ))}
          </div>
          <div className="no-topbar-icons">
            <button className="no-topbar-icon">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </button>
            <button className="no-topbar-icon">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div className="no-content">

          {/* ── LEFT FORM AREA ── */}
          <div className="no-form-area">

            {/* Confirm Guest Details */}
            <div className="no-card">
              <div className="no-card-header">
                <div className="no-card-title">Confirm Guest Details</div>
                <button className="no-recent-btn">🕐 Recent Guests</button>
              </div>

              <div className="no-form-grid">
                <div>
                  <label className="no-field-label">Guest Name</label>
                  <input className="no-input" placeholder="e.g. John Doe"
                    value={guestName} onChange={e => setGuestName(e.target.value)}/>
                </div>
                <div>
                  <label className="no-field-label">Phone Number</label>
                  <input className="no-input" placeholder="+1(555) 000-0000"
                    value={phone} onChange={e => setPhone(e.target.value)}/>
                </div>
                <div>
                  <label className="no-field-label">Guest Count</label>
                  <div className="no-counter">
                    <button className="no-counter-btn"
                      onClick={() => setGuestCount(v => Math.max(1, v-1))}>−</button>
                    <span className="no-counter-val">{guestCount} Guest{guestCount > 1 ? "s" : ""}</span>
                    <button className="no-counter-btn"
                      onClick={() => setGuestCount(v => v+1)}>+</button>
                  </div>
                </div>
                <div>
                  <label className="no-field-label">Occasion (Optional)</label>
                  <select className="no-select" value={occasion}
                    onChange={e => setOccasion(e.target.value)}>
                    {OCCASIONS.map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>
            </div>

            {/* Choose Restaurant Branch */}
            <div className="no-card">
              <div className="no-card-title" style={{ marginBottom:14 }}>Choose Restaurant Branch</div>
              <div className="no-rest-grid">
                {RESTAURANTS.map(r => (
                  <div
                    key={r.id}
                    className={`no-rest-card${selectedRest === r.id ? " selected" : ""}`}
                    onClick={() => setSelectedRest(r.id)}
                  >
                    <img src={r.img} alt={r.name} className="no-rest-img"/>
                    {r.badge && <div className="no-rest-badge">{r.badge}</div>}
                    <div className="no-rest-info">
                      <div className="no-rest-name">{r.name}</div>
                      <div className="no-rest-addr">{r.addr}</div>
                      <div className="no-rest-rating">
                        ★ {r.rating} ({r.reviews} Reviews)
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floor Plan / Table Selection */}
            <div className="no-floor">
              {/* row 0 — top chairs */}
              <div className="no-floor-grid">
                {[0,1,2,3].map(c => (
                  <button key={`r0c${c}`} className="no-table-btn">
                    <span className="no-table-icon">🪑</span>
                  </button>
                ))}

                {/* row 1 — booths + empty cols */}
                <button
                  className={`no-table-btn${selectedTbl === "b1" ? " selected" : ""}`}
                  onClick={() => setSelectedTbl("b1")}
                  style={{ gridColumn:"1" }}
                >
                  <span className="no-table-icon">🛋</span>
                  B-01 (Booth)
                </button>

                {/* center hall spanning cols 2-3 */}
                <button
                  className={`no-table-center${selectedTbl === "hall" ? " selected" : ""}`}
                  onClick={() => setSelectedTbl("hall")}
                  style={{ gridColumn:"2 / 4" }}
                >
                  <span style={{ fontSize:16 }}>👥</span>
                  Main Hall Center (8)
                </button>

                <button
                  className={`no-table-btn${selectedTbl === "b2" ? " selected" : ""}`}
                  onClick={() => setSelectedTbl("b2")}
                  style={{ gridColumn:"4" }}
                >
                  <span className="no-table-icon">🛋</span>
                  B-02 (Booth)
                </button>

                {/* row 2 — bottom chairs */}
                {[0,1,2,3].map(c => (
                  <button key={`r2c${c}`} className="no-table-btn">
                    <span className="no-table-icon">🪑</span>
                  </button>
                ))}
              </div>

              <div className="no-floor-label">FLOOR LEVEL 1 • MAIN DINING AREA</div>
            </div>

          </div>

          {/* ── ORDER SUMMARY ── */}
          <div className="no-summary">
            <div className="no-summary-header">
              <span className="no-summary-title">Order Summary</span>
              <button className="no-new-order-btn">NEW ORDER</button>
            </div>

            <div>
              <div className="no-summary-section-label">Restaurant</div>
              <div className="no-summary-info-row">
                <div className="no-summary-info-icon">🏠</div>
                <span className="no-summary-info-text">
                  {RESTAURANTS.find(r => r.id === selectedRest)?.name}
                </span>
              </div>
            </div>

            <div>
              <div className="no-summary-section-label">Table</div>
              <div className="no-summary-info-row">
                <div className="no-summary-info-icon">🪑</div>
                <span className="no-summary-info-text">
                  {selectedTbl === "b1" ? "Booth B-01 (Main-Hall)"
                  : selectedTbl === "b2" ? "Booth B-02 (Main-Hall)"
                  : "Main Hall Center"}
                </span>
              </div>
            </div>

            <div className="no-summary-divider"/>

            <div>
              <div className="no-summary-section-label">Selected Items</div>
              {ORDER_ITEMS.map(item => (
                <div className="no-order-item" key={item.id}>
                  <img src={item.img} alt={item.name} className="no-order-item-img"
                    onError={e => { e.target.style.background="#e8ddd4"; e.target.src=""; }}/>
                  <div className="no-order-item-info">
                    <div className="no-order-item-name">{item.name}</div>
                    <div className="no-order-item-qty">{item.qty}</div>
                  </div>
                  <div className="no-order-item-price">${item.price.toFixed(2)}</div>
                </div>
              ))}
              <button className="no-add-items-btn">⊕ Add More Items</button>
            </div>

            <div className="no-summary-divider"/>

            <div className="no-totals">
              <div className="no-total-row">
                <span>Subtotal</span><span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="no-total-row">
                <span>Tax (8%)</span><span>${tax.toFixed(2)}</span>
              </div>
              <div className="no-total-row grand">
                <span>Total</span><span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button className="no-place-btn">Place Order ›</button>

            <div className="no-wait-note">
              ℹ Estimated wait time: 15–20 mins. Kitchen is currently at 70% capacity.
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}