// import React from 'react';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { useState } from 'react';

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const containerStyle = {
  width: '100%',
  height: '200px',
  borderRadius: '5px',
};

const center = {
  lat: 37.5665,
  lng: 126.978,
};

const GoogleMapCP = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_API_KEY,
  });

  const [map, setMap] = useState(null);

  const onLoad = function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);

    setMap(map);
  };

  const onUnmount = function callback(map) {
    setMap(null);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{ disableDefaultUI: true }}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {/* Child components, such as markers, info windows, etc. */}
      <MarkerF
        position={center}
        icon={
          'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
        }
      ></MarkerF>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default GoogleMapCP;
