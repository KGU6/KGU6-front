import {
  Container,
  Modal,
  ModalItem,
  ShowModalButton,
} from './Content.style.js';
import { useState } from 'react';

const Content = () => {
  const [contentList, setContentList] = useState([]);
  const [focus, setFocus] = useState();

  return (
    <Container>
      <ContentItem onClick={() => {}} isFocus={''} />
    </Container>
  );
};

export default Content;

const ContentItem = ({ isFocus }) => {
  return (
    <div>
      <ShowModalButton>+</ShowModalButton>
      {isFocus && (
        <Modal>
          <ModalItem>이미지</ModalItem>
          <ModalItem>장소</ModalItem>
        </Modal>
      )}
    </div>
  );
};
