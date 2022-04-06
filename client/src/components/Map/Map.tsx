import React, { useMemo } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '99vh'
};

function Map ({pets, setData}: any) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBGt7x-R0JK3B6wulskJbMLVZ4cAN4Yy4g"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

return isLoaded ? (
    <GoogleMap
      center={{ lat: 59.33, lng: 18.0465 }}
      zoom={15}
      mapContainerStyle={containerStyle}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {pets.map((pet: any) => 
        <Marker key={pet._id} position={{lat: pet.lat, lng:pet.lng}} />
        )}

    </GoogleMap>
) : <></>

}

export default Map;