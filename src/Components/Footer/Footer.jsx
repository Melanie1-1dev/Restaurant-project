// Components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';
import { 
  Truck, 
  Calendar, 
  ShieldCheck, 
  HeartHandshake,
  Mail
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="dashboard-global-footer">
      {/* Top Value Propositions Row */}
      <div className="footer-props-row">
        <div className="prop-item">
          <div className="prop-icon-orange"><Truck size={20} /></div>
          <div>
            <h4>Fast Delivery</h4>
            <p>On-time at your door</p>
          </div>
        </div>
        <div className="prop-item">
          <div className="prop-icon-orange"><Calendar size={20} /></div>
          <div>
            <h4>Easy Reservations</h4>
            <p>Book your table instantly</p>
          </div>
        </div>
        <div className="prop-item">
          <div className="prop-icon-orange"><ShieldCheck size={20} /></div>
          <div>
            <h4>Secure Payments</h4>
            <p>100% safe & secure</p>
          </div>
        </div>
        <div className="prop-item">
          <div className="prop-icon-orange"><HeartHandshake size={20} /></div>
          <div>
            <h4>24/7 Support</h4>
            <p>We're here to help</p>
          </div>
        </div>
      </div>

      {/* Middle Main Grid Columns */}
      <div className="footer-main-grid">
        {/* Brand Info Column */}
        <div className="footer-brand-col">
          <h2 className="footer-logo">MissMori</h2>
          <p className="brand-description">
            Delivering fresh, delicious food with exceptional service. Your satisfaction is our top priority. We combine traditional recipes with modern efficiency.
          </p>
          <div className="rating-badge-card">
            <div className="avatar-placeholder-food">🥗</div>
            <div>
              <div className="stars-orange">★★★★★</div>
              <p className="rating-text"><strong>4.8 / 5</strong></p>
              <p className="rating-sub text-muted">2,500+ Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Services Link List */}
        <div className="footer-links-col">
          <h3>Services</h3>
          <ul>
            <li><a href="#ordering">Online Ordering</a></li>
            <li><a href="#reservation">Table Reservation</a></li>
            <li><a href="#catering">Catering Services</a></li>
            <li><a href="#event">Event Booking</a></li>
            <li><a href="#delivery">Delivery Service</a></li>
          </ul>
        </div>

        {/* Quick Links List */}
        <div className="footer-links-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#orders">Orders</a></li>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Info & Newsletter */}
        <div className="footer-links-col contact-newsletter-col">
          <h3>Contact Us</h3>
          <p className="contact-info-text">📍 123 Food Street, Flavor Town, Culinary City, FC 12345</p>
          <p className="contact-info-text">📞 +1 234 567 8900</p>
          <p className="contact-info-text">✉️ info@missmorirestaurant.com</p>

          <div className="newsletter-box">
            <h4>Subscribe to Newsletter</h4>
            <p className="text-muted">Get exclusive offers, chef's recipes, and weekly updates.</p>
            <div className="newsletter-input-group">
              <input type="email" placeholder="Enter your email" />
              <button className="subscribe-btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="footer-legal-bar">
        <p className="copyright-text">&copy; 2026 MissMori Restaurant Management App. All Rights Reserved.</p>
        <div className="legal-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
          <a href="#cookie">Cookie Policy</a>
          <a href="#sitemap">Sitemap</a>
          <a href="#help">Help Center</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;