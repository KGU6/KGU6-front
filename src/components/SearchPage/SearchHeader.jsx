import PropTypes from 'prop-types';
import styled from 'styled-components';
import LeftArrowIcon from '@/assets/icons/left-arrow.svg?react';
import GlassesIcon from '@/assets/icons/glasses.svg?react';
import CloseIcon from '@/assets/icons/close.svg?react'; // Make sure to correct CloseIcon spelling here

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
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
  margin-left: 10px; /* Space between the input and close icon */
  cursor: pointer;
`;

const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  padding: 8px;
  font-size: 13px;
  background-color: transparent;
`;

const SearchHeader = ({ query, onInputChange, onSearch, goBack, onClear }) => {
  return (
    <SearchBarWrapper>
      <LeftArrow onClick={goBack} />
      <form onSubmit={onSearch} style={{ width: '100%' }}>
        <SearchBar>
          <Glasses onClick={onSearch} />
          <Input
            type='text'
            value={query}
            onChange={onInputChange}
            placeholder='여행지, 키워드를 검색해 보세요'
          />
          <Close onClick={onClear} />
          {/* Show the close icon only if query exists */}
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
