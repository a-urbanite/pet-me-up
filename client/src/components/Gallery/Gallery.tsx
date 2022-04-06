import { Pet } from '../../types'
import ProfileCard from '../ProfileCard/ProfileCard'
import './Gallery.css'
const Gallery = ( { pets, setData }: any) => {

  return (
    <div >
      <div className='Gallery'>
        {pets.map((pet: Pet) => 
          <ProfileCard pet={pet} key={pet._id} setData={setData} />
          )}
      </div>
    </div>
  )
}

export default Gallery