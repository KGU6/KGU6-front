import { CommentInputBoxContainer } from './CommentList.style.js';
import { useState } from 'react';
import UpArrowIcon from '@/assets/icons/up-arrow-icon.svg?react';
const CommentInputBox = () => {
  const [input, setInput] = useState('');

  return (
    <CommentInputBoxContainer>
      <input
        placeholder={'댓글을를 입력해주세요!'}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>
        <UpArrowIcon />
      </button>
    </CommentInputBoxContainer>
  );
};

export default CommentInputBox;
