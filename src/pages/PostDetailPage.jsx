import GoogleMapCP from "@/components/GoogleMap";
import {
  Title,
  ArticleWrap,
  HeartIcon,
  LikesBox,
} from "@/components/postDetail/postDetail.style.js";
import KeyWord from "../components/common/KeyWord.jsx";
import { KeywordListBox } from "../components/createPost/KeywordList/KeywordList.style.js";
import CommentList from "../components/postDetail/CommentList/index.jsx";
import PostHeaderInfo from "../components/postDetail/PostHeaderInfo.jsx";
import LocationIcon from "@/assets/icons/location-dot-icon.svg?react";
import { PlaceContainer } from "@/components/createPost/Content/Content.style.js";
import { Section } from "../components/postDetail/postDetail.style.js";
import { useState } from "react";

const PostDetailPage = () => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  return (
    <>
      <Title>시드니에서의 하루, 해변부터 도시까지</Title>
      <PostHeaderInfo profileImg={""} name={"이준석"} time={"2024.09.25"} />
      <GoogleMapCP placeList={[]} />
      <Section>
        <Article place={"본다이 비치"}>
          {`<p>` +
            `아침 일찍 시드니의 본다이 비치로 향했다. 햇살이 따스하게 해변을 감싸고, 푸른 바다와 함께 하루를 시작하는 기분이 그야말로 상쾌했다. 서퍼들이 파도를 타고, 조깅하는 사람들로 활기찬 이곳은 시드니의 자유로운 분위기를 만끽할 수 있는 최고의 장소다.` +
            `</p>` +
            `<p>` +
            `모래사장을 천천히 걸으며 해변의 평화로움을 느낀 후, 근처 카페에서 커피 한 잔을 들고 바다를 바라보며 여유로운 시간을 보냈다.` +
            `</p>`}
        </Article>
        <Article place={"본다이 비치"}>
          {`<p>` +
            `아침 일찍 시드니의 본다이 비치로 향했다. 햇살이 따스하게 해변을 감싸고, 푸른 바다와 함께 하루를 시작하는 기분이 그야말로 상쾌했다. 서퍼들이 파도를 타고, 조깅하는 사람들로 활기찬 이곳은 시드니의 자유로운 분위기를 만끽할 수 있는 최고의 장소다.` +
            `</p>` +
            `<p>` +
            `모래사장을 천천히 걸으며 해변의 평화로움을 느낀 후, 근처 카페에서 커피 한 잔을 들고 바다를 바라보며 여유로운 시간을 보냈다.` +
            `</p>`}
        </Article>
      </Section>
      <KeywordListBox>
        <KeyWord str={"호주"} />
        <KeyWord str={"자연"} />
        <KeyWord str={"힐링"} />
        <KeyWord str={"시드니"} />
      </KeywordListBox>
      <LikesBox>
        <HeartIcon liked={liked} onClick={handleLikeClick} />
        <p>202</p>
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
