import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <nav>
        <img alt='mystic-cafe-logo' src='Mystic Cafe Logo.png' className='logo'/>
        <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>About Mystic Cafe </li>
            <li>Dining Area</li>
            <li>Contact Us</li>
        </ul>
    </nav>
  )
}

export default NavBar