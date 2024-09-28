import {
  ButtonBox,
  Container,
  Image,
  ImgFile,
  Label,
} from './MainImage.style.js';
import loginbg from '@/assets/images/loginbg.jpg';

const MainImage = ({ viewProfileImg, setViewProfileImg, setImgFile }) => {
  const fileHandler = (e) => {
    const selectedFile = e.target.files?.[0];
    setImgFile(selectedFile);
    if (selectedFile) {
      setViewProfileImg(URL.createObjectURL(selectedFile));
    }
  };

  const deleteImage = () => {
    setViewProfileImg(null);
    setImgFile(null);
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
