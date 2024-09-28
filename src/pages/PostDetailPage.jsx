import GoogleMapCP from '@/components/GoogleMap';
import {
  Title,
  ArticleWrap,
  LikesBox,
  HeartIconBtn,
} from '@/components/postDetail/postDetail.style.js';
import KeyWord from '../components/common/KeyWord.jsx';
import { KeywordListBox } from '../components/createPost/KeywordList/KeywordList.style.js';
import CommentList from '../components/postDetail/CommentList/index.jsx';
import PostHeaderInfo from '../components/postDetail/PostHeaderInfo.jsx';
import LocationIcon from '@/assets/icons/location-dot-icon.svg?react';
import { PlaceContainer } from '@/components/createPost/Content/Content.style.js';
import { Section } from '../components/postDetail/postDetail.style.js';
import { useEffect, useState } from 'react';
import HeartIcon from '@/assets/icons/heart-icon.svg?react';
import { getTravlelog } from '../api/TravlelogApi.js';
import { useLocation } from 'react-router-dom';

const PostDetailPage = () => {
  const [liked, setLiked] = useState(false);
  const [content, setContent] = useState();
  const pathname = useLocation().pathname.split('/')[2];
  useEffect(() => {
    (async () => {
      const response = await getTravlelog(pathname);
      setContent(response);
      console.log(response);
    })();
  }, []);
  const handleLikeClick = () => {
    setLiked((prevLiked) => !prevLiked);
    setContent((prev) => ({ ...prev, likes: prev.likes + 1 }));
  };

  if (!content) {
    return null;
  }

  const placeList = content.placeContent.map((item) => {
    return { location: { lat: item.lat, lng: item.lng } };
  });

  return (
    <>
      <Title>{content?.title}</Title>
      <PostHeaderInfo
        profileImg={''}
        name={content.memberName}
        time={content.createdAt.slice(0, 10)}
      />
      <GoogleMapCP placeList={placeList} />
      <Section>
        {content.placeContent.map((item) => (
          <Article key={item.createAt} place={item.placeName}>
            {item.content}
          </Article>
        ))}
      </Section>
      <KeywordListBox>
        {content.keywords.map((keyword, index) => (
          <KeyWord key={index} str={keyword} />
        ))}
      </KeywordListBox>
      <LikesBox>
        <HeartIconBtn $liked={liked} onClick={handleLikeClick}>
          <HeartIcon />
        </HeartIconBtn>
        <p>{content.likes}</p>
      </LikesBox>

      <CommentList comments={[]} />
    </>
  );
};

export default PostDetailPage;

export const Article = ({ children, place }) => {
  return (
    <>
      <PlaceContainer>
        <LocationIcon />
        {place}
      </PlaceContainer>
      <ArticleWrap dangerouslySetInnerHTML={{ __html: children }} />
    </>
  );
};
