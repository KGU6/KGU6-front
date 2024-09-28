import 'react-quill/dist/quill.snow.css';
import {
  IconBox,
  IconButton,
  PlaceContainer,
  QuillEdi,
} from './Content.style.js';
import LocationIcon from '@/assets/icons/location-dot-icon.svg?react';
import CloudRedIcon from '@/assets/icons/cloud-red-icon.svg?react';
import CloudBlueIcon from '@/assets/icons/cloud-blue-icon.svg?react';
import CloutGrayIcon from '@/assets/icons/cloud-gray-icon.svg?react';
import { Quill } from 'react-quill';
import ImageUploader from 'quill-image-uploader';

Quill.register('modules/imageUploader', ImageUploader);

function Content({ id, content, updateContent }) {
  return (
    <>
      <PlaceContainer>
        <LocationIcon />
        {content.placeName}
        <IconBox>
          <IconButton
            $isActive={content.cloud === 'RED'}
            onClick={() => {
              if (content.cloud !== 'RED') {
                updateContent(id, 'cloud', 'RED');
              }
            }}
          >
            <CloudRedIcon />
          </IconButton>
          <IconButton
            $isActive={content.cloud === 'BLUE'}
            onClick={() => {
              if (content.cloud !== 'BLUE') {
                updateContent(id, 'cloud', 'BLUE');
              }
            }}
          >
            <CloudBlueIcon />
          </IconButton>
          <IconButton
            $isActive={content.cloud === 'GRAY'}
            onClick={() => {
              if (content.cloud !== 'GRAY') {
                updateContent(id, 'cloud', 'GRAY');
              }
            }}
          >
            <CloutGrayIcon />
          </IconButton>
        </IconBox>
      </PlaceContainer>
      <QuillEdi
        theme='snow'
        value={content.content}
        onChange={(content) => {
          updateContent(id, 'content', content);
        }}
        modules={modules}
      />
    </>
  );
}

export default Content;

export const modules = {
  toolbar: {
    container: [
      [{ header: [2, 3, 4, 5, 6, false] }],
      [{ align: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, 'link'],
      [
        {
          color: [
            '#000000',
            '#e60000',
            '#ff9900',
            '#ffff00',
            '#008a00',
            '#0066cc',
            '#9933ff',
            '#ffffff',
            '#facccc',
            '#ffebcc',
            '#ffffcc',
            '#cce8cc',
            '#cce0f5',
            '#ebd6ff',
            '#bbbbbb',
            '#f06666',
            '#ffc266',
            '#ffff66',
            '#66b966',
            '#66a3e0',
            '#c285ff',
            '#888888',
            '#a10000',
            '#b26b00',
            '#b2b200',
            '#006100',
            '#0047b2',
            '#6b24b2',
            '#444444',
            '#5c0000',
            '#663d00',
            '#666600',
            '#003700',
            '#002966',
            '#3d1466',
            'custom-color',
          ],
        },
        { background: [] },
      ],
      ['image'],
    ],
  },
  imageUploader: {
    upload: (file) => {
      return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append('image', file);

        fetch(
          'https://api.imgbb.com/1/upload?key=c93b7d1d3f7a145263d4651c46ba55e4',
          {
            method: 'POST',
            body: formData,
          }
        )
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            resolve(result.data.url);
          })
          .catch((error) => {
            reject('Upload failed');
            console.error('Error:', error);
          });
      });
    },
  },
};
