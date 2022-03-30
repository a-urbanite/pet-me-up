import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addUser, deleteUser } from "../../redux/reducers";
import {  signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
import { useNavigate, useLocation } from "react-router-dom"

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const loggedInUser = useAppSelector((state) => state.loggedInUser)
  const isLoggedIn = loggedInUser.name.length !== 0

  const location = useLocation();   
  // console.log('LOCATION', location)
// {location.pathname.includes("users") && <Button>...</Button>}

  const logout = async () => {
    await signOut(auth);
    dispatch(deleteUser())
    // navigate({
    //   pathname: '/'
    // })
  };

  return (
    <ul className='navbar'>
        {location.pathname !== '/' && <li className='nav__list-item'><Link to="/">Home</Link></li>}
        {isLoggedIn && <li className='nav__list-item'><Link to="/Profile">Profile</Link> </li>}
        {isLoggedIn && <li className='nav__list-item'><Link to="/" onClick={logout}>Sign Out</Link></li>}
        {!isLoggedIn && <li className='nav__list-item'><Link to="/SignIn" >Sign In</Link></li>}
        {/* <li className='nav__list-item'><Link to="/register">{isLoggedIn ? 'Sign Out' : 'Sign In'}</Link></li> */}
    </ul>
  )
}

export default Navbar