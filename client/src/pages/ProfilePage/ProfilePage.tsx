import React from 'react'
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import './ProfilePage.css'

export const ProfilePage = () => {
  const loggedInUser = useAppSelector((state) => state.loggedInUser)
  console.log('LOGGEDINUSER', loggedInUser.name, loggedInUser.email)

  return (
    
    <>
      <h2 className='profile__Greeter'>Welcome! {loggedInUser.name} This is your Profile:</h2>
      {/* <h2 className='profile__Greeter'>This is your Profile:</h2> */}
      <p className='profile__detailInfo'>Name: {loggedInUser.name}</p>
      <p className='profile__detailInfo'>Email: {loggedInUser.email}</p>
    </>
  )
}
