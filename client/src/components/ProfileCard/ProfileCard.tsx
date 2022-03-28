import React from 'react'
import { Pet, Pets } from '../../types'
import './ProfileCard.css'

interface ProfileCardProps {
    pet: Pet;
}

const ProfileCard = ({pet}: ProfileCardProps) => {
  return (
    <article className='profileCard'>
        <img className='profileCard__image' src={pet.image} alt={pet.breed}/>
        <p>{pet.name}</p>
        <p>{pet.breed}</p>
        <p>Age: {pet.age}</p>
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