import React from 'react'
import { MdPets} from "react-icons/md";
import "./About.css"
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

function About() {
  return (
    <>
      <section className='about-us'>
          <h1 className='about-us__title'>Pet me Up <MdPets /> </h1>
          <div className='about__wrapper'>
            <div className='about__upperSection'>
              A community of dog owners who want to find the perfect match for a playdate.<br />
              Pet me Up was found on April 2021 by a group of young developers in Stockholm, Sweden.<br />
              The idea for the application is to help dog owners to find other owners in an easy and secure way.
            </div>
            <div className='about__lowerSection'>
              <div className='about__saltie'>
                <img className='saltie-img' src="teamPhotos/cristina.png" alt='Cristina'/>
                <p className='saltie-name'>Cristina Salazar</p>
                <div>
                  <a href='https://github.com/a-poco' target='blank'><FaGithubSquare /></a>
                  <a href='https://www.linkedin.com/in/cristinasalazarmunguia/' target='blank'><FaLinkedin/></a>
                </div>
              </div>
              <div className='about__saltie'>
              <img className='saltie-img' src='teamPhotos/alexander.png' alt="Alex" />
              <p className='saltie-name'>Alexander Städtler</p>
              <div>
                <a href='https://github.com/a-urbanite' target='blank'><FaGithubSquare /></a>
                <a href='https://www.linkedin.com/in/alexander-staedtler/' target='blank'><FaLinkedin/></a>
              </div>

              </div>
              <div className='about__saltie'>
              <img className='saltie-img' src='teamPhotos/Ludwig.png' alt="Ludwig" />
              <p className='saltie-name'>Ludwig Slettingdalen</p>
              <div>
                <a href='https://github.com/406322' target='blank'><FaGithubSquare /></a>
                <a href='https://www.linkedin.com/in/ludwig-slettingdalen/' target='blank'><FaLinkedin/></a>
              </div>


              </div>
              <div className='about__saltie'>
              <img className='saltie-img' src='teamPhotos/Nemanja.png' alt="Nemanja" />
              <p className='saltie-name'>Nemanja Dunic</p>

              <div>
                <a href='https://github.com/dunicn' target='blank'><FaGithubSquare /></a>
                <a href='https://www.linkedin.com/in/nemanjadunic/' target='blank'><FaLinkedin/></a>
              </div>


              </div>
            </div>
          </div>
      </section>
     </>
  )
}

export default About