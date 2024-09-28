import { useState } from "react";
import { useLocation } from "react-router-dom";
// import PropTypes from "prop-types";
import styled from "styled-components";
import SortPopup from "../../components/SearchPage/SortPopup";
import DownArrowIcon from "../../assets/icons/down-arrow.svg?react";
import SearchHeader from "../../components/SearchPage/SearchHeader";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const SearchContainer = styled.div`
  padding: 20px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const SearchHeaderSection = styled.div`
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 10px;
`;

const SearchResultCount = styled.div`
  font-size: 14px;
  font-weight: 700;
  padding-left: 10px;
  width: 80vw;
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
  const location = useLocation().state;

  console.log(location);

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [sortOption, setSortOption] = useState("latest");

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    togglePopup();
  };

  return (
    <SearchContainer>
      <Wrapper>
        <SearchHeaderSection>
          <SearchHeader goBack={() => window.history.back()} />
          <SearchResultCount>
            <span>여행기 검색 결과 건</span>
            <SortButton onClick={togglePopup}>
              {sortOption === "latest" ? "최신순" : "정확도순"}
              <DownArrow />
            </SortButton>
          </SearchResultCount>
        </SearchHeaderSection>
      </Wrapper>

      {/* 팝업창이 보일 때만 SortPopup 컴포넌트 호출 */}
      {isPopupVisible && (
        <SortPopup
          onClear={togglePopup}
          sortOption={sortOption}
          setSortOption={handleSortChange}
        />
      )}
    </SearchContainer>
  );
};

/* SearchResultScreen.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      snippet: PropTypes.string.isRequired,
    })
  ).isRequired,
};
 */
export default SearchResultScreen;
