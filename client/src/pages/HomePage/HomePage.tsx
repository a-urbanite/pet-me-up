import React from 'react'
import { Pet, Pets } from '../../types'
import Gallery from '../../components/Gallery/Gallery'
import Header from '../../components/Header/Header';
import Nav from '../../components/Navbar/Nav';
import SearchBar from '../../components/SearchBar/SearchBar'



const HomePage = ({pets}: Pets) => {
  return (
    <>
      <Header />
      <SearchBar />
      <Gallery pets={pets} />
    </>
  )
}

export default HomePage