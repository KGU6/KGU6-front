import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import SearchHeader from "../../components/SearchPage/SearchHeader.jsx";

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
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 800;
`;

const KeywordList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Keyword = styled.span`
  background-color: ${(props) => (props.$recommended ? "#EFFDDE" : "#FFFFFF")};
  color: ${(props) => (props.$recommended ? "#7BA24F" : "#95989D")};
  border: 1px solid
    ${(props) => (props.$recommended ? "transparent" : "#BBBEC2")};
  border-radius: 30px;
  padding: 8px 15px;
  font-size: 14px;
  margin: 5px;
  cursor: pointer;
  display: inline-block;
`;

const SearchScreen = ({ recentKeywords, onSearchResults }) => {
  const [query, setQuery] = useState("");
  const [recommendedKeywords] = useState([
    "서울",
    "오스트리아",
    "오사카",
    "나트랑",
    "가을",
    "제주도",
  ]);

  const navigate = useNavigate(); // 페이지 이동을 위한 훅

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClear = () => {
    setQuery("");
  };

  const performSearch = async (searchQuery) => {
    const API_KEY = "AIzaSyB1u-E_Afr63fO2N0WMkWizbw33qee2BMQ";
    const CX = "c38a97b665d464515";
    const URL = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX}&q=${searchQuery}`;

    try {
      const response = await fetch(URL);
      const data = await response.json();
      const results = data.items || [];

      onSearchResults(results, searchQuery);
      navigate("/search-results", { state: { results, query: searchQuery } });
    } catch (error) {
      console.error("Error fetching search results", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    performSearch(query);
  };

  const handleKeywordClick = (keyword) => {
    setQuery(keyword);
    performSearch(keyword);
  };

  return (
    <SearchContainer>
      <SearchHeader
        query={query}
        onClear={handleClear}
        onInputChange={handleInputChange}
        onSearch={handleSearch}
        goBack={() => window.history.back()}
      />

      <KeywordContainer>
        <KeywordTitle>최근 검색어</KeywordTitle>
        <KeywordList>
          {recentKeywords?.length > 0 ? (
            recentKeywords.map((keyword, index) => (
              <Keyword key={index} onClick={() => handleKeywordClick(keyword)}>
                {keyword}
              </Keyword>
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
            <Keyword
              key={index}
              $recommended={true}
              onClick={() => handleKeywordClick(keyword)}
            >
              {keyword}
            </Keyword>
          ))}
        </KeywordList>
      </KeywordContainer>
    </SearchContainer>
  );
};

SearchScreen.propTypes = {
  recentKeywords: PropTypes.array.isRequired,
  onSearchResults: PropTypes.func.isRequired,
};

export default SearchScreen;
