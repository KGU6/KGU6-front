import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

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

export const QuillEdi = styled(ReactQuill)`
  min-height: 150px;
  max-height: 200px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 80px;
`;
