import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import ProfileCard from '../ProfileCard/ProfileCard'
import './Map.css'

const containerStyle = {
  width: '100%',
  height: '80vh'
};

const center = { lat: 59.33, lng: 18.0465 }

const Map = ({pets, setData}: any) => {


  const [selectedMarker, setselectedMarker] = useState<any>(null)

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBGt7x-R0JK3B6wulskJbMLVZ4cAN4Yy4g"
  })


return isLoaded ? (
    <GoogleMap
      center={center}
      zoom={14}
      mapContainerStyle={containerStyle}
      clickableIcons={false}
    >
      {pets.map((pet: any) => 
        <Marker 
          key={pet._id} 
          position={{lat: pet.lat, lng:pet.lng}} 
          onClick={() => {setselectedMarker(pet)}}
        />
        )}

      { selectedMarker && (<InfoWindow
        position={{lat: selectedMarker.lat, lng:selectedMarker.lng}}
        onCloseClick={() => {setselectedMarker(null)}}>
          <ProfileCard pet={selectedMarker} key={selectedMarker._id} setData={setData} />
      </InfoWindow>)}

    </GoogleMap>
) : <></>

}

export default Map;