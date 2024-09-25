import GoogleMapCP from '@/components/GoogleMap/index.jsx';
import DatePicker from '@/components/createPost/DatePicker.jsx';
import { Title } from '@/components/createPost/createPost.style.js';
import KeywordList from '@/components/createPost/KeywordList/index.jsx';
import { ButtonBox } from '../components/createPost/createPost.style.js';
import Content from '../components/createPost/Content/index.jsx';

const CreatePostPage = () => {
  return (
    <>
      <Title placeholder='제목을 입력하세요' />
      <DatePicker />
      <GoogleMapCP />
      <Content />
      <KeywordList />
      <ButtonBox>
        <button>임시저장</button>
        <button>저장</button>
      </ButtonBox>
    </>
  );
};

export default CreatePostPage;
