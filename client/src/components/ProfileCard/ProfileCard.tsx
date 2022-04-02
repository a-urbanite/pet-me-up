import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Link, useNavigate } from "react-router-dom"
import { useLocation } from 'react-router-dom';
import { Pet, Pets } from '../../types'
import './ProfileCard.css'
import { url } from "../App/App"

interface ProfileCardProps {
    pet: Pet;
    setData: any
}

const ProfileCard = ({pet, setData}: ProfileCardProps) => {
  const loggedInUser = useAppSelector((state) => state.loggedInUser)
  const [ isClicked, toggleisClicked ] = useState(false);
  const navigate = useNavigate()
  const location = useLocation();

  const deleteProfile = (id: string) => {
    console.log('id', id)
    try {
      fetch(`${url}/api/pets/${id}`, { method: 'DELETE'})
    } catch (err: any) {
      console.log(err.message)
    }
      fetch(`${url}/api/pets`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          setData(data)
        })
  }

  const updateProfile = () => {
    navigate({
      pathname: '/Profile/DogUpdateForm'
    })
  } 

  useEffect(() => {
    if (location.pathname==='/Profile') {
      toggleisClicked(true)
    }
  }, []);

  const toggle = () => {
    if (loggedInUser.email === '') {
      return navigate({
        pathname: '/SignIn'
      })
    }
    toggleisClicked(!isClicked)
  }

  // clicked or not = true || false
  return (
    <article className={isClicked ? 'profileCard--clicked' : 'profileCard'}>
        <img className='profileCard__image' src={pet.image} alt={pet.breed}/>
        <p className='profileCard__name'>{pet.name}</p>
        <p>{pet.breed}</p>
        <p>Age: {pet.age}</p>
        <p hidden={!isClicked}>Gender: {pet.gender}</p>
        <p className='descr' hidden={!isClicked}>Description: {pet.description}</p>
        <p hidden={!isClicked}>Owner: {pet.ownerName}</p>
        <a className='profileCard__email' hidden={!isClicked} href={`mailto:${pet.ownerEmail}?subject=Hey! let our pets play!`}>Set a playdate!</a> 
        <br/>
        { location.pathname==='/' && <button className='profileCard__btn' onClick={toggle}>{isClicked ? 'Show less' : 'Show more'}</button> }
        {/* { location.pathname==='/Profile' && <button className='profileCard__btn' onClick={() => updateProfile()}>Edit Profile</button>} */}
        { location.pathname==='/Profile' && <button className='profileCard__btn' onClick={() => deleteProfile(pet._id)}>Delete Profile</button> }
        {/* <Link to='DogUpdateForm?test' className="profileCard__btn" pet={pet}>Update pet</Link> */}
        
        
    </article>
  )
}


// name: string,
// age: string,
// zip: string,
// gender: string,
// type: string,
// breed: string,
// image: string,
// description: string

export default ProfileCard