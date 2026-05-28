import { useState } from "react";
import "./RestaurantPage.css";
import { Link } from "react-router-dom";
const categories = ["Drink", "Starter", "Appetizer", "Dessert", "Main"];

const steps = [
  {
    number: "01",
    title: "Create your restaurant profile",
    items: [
      { label: "Restaurant information", sub: "Restaurant name, address, details, owner details" },
      { label: "Restaurant Types and Timings", sub: "Establishments & Cuisine types. Opening hours" },
    ],
  },
  {
    number: "02",
    title: "Create your menu",
    items: [
      { label: "Menu, Restaurant, food images", sub: null },
    ],
  },
];

export default function MissMore() {
  const [activeCategory, setActiveCategory] = useState("Starter");
  const [menuName, setMenuName] = useState("");
  const [menuDescription, setMenuDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [price, setPrice] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="mm-root">
      {/* ── LEFT PANEL ── */}
      <aside className="mm-sidebar">
        <div className="mm-sidebar__bg" />
        <div className="mm-sidebar__overlay" />

        <div className="mm-sidebar__content">
          <div className="mm-logo">
            Miss<span>More</span>
          </div>

          <div className="mm-steps">
            {steps.map((step) => (
              <div key={step.number} className="mm-step">
                <div className="mm-step__number">{step.number}</div>
                <div className="mm-step__body">
                  <h3 className="mm-step__title">{step.title}</h3>
                  {step.items.map((item, i) => (
                    <div key={i} className="mm-step__item">
                      <span className="mm-step__item-label">{item.label}</span>
                      {item.sub && (
                        <p className="mm-step__item-sub">{item.sub}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mm-sidebar__footer">
            <div className="mm-avatar-row">
              <div className="mm-avatar-dot" />
              <span>Upload your restaurant images to get started</span>
            </div>
          </div>
        </div>
      </aside>

      {/* ── MAIN PANEL ── */}
      <main className="mm-main">
        {/* Top bar */}
        <header className="mm-header">
          <nav className="mm-nav">
            <span className="mm-nav__label">Overview</span>
            <div className="mm-nav__divider" />
            <div className="mm-search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </div>
          </nav>

          <div className="mm-user">
            <div className="mm-user__info">
              <span className="mm-user__name">Kagabo</span>
              <span className="mm-user__sub">Jacques</span>
            </div>
            <div className="mm-user__avatar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
            </div>
          </div>
        </header>

        {/* Category tabs */}
        <div className="mm-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`mm-tab ${activeCategory === cat ? "mm-tab--active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Form card */}
        <div className="mm-card">
          <div className="mm-card__header">
            <h2 className="mm-card__title">
              <span className="mm-card__title-icon">🍽</span>
              {activeCategory} Menu
            </h2>
            <span className="mm-card__badge">New Item</span>
          </div>

          <div className="mm-form">
            {/* Row 1 */}
            <div className="mm-form__row mm-form__row--2col">
              <div className="mm-field">
                <label className="mm-field__label">Menu Name</label>
                <input
                  className="mm-field__input"
                  placeholder="e.g. Grilled Salmon"
                  value={menuName}
                  onChange={(e) => setMenuName(e.target.value)}
                />
              </div>
              <div className="mm-field">
                <label className="mm-field__label">Description</label>
                <input
                  className="mm-field__input"
                  placeholder="Brief description of the dish"
                  value={menuDescription}
                  onChange={(e) => setMenuDescription(e.target.value)}
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="mm-form__row mm-form__row--2col">
              <div className="mm-field">
                <label className="mm-field__label">Ingredients</label>
                <textarea
                  className="mm-field__input mm-field__textarea"
                  placeholder="List key ingredients…"
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                />
              </div>

              {/* Image upload */}
              <div className="mm-field">
                <label className="mm-field__label">Image</label>
                <label className="mm-upload" htmlFor="img-upload">
                  {imagePreview ? (
                    <img src={imagePreview} alt="preview" className="mm-upload__preview" />
                  ) : (
                    <>
                      <div className="mm-upload__icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M12 16V8m0 0-3 3m3-3 3 3" />
                          <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                        </svg>
                      </div>
                      <span className="mm-upload__text">Click to upload image</span>
                      <span className="mm-upload__hint">PNG, JPG up to 5MB</span>
                    </>
                  )}
                  <input id="img-upload" type="file" accept="image/*" hidden onChange={handleImageUpload} />
                </label>
              </div>
            </div>

            {/* Row 3 — price */}
            <div className="mm-form__row mm-form__row--price">
              <div className="mm-field mm-field--price">
                <label className="mm-field__label">Price</label>
                <div className="mm-price-input">
                  <span className="mm-price-input__currency">RWF</span>
                  <input
                    className="mm-field__input mm-price-input__field"
                    type="number"
                    placeholder="0"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mm-actions">
         <Link to="/Restaurant-Owner"> <button className="mm-btn mm-btn--primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 5v14M5 12h14" />
              </svg>
              Add More
            </button> </Link>
           <Link to="/orders"> <button className="mm-btn mm-btn--outline">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 1 4 0M9 5h6" />
              </svg>
              Add Order
            </button> </Link>
          </div>
        </div>

        {/* Decorative food image */}
        <div className="mm-deco-image">
          <div className="mm-deco-image__ring mm-deco-image__ring--1" />
          <div className="mm-deco-image__ring mm-deco-image__ring--2" />
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=320&h=320&fit=crop&crop=center"
            alt="food"
            className="mm-deco-image__img"
          />
        </div>
      </main>
    </div>
  );
}