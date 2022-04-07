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
              Pet me Up was built in April 2021 as a graduation poject by a group of young developers in Stockholm, Sweden.<br />
              The idea for the application is to help pet owners finding playdates for their pets in an easy and fun way.
            </div>
            <div className='about__lowerSection'>
              <div className='about__saltie'>
                <img className='saltie-img' src="teamPhotos/cristina.png" alt='Cristina'/>
                <p className='saltie-name'>Cristina Salazar</p>
                <div className="saltie-links">
                  <a className='saltie__icon' href='https://github.com/a-poco' target='blank'><FaGithubSquare /></a>
                  <a className='saltie__icon' href='https://www.linkedin.com/in/cristinasalazarmunguia/' target='blank'><FaLinkedin/></a>
                </div>
              </div>
              <div className='about__saltie'>
              <img className='saltie-img' src='teamPhotos/alexander.png' alt="Alex" />
              <p className='saltie-name'>Alexander Städtler</p>
              <div className="saltie-links">
                <a className='saltie__icon' href='https://github.com/a-urbanite' target='blank'><FaGithubSquare /></a>
                <a className='saltie__icon' href='https://www.linkedin.com/in/alexander-staedtler/' target='blank'><FaLinkedin/></a>
              </div>

              </div>
              <div className='about__saltie'>
              <img className='saltie-img' src='teamPhotos/Ludwig.png' alt="Ludwig" />
              <p className='saltie-name'>Ludwig Slettingdalen</p>
              <div className="saltie-links">
                <a className='saltie__icon' href='https://github.com/406322' target='blank'><FaGithubSquare /></a>
                <a className='saltie__icon' href='https://www.linkedin.com/in/ludwig-slettingdalen/' target='blank'><FaLinkedin/></a>
              </div>


              </div>
              <div className='about__saltie'>
              <img className='saltie-img' src='teamPhotos/Nemanja.png' alt="Nemanja" />
              <p className='saltie-name'>Nemanja Dunic</p>

              <div className="saltie-links">
                <a className='saltie__icon' href='https://github.com/dunicn' target='blank'><FaGithubSquare /></a>
                <a className='saltie__icon' href='https://www.linkedin.com/in/nemanjadunic/' target='blank'><FaLinkedin/></a>
              </div>


              </div>
            </div>
          </div>
      </section>
     </>
  )
}

export default About