import React from 'react'
import Header from '../../components/Header/Header'
import SearchBar from '../../components/SearchBar/SearchBar'
import Map from '../../components/Map/Map'
import MyComponent from '../../components/Map2/Map2'
import { useNavigate } from "react-router-dom"

const MapPage = ({pets, setData}: any) => {


    const navigate = useNavigate()

    const navigateToListView = () => {
      navigate('/gallery')
    }
  
    const navigateToMapView = () => {
      navigate('/mapview')
    }

  return (
    <div>
        <Header />
      <SearchBar setData={setData} pets={pets}/>
      <span>
        <button onClick={navigateToListView}>list view</button>
        <button onClick={navigateToMapView}>map view</button>    
      </span>
        <h1>MapPage</h1>
        {/* <Map /> */}
        <MyComponent setData={setData} pets={pets}></MyComponent>
        {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBGt7x-R0JK3B6wulskJbMLVZ4cAN4Yy4g&callback=initMap&v=weekly&channel=2" defer></script>
        <div id="google-map" className='map-container'></div>
        <script>
        function initMap() {
            // The location of Uluru
            const uluru = { lat: -25.344, lng: 131.036 };
            // The map, centered at Uluru
            const map = new google.maps.Map(document.getElementById("google-map"), {
                zoom: 4,
                center: uluru,
            });
            window.map = map
        </script> */}
    </div>
  )
}

export default MapPage