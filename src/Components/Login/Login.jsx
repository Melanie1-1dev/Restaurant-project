import { useState, useEffect, useCallback } from "react";
import "./Login.css";
import {Link} from "react-router-dom";
/*
  ┌─────────────────────────────────────────────────┐
  │  GOOGLE OAUTH SETUP                             │
  │  1. Go to console.cloud.google.com              │
  │  2. Create a project → APIs & Services →        │
  │     Credentials → Create OAuth 2.0 Client ID   │
  │  3. Add your domain to Authorised JS origins    │
  │  4. Replace the string below with your ID       │
  └─────────────────────────────────────────────────┘
*/
const GOOGLE_CLIENT_ID = "468688266958-lucql7pbd84jrcf6026bc5i503j4k0ao.apps.googleusercontent.com";

/* ── localStorage auth helpers ───────────────── */
const USERS_KEY = "missmore_users";
const getUsers  = () => { try { return JSON.parse(localStorage.getItem(USERS_KEY)) || []; } catch { return []; } };
const findUser  = (email, pw) => getUsers().find(u => u.email === email.toLowerCase() && u.password === pw);

/* ── validation ──────────────────────────────── */
const validateEmail = v => {
  if (!v.trim()) return "Email is required";
  if (!/\S+@\S+\.\S+/.test(v)) return "Enter a valid email";
  return "";
};
const validatePassword = v => {
  if (!v) return "Password is required";
  if (v.length < 6) return "Min. 6 characters";
  return "";
};

/* ── SVG icons ───────────────────────────────── */
function EyeIcon({ open }) {
  return open ? (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ) : (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/>
      <line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg className="login-google-icon" viewBox="0 0 48 48">
      <path fill="#EA4335" d="M24 9.5c3.14 0 5.95 1.08 8.17 2.85l6.1-6.1C34.46 3.09 29.53 1 24 1 14.62 1 6.62 6.67 3.18 14.72l7.1 5.52C11.9 14.24 17.44 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.52 24.5c0-1.64-.15-3.22-.42-4.74H24v8.98h12.7c-.55 2.94-2.2 5.43-4.68 7.1l7.18 5.58C43.2 37.47 46.52 31.45 46.52 24.5z"/>
      <path fill="#FBBC05" d="M10.28 28.76A14.5 14.5 0 019.5 24c0-1.65.28-3.24.78-4.76L3.18 13.7A22.93 22.93 0 001 24c0 3.68.88 7.15 2.44 10.23l6.84-5.47z"/>
      <path fill="#34A853" d="M24 47c5.55 0 10.2-1.84 13.6-4.98l-7.18-5.58C28.6 38.18 26.42 39 24 39c-6.54 0-12.08-4.72-13.72-11.04l-6.84 5.47C6.6 41.28 14.6 47 24 47z"/>
    </svg>
  );
}

