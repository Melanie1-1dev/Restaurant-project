import React, { useState } from "react";
import "./RestaurantPage.css";

export default function RestaurantPage() {
  const [activeTab, setActiveTab] = useState("Drink");

  const tabs = ["Drink", "Starter", "Appetizer", "Dessert", "Main"];

  return (
    <div className="container">
      {/* LEFT PANEL */}
      <div className="left">
        <h1 className="logo">
          Miss<span>More</span>
        </h1>

        <h2>Create your restaurant profile</h2>

        <div className="section">
          <h3>Restaurant Information</h3>
          <p>Restaurant name, address details, owner details</p>
        </div>

        <div className="section">
          <h3>Establishments & Cuisine types</h3>
          <p>Opening hours</p>
        </div>

        <div className="section">
          <h3>Create your menu</h3>
          <p>Menu, Restaurant, food images</p>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="right">
        <div className="topbar">
          <h2>Overview</h2>
          <div className="profile">
            <span>👤 Kagabo Jacques</span>
          </div>
        </div>

        {/* TABS */}
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "tab active" : "tab"}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* FORM */}
        <div className="form">
          <input placeholder="Name" />
          <input placeholder="Menu Name" />
          <textarea placeholder="Menu description" />

          <input placeholder="Ingredients" />

          <div className="upload">
            <p>Image Upload image</p>
          </div>

          <input placeholder="Price" />
          <small>RWF</small>

          <div className="buttons">
            <button className="addMore">Add More</button>
            <button className="addOrder">Add Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}