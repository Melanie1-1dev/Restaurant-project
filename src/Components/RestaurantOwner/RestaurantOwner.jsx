// RestaurantOwner.jsx
import React from "react";
import "./RestaurantOwner.css";
import { Link } from "react-router-dom";

const RestaurantOwner = () => {
  return (
    <div className="restaurant-pag">
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
      <div className="restaurant-page">
        

      <div className="overlay">

        
        {/* LEFT SECTION */}
        <div className="left-section">
          <div className="logo">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
              alt="logo"
            />
          </div>

          <div className="steps">
            <div className="step active">
              <h2>1. create your restaurant profile</h2>

              <h3>Restaurant information</h3>
              <p>Restaurant names, address, details, details owners</p>

              <h3>Restaurant Types and Timings</h3>
              <p>Establishments & Cuisine types. Opening hours</p>
            </div>

            <div className="step">
              <h2>Create your menu</h2>
              <p>Menu, Restaurant, food images</p>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="form-container">
          <h2>
            Restaurant Type(restaurant, pub, hotel, coffeeshop and others.
          </h2>

          <input type="text" placeholder="Restaurant" />

          <input type="text" placeholder="African" />

          <h3 className="opening-title">Opening Hours</h3>

          <div className="time-row">
            <input type="time" placeholder="From | 14:00 pm" />
            <input type="time" placeholder="To  | 02:00 pm" />
          </div>

          <h2 className="upload-title">
            Upload images (Pictures or logo)
          </h2>

          <input type="file" />
        </div>

        {/* BOTTOM BUTTON */}
        <div className="bottom-btn">
          <button>SEE MORE</button>
        </div>
      </div>
      </div>

    </div>
  );
};

export default RestaurantOwner;