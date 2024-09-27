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

function Content({ id, content, updateContent }) {
  return (
    <>
      <PlaceContainer>
        <LocationIcon />
        {content.place.name}
        <IconBox>
          <IconButton
            $isActive={content.status === 'GOOD'}
            onClick={() => {
              if (content.status !== 'GOOD') {
                updateContent(id, 'status', 'GOOD');
              }
            }}
          >
            <GoodIcon />
          </IconButton>{' '}
          <IconButton
            $isActive={content.status === 'NOT_BAD'}
            onClick={() => {
              if (content.status !== 'NOT_BAD') {
                updateContent(id, 'status', 'NOT_BAD');
              }
            }}
          >
            <NotBadIcon />
          </IconButton>
          <IconButton
            $isActive={content.status === 'BAD'}
            onClick={() => {
              if (content.status !== 'BAD') {
                updateContent(id, 'status', 'BAD');
              }
            }}
          >
            <BadIcon />
          </IconButton>
        </IconBox>
      </PlaceContainer>
      <Quill
        theme='snow'
        value={content.value}
        onChange={(content) => {
          updateContent(id, 'content', content);
        }}
        modules={modules}
      />
    </>
  );
}

export default Content;
