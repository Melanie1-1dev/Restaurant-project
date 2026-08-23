import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import chef_img from "../../assets/chef.jpg";

const CITIES = ["Kigali", "Kampala", "Imena", "Arusha", "Nairobi", "Heaven"];

const scrollToHome = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const scrollToAbout = () => {
  const element = document.getElementById("home-section");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToExperience = () => {
  const element = document.getElementById("testimonial-section");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToContact = () => {
  const element = document.getElementById("footer-section");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const CATEGORIES = [
  { id: 1, name: "Pizza", count: 164, image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=400&auto=format&fit=crop" },
  { id: 2, name: "Bread", count: 42, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400&auto=format&fit=crop" },
  { id: 3, name: "Chicken", count: 112, image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=400&auto=format&fit=crop" },
  { id: 4, name: "Burger", count: 94, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&auto=format&fit=crop" },
  { id: 5, name: "Shakes", count: 32, image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=400&auto=format&fit=crop" },
  { id: 6, name: "Sandwiches", count: 45, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=400&auto=format&fit=crop" },
  { id: 7, name: "Pasta", count: 76, image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=400&auto=format&fit=crop" },
  { id: 8, name: "Desserts", count: 18, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=400&auto=format&fit=crop" }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Amir Sano",
    role: "Patient at Dental",
    text: "“MissMore has completely changed how our family orders food. The delivery track is exceptionally precise and the options are unmatched.”"
  },
  {
    id: 2,
    name: "Mell Thompson",
    role: "Independent Data Analyst",
    text: "“Bookings are seamless! I use it weekly for scheduling corporate client business lunches and discovering fresh spots around town.”"
  },
  {
    id: 3,
    name: "Cruz Rodriguez",
    role: "Product Designer",
    text: "“The design detail and clarity makes ordering effortless. The food always arrives at peak fresh quality conditions.”"
  }
];

export default function HomePage() {
  const [activeNav, setActiveNav] = useState("Home");
  const [search, setSearch] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (search.trim()) {
      alert(`Searching for: ${search}`);
    }
  }

  function handleSubscribe(e) {
    e.preventDefault();
    if (email.trim()) {
      alert(`Subscribed ${email} to MissMore updates!`);
      setEmail("");
    }
  }

  function handleCityClick(city) {
    setSearch(city);
  }

  const FacebookIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <circle cx="17" cy="7" r="1.5" fill="currentColor" />
    </svg>
  );

  const XIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25l-7.165 8.43L3.75 2.25H2.25l7.59 10.95L2.25 21.75h3.09l6.615-7.8 6.59 7.8h3.09L15.82 12l7.424-9.75z" />
    </svg>
  );

  const LinkedInIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 15.5v-9h-3v9h3zm-11 0v-9h3v9h-3zm-1-12a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" />
    </svg>
  );

  return (
    <div className="home-root">
      {/* ── HEADER ── */}
      <header className="home-header">
        <div className="home-logo">Miss<span>More</span></div>

        <nav className="home-nav">
          {["Home", "About", "Experience", "Contact"].map((item) => (
            <button
              key={item}
              className={`home-nav-link${activeNav === item ? " active" : ""}`}
              onClick={() => {
                setActiveNav(item);

                if (item === "Home") {
                  scrollToHome();
                } else if (item === "About") {
                  scrollToAbout();
                } else if (item === "Experience") {
                  scrollToExperience();
                } else if (item === "Contact") {
                  scrollToContact();
                }
              }}
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
          <button className="home-icon-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          <button className="home-icon-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 001.98 1.61h9.72a2 2 0 001.98-1.69L23 6H6" />
            </svg>
          </button>

          <button className="home-icon-btn" onClick={() => navigate("/login")}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>

          <button className="home-bell-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 01-3.46 0" />
            </svg>
          </button>
        </div>
      </header>

      {/* ── HERO SECTION ── */}
      <section className="home-hero" id="hero-section">
        <div className="home-hero-bg" />
        <div className="home-orange-circle" />
        <img src={chef_img} alt="Chef" className="home-chef-img" />

        <div className="home-hero-content">
          <div className="home-badge">
            <span className="home-badge-star">✦</span>
            Discover 2,000+ restaurants near you
          </div>

          <h1 className="home-headline">
            Find your next<br />
            <span className="orange">dining experience</span>
          </h1>

          <p className="home-subline">
            Book tables, order food, and discover the<br />
            best restaurants in your city — all in one place
          </p>

          <form className="home-search-row" onSubmit={handleSearch}>
            <div className="home-search-wrap">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                className="home-search-input"
                type="text"
                placeholder="Search restaurant, cuisines....."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button className="home-search-btn" type="submit">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              Search
            </button>
          </form>

          <div className="home-cities">
            {CITIES.map((city) => (
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

      {/* ── EXPLORE BY CATEGORY SECTION ── */}
      <section className="home-categories-section" id="home-section">
        <div className="categories-header-row">
          <div className="categories-title-block">
            <h2 className="categories-main-heading">Explore by Category</h2>
            <p className="categories-sub-heading">Wherever your mood takes you, get going via options.</p>
          </div>
          <button className="categories-all-btn">
            Browse Categories <span>→</span>
          </button>
        </div>

        <div className="categories-layout-grid">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="category-display-card"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.75)), url(${category.image})`
              }}
            >
              <div className="category-meta-info">
                <h3 className="category-card-title">{category.name}</h3>
                <p className="category-card-count">{category.count} Options</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CLIENT TESTIMONIALS SECTION ── */}
      <section className="home-testimonials-section" id="testimonial-section">
        <span className="testimonials-mini-tag">CLIENT TESTIMONIALS</span>
        <h2 className="testimonials-main-title">What Our Clients Say</h2>

        <div className="testimonials-cards-wrapper">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="testimonial-opinion-card">
              <div className="testimonial-stars-row">
                {"★★★★★".split("").map((star, index) => (
                  <span key={index} className="star-icon">{star}</span>
                ))}
              </div>
              <p className="testimonial-body-text">{item.text}</p>
              <div className="testimonial-user-row">
                <div className="testimonial-avatar-placeholder" />
                <div className="testimonial-user-meta">
                  <h4 className="testimonial-user-name">{item.name}</h4>
                  <p className="testimonial-user-role">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FULL FOOTER ── */}
      <footer className="home-footer" id="footer-section">
        <div className="footer-container">
          {/* Main Footer Content */}
          <div className="footer-main">
            {/* Left - Brand */}
            <div className="footer-brand">
              <div className="home-logo footer-logo">Miss<span>More</span></div>
              <p className="footer-description">
                Delivering happy, delicious food with exceptional service.
                Your satisfaction is our priority. We combine tradition and modernity in every delivery.
              </p>

              {/* Rating */}
              <div className="footer-rating">
                <div className="rating-circle">4.8/5</div>
                <div>
                  <div className="rating-stars">★★★★★</div>
                  <p>Based on 1,234 customer reviews</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="footer-column">
              <h4>BENEFITS</h4>
              <ul>
                <li>🚀 Order Online Now</li>
                <li>📍 Track Reservation</li>
                <li>🍽️ Catering Booking</li>
                <li>🚚 Daily Delivery Service</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h4>QUICK LINKS</h4>
              <ul>
                <li><a href="#home-section">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="footer-column">
              <h4>CONTACT US</h4>
              <ul>
                <li>📍 1234 Main Street, Kigali, Rwanda</li>
                <li>📞 +250 788 123 456</li>
                <li>✉️ hello@missmore.rw</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="footer-newsletter">
              <h4>SUBSCRIBE TO NEWSLETTER</h4>
              <form className="newsletter-action-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Your Email address..."
                  className="newsletter-email-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="newsletter-submit-btn">Subscribe</button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <div className="footer-social">
              <a href="#" aria-label="Facebook" className="social-icon">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Instagram" className="social-icon">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="X (Twitter)" className="social-icon">
                <XIcon />
              </a>
              <a href="#" aria-label="LinkedIn" className="social-icon">
                <LinkedInIcon />
              </a>
            </div>

            <div className="footer-apps">
              <a href="#" className="app-badge google-play">
                GET IT ON<br /><strong>Google Play</strong>
              </a>
              <a href="#" className="app-badge app-store">
                Download on the<br /><strong>App Store</strong>
              </a>
            </div>

            <div className="footer-copyright">
              © 2026 MissMore. All rights reserved.<br />
              Privacy Policy | Terms of Service
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}