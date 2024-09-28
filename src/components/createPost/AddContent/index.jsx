import PlusIcon from '@/assets/icons/plus-icon.svg?react';
import { Container, PlusButton } from './AddContent.style.js';

const AddContent = ({ addContent }) => {
  return (
    <Container onClick={addContent}>
      <PlusButton>
        <PlusIcon />
      </PlusButton>
      장소 추가하기
    </Container>
  );
};

export default AddContent;
