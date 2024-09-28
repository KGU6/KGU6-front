import GoogleMapCP from '@/components/GoogleMap/index.jsx';
import DatePicker from '@/components/createPost/DatePicker.jsx';
import KeywordList from '@/components/createPost/KeywordList/index.jsx';
import {
  Title,
  ButtonBox,
  SaveButton,
  TempSaveButton,
  MainPlaceInput,
} from '../components/createPost/createPost.style.js';
import Content from '../components/createPost/Content/index.jsx';
import { useState } from 'react';
import AddContent from '../components/createPost/AddContent/index.jsx';
import MainImage from '../components/createPost/MainImage/index.jsx';
import SearchScreen from './search-screen/SearchScreen.jsx';
import { PostTravlelog } from '../api/TravlelogApi.js';
import { useNavigate } from 'react-router-dom';

const CreatePostPage = () => {
  const [title, setTitle] = useState('');
  const [mainPlace, setMainPlace] = useState('');
  const [viewProfileImg, setViewProfileImg] = useState('');
  const [imgFile, setImgFile] = useState(null);
  const [contentList, setContentList] = useState([]);
  const [keywordList, setKeywordList] = useState([]);
  const [date, setDate] = useState();
  const [showSearchPage, setShowSearchPage] = useState(false);
  const navigate = useNavigate();
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

  const registerHandel = async () => {
    const startDate = formatDate(
      date?.start.year,
      date?.start.month,
      date?.start.day
    );
    const endDate = formatDate(date?.end.year, date?.end.month, date?.end.day);

    const data = {
      title,
      startDate,
      endDate,
      placeContent: contentList,
      keywords: keywordList,
      mainPlace,
    };

    const response = await PostTravlelog(data, imgFile);
    navigate('/post/' + response.travelogId);
    console.log(response);
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
      <MainPlaceInput
        value={mainPlace}
        onChange={(e) => {
          setMainPlace(e.target.value);
        }}
        placeholder={'여행하신 장소를 입력해주세요!  ex) 대한민국 서울특별시'}
      />
      <MainImage
        viewProfileImg={viewProfileImg}
        setViewProfileImg={setViewProfileImg}
        setImgFile={setImgFile}
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
        <SaveButton onClick={registerHandel}>저장</SaveButton>
      </ButtonBox>
    </>
  );
};

export default CreatePostPage;

function formatDate(year, month, day) {
  // 두 자릿수가 되도록 padStart를 사용하여 앞에 0을 추가
  const formattedMonth = String(month).padStart(2, '0');
  const formattedDay = String(day).padStart(2, '0');

  // 새로운 형식으로 반환
  return `${year}-${formattedMonth}-${formattedDay}`;
}
