import GoogleMapCP from '@/components/GoogleMap/index.jsx';
import DatePicker from '@/components/createPost/DatePicker.jsx';
import KeywordList from '@/components/createPost/KeywordList/index.jsx';
import {
  Title,
  ButtonBox,
  SaveButton,
  TempSaveButton,
} from '../components/createPost/createPost.style.js';
import Content from '../components/createPost/Content/index.jsx';
import { useState } from 'react';
import AddPlace from '../components/createPost/AddPlace/index.jsx';

const CreatePostPage = () => {
  const [contentList, setContentList] = useState([
    '남대문',
    '동대문',
    '63빌딩',
  ]);

  return (
    <>
      <Title placeholder='제목을 입력하세요' />
      <DatePicker />
      <GoogleMapCP />
      {contentList.map((item, index) => (
        <Content key={index} place={item} />
      ))}
      <AddPlace />
      <KeywordList />
      <ButtonBox>
        <TempSaveButton>임시저장</TempSaveButton>
        <SaveButton>저장</SaveButton>
      </ButtonBox>
    </>
  );
};

export default CreatePostPage;
