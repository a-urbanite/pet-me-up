import React from 'react'
import { Pet, Pets } from '../../types'
import ProfileCard from '../ProfileCard/ProfileCard'
import './Gallery.css'

interface GalleryProps {
  pets: Pets,
  setData: any
}

const Gallery = ( { pets, setData }: GalleryProps) => {
  return (
    <div className='Gallery'>          
        {pets.map((pet: Pet) => 
          <ProfileCard pet={pet} key={pet.name} setData={setData} />
          )}
    </div>
  )
}

export default Gallery