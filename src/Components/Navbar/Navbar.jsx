import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='container'>

        { /*NAVBAR */ }
        <nav className='navbar'>

            <h2 className="logo">Miss<span>More</span></h2>

            <ul className="nav-links">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>

        </nav>

       { /*maain section*/ }

        <div className="main">
          {  /* left side */}
            <div className="left">
                <h1>
                    Comida <span>Deliciosa,</span> <br />
                    Vita <span>Deliciosa</span>
                </h1>

                <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c" alt="" className="food-img" />

            </div>

            { /* RIGHT SIDE - LOGIN */ }
            <div className="right">
                <div className="login-card">
                    <h3>WELCOME TO OUR RESTAURANT</h3>

                    <p>LOGIN TO MissMore</p>

                    <p> Enter your email, password and phonenumber below</p>
                    <br />
                    <label htmlFor="email">Email Address</label>
                    <input type="email" placeholder="Email Address" />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" />
            <label htmlFor="phone">Phone number</label>
            <input type="number" placeholder='+250.....'/>

            <button>Log In</button>

            <p>Don't have an account? <span>Sign up</span></p>
            <p>Forgot password? <span>RESET</span></p>
            <p>OR continue with:</p>
            <div>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
            </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
