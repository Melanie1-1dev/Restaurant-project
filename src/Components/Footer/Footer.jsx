import react from "react";
import "./Footer.css";

/* ── data ─────────────────────────────────────── */
const ABOUT_ITEMS = [
  "Fresh & Quality Food",
  "Best Customer Service",
  "Fast Delivery",
  "Delicious Meals",
  "Clean Environment",
  "Affordable Prices",
  "Memorable Experience",
  "Trusted Restaurant",
  "Taste & Quality",
  "Customer Satisfaction",
];

const SERVICES = [
  "Dine-in service",
  "Take-away service",
  "Food delivery service",
  "Special Food Options",
  "Digital Services",
  "Extra Convenience Services",
  "Event & Special Occasion Services",
];

const PHONES = ["+250783450375", "+250728881801", "+250783680821"];

const SOCIALS = [
  { icon: "", platform: "Instagram", handle: "Miss More" },
  { icon: "", platform: "TikTok",    handle: "Miss More" },
];

/* ── component ────────────────────────────────── */
export default function Footer() {
  return (
    <footer className="footer-root">

      {/* ── FOOD IMAGES BANNER ── */}
      <div className="footer-images">

        <div className="footer-img-left">
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80"
            alt="Taco food"
          />
        </div>

        <div className="footer-img-center">
          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80"
            alt="Burger"
          />
        </div>

        <div className="footer-img-right">
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80"
            alt="Coffee"
          />
        </div>
      </div>

      {/* ── THREE COLUMNS ── */}
      <div className="footer-content">

        {/* About us */}
        <div className="footer-col">
          <div className="footer-col-title">About us</div>
          <ul className="footer-about-list">
            {ABOUT_ITEMS.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Services provided */}
        <div className="footer-col">
          <div className="footer-col-title">Services provided</div>
          <ul className="footer-services-list">
            {SERVICES.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>

        {/* Contact us */}
        <div className="footer-col footer-contact-col">
          <div className="footer-col-title">Contact us</div>
          <ul className="footer-contact-list">

            {/* Phone numbers */}
            {PHONES.map((phone, i) => (
              <li className="footer-contact-item" key={i}>
                <div className="footer-contact-icon">📞</div>
                <div className="footer-contact-text">
                  <span>{phone}</span>
                </div>
              </li>
            ))}

            {/* Social media */}
            {SOCIALS.map((s, i) => (
              <li className="footer-contact-item" key={i}>
                <div className="footer-contact-icon">{s.icon}</div>
                <div className="footer-social-name">
                  {s.platform} —&nbsp;
                  <span className="footer-social-handle">{s.handle}</span>
                </div>
              </li>
            ))}

          </ul>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="footer-bottom">
        <p className="footer-bottom-text">
          @2026 All rights Are Reserved .&nbsp;
          <span>#einaleM</span>
        </p>
      </div>

    </footer>
  );
}