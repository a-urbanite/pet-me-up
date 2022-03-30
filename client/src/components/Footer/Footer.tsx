import React from 'react'
import './Footer.css'
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Footer = () => {

const loggedInUser = useAppSelector((state) => state.loggedInUser.email)

  return (
    <div className='Footer'>
      {loggedInUser && <p>Logged in as {loggedInUser}</p>}
    </div>
  )
}

export default Footer