import { useState } from 'react'
import Gallery from '../../components/Gallery/Gallery'
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar'
import Map from '../../components/Map/Map';
import './HomePage.css'



const HomePage = ({pets, setData}: any) => {

  const [view, setView] = useState('map')

  const switchView = () => {
    if (view === 'map') {
      setView('list')
    } else {
      setView('map')
    }
  }

  return (
    <main className='home-page'>
      <Header />
      <SearchBar setData={setData} pets={pets}/>
      <button className='home-page__switch-view-btn' onClick={switchView}>Switch view</button>
      { view === 'list' && <Gallery setData={setData} pets={pets}/>}
      { view=== 'map' && <div className='home-page__map-container'><Map setData={setData} pets={pets} /></div>}
    </main>
  )
}

export default HomePage