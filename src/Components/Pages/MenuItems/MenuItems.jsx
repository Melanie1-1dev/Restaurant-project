import React, { useState, useMemo } from 'react';
import './MenuItems.css';
import logo from '../../../assets/logo.jpg';
import { Link } from 'react-router-dom';
import {
  LayoutGrid,
  LayoutDashboard,
  ShoppingBag,
  UtensilsCrossed,
  Users,
  Settings,
  Search,
  Bell,
  HelpCircle,
  Plus,
  X,
  SlidersHorizontal,
  Grid,
  Clock,
  Pencil,
  Trash2,
  FolderPlus,
  BarChart3
} from 'lucide-react';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=500&auto=format&fit=crop';

const initialItems = [
  {
    id: 1,
    name: 'Grand Truffle Burger',
    description: 'Prime beef patty, truffle mayo, caramelized onions, Swiss cheese.',
    price: '8,500 RWF',
    time: '15-20 min',
    status: 'ACTIVE',
    category: 'Burgers',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Rustic Margherita',
    description:
      'San Marzano tomatoes, buffalo mozzarella, fresh basil, extra virgin olive oil.',
    price: '12,000 RWF',
    time: '12 min',
    status: 'ACTIVE',
    category: 'Pizza',
    image:
      'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Creamy Alfredo Shrimp',
    description: 'House-made fettuccine, parmesan cream sauce, garlic butter shrimp.',
    price: '10,500 RWF',
    time: '18 min',
    status: 'HIDDEN',
    category: 'Sides',
    image:
      'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Blueberry Stack',
    description: 'Fluffy buttermilk pancakes with fresh blueberries and maple syrup.',
    price: '6,500 RWF',
    time: '10 min',
    status: 'ACTIVE',
    category: 'Sides',
    image:
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Sushi Selection',
    description: "Chef's choice of 12 premium nigiri and maki rolls.",
    price: '15,000 RWF',
    time: '25 min',
    status: 'OUT OF STOCK',
    category: 'Sides',
    image:
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'Tropical Passion',
    description: 'Fresh passion fruit, lime juice, mint, and a splash of sparkling water.',
    price: '4,500 RWF',
    time: '5 min',
    status: 'ACTIVE',
    category: 'Drinks',
    image:
      'https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 7,
    name: 'Avocado Quinoa Bowl',
    description:
      'Organic quinoa, fresh avocado, cherry tomatoes, and lemon-tahini dressing.',
    price: '7,800 RWF',
    time: '8 min',
    status: 'ACTIVE',
    category: 'Sides',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=500&auto=format&fit=crop'
  }
];

const emptyForm = {
  name: '',
  description: '',
  price: '',
  time: '',
  status: 'ACTIVE',
  category: 'Burgers',
  image: ''
};

