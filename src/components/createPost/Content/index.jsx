import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { modules, PlaceContainer, Quill } from './Content.style.js';
import LocationIcon from '@/assets/icons/location-dot-icon.svg?react';

function Content({ place }) {
  const [value, setValue] = useState('');

  return (
    <>
      <PlaceContainer>
        <LocationIcon />
        {place}
      </PlaceContainer>
      <Quill theme='snow' value={value} onChange={setValue} modules={modules} />
    </>
  );
}

export default Content;
