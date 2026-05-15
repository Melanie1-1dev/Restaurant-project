
import React from 'react'
import './CreateAccount.css';

const CreateAccount = () => {
  return (
    <div className="landing-page">
      
     

      {/* Main Section */}
      <div className="main-container">

        {/* Left Side */}
        <div className="left-section">

          <div className="steps">
            <h1>1. create your restaurant profile</h1>

            <div className="step-item">
              <h3>Restaurant information</h3>
              <p>
                Restaurant names, address details, details owners
              </p>
            </div>

            <div className="step-item">
              <h3>Restaurant Types and Timings</h3>
              <p>
                Establishments & Cuisine types.
                <br />
                Opening hours
              </p>
            </div>

            <div className="step-item">
              <h3>Create your menu</h3>
              <p>
                Menu, Restaurant, food images
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="right-section">
          <div className="form-box">

            <h2>Restaurant information</h2>

            <input type="text" placeholder="Restaurant Name" />

            <input type="text" placeholder="Restaurant complete Name" />

            <h2>Contact numbers @ Restaurant</h2>

            <input type="text" placeholder="+250 | Mobile number" />

            <h2>Restaurant owner details</h2>

            <input type="text" placeholder="+250 | Mobile number" />

            <div className="owner-inputs">
              <input type="text" placeholder="Owner Name" />
              <input type="text" placeholder="Restaurant owner Name" />
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default CreateAccount
