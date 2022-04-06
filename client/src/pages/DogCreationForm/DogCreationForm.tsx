import React from 'react'
import './DogCreationForm.css'
import axios from 'axios'
import env from 'react-dotenv'
import { url } from "../../components/App/App"
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Link, useNavigate } from "react-router-dom";

const DogProfileForm = ({setData}: any) => {

  const navigate = useNavigate()


    const loggedInUser = useAppSelector((state) => state.loggedInUser)


  const postDog = async (event: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(event.target));
    formData.ownerEmail = loggedInUser.email
    formData.ownerName = loggedInUser.name
    console.log(formData)

    axios.post(`${url}/api/add-dog`, formData)
    .catch(err => console.log(err.message))

    const result = await axios.get(`${url}/api/pets`)
    await setData(result.data)
    
    navigate({
      pathname: '/Profile'
    })
 }


  return (
    <div className="dog-form">
        <h1 className="dog-profile-form__header">Dog Form</h1>
        <form action="" className="dog-profile-form" onSubmit={postDog}>
            <input type="text" name="name" placeholder='Name' className="dog-profile-form__input"/>
            <input type="text" name="age" placeholder='Age' className="dog-profile-form__input"/>
            <input type="text" name="street_number" placeholder='Street and Number' className="dog-profile-form__input"/>
            <input type="text" name="zip" placeholder='Zip Code' className="dog-profile-form__input"/>
            <input type="text" name="city" placeholder='City' className="dog-profile-form__input"/>
            <select name='gender' className='dog-profile-form__input' >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input type="text" name="description" placeholder='Description' className="dog-profile-form__input"/>
            <select name='type' className='dog-profile-form__input' >
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
            </select>
            <input type="text" name="breed" placeholder='Breed' className="dog-profile-form__input"/>
            <input type="text" name="image" placeholder='Image Url' className="dog-profile-form__input"/>
            <span>
              <Link to='../Profile' className="dog-profile-form__btn back">Back</Link>
              <input type="submit" value="Add pet" className="dog-profile-form__btn add_pet"/>
            </span>
        </form>
    </div>
  )
}

export default DogProfileForm