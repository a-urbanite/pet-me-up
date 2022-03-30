import React from 'react'
import './Footer.css'
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Footer = () => {

const loggedInUser = useAppSelector((state) => state.loggedInUser.email)

  return (
    <div className='Footer'>
      {loggedInUser && <p className='Footer_text'>Logged in as {loggedInUser}</p>}
      {!loggedInUser && <p className='Footer_text'>Currently not logged in</p>}

    </div>
  )
}

export default Footer