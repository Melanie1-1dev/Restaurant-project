import React from 'react'
import './Background.css'
import { Link } from 'react-router-dom'
const Background = () => {
  return (

    <div className="contaiiner">

      {/* NAVBAR */}
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
        {/* MAIN SECTION */}
      <div className="main">

        {/* LEFT SIDE */}
        <div className="left">

          <h1>
            Comida <span>Deliciosa,</span>
            <br />
            Vita <span>Deliciosa</span>
          </h1>

          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
            alt="Food"
            className="food-img"
          />

        </div>


        {/* RIGHT SIDE */}
        <div className="right">

          <div className="login-card">

            <h3>WELCOME TO OUR RESTAURANT</h3>

            <p>LOGIN TO MissMore</p>

            <p>
              Enter your email, password and phone number below
            </p>

            <label>Email Address</label>
            <input type="email" placeholder="Email Address" />

            <label>Password</label>
            <input type="password" placeholder="Password" />

            <label>Phone Number</label>
            <input type="number" placeholder="+250....." />

            <button>Log In</button>

          </div>

        </div>

      </div>

</div>
    </div>

  )
}

export default Background