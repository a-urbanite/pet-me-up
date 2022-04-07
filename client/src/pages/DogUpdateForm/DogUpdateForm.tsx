import React from 'react'
import '../DogCreationForm/DogCreationForm.css'
import axios from 'axios'
import { url } from "../../components/App/App"
import { useAppSelector } from "../../redux/hooks";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { Pet } from '../../types'

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
      await axios.put(`${url}/api/pets/${pet._id}`, formData)
    } catch (err: any) {
      console.log(err.message)
    } 
    const result = await axios.get(`${url}/api/pets`)
    await setData(result.data)
    navigate('/Profile')
  }


  return (
    <div className='dog-form'>
        <h1 className="dog-profile-form__header">Dog Update Form</h1>
        <form action="" className="dog-profile-form" onSubmit={updateDog}>
            <input type="text" name="name" defaultValue={pet.name} className="dog-profile-form__input"/>
            <input type="text" name="age" defaultValue={pet.age} className="dog-profile-form__input"/>
            <input type="text" name="street_number" defaultValue={pet.street_number} className="dog-profile-form__input"/>
            <input type="text" name="zip" defaultValue={pet.zip} className="dog-profile-form__input"/>
            <input type="text" name="city" defaultValue={pet.city} className="dog-profile-form__input"/>
            <select name='gender' className='dog-profile-form__input' >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input type="text" name="description" defaultValue={pet.description} className="dog-profile-form__input"/>
            <select name='type' className='dog-profile-form__input' >
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
            </select>
            <input type="text" name="breed" defaultValue={pet.breed} className="dog-profile-form__input"/>
            <input type="text" name="image" defaultValue={pet.image} className="dog-profile-form__input"/>
            <span>
              <Link to='../Profile' className="dog-profile-form__btn back">Back</Link>
              <input type="submit" value="Update pet" className="dog-profile-form__btn add_pet"/>
            </span>
        </form>
    </div>
  )
}

export default DogProfileForm