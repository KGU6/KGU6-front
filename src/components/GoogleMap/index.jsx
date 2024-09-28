// import React from 'react';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { useEffect, useState } from 'react';

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const containerStyle = {
  width: '100%',
  minHeight: '150px',
  borderRadius: '5px',

  margin: '20px 0',
};

const center = {
  lat: 37.5665,
  lng: 126.978,
};
const myStyles = [
  {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [{ visibility: 'off' }],
  },
];

const GoogleMapCP = ({ placeList }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_API_KEY,
  });

  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map && placeList.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      placeList.forEach((place) => {
        bounds.extend(place.location);
      });
      map.fitBounds(bounds);
    }
  }, [map, placeList]);

  return isLoaded ? (
    <>
      <GoogleMap
        center={center}
        mapContainerStyle={containerStyle}
        zoom={15}
        onLoad={(map) => {
          setMap(map);
        }}
        onUnmount={() => {
          setMap(null);
        }}
        options={{ disableDefaultUI: true, styles: myStyles }}
      >
        {placeList.length > 0 &&
          placeList.map((place, index) => (
            <MarkerF
              key={index}
              position={place.location}
              icon={{
                url:
                  place.status === 'RED'
                    ? '/src/assets/icons/cloud-red-icon.svg'
                    : place.status === 'BLUE'
                      ? '/src/assets/icons/cloud-blue-icon.svg'
                      : '/src/assets/icons/cloud-gray-icon.svg',
              }}
            />
          ))}
      </GoogleMap>
    </>
  ) : (
    <></>
  );
};

export default GoogleMapCP;
