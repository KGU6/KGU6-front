import {
  CommentInputBoxContainer,
  CommentInputWrap,
} from './CommentList.style.js';
import { useState } from 'react';
import UpArrowIcon from '@/assets/icons/up-arrow-icon.svg?react';
import BasicUserIcon from '@/assets/icons/basic-user-icon.svg?react';
import { uploadComment } from '../../../api/uploadComment.jsx';

const CommentInputBox = () => {
  const [input, setInput] = useState('');

  const uploadInput=(input)=>{
    uploadComment(input);
  }

  return (
    <CommentInputBoxContainer>
      {/*profileImg 없을 경우 조건문 추가하기*/}
      <BasicUserIcon />
      <CommentInputWrap>
        <input
          placeholder={'댓글을를 입력해주세요!'}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>
          <UpArrowIcon />
        </button>
      </CommentInputWrap>
    </CommentInputBoxContainer>
  );
};

export default CommentInputBox;
