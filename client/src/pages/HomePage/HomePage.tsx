import React from 'react'
import { Pet, Pets } from '../../types'
import Gallery from '../../components/Gallery/Gallery'
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Navbar2 from '../../components/NavBar2/NavBar2';
import SearchBar from '../../components/SearchBar/SearchBar'
import { Route, Routes } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom"



const HomePage = ({pets, setData}: any) => {
  const navigate = useNavigate()

  const navigateToListView = () => {
    navigate('/gallery')
  }

  const navigateToMapView = () => {
    navigate('/mapview')
  }

  return (
    <>
      <Header />
      <SearchBar setData={setData} pets={pets}/>
      <button onClick={navigateToListView}>list view</button>
      <button onClick={navigateToMapView}>map view</button>
    {/* <Navbar2 />
      {/* <Gallery pets={pets} setData={setData} /> */}
      {/* <Routes> */}
          {/* <Route path='/gallery' element={<Gallery pets={data} setData={setData} />} />
          <Route path='/mapview' element={<MapPage pets={data} setData={setData} />} /> */}
      {/* </Routes> */}
    </>
  )
}

export default HomePage