import React from 'react'
import { Pet, Pets } from '../../types'
import ProfileCard from '../ProfileCard/ProfileCard'
import './Gallery.css'

const Gallery = ( { pets }: Pets) => {
  return (
    <div className='Gallery'>          
        {pets.map((pet: Pet) => 
          <ProfileCard pet={pet} key={pet.name}/>
          )}
    </div>
  )
}

export default Gallery