const MenuItems = () => {
  const [menuItems, setMenuItems] = useState(initialItems);
  const [categories, setCategories] = useState(['Burgers', 'Pizza', 'Sides', 'Drinks']);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Modals
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isReportsModalOpen, setIsReportsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null); // null = add mode

  const [formData, setFormData] = useState(emptyForm);
  const [newCategoryName, setNewCategoryName] = useState('');

  // ---------- Helpers ----------
  const formatPrice = (value) => {
    if (!value) return '';
    const cleaned = value.replace(/[^\d,]/g, '').trim();
    if (!cleaned) return value;
    return cleaned.toLowerCase().includes('rwf') ? value : `${cleaned} RWF`;
  };

  const parsePriceNumber = (priceStr) => {
    if (!priceStr) return 0;
    const num = parseInt(String(priceStr).replace(/[^\d]/g, ''), 10);
    return isNaN(num) ? 0 : num;
  };

  // ---------- Filtered list ----------
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === 'All' || item.category === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        (item.description || '').toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [menuItems, activeCategory, searchQuery]);

  // ---------- Metrics ----------
  const totalItems = menuItems.length;
  const activeCount = menuItems.filter((i) => i.status === 'ACTIVE').length;
  const outOfStockCount = menuItems.filter((i) => i.status === 'OUT OF STOCK').length;
  const hiddenCount = menuItems.filter((i) => i.status === 'HIDDEN').length;
  const totalValue = menuItems.reduce((sum, i) => sum + parsePriceNumber(i.price), 0);

  // ---------- Form handlers ----------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const openAddModal = () => {
    setEditingItem(null);
    setFormData({
      ...emptyForm,
      category: categories[0] || 'Burgers'
    });
    setIsItemModalOpen(true);
  };

  const openEditModal = (item) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      description: item.description || '',
      price: item.price,
      time: item.time || '',
      status: item.status,
      category: item.category || categories[0] || 'Burgers',
      image: item.image || ''
    });
    setIsItemModalOpen(true);
  };

  const closeItemModal = () => {
    setIsItemModalOpen(false);
    setEditingItem(null);
    setFormData(emptyForm);
  };

  const handleSaveItem = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.price.trim()) {
      alert('Name and Price are required');
      return;
    }

    const payload = {
      name: formData.name.trim(),
      description: formData.description.trim() || 'No description provided',
      price: formatPrice(formData.price),
      time: formData.time.trim() || '10-15 min',
      status: formData.status,
      category: formData.category || categories[0] || 'Uncategorized',
      image: formData.image.trim() || DEFAULT_IMAGE
    };

    if (editingItem) {
      setMenuItems((prev) =>
        prev.map((item) =>
          item.id === editingItem.id ? { ...item, ...payload } : item
        )
      );
    } else {
      setMenuItems((prev) => [
        {
          id: Date.now(),
          ...payload
        },
        ...prev
      ]);
    }

    closeItemModal();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setMenuItems((prev) => prev.filter((item) => item.id !== id));
    }
  };

  // ---------- Category ----------
  const openCategoryModal = () => {
    setNewCategoryName('');
    setIsCategoryModalOpen(true);
  };

  const closeCategoryModal = () => {
    setIsCategoryModalOpen(false);
    setNewCategoryName('');
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    const name = newCategoryName.trim();
    if (!name) {
      alert('Category name is required');
      return;
    }
    if (categories.some((c) => c.toLowerCase() === name.toLowerCase())) {
      alert('This category already exists');
      return;
    }
    setCategories((prev) => [...prev, name]);
    setActiveCategory(name);
    closeCategoryModal();
  };

  // ---------- Reports ----------
  const openReports = () => setIsReportsModalOpen(true);
  const closeReports = () => setIsReportsModalOpen(false);

  return (
    <div className="dashboard-container">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="brand">
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <div className="home-logo">
              <img src={logo} alt="Fast Food Logo" className="logo-img" />
            </div>
          </Link>
          <p className="brand-sub">Kitchen Management</p>
        </div>

        <nav className="nav-menu">
          <Link to="/home" className="nav-link-wrapper">
            <div className="nav-item">
              <LayoutGrid size={20} />
              <span>Home</span>
            </div>
          </Link>

          <Link to="/dashbord" className="nav-link-wrapper">
            <div className="nav-item">
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </div>
          </Link>

          <Link to="/new-order" className="nav-link-wrapper">
            <div className="nav-item">
              <ShoppingBag size={20} />
              <span>Orders</span>
            </div>
          </Link>

          <div className="nav-item active">
            <UtensilsCrossed size={20} />
            <span>Menu</span>
          </div>

          <Link to="/an-other-order" className="nav-link-wrapper">
            <div className="nav-item">
              <Users size={20} />
              <span>Customers</span>
            </div>
          </Link>

          <Link to="/profile-dashboard" className="nav-link-wrapper">
            <div className="nav-item">
              <Settings size={20} />
              <span>Settings</span>
            </div>
          </Link>
        </nav>

        <div className="revenue-card">
          <span className="revenue-label">Today's Revenue</span>
          <h2 className="revenue-amount">
            45,000 <span className="currency">RWF</span>
          </h2>
          <span className="revenue-stats">↗ 12% from yesterday</span>
          <button className="view-reports-btn" onClick={openReports}>
            View Reports
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">
        <header className="top-header">
          <div className="search-container">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search menu items, ingredients..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="header-actions">
            <button className="icon-btn" type="button">
              <Bell size={20} />
              <span className="notification-dot"></span>
            </button>
            <button className="icon-btn" type="button">
              <HelpCircle size={20} />
            </button>
            <div className="user-profile">
              <div className="user-info">
                <span className="user-name">Kagabo Jacques</span>
                <span className="user-role">Admin</span>
              </div>
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
                alt="Profile"
                className="profile-avatar"
              />
            </div>
          </div>
        </header>

        <div className="page-title-section">
          <h1 className="page-title">Menu Management</h1>
          <button className="add-item-btn" onClick={openAddModal} type="button">
            <Plus size={20} />
            <span>Add New Item</span>
          </button>
        </div>

        {/* Metrics */}
        <div className="blue-blueprint-wrapper outline-metrics">
          <section className="metrics-summary">
            <div className="metric-card">
              <div className="metric-icon-wrapper total-items">
                <ShoppingBag size={20} />
              </div>
              <div className="metric-details">
                <span className="metric-label">TOTAL ITEMS</span>
                <span className="metric-value">{totalItems}</span>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon-wrapper active-items">
                <span className="check-icon">✓</span>
              </div>
              <div className="metric-details">
                <span className="metric-label">ACTIVE</span>
                <span className="metric-value">{activeCount}</span>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon-wrapper out-of-stock-items">
                <span className="ban-icon">⊘</span>
              </div>
              <div className="metric-details">
                <span className="metric-label">OUT OF STOCK</span>
                <span className="metric-value">{outOfStockCount}</span>
              </div>
            </div>
          </section>
        </div>

        {/* Menu Grid */}
        <div className="blue-blueprint-wrapper outline-content-canvas">
          <div className="filter-toolbar">
            <div className="category-tabs">
              <button
                className={`tab ${activeCategory === 'All' ? 'active' : ''}`}
                onClick={() => setActiveCategory('All')}
                type="button"
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`tab ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                  type="button"
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="toolbar-actions">
              <button className="toolbar-btn" type="button" title="Filters">
                <SlidersHorizontal size={18} />
              </button>
              <button className="toolbar-btn active-view" type="button" title="Grid view">
                <Grid size={18} />
              </button>
            </div>
          </div>

          <section className="menu-grid">
            {filteredItems.length === 0 ? (
              <div className="empty-state">
                <p>No items found{searchQuery ? ` for “${searchQuery}”` : ''}.</p>
                <button className="add-item-btn" onClick={openAddModal} type="button">
                  <Plus size={18} />
                  Add Item
                </button>
              </div>
            ) : (
              filteredItems.map((item) => (
                <div className="menu-card" key={item.id}>
                  <div className="card-image-container">
                    <img
                      src={item.image || DEFAULT_IMAGE}
                      alt={item.name}
                      className="card-image"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = DEFAULT_IMAGE;
                      }}
                    />
                    <span
                      className={`status-badge ${item.status
                        .toLowerCase()
                        .replace(/\s+/g, '-')}`}
                    >
                      {item.status}
                    </span>
                    <span className="item-price">{item.price}</span>
                  </div>
                  <div className="card-body">
                    <h3 className="item-title">{item.name}</h3>
                    <p className="item-description">{item.description}</p>
                    <div className="card-footer">
                      <span className="prep-time">
                        <Clock size={14} /> {item.time}
                      </span>
                      <div className="item-actions">
                        <button
                          className="action-btn edit-btn"
                          onClick={() => openEditModal(item)}
                          type="button"
                          title="Edit"
                        >
                          <Pencil size={16} />
                        </button>
                        <button
                          className="action-btn delete-btn"
                          onClick={() => handleDelete(item.id)}
                          type="button"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}

            <div
              className="add-category-card"
              onClick={openCategoryModal}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openCategoryModal()}
            >
              <div className="add-category-content">
                <div className="plus-icon-container">
                  <FolderPlus size={24} />
                </div>
                <h3>New Category</h3>
                <p>ORGANIZE YOUR MENU WITH FOLDERS</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* ==================== ADD / EDIT ITEM MODAL ==================== */}
      {isItemModalOpen && (
        <div className="modal-overlay" onClick={closeItemModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editingItem ? 'Edit Menu Item' : 'Add New Menu Item'}</h2>
              <button className="close-btn" onClick={closeItemModal} type="button">
                <X size={22} />
              </button>
            </div>

            <form onSubmit={handleSaveItem} className="add-item-form">
              <div className="form-group">
                <label>Item Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Spicy Chicken Burger"
                  required
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Short description of the item..."
                  rows={3}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Price *</label>
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="e.g. 7500 or 7,500 RWF"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Prep Time</label>
                  <input
                    type="text"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    placeholder="e.g. 15 min"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="HIDDEN">HIDDEN</option>
                    <option value="OUT OF STOCK">OUT OF STOCK</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="https://..."
                />
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={closeItemModal}
                >
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  {editingItem ? (
                    <>
                      <Pencil size={18} />
                      Save Changes
                    </>
                  ) : (
                    <>
                      <Plus size={18} />
                      Add Item
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ==================== NEW CATEGORY MODAL ==================== */}
      {isCategoryModalOpen && (
        <div className="modal-overlay" onClick={closeCategoryModal}>
          <div className="modal-content modal-sm" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>New Category</h2>
              <button className="close-btn" onClick={closeCategoryModal} type="button">
                <X size={22} />
              </button>
            </div>

            <form onSubmit={handleAddCategory} className="add-item-form">
              <div className="form-group">
                <label>Category Name *</label>
                <input
                  type="text"
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  placeholder="e.g. Desserts, Salads, Breakfast..."
                  autoFocus
                  required
                />
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={closeCategoryModal}
                >
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  <FolderPlus size={18} />
                  Create Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ==================== REPORTS MODAL ==================== */}
      {isReportsModalOpen && (
        <div className="modal-overlay" onClick={closeReports}>
          <div className="modal-content modal-reports" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>
                <BarChart3 size={22} style={{ marginRight: 8, verticalAlign: 'middle' }} />
                Menu Reports
              </h2>
              <button className="close-btn" onClick={closeReports} type="button">
                <X size={22} />
              </button>
            </div>

            <div className="reports-body">
              <div className="reports-grid">
                <div className="report-card">
                  <span className="report-label">Total Menu Items</span>
                  <span className="report-value">{totalItems}</span>
                </div>
                <div className="report-card">
                  <span className="report-label">Active</span>
                  <span className="report-value green">{activeCount}</span>
                </div>
                <div className="report-card">
                  <span className="report-label">Hidden</span>
                  <span className="report-value muted">{hiddenCount}</span>
                </div>
                <div className="report-card">
                  <span className="report-label">Out of Stock</span>
                  <span className="report-value red">{outOfStockCount}</span>
                </div>
                <div className="report-card full">
                  <span className="report-label">Combined Menu Value</span>
                  <span className="report-value">
                    {totalValue.toLocaleString()} RWF
                  </span>
                </div>
              </div>

              <h3 className="reports-subtitle">By Category</h3>
              <ul className="category-breakdown">
                {categories.map((cat) => {
                  const count = menuItems.filter((i) => i.category === cat).length;
                  return (
                    <li key={cat}>
                      <span>{cat}</span>
                      <span className="count">{count} item{count !== 1 ? 's' : ''}</span>
                    </li>
                  );
                })}
              </ul>

              <p className="reports-note">
                Today’s revenue shown in the sidebar is a demo figure (45,000 RWF).
                Connect real order data for live reports.
              </p>
            </div>

            <div className="form-actions" style={{ padding: '0 24px 24px' }}>
              <button type="button" className="submit-btn" onClick={closeReports}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItems;