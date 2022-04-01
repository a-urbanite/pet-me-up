// import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { addUser, deleteUser } from "../../redux/reducers";
import './ProfilePage.css'
import DogProfileForm from '../../components/DogProfileForm/DogProfileForm';
import Gallery from '../../components/Gallery/Gallery';

export const ProfilePage = ({pets, setData} : any) => {
  // const dispatch = useAppDispatch()
  const loggedInUser = useAppSelector((state) => state.loggedInUser)

  // const [filteredData, setfilteredData] = React.useState([]);
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   // document.title = `You clicked ${count} times`;
  //   setfilteredData(pets.filter((pet: any) => pet.ownerEmail === loggedInUser.email))
  //   // const filteredData = pets.filter((pet: any) => pet.ownerEmail === loggedInUser.email)
  // });

  // const [count, setCount] = useState(0)

  return (
    <div className='userForm__wrapper'>
      <h2 className='profile__Greeter'>Welcome {loggedInUser.name}! <br></br> This is your Profile:</h2>
      <DogProfileForm setData={setData}/>
      <Gallery pets={pets.filter((pet: any) => pet.ownerEmail === loggedInUser.email)}/>
    </div>
  )
}
