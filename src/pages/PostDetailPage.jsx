import GoogleMapCP from '@/components/GoogleMap';
import {
  Title,
  InfoBox,
  ArticleWrap,
} from '@/components/postDetail/postDetail.style.js';
import KeyWord from '../components/common/KeyWord.jsx';
import { KeywordListBox } from '../components/createPost/KeywordList/KeywordList.style.js';
import CommentList from '../components/postDetail/CommentList/index.jsx';
import PostHeaderInfo from '../components/postDetail/PostHeaderInfo.jsx';

const PostDetailPage = () => {
  return (
    <>
      <Title>제목</Title>
      <PostHeaderInfo profileImg={''} name={'이준석'} time={'2024.09.25'} />
      <GoogleMapCP />
      <Article>{`<h3>` + `dkssdg` + `</h3>`}</Article>
      <KeywordListBox>
        <KeyWord str={'item'} />
        <KeyWord str={'item'} />
        <KeyWord str={'item'} />
        <KeyWord str={'item'} />
        <KeyWord str={'item'} />
      </KeywordListBox>
      <CommentList comments={[]} />
    </>
  );
};

export default PostDetailPage;

export const Article = ({ children }) => {
  return <ArticleWrap dangerouslySetInnerHTML={{ __html: children }} />;
};
