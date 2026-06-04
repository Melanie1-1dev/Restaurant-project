import { useState, useEffect, useRef } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

/* ── paste your Client ID here ──────────────── */
const GOOGLE_CLIENT_ID = "468688266958-lucql7pbd84jrcf6026bc5i503j4k0ao.apps.googleusercontent.com";

/* ── localStorage helpers ────────────────────── */
const USERS_KEY = "missmore_users";
const getUsers = () => { try { return JSON.parse(localStorage.getItem(USERS_KEY)) || []; } catch { return []; } };
const findUser = (email, pw) => getUsers().find(u => u.email === email.toLowerCase() && u.password === pw);

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

/* ── Eye icon ────────────────────────────────── */
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

/* ══════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════ */
export default function Login({ onLoginSuccess }) {
  const [email,     setEmail]     = useState("");
  const [password,  setPassword]  = useState("");
  const [showPass,  setShowPass]  = useState(false);
  const [emailErr,  setEmailErr]  = useState("");
  const [passErr,   setPassErr]   = useState("");
  const [loading,   setLoading]   = useState(false);
  const [toast,     setToast]     = useState({ msg:"", type:"", show:false });
  const [activeNav, setActiveNav] = useState("Home");

  const googleBtnRef = useRef(null);
  const navigate     = useNavigate(); /* ← NOW USED for redirect */

  /* ── toast ───────────────────────────────── */
  const showToast = (msg, type = "success") => {
    setToast({ msg, type, show: true });
    setTimeout(() => setToast(t => ({ ...t, show: false })), 3200);
  };

  /* ── Google response callback ────────────── */
  function handleGoogleResponse(response) {
    try {
      const payload = JSON.parse(atob(response.credential.split(".")[1]));
      showToast(`Welcome, ${payload.name || payload.email}! ✅`);
      if (onLoginSuccess) onLoginSuccess({ provider: "google", ...payload });
      setTimeout(() => navigate("/home"), 1200);
    } catch {
      showToast("Google login failed. Try again.", "error");
    }
  }

  /* ── Load & init Google button ───────────── */
  useEffect(() => {
    function renderGoogleBtn() {
      if (!window.google || !googleBtnRef.current) return;
      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback:  handleGoogleResponse,
      });
      googleBtnRef.current.innerHTML = "";
      window.google.accounts.id.renderButton(googleBtnRef.current, {
        type:  "standard",
        theme: "outline",
        size:  "large",
        text:  "continue_with",
        shape: "rectangular",
        width: 276,
      });
    }

    const scriptId = "google-gsi-script";
    const existing = document.getElementById(scriptId);
    if (existing) {
      renderGoogleBtn();
    } else {
      const script   = document.createElement("script");
      script.id      = scriptId;
      script.src     = "https://accounts.google.com/gsi/client";
      script.async   = true;
      script.defer   = true;
      script.onload  = renderGoogleBtn;
      script.onerror = () => showToast("Could not load Google sign-in.", "error");
      document.head.appendChild(script);
    }
  }, []);

  /* ── form submit ─────────────────────────── */
  async function handleSubmit(e) {
    e.preventDefault();
    const eErr = validateEmail(email);
    const pErr = validatePassword(password);
    setEmailErr(eErr);
    setPassErr(pErr);
    if (eErr || pErr) return;

    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));

    const user = findUser(email, password);
    setLoading(false);

    if (!user) {
      showToast("Invalid email or password.", "error");
      setPassErr("Wrong email or password");
      return;
    }

    showToast(`Welcome back! ✅`);
    setEmail(""); setPassword("");
    if (onLoginSuccess) onLoginSuccess({ provider: "email", email });
    setTimeout(() => navigate("/home"), 1200);
  }

  /* ── forgot password ─────────────────────── */
  function handleReset() {
    const err = validateEmail(email);
    if (err) { setEmailErr("Enter your email first"); return; }
    showToast(`Reset link sent to ${email} 📧`);
  }

  return (
    <div className="login-root">

      {/* TOAST */}
      <div className={`login-toast${toast.type === "error" ? " error-toast" : ""}${toast.show ? " show" : ""}`}>
        {toast.msg}
      </div>

{/*     
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
                activeNav === item   ? "nav-active": "",
              ].filter(Boolean).join(" ")}
              onClick={() => setActiveNav(item)}
            >
              {item}
            </button>
          ))}
        </nav>
      </header> */}

      {/* BODY */}
      <div className="login-body">
        <div className="login-blob" />

        {/* LEFT */}
        <div className="login-left">
          <div className="hero-text">
            <h1>
              ☺️ Welcome Back!👋,{"\n\n"}
              <br />
              Connecting customers and restaurant owners through a 
              comprehensive ecosystem designed to enhance convenience,
               efficiency, and service excellence..
            </h1>
          </div>
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700&q=80"
            alt="Delicious food"
            className="login-food-img"
          />
        </div>

        {/* RIGHT — CARD */}
        <div className="login-card-wrap">
          <div className="login-card">
            <p className="login-card-welcome">WELCOME Back!</p>
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
                  <EyeIcon open={showPass} />
                </button>
              </div>
              {passErr && <p className="login-error-msg">{passErr}</p>}

              <button className="login-btn" type="submit" disabled={loading}>
                {loading && <span className="login-spinner" />}
                {loading ? "Logging in…" : "Log In"}
              </button>
            </form>

            {/* Sign up link */}
            <p className="login-links">
              Don't have an account?&nbsp;
              <Link to="/landing" className="login-signup-link">Sign Up</Link>
            </p>
            <p className="login-links">
              Forgot your password/Login&nbsp;
              <button className="reset" onClick={handleReset}>RESET</button>
            </p>

            {/* OR Google */}
            <div className="login-or">
              <div className="login-or-line" />
              OR continue with
              <div className="login-or-line" />
            </div>

            {/* Official Google button (renders here when script loads) */}
            <div ref={googleBtnRef} className="login-google-wrap" />


          </div>
        </div>
      </div>
    </div>
  );
}