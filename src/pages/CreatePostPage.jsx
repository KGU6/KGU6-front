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
import AddContent from '../components/createPost/AddContent/index.jsx';
import MainImage from '../components/createPost/MainImage/index.jsx';

const CreatePostPage = () => {
  const [contentList, setContentList] = useState([]);

  const addContent = (content) => {
    setContentList((prev) => [...prev, content]);
  };

  const updateContent = (id, key, data) => {
    setContentList((prevContentList) =>
      prevContentList.map((content) =>
        content.id === id ? { ...content, [key]: data } : content
      )
    );
  };

  return (
    <>
      <Title placeholder='제목을 입력하세요' />
      <DatePicker />
      <GoogleMapCP
        placeList={contentList.map((item) => ({
          status: item.status,
          location: { lat: item.place.lat, lng: item.place.lng },
        }))}
      />
      <MainImage />
      {contentList.map((item, index) => (
        <Content
          key={index}
          id={index}
          content={item}
          updateContent={updateContent}
        />
      ))}
      <AddContent addContent={addContent} />
      <KeywordList />
      <ButtonBox>
        <TempSaveButton>임시저장</TempSaveButton>
        <SaveButton>저장</SaveButton>
      </ButtonBox>
    </>
  );
};

export default CreatePostPage;
