import styled from 'styled-components';
import LeftArrowIcon from '@/assets/icons/left-arrow.svg?react';
import GlassesIcon from '@/assets/icons/glasses.svg?react';
import CloseIcon from '@/assets/icons/close.svg?react';
import SearchInput from '../GoogleMap/SearchInput.jsx';

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
  padding: 0 10px;
  position: relative;
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
  right: 10px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 13px;
  background-color: transparent;
  width: 45vw;
`;

const SearchHeader = ({ goBack, handleSearch }) => {
  return (
    <SearchBarWrapper>
      <LeftArrow onClick={goBack} />
      <SearchBar>
        <Glasses />
        <SearchInput handleSearch={handleSearch} />
        <Close />
      </SearchBar>
    </SearchBarWrapper>
  );
};

export default SearchHeader;
