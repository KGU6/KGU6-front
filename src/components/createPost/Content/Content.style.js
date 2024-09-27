import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const PlaceContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: var(--weight-bold);

  & > svg {
    margin-right: 8px;
  }
`;

export const IconBox = styled.div`
  margin-left: auto;
  padding: 6px;

  display: flex;
  align-items: center;

  border-radius: 20px;
`;

export const IconButton = styled.button`
  background-color: ${(props) => props.$isActive && '#DFF6C5'};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  width: 30px;
  height: 30px;

  & > svg {
    width: 20px;
  }
`;

export const Quill = styled(ReactQuill)`
  min-height: 150px;
  max-height: 200px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 80px;
`;

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
};
