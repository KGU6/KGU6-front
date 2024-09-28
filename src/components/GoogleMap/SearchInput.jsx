import { useRef } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { Input } from '../SearchPage/SearchHeader.jsx';
//
// const inputStyle = {
//   boxSizing: 'border-box',
//   border: '1px solid transparent',
//   width: '80%',
//   height: '38px',
//   padding: '0 12px',
//   borderRadius: '3px',
//   boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
//   fontSize: '14px',
//   outline: 'none',
//   textOverflow: 'ellipses',
//   position: 'absolute',
//   right: '8%',
//   top: '11px',
//   marginLeft: '-120px',
// };

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
    console.log(latitude, longitude);

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
      <Input type='text' placeholder='여행지, 키워드를 검색해 보세요' />
    </Autocomplete>
  );
};

export default SearchInput;

// handleSearch 예시
// const a = (latitude, longitude, placeName, placeAddress) => {
//   구현할 기능
//   console.log(latitude, longitude, placeName, placeAddress);
// };
