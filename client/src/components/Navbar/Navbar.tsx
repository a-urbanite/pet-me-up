import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addUser, deleteUser } from "../../redux/reducers";
import {  signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
import { useNavigate, useLocation } from "react-router-dom"
import { MdPets , MdOutlineLogout, MdLogin, MdOutlineHome} from "react-icons/md";
import { CgProfile } from "react-icons/cg";

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
    <section className='navbar'>
      <section className='navbar__profile-home'>
        {location.pathname !== '/' && <p className='nav__list-item'><Link to="/">Home <MdOutlineHome/></Link></p>}
        {isLoggedIn && <p className='nav__list-item'><Link to="/Profile">Profile <CgProfile/></Link> </p>}
        {isLoggedIn && <p className='nav__list-item'><Link to="/About">About Us <MdPets/></Link> </p>}
      </section>
      <section className='navbar__logOut-signIn'>
        {isLoggedIn && <p className='nav__list-item'><Link to="/" onClick={logout}>Log 0ut <MdOutlineLogout/></Link></p>}
        {!isLoggedIn && <p className='nav__list-item'><Link to="/SignIn" >Sign In <MdLogin/></Link></p>}
        {/* <li className='nav__list-item'><Link to="/register">{isLoggedIn ? 'Sign Out' : 'Sign In'}</Link></li> */}
      </section>
    </section>
  )
}

export default Navbar