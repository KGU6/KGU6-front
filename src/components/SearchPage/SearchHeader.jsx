import PropTypes from "prop-types";
import styled from "styled-components";
import LeftArrowIcon from "@/assets/icons/left-arrow.svg?react";
import GlassesIcon from "@/assets/icons/glasses.svg?react";
import CloseIcon from "@/assets/icons/close.svg?react";
import SearchInput from "../GoogleMap/SearchInput.jsx"; // Make sure to correct CloseIcon spelling here

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80vw;
  padding: 10px;
  border-radius: 25px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #f2f3f3;
  border-radius: 25px;
  padding: 0 10px; /* Adding some padding inside the search bar */
  position: relative; /* Allows Close icon to be positioned */
`;

const LeftArrow = styled(LeftArrowIcon)`
  width: 24px;
  height: 24px;
  margin-right: 20px;
  cursor: pointer;
`;

const Glasses = styled(GlassesIcon)`
  width: 17px;
  height: 17px;
  margin-right: 10px;
`;

const Close = styled(CloseIcon)`
  width: 17px;
  height: 17px;
  cursor: pointer;
  position: absolute;
  right: 10px; /* Positioned to the far right */
`;

export const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 13px;
  background-color: transparent;
  width: 45vw;
`;

const SearchHeader = ({ onSearch, goBack, onClear }) => {
  const a = (latitude, longitude, placeName, placeAddress) => {
    console.log(latitude, longitude, placeName, placeAddress);
  };

  return (
    <SearchBarWrapper>
      <LeftArrow onClick={goBack} />
      <form onSubmit={onSearch} style={{ width: "100%" }}>
        <SearchBar>
          <Glasses onClick={onSearch} />
          <SearchInput handleSearch={a} />
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
  onClear: PropTypes.func.isRequired, // Added prop type for the onClear function
};

export default SearchHeader;
