import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom"
import { Pet, Pets } from '../../types'
import './ProfileCard.css'

interface ProfileCardProps {
    pet: Pet;
}

const ProfileCard = ({pet}: ProfileCardProps) => {
  const loggedInUser = useAppSelector((state) => state.loggedInUser)
  const [ isClicked, toggleisClicked ] = useState(false);
  const navigate = useNavigate()

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
        <p>{pet.name}</p>
        <p>{pet.breed}</p>
        <p>Age: {pet.age}</p>
        <p hidden={!isClicked}>Gender: {pet.gender}</p>
        <p className='descr' hidden={!isClicked}>Description: {pet.description}</p>
        <p hidden={!isClicked}>Owner: {pet.ownerName}</p>
        <a hidden={!isClicked} href={`mailto:${pet.ownerEmail}?subject=Hey! let our pets play!`}>Set a playdate!</a> 
        <br/>
        <button onClick={toggle}>{isClicked ? 'Show less' : 'Show more'}</button>
        
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