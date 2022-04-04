import { useAppSelector } from "../../redux/hooks";
import './ProfilePage.css'
import Gallery from '../../components/Gallery/Gallery';
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";


export const ProfilePage = ({pets, setData} : any) => {
  const loggedInUser = useAppSelector((state) => state.loggedInUser)


  return (
    <div className='userForm__wrapper'>
      <Header />
      <h2 className='profile__Greeter'>Welcome {loggedInUser.name.charAt(0).toUpperCase()+ loggedInUser.name.slice(1)}! <br></br> This is your Profile:</h2>
      <Link to='DogForm' className="add_pet"  >Add a pet</Link>
      <Gallery setData={setData} pets={pets.filter((pet: any) => pet.ownerEmail === loggedInUser.email)}/>
    </div>
  )
}
