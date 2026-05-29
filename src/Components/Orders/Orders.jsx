import { useState } from "react";
import "./Orders.css";

const CATEGORIES = ["Drink", "Starter", "Appetizer", "Dessert", "Main"];

const emptyForm = {
  name: "",
  ingredients: "",
  imagePreview: null,
  price: "",
};

const Orders = () => {
  const [activeCategory, setActiveCategory] = useState("Drink");
  const [form, setForm] = useState(emptyForm);
  const [notification, setNotification] = useState(null);

  const notify = (msg, type = "success") => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 2800);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () =>
      setForm((f) => ({ ...f, imagePreview: reader.result }));
    reader.readAsDataURL(file);
  };

  const handleAddMore = () => {
    if (!form.name.trim() || !form.price) {
      notify("Name and price are required.", "error");
      return;
    }
    notify(`"${form.name}" added to ${activeCategory}!`);
    setForm(emptyForm);
  };

  const handleAddOrder = () => {
    if (!form.name.trim()) {
      notify("Please enter a menu item name.", "error");
      return;
    }
    notify(`Order placed for "${form.name}"!`);
  };

  return (
    <div className="mc-root">

      {/* Decorative food background images */}
      <div className="mc-bg-left" />
      <div className="mc-bg-right" />

      {/* Notification toast */}
      {notification && (
        <div className={`mc-toast ${notification.type}`}>
          {notification.msg}
        </div>
      )}

      {/* HEADER */}
      <header className="mc-header">
        <div className="mc-logo">Miss<span>More</span></div>

        <div className="mc-header-center">
          <span className="mc-header-title">Overview</span>
        </div>

        <div className="mc-header-right">
          <button className="mc-search-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <div className="mc-divider" />
          <div className="mc-user">
            <div className="mc-user-text">
              <div className="mc-user-name">Kagabo</div>
              <div className="mc-user-role">Jacques</div>
            </div>
            <div className="mc-avatar">
              <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="19" stroke="#ccc" strokeWidth="1.5" />
                <circle cx="20" cy="15" r="7" fill="#ddd" />
                <ellipse cx="20" cy="33" rx="11" ry="8" fill="#ddd" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className="mc-body">

        {/* SIDEBAR */}
        <aside className="mc-sidebar">
          <div className="mc-step-title">
            1. Create your<br />restaurant profile
          </div>

          <div className="mc-step-sub">Restaurant information</div>
          <ul className="mc-step-list">
            <li>Restaurant name, address,<br />details, owner details</li>
          </ul>

          <div className="mc-step-sub">Restaurant Types and Timings</div>
          <ul className="mc-step-list">
            <li>
              <span className="mc-step-bold">
                2. &nbsp; Establishments &amp; Cuisine types.<br />Opening hours
              </span>
            </li>
            <li className="mc-step-li-spaced">
              <span className="mc-step-normal">Create your menu</span>
            </li>
          </ul>

          <div className="mc-step-dots">···</div>

          <ul className="mc-step-list">
            <li>Menu, Restaurant, food images</li>
          </ul>
        </aside>

        {/* MAIN */}
        <main className="mc-main">

          {/* Category tabs */}
          <div className="mc-tabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`mc-tab${activeCategory === cat ? " active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Form + Preview grid */}
          <div className="mc-grid">

            {/* FORM */}
            <div className="mc-form">
              <span className="mc-name-link">Name</span>

              <div className="mc-field">
                <label className="mc-field-label">Menu Name</label>
                <input
                  placeholder="Menu description"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                />
              </div>

              <div className="mc-field">
                <label className="mc-field-label">Ingredients</label>
                <input
                  placeholder="Image"
                  value={form.ingredients}
                  onChange={(e) => setForm((f) => ({ ...f, ingredients: e.target.value }))}
                />
              </div>

              <div className="mc-field">
                <label className="mc-field-label">Upload image</label>
                <label className="mc-upload-label">
                  {form.imagePreview
                    ? <img src={form.imagePreview} alt="preview" className="mc-upload-img" />
                    : <span className="mc-upload-text">Price</span>
                  }
                  <input
                    type="file"
                    accept="image/*"
                    className="mc-hidden-input"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>

              <div className="mc-field">
                <div className="mc-price-row">
                  <input
                    placeholder="0"
                    type="number"
                    value={form.price}
                    onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))}
                  />
                  <span className="mc-currency">RWF</span>
                </div>
              </div>

              <div className="mc-actions">
                <button className="mc-btn-add" onClick={handleAddMore}>
                  Add More
                </button>
                <button className="mc-btn-order" onClick={handleAddOrder}>
                  Add Order
                </button>
              </div>
            </div>

            {/* FOOD PREVIEW */}
            <div className="mc-preview">
              {form.imagePreview
                ? <img src={form.imagePreview} alt="Uploaded food" />
                : <img
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=700&q=80"
                    alt="Food preview"
                  />
              }
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
export default Orders;