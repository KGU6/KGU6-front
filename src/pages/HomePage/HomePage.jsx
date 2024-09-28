import React from 'react';
import styled from 'styled-components';
import 'swiper/css';
import { IoSearchOutline } from "react-icons/io5";
import HomeSwiper from '../../components/homepageSwiper/HomeSwiper';

const HomePage = () => {
  return (
    <Container>
      <SearchBarWrapper>
        <IoSearchOutline className="search-icon" />
        <SearchBar placeholder="여행지, 키워드를 입력해 보세요" />
      </SearchBarWrapper>

      <SectionTitle><span className='greenText'>여행의 순간</span>을 함께 느껴보세요</SectionTitle>
      <div className='SwiperWrapper'><HomeSwiper/></div>

      {/* SubTitle 이후 부분 수정 */}
      <SubTitle>추천 여행지</SubTitle>
      <CircleMenu>
        <CircleItem />
        <CircleItem />
        <CircleItem />
        <CircleItem />
        <CircleItem />
      </CircleMenu>

      <LoremTitle>Lorem ipsum dolor sit</LoremTitle>
      <PlaceGrid>
        <PlaceItem>
          <PlaceholderBox />
          <PlaceText>
            <h4>Title</h4>
            <p>Subtitle</p>
          </PlaceText>
        </PlaceItem>
        <PlaceItem>
          <PlaceholderBox />
          <PlaceText>
            <h4>Title</h4>
            <p>Subtitle</p>
          </PlaceText>
        </PlaceItem>
        <PlaceItem>
          <PlaceholderBox />
          <PlaceText>
            <h4>Title</h4>
            <p>Subtitle</p>
          </PlaceText>
        </PlaceItem>
        <PlaceItem>
          <PlaceholderBox />
          <PlaceText>
            <h4>Title</h4>
            <p>Subtitle</p>
          </PlaceText>
        </PlaceItem>
      </PlaceGrid>

      <KeywordSection>
        <h3>#키워드별 여행기</h3>
        <KeywordContainer>
          <KeywordButton active>complete</KeywordButton>
          <KeywordButton>gsgkjwo</KeywordButton>
          <KeywordButton>ewpg</KeywordButton>
          <KeywordButton>complete</KeywordButton>
        </KeywordContainer>
        <KeywordGrid>
          <PlaceholderBox />
          <PlaceholderBox />
        </KeywordGrid>
      </KeywordSection>
    </Container>
  );
};

export default HomePage;

// styled-components
const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  color: black;
  text-align: center;

  .SwiperWrapper{
    width: 100%;
    height: 400px;
  }

  .sectionLine{
    width: 100%;
    height: 5px;
    color: #EFF1F4;
  }
`;

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 10px;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 12px 12px 12px 36px;
  border-radius: 20px;
  border: 1px solid #ccc;
`;

const SectionTitle = styled.h2`
  font-size: 22px;
  line-height: 26.25px;
  font-weight: var(--weight-bold);
  color: black;
  width: 100%;
  height: 27px;
  margin-top: 30px;
  margin-bottom: 24px;

  .greenText{
    color: #97DF47;
  }
`;

const PlaceholderBox = styled.div`
  width: 168px;
  height: 162px;
  background-color: #bdbdbd;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 10px;
`;

const SubTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 16px;
`;

const CircleMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  margin-bottom: 24px;
`;

const CircleItem = styled.div`
  width: 60px;
  height: 60px;
  background-color: #e0e0e0;
  border-radius: 50%;
`;

const LoremTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 16px;
  color: black;
`;

const PlaceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 0 20px;
  margin-bottom: 24px;
`;

const PlaceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlaceText = styled.div`
  text-align: center;
  margin-top: 8px;

  h4 {
    margin: 0;
    font-size: 14px;
  }

  p {
    margin: 0;
    font-size: 12px;
    color: #666;
  }
`;

const KeywordSection = styled.div`
  width: 100%;
  padding: 0 20px;
  margin-bottom: 24px;

  h3 {
    text-align: left;
    font-size: 18px;
    margin-bottom: 16px;
  }
`;

const KeywordContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 16px;
`;

const KeywordButton = styled.button`
  padding: 8px 16px;
  background-color: ${({ active }) => (active ? '#757575' : '#e0e0e0')};
  color: white;
  border-radius: 20px;
  border: none;
`;

const KeywordGrid = styled.div`
  display: flex;
  gap: 16px;
`;
