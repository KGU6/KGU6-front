import { useState } from 'react';
import styled from 'styled-components';
import SearchHeader from '../../components/SearchPage/SearchHeader.jsx';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchContainer = styled.div`
  padding: 20px;
  width: 80vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const KeywordContainer = styled.div`
  margin-bottom: 20px;
`;

const KeywordTitle = styled.h3`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
`;

const KeywordList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Keyword = styled.span`
  background-color: ${(props) => (props.$recommended ? '#EFFDDE' : '#FFFFFF')};
  color: ${(props) => (props.$recommended ? '#7BA24F' : '#95989D')};
  border: 1px solid
    ${(props) => (props.$recommended ? 'transparent' : '#BBBEC2')};
  border-radius: 30px;
  padding: 8px 15px;
  font-size: 14px;
  margin: 5px;
  cursor: pointer;
  display: inline-block;
`;

const SearchScreen = ({ recentKeywords, setShowSearchPage, addContent }) => {
  const [recommendedKeywords] = useState([
    '서울',
    '오스트리아',
    '오사카',
    '나트랑',
    '가을',
    '제주도',
  ]);

  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  const handleSearch = (latitude, longitude, placeName, placeAddress) => {
    if (pathname !== 'create-post') {
      addContent({
        placeName,
        lat: latitude,
        lng: longitude,
        cloud: 'RED',
        content: '',
      });
      setShowSearchPage(false);
    } else {
      navigate('/search-results', {
        state: { latitude, longitude, placeName, placeAddress },
      });
    }
  };

  return (
    <SearchContainer>
      <SearchHeader
        goBack={() => {
          if (pathname !== 'create-post') {
            setShowSearchPage(false);
          } else {
            window.history.back();
          }
        }}
        handleSearch={handleSearch}
      />

      <KeywordContainer>
        <KeywordTitle>최근 검색어</KeywordTitle>
        <KeywordList>
          {recentKeywords?.length > 0 ? (
            recentKeywords.map((keyword, index) => (
              <Keyword key={index}>{keyword}</Keyword>
            ))
          ) : (
            <p>최근 검색어가 없습니다.</p>
          )}
        </KeywordList>
      </KeywordContainer>

      <KeywordContainer>
        <KeywordTitle>추천 검색어</KeywordTitle>
        <KeywordList>
          {recommendedKeywords.map((keyword, index) => (
            <Keyword key={index} $recommended={true}>
              {keyword}
            </Keyword>
          ))}
        </KeywordList>
      </KeywordContainer>
    </SearchContainer>
  );
};

export default SearchScreen;
