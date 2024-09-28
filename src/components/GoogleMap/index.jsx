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
  const [placeDetails, setPlaceDetails] = useState({ country: '', city: '' });

  const extractAddressComponent = (place, type) => {
    const component = place.address_components.find((comp) =>
      comp.types.includes(type)
    );
    return component ? component.long_name : 'Not found';
  };

  const handlePlaceSelect = (place) => {
    const service = new window.google.maps.places.PlacesService(map);

    const request = {
      query: place,
      fields: ['name', 'geometry', 'formatted_address', 'place_id'],
    };

    service.findPlaceFromQuery(request, (results, status) => {
      if (
        status === window.google.maps.places.PlacesServiceStatus.OK &&
        results
      ) {
        const selectedPlace = results[0];
        const placeId = selectedPlace.place_id;

        // Call getDetails to retrieve full address components
        getPlaceDetails(placeId, service);
      }
    });
  };

  const getPlaceDetails = (placeId, service) => {
    const request = {
      placeId,
    };

    service.getDetails(request, (place, status) => {
      if (
        status === window.google.maps.places.PlacesServiceStatus.OK &&
        place
      ) {
        console.log(place);
        const country = extractAddressComponent(place, 'country');
        const city = extractAddressComponent(place, 'locality');

        setPlaceDetails({ country, city });
        map.setCenter(place.geometry.location);
        console.log('Country:', country);
        console.log('City:', city);
      }
    });
  };

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
