import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Link, useNavigate } from "react-router-dom"
import { useLocation } from 'react-router-dom';
import { Pet, Pets } from '../../types'
import './ProfileCard.css'
import { url } from "../App/App"
import axios from 'axios'
import { MdDeleteOutline, MdOutlineMailOutline } from "react-icons/md";
import { BiEdit, BiChat } from "react-icons/bi";

interface ProfileCardProps {
    pet: Pet;
    setData: any
}

const ProfileCard = ({pet, setData}: ProfileCardProps) => {
  const loggedInUser = useAppSelector((state) => state.loggedInUser)
  const [ isClicked, toggleisClicked ] = useState(false);
  const navigate = useNavigate()
  const location = useLocation();

  useEffect(() => {
    if (location.pathname==='/Profile') {
      toggleisClicked(true)
    }
  }, []);

  const deleteProfile = async (id: string) => {
    // console.log('id', id)
    try {
      fetch(`${url}/api/pets/${id}`, { method: 'DELETE'})
    } catch (err: any) {
      console.log(err.message)
    }

    const result = await axios.get(`${url}/api/pets`)
    setData(result.data)
  }

  const updateProfile = (pet: Pet) => {
    navigate('/Profile/DogUpdateForm', {state: {pet: pet}})
  } 

  const toggle = () => {
    if (loggedInUser.email === '') {
      return navigate('/SignIn')
    }
    toggleisClicked(!isClicked)
  }

  return (
    <article className={isClicked ? 'profileCard--clicked' : 'profileCard'}>
        <figure className='profileCard__photo'>
          <img className='profileCard__image' src={pet.image} alt={pet.breed}/>
        </figure>
        <p className='profileCard__name'>{pet.name}</p>
        <p>{pet.breed}</p>
        <p>Age: {pet.age}</p>
        <p hidden={!isClicked}>Gender: {pet.gender}</p>
        <p className='descr' hidden={!isClicked}>Description: {pet.description}</p>
        <p hidden={!isClicked}>Owner: {pet.ownerName}</p>
        <p className="profileCard__playDate"hidden={!isClicked}>Set a play date!</p>
        { location.pathname==='/' && <a className='profileCard__email profile' hidden={!isClicked} href={`mailto:${pet.ownerEmail}?subject=Hey! let our pets play!`}><MdOutlineMailOutline/></a> }
        { location.pathname==='/' &&  <Link className='profileCard__chat profile' hidden={!isClicked} to='/Profile/Chat'> <BiChat/></Link> }
        <br/>
        { location.pathname==='/' && <button className='profileCard__btn' onClick={toggle}>{isClicked ? 'Show less' : 'Show more'}</button> }
        { location.pathname==='/Profile' && <button className='profileCard__edit' onClick={() => updateProfile(pet)}><BiEdit/></button>}
        { location.pathname==='/Profile' && <button className='profileCard__delete' onClick={() => deleteProfile(pet._id)}><MdDeleteOutline/></button> }
        {/* <Link to='DogUpdateForm?test' className="profileCard__btn" pet={pet}>Update pet</Link> */}
        
        
    </article>
  )
}

export default ProfileCard