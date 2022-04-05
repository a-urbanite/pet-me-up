import React from 'react'
import { Pet, Pets } from '../../types'
import ProfileCard from '../ProfileCard/ProfileCard'
import './Gallery.css'
import Header from '../Header/Header'
import SearchBar from '../SearchBar/SearchBar'
import { Link, useNavigate } from "react-router-dom"

interface GalleryProps {
  pets: Pets,
  setData: any
}

const Gallery = ( { pets, setData }: any) => {

  const navigate = useNavigate()

  const navigateToListView = () => {
    navigate('/gallery')
  }

  const navigateToMapView = () => {
    navigate('/mapview')
  }
  return (
    <div >
      <Header />
      <SearchBar setData={setData} pets={pets}/>
      <span>
        <button onClick={navigateToListView}>list view</button>
        <button onClick={navigateToMapView}>map view</button>    
      </span>
      <div className='Gallery'>
        {pets.map((pet: Pet) => 
          <ProfileCard pet={pet} key={pet._id} setData={setData} />
          )}
      </div>
    </div>
  )
}

export default Gallery