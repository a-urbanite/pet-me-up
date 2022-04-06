import React from 'react'
import { MdPets} from "react-icons/md";
import "./About.css"

function About() {
  return (
    <>
      <section className='about-us'>
          <h1 className='about-us__title'>Pet me Up <MdPets /> </h1>
          A community of dog owners who want to find the perfect match for a playdate.<br />
          Pet me Up was funde on April 2021 by a group of youg developer in Stockholm, Sweden.<br />
          The goal of the application is to help dog owners to find other owners in an easy and secure way.
      </section>
      {/* <figure className='about-us__img'>
          <img className='about-us-img__photo' src="https://i.pinimg.com/474x/3e/b5/91/3eb59152f7f19ff9cb62e784446066a7.jpg" alt="" />
     </figure> */}
     </>
  )
}

export default About