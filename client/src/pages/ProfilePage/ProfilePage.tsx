import { useAppSelector } from "../../redux/hooks";
import './ProfilePage.css'
import Gallery from '../../components/Gallery/Gallery';
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";


export const ProfilePage = ({pets, setData} : any) => {
  const loggedInUser = useAppSelector((state) => state.loggedInUser)


  return (
    <div className='profile-user'>
      <Header />
      <h2 className='profile__greeter'>Welcome {loggedInUser.name.charAt(0).toUpperCase()+ loggedInUser.name.slice(1)}! This is your Profile:</h2>
      <div className="div__add-pet-btn"> 
        <Link to='DogForm' className="profile__add-pet-btn"  >Add a pet</Link>
      </div>
      <Gallery setData={setData} pets={pets.filter((pet: any) => pet.ownerEmail === loggedInUser.email)}/>
    </div>
  )
}
