import PlusIcon from '@/assets/icons/plus-icon.svg?react';
import { Container, PlusButton } from './AddPlace.style.js';

const AddPlace = () => {
  return (
    <Container>
      <PlusButton>
        <PlusIcon />
      </PlusButton>
      장소 추가하기
    </Container>
  );
};

export default AddPlace;
