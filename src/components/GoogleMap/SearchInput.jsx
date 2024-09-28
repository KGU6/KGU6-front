import { useRef } from 'react';
import { Autocomplete } from '@react-google-maps/api';
//
const inputStyle = {
  border: 'none',
  outline: 'none',
  flex: '1',
  fontSize: '13px',
  backgroundColor: 'transparent',
  width: '45vw',
};

const SearchInput = ({ handleSearch }) => {
  const autocompleteRef = useRef();
  const onLoadAutocomplete = (autocomplete) => {
    autocompleteRef.current = autocomplete;
  };

  const handlePlaceChanged = () => {
    const { geometry } = autocompleteRef.current.getPlace();
    const location = geometry.location;
    // 위도, 경도
    const latitude = location.lat();
    const longitude = location.lng();

    // 장소 이름
    const placeName = autocompleteRef.current.gm_accessors_.place.pt.place.name;
    // 장소 주소
    const placeAddress =
      autocompleteRef.current.gm_accessors_.place.pt.place.formatted_address;
    handleSearch(latitude, longitude, placeName, placeAddress);
  };

  return (
    <Autocomplete
      onLoad={onLoadAutocomplete}
      onPlaceChanged={handlePlaceChanged}
    >
      {/*인풋 컴포넌트 변경 필요*/}
      <input
        type='text'
        placeholder='여행지, 키워드를 검색해 보세요'
        style={inputStyle}
      />
    </Autocomplete>
  );
};

export default SearchInput;
