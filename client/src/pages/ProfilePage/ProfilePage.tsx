import React from 'react'
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addUser, deleteUser } from "../../redux/reducers";
import './ProfilePage.css'
import DogProfileForm from '../../components/DogProfileForm/DogProfileForm';

export const ProfilePage = () => {
  const dispatch = useAppDispatch()
  const loggedInUser = useAppSelector((state) => state.loggedInUser)
  // console.log('LOGGEDINUSER', loggedInUser.name, loggedInUser.email)
  const updateProfile = (event: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(event.target));
    // console.log(formData)
    // dispatch(addUser({
    //   name: currentUser.displayName,
    //   email: currentUser.email 
    // }))
  }

  return (
    <div className='userForm__wrapper'>
      <h2 className='profile__Greeter'>Welcome {loggedInUser.name}! <br></br> This is your Profile:</h2>
      <DogProfileForm/>

      {/* <form className='userForm' onSubmit={updateProfile}>
        <p>Name:</p>
        <input className='userForm__input' type='text' name='name' value={loggedInUser.name}></input>
        <p>Email:</p>
        <input className='userForm__input' type='text' name='email' value={loggedInUser.email}></input>
        <p>Phone:</p>
        <input className='userForm__input' type='text' name='phone'></input>
        <p>Adress</p>
        <p>Street and Number:</p>
        <input className='userForm__input' type='text' name='street'></input>
        <p>Zip Code:</p>
        <input className='userForm__input' type='text' name='zip'></input>
        <p>City:</p>
        <input className='userForm__input' type='text' name='city'></input>
        <input className='userForm__input' type='submit' value='Update Profile'></input>
      </form> */}
    </div>
  )
}
