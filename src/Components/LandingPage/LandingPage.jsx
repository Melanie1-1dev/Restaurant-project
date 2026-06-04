import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import { Link, useNavigate } from 'react-router-dom';

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

const LandingPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false
  });

  const [user, setUser] = useState(null);

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Keep user logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          name: currentUser.displayName,
          email: currentUser.email,
          photo: currentUser.photoURL
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // EMAIL SIGNUP (Firebase part commented for now)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError('Please fill all fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!formData.agree) {
      setError('You must agree to terms');
      return;
    }

    try {
      setLoading(true);

      // Firebase email signup
      /*
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      */

      alert('Account created successfully!');
      navigate('/home');

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // GOOGLE SIGN IN
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const loggedUser = result.user;

      setUser({
        name: loggedUser.displayName,
        email: loggedUser.email,
        photo: loggedUser.photoURL
      });

      alert("Welcome " + loggedUser.displayName);

      navigate('/home');

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>

     

      <div className="container">

        {/* LEFT SIDE */}
        <div className="left-side">
          <div className="oval">

            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
              className="left-image"
              alt=""
            />

            <div className="left-content">
              <div className="top-links">
                <span>Login</span> / <span>Sign Up</span>
              </div>

              <h2>Welcome</h2>
              <p className="to-text">To</p>
              <h1>Miss<span>More</span></h1>
              <h3>Find Your Perfect Stay</h3>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right-side">

          <img
            src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200&auto=format&fit=crop"
            className="right-image"
            alt=""
          />

          <div className="overlay"></div>

          {/* USER PROFILE */}
          {user && (
            <div style={{
              position: "absolute",
              top: "20px",
              right: "120px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              zIndex: 50
            }}>
              <img
                src={user.photo}
                alt="profile"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%"
                }}
              />
              <span style={{ fontWeight: "bold" }}>
                {user.name}
              </span>
            </div>
          )}

          {/* TOP ICONS */}
          <div className="top-icons">
            <button className="back-btn">←</button>
            <div className="menu">☰</div>
          </div>

          {/* FORM */}
          <div className="form-card">

            <h1>Create an account</h1>
            <p>Please fill out the form</p>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <form onSubmit={handleSubmit}>

              <label>Full Name</label>
              <input name="fullName" value={formData.fullName} onChange={handleChange} />

              <label>Email</label>
              <input name="email" value={formData.email} onChange={handleChange} />

              <label>Password</label>
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <span onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: 10, top: 10 }}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <label>Confirm Password</label>
              <div style={{ position: "relative" }}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={{ position: "absolute", right: 10, top: 10 }}>
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <div className="checkbox-row">
                <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
                <span>I agree to Terms</span>
              </div>

              <button className="signup-btn" type="submit">
                {loading ? "Creating..." : "Sign Up"}
              </button>

              {/* GOOGLE BUTTON */}
              <button
                type="button"
                onClick={handleGoogleSignIn}
                style={{
                  marginTop: "15px",
                  width: "100%",
                  padding: "12px",
                  borderRadius: "30px",
                  border: "none",
                  background: "white",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px"
                }}
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                  width="20"
                />
                Continue with Google
              </button>

            </form>

            <div className="login-link">
              Already have account? <Link to="/">Login</Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;