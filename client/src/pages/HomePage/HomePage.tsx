import React from 'react'
import { Pet, Pets } from '../../types'
import Gallery from '../../components/Gallery/Gallery'
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import SearchBar from '../../components/SearchBar/SearchBar'


const HomePage = ({pets, setData}: any) => {
  return (
    <>
      <Header />
      <SearchBar setData={setData} pets={pets}/>
      <Gallery pets={pets} />
    </>
  )
}

export default HomePage