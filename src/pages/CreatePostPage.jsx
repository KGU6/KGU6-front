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
import SearchScreen from './search-screen/SearchScreen.jsx';

const CreatePostPage = () => {
  const [title, setTitle] = useState('');
  const [viewProfileImg, setViewProfileImg] = useState('');
  const [contentList, setContentList] = useState([]);
  const [keywordList, setKeywordList] = useState([]);
  const [date, setDate] = useState();

  const [showSearchPage, setShowSearchPage] = useState(false);

  const addContent = (content) => {
    setContentList((prev) => [...prev, content]);
  };

  const showSearchPageHandle = () => {
    setShowSearchPage(true);
  };

  const updateContent = (id, key, data) => {
    setContentList((prevContentList) =>
      prevContentList.map((content, index) =>
        index === id ? { ...content, [key]: data } : content
      )
    );
  };

  if (showSearchPage) {
    return (
      <SearchScreen
        recentKeywords={[]}
        setShowSearchPage={setShowSearchPage}
        addContent={addContent}
      />
    );
  }

  return (
    <>
      <Title
        placeholder='제목을 입력하세요'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <DatePicker date={date} setDate={setDate} />
      <GoogleMapCP
        placeList={contentList.map((item) => ({
          status: item.cloud,
          location: { lat: item.lat, lng: item.lng },
        }))}
      />
      <MainImage
        viewProfileImg={viewProfileImg}
        setViewProfileImg={setViewProfileImg}
      />
      {contentList.map((item, index) => (
        <Content
          key={index}
          id={index}
          content={item}
          updateContent={updateContent}
        />
      ))}
      <AddContent addContent={showSearchPageHandle} />
      <KeywordList keywordList={keywordList} setKeywordList={setKeywordList} />
      <ButtonBox>
        <TempSaveButton>임시저장</TempSaveButton>
        <SaveButton
          onClick={() => {
            console.log(title, viewProfileImg, contentList, keywordList);
            if (date?.end && date.start) {
              console.log(date.end.year, date.end.month, date.end.day);
              console.log(date.start.year, date.start.month, date.start.day);
            }
          }}
        >
          저장
        </SaveButton>
      </ButtonBox>
    </>
  );
};

export default CreatePostPage;
