import { useState } from 'react';
import {
  ButtonBox,
  Container,
  Image,
  ImgFile,
  Label,
} from './MainImage.style.js';
import loginbg from '@/assets/images/loginbg.jpg';

const MainImage = () => {
  const [viewProfileImg, setViewProfileImg] = useState();

  const fileHandler = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setViewProfileImg(reader.result);
      };
      reader.onerror = () => {
        throw new Error('file reading error');
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteImage = () => {
    setViewProfileImg(null);
  };

  return (
    <Container>
      <Image>
        <img
          src={viewProfileImg ? viewProfileImg : loginbg}
          alt='대표 이미지'
        />
      </Image>
      <ImgFile
        type='file'
        onChange={fileHandler}
        id='file'
        accept='image/jpeg, image/png'
        name='profile'
      />
      <ButtonBox>
        <button onClick={deleteImage}>기본이미지 선택</button>
        <Label htmlFor='file'>대표이미지 선택</Label>
      </ButtonBox>
    </Container>
  );
};

export default MainImage;
