import { useState } from "react";
import "./Dashbord.css";
import { Link } from "react-router-dom";

/* ── nav ─────────────────────────────────────── */
const NAV_MAIN   = [{ label:"Overview",icon:"◇" },{ label:"Users",icon:"○" },{ label:"Clients",icon:"◉" }];
const NAV_BOTTOM = [{ label:"Settings",icon:"✦" },{ label:"My Account",icon:"○" }];

/* ── stats ───────────────────────────────────── */
const STATS = [
  { label:"Clients",       value:"60",           change:"+12% this month", up:true,  icon:"👥" },
  { label:"Revenue (RWF)", value:"162,234,000",  change:"+8.4% this month", up:true,  icon:"💰" },
  { label:"Orders",        value:"67,569",       change:"+5.1% this month", up:true,  icon:"📦" },
];

/* ── donut data ───────────────────────────────── */
const DONUT = [
  { label:"Restaurants", value:45, color:"#e07d3c" },
  { label:"Hotels",      value:28, color:"#c9a882" },
  { label:"Cafes",       value:17, color:"#8b5e3c" },
  { label:"Pubs",        value:10, color:"#5c3a1e" },
];

/* ── bar chart ────────────────────────────────── */
const BARS = [
  { label:"Jan", a:60,  b:40  },
  { label:"Feb", a:75,  b:55  },
  { label:"Mar", a:50,  b:80  },
  { label:"Apr", a:90,  b:60  },
  { label:"May", a:65,  b:45  },
  { label:"Jun", a:110, b:75  },
  { label:"Jul", a:95,  b:65  },
  { label:"Aug", a:80,  b:55  },
];
const BAR_MAX = 120;

/* ── business listings ────────────────────────── */
const BUSINESSES = [
  {
    id:1, title:"Restaurants", subtitle:"Sales",
    items:[{ name:"Sundowner", val:"300" },{ name:"Get N10", val:"150" },{ name:"Soy", val:"12000" }],
  },
  {
    id:2, title:"Pubs", subtitle:"Sales",
    items:[{ name:"Sundowner", val:"300" },{ name:"Get N10", val:"150" },{ name:"M Hotel", val:"200" }],
  },
  {
    id:3, title:"Cafes", subtitle:"Sales",
    items:[{ name:"Fantasie Royale", val:"500" },{ name:"Get N10", val:"150" },{ name:"Soy", val:"12000" }],
  },
];

/* ── create new items ────────────────────────── */
const CREATE_ITEMS = [
  { name:"Restaurants", badge:"new" },
  { name:"Hotels",      badge:"new" },
  { name:"Pub",         badge:"default" },
];

