import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const CITIES = ["Kigali", "Kampala", "Imena", "Arusha", "Nairobi", "Heaven"];

export default function HomePage() {
  const [activeNav, setActiveNav] = useState("Home");
  const [search,    setSearch]    = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (search.trim()) {
      alert(`Searching for: ${search}`);
    }
  }

  function handleCityClick(city) {
    setSearch(city);
  }

  return (
    <div className="home-root">

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
            onClick={() => navigate("/dashboard")}
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

      {/* ── HERO ── */}
      <section className="home-hero">
        {/* dark food background */}
        <div className="home-hero-bg" />

        {/* orange circle right */}
        <div className="home-orange-circle" />

        {/* chef image */}
        <img
          src="https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=600&q=80"
          alt="Chef"
          className="home-chef-img"
        />

        {/* content */}
        <div className="home-hero-content">

          {/* badge */}
          <div className="home-badge">
            <span className="home-badge-star">✦</span>
            Discover 2,000+ restaurants near you
          </div>

          {/* headline */}
          <h1 className="home-headline">
            Find your next<br />
            <span className="orange">dining experience</span>
          </h1>

          {/* subline */}
          <p className="home-subline">
            Book tables, order food, and discover the<br />
            best restaurants in your city — all in one place
          </p>

          {/* search */}
          <form className="home-search-row" onSubmit={handleSearch}>
            <div className="home-search-wrap">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                className="home-search-input"
                type="text"
                placeholder="Search restaurant, cuisines....."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <button className="home-search-btn" type="submit">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              Search
            </button>
          </form>

          {/* cities */}
          <div className="home-cities">
            {CITIES.map(city => (
              <button
                key={city}
                className="home-city-pill"
                onClick={() => handleCityClick(city)}
              >
                {city}
              </button>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}