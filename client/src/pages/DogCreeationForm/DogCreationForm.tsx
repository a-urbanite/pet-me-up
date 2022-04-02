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


  const postDog = (event: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(event.target));
    formData.ownerEmail = loggedInUser.email
    formData.ownerName = loggedInUser.name

    axios.post(`${url}/api/add-dog`, formData)
    .catch(err => console.log(err.message))

    fetch(`${url}/api/pets`)
    .then((res) => res.json())
    .then((data) => {
      console.log('data fetch triggered')
      setData(data)
    })

    navigate({
      pathname: '/Profile'
    })
 }


  return (
    <div>
      
        <h1 className="dog-profile-form__header">Dog Form</h1>
        <form action="" className="dog-profile-form" onSubmit={postDog}>
            {/* <label className="dog-profile-form__label">Name:</label> */}
            <input type="text" name="name" placeholder='Name' className="dog-profile-form__input"/>
            {/* <label className="dog-profile-form__label">Age:</label> */}
            <input type="text" name="age" placeholder='Age' className="dog-profile-form__input"/>
            {/* <label className="dog-profile-form__label">Zip Code:</label> */}
            <input type="text" name="zip" placeholder='Zip Code' className="dog-profile-form__input"/>
            {/* <label className="dog-profile-form__label">Gender:</label> */}
            <input type="text" name="gender" placeholder='Gender' className="dog-profile-form__input"/>
            {/* <label className="dog-profile-form__label">Description:</label> */}
            <input type="text" name="description" placeholder='Description' className="dog-profile-form__input"/>
            {/* <label className="dog-profile-form__label">Type:</label> */}
            <input type="text" name="type" placeholder='Type' className="dog-profile-form__input"/>
            {/* <label className="dog-profile-form__label">Breed:</label> */}
            <input type="text" name="breed" placeholder='Breed' className="dog-profile-form__input"/>
            {/* <label className="dog-profile-form__label">Image Url:</label> */}
            <input type="text" name="image" placeholder='Image Url' className="dog-profile-form__input"/>
            <span>
              <Link to='../Profile' className="dog-profile-form__btn back">Back</Link>
              <input type="submit" value="Add pet" className="dog-profile-form__btn add_pet"/>
            </span>
            {/* <button>Back</button> */}
        </form>
    </div>
  )
}

export default DogProfileForm