import React from 'react'
import { Link } from "react-router-dom";

export const NavBar2 = () => {

    
  return (
    <ul className="navbar">
        <li>
            <Link to="/gallery">Gallery</Link>
        </li>
        <li>
            <Link to="map">Chart</Link>
        </li>
    </ul>
  )
}

export default NavBar2