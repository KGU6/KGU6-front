import GoogleMapCP from '@/components/GoogleMap/index.jsx';
import DatePicker from '@/components/createPost/DatePicker.jsx';
import { Title } from '@/components/createPost/createPost.style.js';
import KeywordList from '@/components/createPost/KeywordList/index.jsx';

const CreatePostPage = () => {
  return (
    <>
      <Title placeholder='제목을 입력하세요' />
      <DatePicker />
      <GoogleMapCP />
      <KeywordList />
    </>
  );
};

export default CreatePostPage;
