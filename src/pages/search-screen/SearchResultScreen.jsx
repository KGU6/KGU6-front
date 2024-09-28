import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import SortPopup from "../../components/SearchPage/SortPopup";
import DownArrowIcon from "../../assets/icons/down-arrow.svg?react";

const SearchContainer = styled.div`
  padding: 20px;
  width: 80vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: pink;
`;

const SearchHeaderSection = styled.div`
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 10px;
`;

const SearchResultCount = styled.div`
  font-size: 14px;
  font-weight: 700;
  padding: 10px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SortButton = styled.button`
  border: 1px solid #bbb;
  padding: 5px 15px;
  border-radius: 25px;
  background: transparent;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const DownArrow = styled(DownArrowIcon)`
  width: 17px;
  height: 17px;
  margin-left: 8px;
`;

const SearchResultScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 검색 결과와 검색어를 받아옴
  const { results = [] } = location.state || {};

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [sortOption, setSortOption] = useState("latest");

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    togglePopup(); // 팝업을 닫음
  };

  return (
    <SearchContainer>
      <SearchHeaderSection>
        <button onClick={() => navigate("/search")}>
          🔙 검색으로 돌아가기
        </button>
        <SearchResultCount>
          <span>여행기 검색 결과 {results.length}건</span>
          <SortButton onClick={togglePopup}>
            {sortOption === "latest" ? "최신순" : "정확도순"}
            <DownArrow />
          </SortButton>
        </SearchResultCount>
      </SearchHeaderSection>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "10px",
        }}
      >
        {results.map((result, index) => (
          <div
            key={index}
            style={{ border: "1px solid #ccc", padding: "10px" }}
          >
            <h3>{result.title}</h3>
            <a href={result.link} target="_blank" rel="noopener noreferrer">
              {result.link}
            </a>
            <p>{result.snippet}</p>
          </div>
        ))}
      </div>

      {/* 팝업창이 보일 때만 SortPopup 컴포넌트 호출 */}
      {isPopupVisible && (
        <SortPopup
          onClose={togglePopup}
          sortOption={sortOption}
          setSortOption={handleSortChange}
        />
      )}
    </SearchContainer>
  );
};

SearchResultScreen.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      snippet: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SearchResultScreen;
