import React from 'react'
import './DogProfileForm.css'
import axios from 'axios'
import env from 'react-dotenv'
import { url } from "../App/App"
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const DogProfileForm = ({setCount, count}: any) => {

    const loggedInUser = useAppSelector((state) => state.loggedInUser)


  const postDog = (event: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(event.target));
    formData.ownerEmail = loggedInUser.email
    formData.ownerName = loggedInUser.name
    console.log(formData)
    setCount( count+1)



    axios.post(`${url}/api/add-dog`, formData)
    .then(res => console.log('Data sendt'))
    .then(() => console.log(formData))
    .catch(err => console.log(err.message))
 }


  return (
    <div>
        <h1 className="dog-profile-form__header">Dog Form</h1>
        <form action="" className="dog-profile-form" onSubmit={postDog}>
            <label className="dog-profile-form__label">Name:</label>
            <input type="text" name="name" className="dog-profile-form__input"/>
            <label className="dog-profile-form__label">Age:</label>
            <input type="text" name="age" className="dog-profile-form__input"/>
            <label className="dog-profile-form__label">Zip Code:</label>
            <input type="text" name="zip" className="dog-profile-form__input"/>
            <label className="dog-profile-form__label">Gender:</label>
            <input type="text" name="gender" className="dog-profile-form__input"/>
            <label className="dog-profile-form__label">Description:</label>
            <input type="text" name="description" className="dog-profile-form__input"/>
            <label className="dog-profile-form__label">Type:</label>
            <input type="text" name="type" className="dog-profile-form__input"/>
            <label className="dog-profile-form__label">Breed:</label>
            <input type="text" name="breed" className="dog-profile-form__input"/>
            <label className="dog-profile-form__label">Image Url:</label>
            <input type="text" name="image" className="dog-profile-form__input"/>
            <input type="submit" value="Create Dog" className="dog-profile-form__input"/>
        </form>
    </div>
  )
}

export default DogProfileForm