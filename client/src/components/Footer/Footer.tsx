import './Footer.css'
import { useAppSelector } from "../../redux/hooks";

const Footer = () => {

const loggedInUser = useAppSelector((state) => state.loggedInUser.email)

  return (
    <div className='Footer'>
      {loggedInUser && <p className='Footer__text'>Logged in as {loggedInUser}</p>}
      {!loggedInUser && <p className='Footer__text'>Currently not logged in</p>}
    </div>
  )
}

export default Footer