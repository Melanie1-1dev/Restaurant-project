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

      
    </div>
  )
}

export default Navbar
