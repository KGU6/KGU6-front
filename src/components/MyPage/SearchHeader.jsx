import PropTypes from "prop-types";
import styled from "styled-components";
import LeftArrowIcon from "../../assets/left-arrow.svg?react";
import GlassesIcon from "../../assets/glasses.svg?react";
import CloseIcon from "../../assets/close.svg?react";

// Search bar wrapper
const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-radius: 25px;
  margin-top: 30px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    padding: 8px;
    margin-top: 20px;
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    padding: 6px;
    margin-top: 15px;
    margin-bottom: 5px;
  }
`;

// Search bar itself
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #f2f3f3;
  border-radius: 25px;
  padding: 0 10px;

  @media (max-width: 768px) {
    height: 35px;
  }

  @media (max-width: 480px) {
    height: 30px;
    padding: 0 8px;
  }
`;

// Left arrow icon
const LeftArrow = styled(LeftArrowIcon)`
  width: 24px;
  height: 24px;
  margin-right: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    margin-right: 15px;
  }

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }
`;

// Glasses icon
const Glasses = styled(GlassesIcon)`
  width: 17px;
  height: 17px;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 15px;
    height: 15px;
    margin-right: 8px;
  }

  @media (max-width: 480px) {
    width: 12px;
    height: 12px;
    margin-right: 6px;
  }
`;

// Close icon
const Close = styled(CloseIcon)`
  width: 17px;
  height: 17px;
  margin-left: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 15px;
    height: 15px;
    margin-left: 8px;
  }

  @media (max-width: 480px) {
    width: 12px;
    height: 12px;
    margin-left: 6px;
  }
`;

// Input field
const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  padding: 8px;
  font-size: 14px;
  background-color: transparent;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const SearchHeader = ({ query, onInputChange, onSearch, goBack, onClear }) => {
  return (
    <SearchBarWrapper>
      <LeftArrow onClick={goBack} />
      <form onSubmit={onSearch} style={{ width: "100%" }}>
        <SearchBar>
          <Glasses onClick={onSearch} />
          <Input
            type="text"
            value={query}
            onChange={onInputChange}
            placeholder="여행지, 키워드를 검색해 보세요"
          />
          <Close onClick={onClear} />
        </SearchBar>
      </form>
    </SearchBarWrapper>
  );
};

SearchHeader.propTypes = {
  query: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default SearchHeader;
