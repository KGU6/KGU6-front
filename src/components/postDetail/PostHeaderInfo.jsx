import { Date, InfoBox } from './postDetail.style.js';
import BasicUserIcon from '@/assets/icons/basic-user-icon.svg?react';

const PostHeaderInfo = ({ profileImg, name, time }) => {
  return (
    <InfoBox>
      <div>
        {profileImg ? <img src={profileImg} /> : <BasicUserIcon />}
        {name}
      </div>
      <Date>{time}</Date>
    </InfoBox>
  );
};

export default PostHeaderInfo;
