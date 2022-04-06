import React, { useState } from 'react'
import { Pet, Pets } from '../../types'
import Gallery from '../../components/Gallery/Gallery'
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Navbar2 from '../../components/NavBar2/NavBar2';
import SearchBar from '../../components/SearchBar/SearchBar'
import { Route, Routes } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom"
import Map from '../../components/Map/Map';
import './HomePage.css'



const HomePage = ({pets, setData}: any) => {

  const [view, setView] = useState('map')

  const switchView = () => {
    if (view === 'map') {
      setView('list')
    } else {
      setView('map')
    }
  }



  return (
    <main className='home-page'>
      <Header />
      <SearchBar setData={setData} pets={pets}/>
      <button className='switchViewBtn' onClick={switchView}>Switch view</button>
      { view === 'list' && <Gallery setData={setData} pets={pets}/>}
      { view=== 'map' && <div className='mapContainer'><Map setData={setData} pets={pets} /></div>}
    </main>
  )
}

export default HomePage