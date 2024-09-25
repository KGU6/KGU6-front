import { KeywordInput, KeywordListBox } from './KeywordList.style.js';
import { useState } from 'react';

const KeywordList = () => {
  const [input, setInput] = useState('');
  const [keywordList, setKeywordList] = useState([]);

  const onKeyUpHandler = (e) => {
    if (
      e.code === 'Enter' &&
      input.trim() &&
      keywordList.length < 10 &&
      !keywordList.includes(e.target.value)
    ) {
      setInput('');
      setKeywordList((prev) => [...prev, e.target.value]);
    }
  };

  const deleteKeyword = (indexToDelete) => {
    setKeywordList((prev) =>
      prev.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <>
      <KeywordInput
        value={input}
        placeholder={'키워드를 입력하세요 (최대 10개)'}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyUp={onKeyUpHandler}
      />
      <KeywordListBox>
        {keywordList.map((item, index) => (
          <div key={index}>
            {item}
            <button
              onClick={() => {
                deleteKeyword(index);
              }}
            >
              삭제
            </button>
          </div>
        ))}
      </KeywordListBox>
    </>
  );
};

export default KeywordList;
