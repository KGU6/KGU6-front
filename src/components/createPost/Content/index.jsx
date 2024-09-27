import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import {
  IconBox,
  IconButton,
  modules,
  PlaceContainer,
  Quill,
} from './Content.style.js';
import LocationIcon from '@/assets/icons/location-dot-icon.svg?react';
import GoodIcon from '@/assets/icons/good-icon.svg?react';
import NotBadIcon from '@/assets/icons/not-bad-icon.svg?react';
import BadIcon from '@/assets/icons/bad-icon.svg?react';

function Content({ place }) {
  const [value, setValue] = useState('');
  const [status, setStatus] = useState('GOOD');
  return (
    <>
      <PlaceContainer>
        <LocationIcon />
        {place}
        <IconBox>
          <IconButton
            $isActive={status === 'GOOD'}
            onClick={() => setStatus('GOOD')}
          >
            <GoodIcon />
          </IconButton>
          <IconButton
            $isActive={status === 'NOT_BAD'}
            onClick={() => setStatus('NOT_BAD')}
          >
            <NotBadIcon />
          </IconButton>
          <IconButton
            $isActive={status === 'BAD'}
            onClick={() => setStatus('BAD')}
          >
            <BadIcon />
          </IconButton>
        </IconBox>
      </PlaceContainer>
      <Quill theme='snow' value={value} onChange={setValue} modules={modules} />
    </>
  );
}

export default Content;
