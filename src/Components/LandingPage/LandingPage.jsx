import React from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'


const LandingPage = () => {
  return (
    <div>

       <div className="navbar">

        <div className="logo">
          <h1>
            Miss<span>More</span>
          </h1>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Landing">About</Link></li>
          <li><Link to="/Create-account">Services</Link></li>
          <li><Link to="/Restaurant-Owner">Contact</Link></li>
        </ul>

      </div>

     <div className="container">
       {/* LEFT SIDE */}
      <div className="left-side">

        <div className="oval">

          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
            alt="Beach"
            className="left-image"
          />

          <div className="left-content">

            <div className="top-links">
              <span>Login</span>/
              <span>Sign Up</span>
            </div>

            <h2>Welcome</h2>

            <p className="to-text">To</p>

            <h1>
              Miss<span>More</span>
            </h1>

            <h3>Find Your Perfect Stay</h3>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="right-side">

        <img
          src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200&auto=format&fit=crop"
          alt="Resort"
          className="right-image"
        />

        <div className="overlay"></div>

        {/* TOP ICONS */}
        <div className="top-icons">

          <button className="back-btn">←</button>

          <div className="menu">☰</div>

        </div>

        {/* FORM */}
        <div className="form-card">

          <h1>Create an account</h1>

          <p>Please fill out the form to get started!</p>

          <form>

            <label>Full Name</label>
            <input type="text" placeholder="Enter Your Full Name" />

            <label>Email Address</label>
            <input type="email" placeholder="Enter Your E-mail" />

            <label>Password</label>
            <input type="password" placeholder="Create a Password" />

            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm your password" />

            <div className="checkbox-row">

              <input type="checkbox" />

              <span>
                I agree to the Terms & Conditions & Privacy Policy
              </span>

            </div>

            <button className="signup-btn">
              Sign up
            </button>

          </form>

          <div className="login-link">
            Already have an account? <span>Login</span>
          </div>

        </div>

        {/* BOTTOM ICONS */}
        <div className="bottom-icons">

          <span>⌂</span>
          <span>⌘</span>
          <span>🔔</span>
          <span>◉</span>

        </div>

        {/* ARROW BUTTON */}
        <button className="arrow-btn">
          →
        </button>

      </div>
     </div>

    </div>
  )
}

export default LandingPage