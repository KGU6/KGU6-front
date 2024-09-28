import {
  CommentInputBoxContainer,
  CommentInputWrap,
} from './CommentList.style.js';
import { useState } from 'react';
import UpArrowIcon from '@/assets/icons/up-arrow-icon.svg?react';
import BasicUserIcon from '@/assets/icons/basic-user-icon.svg?react';

const CommentInputBox = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSubmit(input); // 상위 컴포넌트로 input 값을 전달
      setInput(''); // 입력란 초기화
    }
  };

  return (
    <CommentInputBoxContainer>
      <BasicUserIcon />
      <CommentInputWrap onSubmit={handleSubmit}>
        <input
          placeholder="댓글을 입력해주세요!"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSubmit}>
          <UpArrowIcon />
        </button>
      </CommentInputWrap>
    </CommentInputBoxContainer>
  );
};

export default CommentInputBox;
