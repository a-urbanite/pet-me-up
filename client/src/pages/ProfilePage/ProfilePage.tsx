import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addUser, deleteUser } from "../../redux/reducers";
import './ProfilePage.css'
import DogProfileForm from '../../components/DogProfileForm/DogProfileForm';
import Gallery from '../../components/Gallery/Gallery';

export const ProfilePage = ({pets, setData} : any) => {
  const dispatch = useAppDispatch()
  const loggedInUser = useAppSelector((state) => state.loggedInUser)
  // console.log('LOGGEDINUSER', loggedInUser.name, loggedInUser.email)
  // const updateProfile = (event: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
  //   event.preventDefault()
  //   const formData = Object.fromEntries(new FormData(event.target));
  // }

  // const 

  const [count, setCount] = useState(0)


useEffect(() => {
  setTimeout(() => {console.log("this is the first message")}, 10000);
  console.log('hello')

  // return () => {
  //   second
  // }
}, [count])

  


  const filteredData = pets.filter((pet: any) => pet.ownerEmail === loggedInUser.email)
          // setData(filteredData)


  return (
    <div className='userForm__wrapper'>
      <h2 className='profile__Greeter'>Welcome {loggedInUser.name}! <br></br> This is your Profile:</h2>
      <DogProfileForm setCount={setCount} count={count}/>
      <Gallery pets={filteredData}/>
    </div>
  )
}
