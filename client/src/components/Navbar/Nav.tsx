import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar: React.FC = () => {
  return (
    <ul className='nav'>
        <li className='nav__list-item'><Link to="/">Home</Link></li>
        <li className='nav__list-item'><Link to="/register">Sign-in</Link></li>
    </ul>
  )
}

export default Navbar