/* ══════════════════════════════════════════════
   MAIN COMPONENT
   Props:
     onSignUpClick  — called when user clicks "Sign Up"
                      → link to your Register page
     onLoginSuccess — called after successful login
══════════════════════════════════════════════ */
export default function Login({ onSignUpClick, onLoginSuccess }) {
  const [email,     setEmail]     = useState("");
  const [password,  setPassword]  = useState("");
  const [showPass,  setShowPass]  = useState(false);
  const [emailErr,  setEmailErr]  = useState("");
  const [passErr,   setPassErr]   = useState("");
  const [loading,   setLoading]   = useState(false);
  const [toast,     setToast]     = useState({ msg:"", type:"", show:false });
  const [activeNav, setActiveNav] = useState("Home");

  /* ── toast ───────────────────────────────── */
  const showToast = (msg, type = "success") => {
    setToast({ msg, type, show: true });
    setTimeout(() => setToast(t => ({ ...t, show: false })), 3200);
  };

  /* ── Google OAuth via GIS library ─────────
     Loads Google Identity Services script once,
     then renders the official Google button.    */
  useEffect(() => {
    // Load the Google script
    const scriptId = "google-gsi";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id  = scriptId;
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => initGoogle();

    return () => {
      // cleanup not strictly needed
    };
  }, []);

  const initGoogle = useCallback(() => {
    if (!window.google) return;
    window.google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleGoogleResponse,
    });
    window.google.accounts.id.renderButton(
      document.getElementById("google-btn-container"),
      {
        type:  "standard",
        theme: "outline",
        size:  "large",
        text:  "continue_with",
        shape: "rectangular",
        width: 276,
      }
    );
  }, []);

  /* Called by Google with a JWT credential */
  function handleGoogleResponse(response) {
    if (response.credential) {
      // Decode the JWT payload (no verification needed client-side)
      const payload = JSON.parse(atob(response.credential.split(".")[1]));
      showToast(`Welcome, ${payload.name || payload.email}! ✅`);
      if (onLoginSuccess) onLoginSuccess({ provider:"google", ...payload });
    }
  }

  /* ── form submit ─────────────────────────── */
  async function handleSubmit(e) {
    e.preventDefault();
    const eErr = validateEmail(email);
    const pErr = validatePassword(password);
    setEmailErr(eErr);
    setPassErr(pErr);
    if (eErr || pErr) return;

    setLoading(true);
    await new Promise(r => setTimeout(r, 1100));

    const user = findUser(email, password);
    setLoading(false);

    if (!user) {
      showToast("Invalid email or password.", "error");
      setPassErr("Wrong email or password");
      return;
    }
    showToast(`Welcome back, ${email}! ✅`);
    setEmail(""); setPassword("");
    if (onLoginSuccess) onLoginSuccess({ provider:"email", email });
  }

  /* ── forgot password ─────────────────────── */
  function handleReset() {
    const err = validateEmail(email);
    if (err) { setEmailErr(err || "Enter your email first"); return; }
    showToast(`Reset link sent to ${email} 📧`);
  }

  /* ── sign-up navigation ──────────────────── */
  function handleSignUp() {
    if (onSignUpClick) {
      onSignUpClick();           // parent navigates to Register page
    } else {
      /* fallback: if used without React Router prop,
         you can replace this with: navigate('/register') */
      window.location.href = "/register";
    }
  }

  return (
    <div className="login-root">

      {/* TOAST */}
      <div className={`login-toast${toast.type === "error" ? " error-toast" : ""}${toast.show ? " show" : ""}`}>
        {toast.msg}
      </div>

      {/* HEADER */}
      <header className="login-header">
        <div className="login-logo">Miss<span>More</span></div>
        <nav className="login-nav">
          {["Home","About","Experience","Contact","Dashboard"].map(item => (
            <button
              key={item}
              className={[
                "login-nav-link",
                item === "Contact"   ? "contact"   : "",
                item === "Dashboard" ? "dashboard" : "",
                activeNav === item   ? "nav-active" : "",
              ].join(" ").trim()}
              onClick={() => setActiveNav(item)}
            >
              {item}
            </button>
          ))}
        </nav>
      </header>

      {/* BODY */}
      <div className="login-body">
        <div className="login-blob"/>

        {/* LEFT */}
        <div className="login-left">
          <h1 className="login-headline">
            <span className="black">Comida </span>
            <span className="orange">Deliciosa,</span>
            <br/>
            <span className="orange">Vida </span>
            <span className="black">Deliciosa.</span>
          </h1>
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700&q=80"
            alt="Delicious food"
            className="login-food-img"
          />
        </div>

        {/* RIGHT — LOGIN CARD */}
        <div className="login-card-wrap">
          <div className="login-card">
            <p className="login-card-welcome">WELCOME</p>
            <h2 className="login-card-title">
              Login to Miss<span className="login-card-title-logo">More</span>
            </h2>
            <p className="login-card-sub">Enter your email and password below</p>

            <form onSubmit={handleSubmit} noValidate>
              {/* Email */}
              <label className="login-field-label">Email</label>
              <div className="login-input-wrap">
                <input
                  className={`login-input${emailErr ? " error" : ""}`}
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setEmailErr(""); }}
                  onBlur={() => setEmailErr(validateEmail(email))}
                />
              </div>
              {emailErr && <p className="login-error-msg">{emailErr}</p>}

              {/* Password */}
              <div className="login-field-row">
                <label className="login-field-label">password</label>
                <button type="button" className="login-forgot" onClick={handleReset}>
                  forgot password
                </button>
              </div>
              <div className="login-input-wrap">
                <input
                  className={`login-input${passErr ? " error" : ""}`}
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={e => { setPassword(e.target.value); setPassErr(""); }}
                  onBlur={() => setPassErr(validatePassword(password))}
                  style={{ paddingRight: 40 }}
                />
                <button type="button" className="login-eye-btn"
                  onClick={() => setShowPass(v => !v)} tabIndex={-1}>
                  <EyeIcon open={showPass}/>
                </button>
              </div>
              {passErr && <p className="login-error-msg">{passErr}</p>}

              <button className="login-btn" type="submit" disabled={loading}>
                {loading && <span className="login-spinner"/>}
                {loading ? "Logging in…" : "Log In"}
              </button>
            </form>

            {/* Sign up link — goes to your Register page */}
            <p className="login-links">
              Don't have an account?&nbsp;
          <Link to="/create-account">Sign Up</Link>
            </p>
            <p className="login-links">
              Forgot your password/Login&nbsp;
              <button className="reset" onClick={handleReset}>RESET</button>
            </p>

            {/* OR Google — official GIS button rendered here */}
            <div className="login-or">
              <div className="login-or-line"/>
              OR continue with
              <div className="login-or-line"/>
            </div>

            {/* Google renders its own button into this div */}
            <div id="google-btn-container" className="login-google-wrap"/>

            {/* Fallback shown until Google script loads */}
           
          </div>
        </div>
      </div>
    </div>
  );
}