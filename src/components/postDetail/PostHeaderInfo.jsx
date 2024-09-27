import { InfoBox } from './postDetail.style.js';

const PostHeaderInfo = ({ profileImg, name, time }) => {
  return (
    <InfoBox>
      <div>
        <img src={profileImg} /> {name}
      </div>
      <div>{time}</div>
    </InfoBox>
  );
};

export default PostHeaderInfo;
