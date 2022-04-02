import React, { useState } from 'react'
import '../DogCreeationForm/DogCreationForm.css'
import axios from 'axios'
import { url } from "../../components/App/App"
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { Pet, Pets } from '../../types'

interface CustomizedState {
  pet: Pet
}

const DogProfileForm = ({setData}: any) => {
  const location = useLocation();
  const navigate = useNavigate()
  const loggedInUser = useAppSelector((state) => state.loggedInUser)
  const customizedState = location.state as CustomizedState
  const  { pet } = customizedState

  const updateDog = async (event: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(event.target));
    formData.ownerEmail = loggedInUser.email
    formData.ownerName = loggedInUser.name

    try {
      axios.put(`${url}/api/pets/${pet._id}`, formData)
    } catch (err: any) {
      console.log(err.message)
    } 
    const result = await axios.get(`${url}/api/pets`)
    setData(result.data)
    navigate('/Profile')
  }


  return (
    <div>
        <h1 className="dog-profile-form__header">Dog Update Form</h1>
        <form action="" className="dog-profile-form" onSubmit={updateDog}>
            <input type="text" name="name" defaultValue={pet.name} className="dog-profile-form__input"/>
            <input type="text" name="age" defaultValue={pet.age} className="dog-profile-form__input"/>
            <input type="text" name="zip" defaultValue={pet.zip} className="dog-profile-form__input"/>
            <input type="text" name="gender" defaultValue={pet.gender} className="dog-profile-form__input"/>
            <input type="text" name="description" defaultValue={pet.description} className="dog-profile-form__input"/>
            <input type="text" name="type" defaultValue={pet.type} className="dog-profile-form__input"/>
            <input type="text" name="breed" defaultValue={pet.breed} className="dog-profile-form__input"/>
            <input type="text" name="image" defaultValue={pet.image} className="dog-profile-form__input"/>
            {/* <p className='popUp'>{popup}</p> */}
            <span>
              <Link to='../Profile' className="dog-profile-form__btn back">Back</Link>
              <input type="submit" value="Update pet" className="dog-profile-form__btn add_pet"/>
            </span>
        </form>
    </div>
  )
}

export default DogProfileForm