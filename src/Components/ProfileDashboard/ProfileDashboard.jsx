import React, { useState, useRef } from 'react';
import { Link } from 'lucide-react';
import logo from '../../assets/logo.jpg';  // ← your new logo
import { 
  LayoutDashboard, 
  ShoppingBag, 
  UtensilsCrossed, 
  User, 
  Settings, 
  ShieldCheck, 
  LogOut, 
  Bell, 
  HelpCircle, 
  Globe, 
  Coins, 
  Palette, 
  ShieldAlert, 
  Smartphone, 
  KeyRound, 
  ChevronRight, 
  MapPin, 
  Briefcase, 
  Pencil,
  ArrowLeft,
  CheckCircle2,
  X,
  Laptop,
  Trash2,
  Lock
} from 'lucide-react';
import './ProfileDashboard.css';

export default function ProfileDashboard() {
  // Navigation / View Management States
  const [activeTab, setActiveTab] = useState('Profile');
  const [currentSubPage, setCurrentSubPage] = useState(null); // 'Language' | 'Currencies' | 'Appearance' | 'Security' | 'Devices' | 'Password'
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  // User Identity Profile States
  const [userProfile, setUserProfile] = useState({
    name: 'Hadi jafrai',
    email: 'hadijafari.official@gmail.com',
    role: 'Product designer',
    location: 'Madrid, Spain',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'
  });

  // Global Interactive Settings Configuration States
  const [selectedLanguage, setSelectedLanguage] = useState('English (US)');
  const [selectedCurrency, setSelectedCurrency] = useState('USD - Dollar');
  const [themeMode, setThemeMode] = useState('Light');
  const [twoFactorAuth, setTwoFactorAuth] = useState(true);
  const [toastMessage, setToastMessage] = useState('');

  // Password Update Inputs Form State
  const [passwordForm, setPasswordForm] = useState({ current: '', newPass: '', confirm: '' });

  // Manage Active Device Sessions States List
  const [activeSessions, setActiveSessions] = useState([
    { id: 1, type: 'MacBook Pro', location: 'Madrid, Spain', activeNow: true },
    { id: 2, type: 'iPhone 15 Pro Max', location: 'Paris, France', activeNow: false }
  ]);

  // Document File Input Reference Anchor
  const fileInputRef = useRef(null);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  // Profile Image File Selection Reader Event Handler
  const handleAvatarFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please choose a valid image structure file protocol type.');
        return;
      }
      const runtimeBlobUrl = URL.createObjectURL(file);
      setUserProfile(prev => ({ ...prev, avatarUrl: runtimeBlobUrl }));
      triggerToast('Profile image updated successfully.');
    }
  };

  // Profile Information Updates Submission Change Handler
  const handleProfileFormChange = (e) => {
    const { name, value } = e.target;
    setUserProfile(prev => ({ ...prev, [name]: value }));
  };

  // Password Submodule Interactivity Verification Check Handler
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (!passwordForm.current || !passwordForm.newPass || !passwordForm.confirm) {
      alert('All structural password parameter form slots are required.');
      return;
    }
    if (passwordForm.newPass !== passwordForm.confirm) {
      alert('Your new passwords do not match validation tests.');
      return;
    }
    triggerToast('Account password reassigned successfully.');
    setPasswordForm({ current: '', newPass: '', confirm: '' });
    setCurrentSubPage(null);
  };

  // Terminate Device Session Node Event Logic Handler
  const terminateSessionId = (id) => {
    setActiveSessions(prev => prev.filter(session => session.id !== id));
    triggerToast('Active hardware platform credentials cleared.');
  };

  const settingsCards = [
    { id: 'Language', icon: <Globe className="icon-amber" />, title: 'Language', subtitle: selectedLanguage },
    { id: 'Currencies', icon: <Coins className="icon-amber" />, title: 'Currencies', subtitle: selectedCurrency },
    { id: 'Appearance', icon: <Palette className="icon-amber" />, title: 'Appearance', subtitle: `System ${themeMode}` },
    { id: 'Security', icon: <ShieldAlert className="icon-amber" />, title: 'Application Security', subtitle: twoFactorAuth ? '2FA Enabled' : '2FA Disabled' },
    { id: 'Devices', icon: <Smartphone className="icon-amber" />, title: 'Manage Devices', subtitle: `${activeSessions.length} active sessions` },
    { id: 'Password', icon: <KeyRound className="icon-amber" />, title: 'Change Password', subtitle: 'Modify current safety hashes' },
  ];

  return (
    <div className={`dashboard-container ${themeMode === 'Dark' ? 'dark-theme' : ''}`}>
      
      {/* Hidden Native File Input Wrapper */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleAvatarFileChange} 
        accept="image/*" 
        style={{ display: 'none' }} 
      />

      {/* Global Toast Alert Notification System Bar */}
      {toastMessage && (
        <div className="toast-notification">
          <CheckCircle2 size={18} />
          <span>{toastMessage}</span>
          <button className="close-toast" onClick={() => setToastMessage('')}><X size={14} /></button>
        </div>
      )}

      {/* --- TOP NAVBAR --- */}
      <header className="navbar">
          {/* Logo */}
                <div className="home-logo">
                  <img src={logo} alt="Fast Food Logo" className="logo-img" />
                </div>
        <nav className="navbar-links">
          {['Overview', 'Orders', 'Menu', 'Profile'].map((item) => (
            <button 
              key={item} 
              onClick={() => { setActiveTab(item); setCurrentSubPage(null); setIsEditingProfile(false); }}
              className={`nav-link ${activeTab === item ? 'active' : ''}`}
            >
              {item}
            </button>
          ))}
        </nav>
        <div className="navbar-actions">
          <button className="icon-button relative" onClick={() => triggerToast("All live networks clear.")}><Bell size={20} /><span className="notification-badge"></span></button>
          <button className="icon-button" onClick={() => triggerToast("Loading integrated user guide application document maps...")}><HelpCircle size={20} /></button>
          <div className="user-avatar-wrapper">
            <img src={userProfile.avatarUrl} alt="User profile" className="avatar-sm" />
          </div>
        </div>
      </header>

      <div className="layout-body">
        
        {/* --- SIDEBAR --- */}
        <aside className="sidebar">
          <div className="sidebar-menu-group">
            <div className="menu-links">
              {[
                { name: 'Overview', icon: <LayoutDashboard size={16} /> },
                { name: 'Orders', icon: <ShoppingBag size={16} /> },
                { name: 'Menu', icon: <UtensilsCrossed size={16} /> },
                { name: 'Profile', icon: <User size={16} /> },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => { setActiveTab(item.name); setCurrentSubPage(null); setIsEditingProfile(false); }}
                  className={`sidebar-link ${activeTab === item.name ? 'active' : ''}`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
            <div className="sidebar-divider">
              <span className="section-label">Settings</span>
              <div className="menu-links">
                <button className="sidebar-link-sub" onClick={() => triggerToast("Loading user settings core context logs...")}><Settings size={16} /> <span>Account</span></button>
                <button className="sidebar-link-sub" onClick={() => triggerToast("Loading advanced metadata privacy matrices...")}><ShieldCheck size={16} /> <span>Privacy</span></button>
              </div>
            </div>
          </div>
      <button className="logout-button" onClick={() => {alert("Simulating app lifecycle log out routine..."); navigate("/");}}><LogOut size={16} /> <span>Logout</span></button>
        </aside>

        {/* --- MAIN CONTENT AREA --- */}
        <main className="main-content">
          
          {activeTab !== 'Profile' ? (
            <div className="fallback-empty-state">
              <h2>{activeTab} Dashboard</h2>
              <p>Simulated viewport pipeline instance target container.</p>
              <button className="edit-profile-btn inline-btn" onClick={() => setActiveTab('Profile')}>Return to Settings</button>
            </div>
          ) : currentSubPage ? (
            
            /* --- REAL ACTIVE SUB-PAGE PREFERENCE HANDLERS --- */
            <div className="subpage-wrapper">
              <button className="back-navigation-btn" onClick={() => setCurrentSubPage(null)}>
                <ArrowLeft size={16} /> <span>Back to Profile Main Panel</span>
              </button>
              
              <div className="subpage-header">
                <h2>{currentSubPage} Configurations</h2>
                <p>Edit dynamic application structural runtime records properties on the fly.</p>
              </div>

              <div className="subpage-card-content">
                {currentSubPage === 'Language' && (
                  <div className="interactive-options-list">
                    {['English (US)', 'Español (ES)', 'Français (FR)', 'Deutsch (DE)'].map(lang => (
                      <label key={lang} className="option-row">
                        <input type="radio" name="lang" checked={selectedLanguage === lang} onChange={() => { setSelectedLanguage(lang); triggerToast(`Language reassigned to ${lang}`); }} />
                        <span>{lang}</span>
                      </label>
                    ))}
                  </div>
                )}

                {currentSubPage === 'Currencies' && (
                  <div className="interactive-options-list">
                    {['USD - Dollar', 'EUR - Euro', 'RWF - Franc', 'GBP - Pound'].map(curr => (
                      <label key={curr} className="option-row">
                        <input type="radio" name="curr" checked={selectedCurrency === curr} onChange={() => { setSelectedCurrency(curr); triggerToast(`Currency platform standard set to ${curr}`); }} />
                        <span>{curr}</span>
                      </label>
                    ))}
                  </div>
                )}

                {currentSubPage === 'Appearance' && (
                  <div className="appearance-toggle-box">
                    <p className="description-text">Select system window base theme visual accenting rules:</p>
                    <div className="flex-buttons-row">
                      <button className={`theme-pick-btn ${themeMode === 'Light' ? 'picked' : ''}`} onClick={() => setThemeMode('Light')}>Light Mode</button>
                      <button className={`theme-pick-btn ${themeMode === 'Dark' ? 'picked' : ''}`} onClick={() => setThemeMode('Dark')}>Dark Mode</button>
                    </div>
                  </div>
                )}

                {currentSubPage === 'Security' && (
                  <div className="security-toggle-container">
                    <div className="security-toggle-row">
                      <div>
                        <strong>Two-Factor Token Authentication Checkpoint (2FA)</strong>
                        <p className="description-text">Secure transaction records validation processes via external OTP triggers.</p>
                      </div>
                      <input type="checkbox" className="toggle-switch" checked={twoFactorAuth} onChange={(e) => { setTwoFactorAuth(e.target.checked); triggerToast(e.target.checked ? "MFA Encryption Toggled On" : "MFA Disarmed"); }} />
                    </div>
                  </div>
                )}

                {currentSubPage === 'Devices' && (
                  <div className="devices-list-wrapper">
                    <p className="description-text">Active runtime token footprints assigned to your credential hashes:</p>
                    <div className="sessions-list">
                      {activeSessions.map((session) => (
                        <div key={session.id} className="session-item-row">
                          <div className="session-info-left">
                            <div className="session-icon-container"><Laptop size={18} /></div>
                            <div>
                              <h4>{session.type} {session.activeNow && <span className="active-badge-tag">Current Session</span>}</h4>
                              <p>{session.location}</p>
                            </div>
                          </div>
                          {!session.activeNow && (
                            <button className="kill-session-btn" onClick={() => terminateSessionId(session.id)}>
                              <Trash2 size={16} />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {currentSubPage === 'Password' && (
                  <form className="password-form-wrapper" onSubmit={handlePasswordSubmit}>
                    <div className="form-input-block">
                      <label>Current Secure Password</label>
                      <div className="input-with-icon">
                        <Lock size={16} className="input-inner-icon" />
                        <input type="password" value={passwordForm.current} onChange={(e) => setPasswordForm(prev => ({...prev, current: e.target.value}))} placeholder="••••••••" />
                      </div>
                    </div>
                    <div className="form-input-block">
                      <label>New Passkey Phrase Hash</label>
                      <div className="input-with-icon">
                        <Lock size={16} className="input-inner-icon" />
                        <input type="password" value={passwordForm.newPass} onChange={(e) => setPasswordForm(prev => ({...prev, newPass: e.target.value}))} placeholder="••••••••" />
                      </div>
                    </div>
                    <div className="form-input-block">
                      <label>Confirm Target Password Credentials String</label>
                      <div className="input-with-icon">
                        <Lock size={16} className="input-inner-icon" />
                        <input type="password" value={passwordForm.confirm} onChange={(e) => setPasswordForm(prev => ({...prev, confirm: e.target.value}))} placeholder="••••••••" />
                      </div>
                    </div>
                    <button type="submit" className="edit-profile-btn secure-submit-btn">Update Security Hash Key</button>
                  </form>
                )}
              </div>
            </div>

          ) : (
            
            /* --- PRIMARY PROFILE VIEW PORT PANEL PANEL --- */
            <>
              <div className="breadcrumbs-area">
                <h1 className="page-title">Profile</h1>
                <div className="breadcrumbs">
                  <span className="bc-inactive">Settings</span>
                  <span className="bc-separator">/</span>
                  <span className="bc-active">Personal Information</span>
                </div>
              </div>

              <div className="content-grid">
                
                {/* Left Column: Interactive Profile Card */}
                <div className="profile-card">
                  <div className="avatar-container">
                    <img src={userProfile.avatarUrl} alt={userProfile.name} className="avatar-lg" />
                    <button className="edit-avatar-btn" onClick={() => fileInputRef.current.click()}>
                      <Pencil size={12} />
                    </button>
                  </div>

                  {isEditingProfile ? (
                    <div className="inline-profile-editor-form">
                      <input type="text" name="name" value={userProfile.name} onChange={handleProfileFormChange} placeholder="Profile Full Name" className="form-text-input" />
                      <input type="email" name="email" value={userProfile.email} onChange={handleProfileFormChange} placeholder="Email Endpoint" className="form-text-input" />
                      <input type="text" name="role" value={userProfile.role} onChange={handleProfileFormChange} placeholder="Professional Title" className="form-text-input" />
                      <input type="text" name="location" value={userProfile.location} onChange={handleProfileFormChange} placeholder="Geographic Anchor Node" className="form-text-input" />
                      <button className="edit-profile-btn save-form-btn" onClick={() => { setIsEditingProfile(false); triggerToast('Personal database variables synchronized successfully.'); }}>Save Target Changes</button>
                    </div>
                  ) : (
                    <>
                      <h2 className="user-name">{userProfile.name}</h2>
                      <p className="user-email">{userProfile.email}</p>

                      <div className="badge-container">
                        <div className="badge badge-sky"><Briefcase size={12} /> <span>{userProfile.role}</span></div>
                        <div className="badge badge-slate"><MapPin size={12} /> <span>{userProfile.location}</span></div>
                      </div>

                      <button className="edit-profile-btn" onClick={() => setIsEditingProfile(true)}>
                        <Pencil size={16} /> <span>Edit Profile</span>
                      </button>
                    </>
                  )}
                </div>

                {/* Right Column: Settings Router Grid & Feature Banner */}
                <div className="settings-column">
                  <div className="settings-grid">
                    {settingsCards.map((card, idx) => (
                      <button key={idx} className="settings-item-card" onClick={() => setCurrentSubPage(card.id)}>
                        <div className="settings-item-left">
                          <div className="icon-container">{card.icon}</div>
                          <div>
                            <h3 className="card-title">{card.title}</h3>
                            <p className="card-subtitle">{card.subtitle}</p>
                          </div>
                        </div>
                        <ChevronRight size={16} className="chevron-icon" />
                      </button>
                    ))}
                  </div>

                  <div className="support-banner">
                    <div className="support-text">
                      <h4>Need Help with your Business Profile?</h4>
                      <p>Connect with your dedicated MissMore kitchen manager for priority support.</p>
                    </div>
                    <button className="support-btn" onClick={() => alert("Routing persistent socket configuration payload connection directly to helpline routing centers...")}>Contact Support</button>
                  </div>
                </div>

              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}