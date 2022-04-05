import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBGt7x-R0JK3B6wulskJbMLVZ4cAN4Yy4g' }}
          defaultCenter={ {
            lat: 59.33,
            lng: 18.0465
          }}
          defaultZoom={14}
        >
          <AnyReactComponent
            lat={59.33}
            lng={18.0465}
            text="My Marker"
            
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