/* ── donut helpers ───────────────────────────── */
function DonutChart({ data }) {
  const total = data.reduce((s, d) => s + d.value, 0);
  const R = 60, cx = 80, cy = 80, stroke = 22;
  const circumference = 2 * Math.PI * R;
  let offset = 0;
  const slices = data.map(d => {
    const dash = (d.value / total) * circumference;
    const gap  = circumference - dash;
    const rot  = (offset / total) * 360 - 90;
    offset += d.value;
    return { ...d, dash, gap, rot };
  });
  return (
    <div className="dash-donut-wrap">
      <svg width="160" height="160" className="dash-donut-svg" viewBox="0 0 160 160">
        <circle cx={cx} cy={cy} r={R} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth={stroke}/>
        {slices.map((s, i) => (
          <circle key={i} cx={cx} cy={cy} r={R} fill="none"
            stroke={s.color} strokeWidth={stroke}
            strokeDasharray={`${s.dash} ${s.gap}`}
            strokeDashoffset={0}
            transform={`rotate(${s.rot} ${cx} ${cy})`}
            style={{ transition:"stroke-dasharray 0.6s ease" }}
          />
        ))}
        <text x={cx} y={cy-6} textAnchor="middle" fill="#f5ede4" fontSize="18" fontWeight="700" fontFamily="Georgia,serif">
          {total}
        </text>
        <text x={cx} y={cy+12} textAnchor="middle" fill="#9a7a5a" fontSize="9" fontFamily="Helvetica Neue,Arial,sans-serif">
          TOTAL
        </text>
      </svg>
      <div className="dash-donut-legend">
        {data.map((d,i) => (
          <div className="dash-legend-item" key={i}>
            <div className="dash-legend-dot" style={{ background: d.color }}/>
            {d.label} ({d.value}%)
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── bar chart ───────────────────────────────── */
function BarChart({ data, max }) {
  return (
    <div className="dash-bar-wrap">
      <div className="dash-bar-chart">
        {data.map((d, i) => (
          <div className="dash-bar-col" key={i}>
            <div className="dash-bar" style={{ height: `${(d.a/max)*100}%`, background:"#e07d3c", opacity:0.85 }}/>
            <div className="dash-bar" style={{ height: `${(d.b/max)*100}%`, background:"#8b5e3c", opacity:0.75, marginTop:2 }}/>
          </div>
        ))}
      </div>
      <div style={{ display:"flex", gap:5, justifyContent:"space-around" }}>
        {data.map((d,i) => (
          <div className="dash-bar-label" key={i} style={{ flex:1, textAlign:"center" }}>{d.label}</div>
        ))}
      </div>
      <div style={{ display:"flex", gap:12, marginTop:4 }}>
        <div className="dash-legend-item"><div className="dash-legend-dot" style={{ background:"#e07d3c" }}/>Revenue</div>
        <div className="dash-legend-item"><div className="dash-legend-dot" style={{ background:"#8b5e3c" }}/>Orders</div>
      </div>
    </div>
  );
}

/* ── main component ──────────────────────────── */
export default function Dashbord() {
  const [activeNav, setActiveNav] = useState("Overview");

  return (
    <div className="dash-root">

      {/* HEADER */}
      <header className="dash-header">
        <div className="dash-logo">Miss<span>More</span></div>
    <Link to="../"> <div className="backward-arrow">⬅️</div> </Link>
        <div className="dash-header-title">Overview</div>
        <div className="dash-header-right">
          <button className="dash-search-btn">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>
          <div className="dash-header-divider"/>
          <div className="dash-user">
            <div className="dash-user-text">
              <div className="dash-user-name">Kagabo</div>
              <div className="dash-user-role">Jacques</div>
            </div>
            <div className="dash-avatar">
              <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="15" r="8" fill="rgba(200,160,120,0.6)"/>
                <ellipse cx="20" cy="34" rx="13" ry="9" fill="rgba(200,160,120,0.6)"/>
              </svg>
            </div>
          </div>
        </div>
      </header>

      <div className="dash-body">

        {/* SIDEBAR */}
        <aside className="dash-sidebar">
          <nav className="dash-nav">
            {NAV_MAIN.map(item => (
              <button key={item.label}
                className={`dash-nav-item${activeNav===item.label?" active":""}`}
                onClick={() => setActiveNav(item.label)}>
                <span className="dash-nav-icon">{item.icon}</span>{item.label}
              </button>
            ))}
          </nav>
          <div className="dash-nav-bottom">
            {NAV_BOTTOM.map(item => (
              <button key={item.label}
                className={`dash-nav-item${activeNav===item.label?" active":""}`}
                onClick={() => setActiveNav(item.label)}>
                <span className="dash-nav-icon">{item.icon}</span>{item.label}
              </button>
            ))}
          </div>
        </aside>

        {/* MAIN */}
        <main className="dash-main">

          {/* ── STAT CARDS ── */}
          <div className="dash-stats-row">
            {STATS.map((s,i) => (
              <div className="dash-stat-card" key={i}>
                <div className="dash-stat-icon">{s.icon}</div>
                <div className="dash-stat-label">{s.label}</div>
                <div className="dash-stat-value">{s.value}</div>
                <div className={`dash-stat-change${s.up?"":" down"}`}>
                  {s.up ? "▲" : "▼"} {s.change}
                </div>
              </div>
            ))}
          </div>

          {/* ── CHARTS + CREATE ── */}
          <div className="dash-content-grid">

            {/* Donut chart */}
            <div className="dash-card">
              <div className="dash-card-title">Distribution</div>
              <DonutChart data={DONUT}/>
            </div>

            {/* Bar chart */}
            <div className="dash-card">
              <div className="dash-card-title">Monthly Stats</div>
              <BarChart data={BARS} max={BAR_MAX}/>
            </div>

            {/* Create new */}
            <div className="dash-card">
              <div className="dash-card-title">
                <span>Create New</span>
                <button className="dash-view-all">View all</button>
              </div>
              <div className="dash-create-panel">
                <div className="dash-create-today">Today</div>
                {CREATE_ITEMS.map((item, i) => (
                  <div className="dash-create-item" key={i}>
                    <div className="dash-create-name">
                      <span>⊕</span>{item.name}
                    </div>
                    <span className={`dash-badge ${item.badge}`}>
                      {item.badge === "new" ? "NEW" : "DEFAULT"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── BUSINESS LISTING CARDS ── */}
          <div className="dash-bottom-row">
            {BUSINESSES.map(biz => (
              <div className="dash-biz-card" key={biz.id}>
                <div className="dash-biz-header">
                  <div className="dash-biz-title">{biz.title}</div>
                  <button className="dash-view-details">View details →</button>
                </div>
                <div className="dash-biz-subtitle">{biz.subtitle}</div>
                {biz.items.map((item, j) => (
                  <div className="dash-biz-item" key={j}>
                    <span className="dash-biz-item-name">{item.name}</span>
                    <span className="dash-biz-item-val">{item.val}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
}