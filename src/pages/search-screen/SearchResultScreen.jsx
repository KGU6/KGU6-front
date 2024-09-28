import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SortPopup from '../../components/SearchPage/SortPopup';
import DownArrowIcon from '../../assets/icons/down-arrow.svg?react';
import SearchHeader from '../../components/SearchPage/SearchHeader';
import { searchApi } from '../../api/searchApi.js';
import TravelCard from '../../components/MyPage/TravelCard.jsx';
import { CardList } from '../MyPageScreen.jsx';

const Wrapper = styled.div``;

const SearchContainer = styled.div`
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
  const [placeList, setPlaceList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await searchApi(location.placeName);
      console.log(location, response);

      setPlaceList(response.travelogs);
    })();
  }, []);

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [sortOption, setSortOption] = useState('latest');

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
              {sortOption === 'latest' ? '최신순' : '정확도순'}
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
      <CardList isMyPage={false}>
        {placeList?.length > 0 &&
          placeList.map((item, index) => (
            <TravelCard
              key={index}
              date={item.createdAt}
              location={item.placeName}
              imageUrl={item.imageUrl}
              title={item.title}
            />
          ))}
      </CardList>
    </SearchContainer>
  );
};

export default SearchResultScreen;
