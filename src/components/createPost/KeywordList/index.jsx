import { KeywordInput, KeywordListBox } from './KeywordList.style.js';
import { useState } from 'react';
import KeyWord from '../../common/KeyWord.jsx';

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
        maxLength={10}
      />
      <KeywordListBox>
        {keywordList.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              deleteKeyword(index);
            }}
          >
            <KeyWord str={item} />
          </button>
        ))}
      </KeywordListBox>
    </>
  );
};

export default KeywordList;
