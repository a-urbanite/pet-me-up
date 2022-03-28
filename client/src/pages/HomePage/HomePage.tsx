import React from 'react'
import { Pet, Pets } from '../../types'
import Gallery from '../../components/Gallery/Gallery'



const HomePage = ({pets}: Pets) => {
  return (
    <Gallery pets={pets} />
  )
}

export default HomePage