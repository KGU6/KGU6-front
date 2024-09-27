import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { IoSearchOutline } from "react-icons/io5";

const HomePage = () => {
  return (
    <Container>
      <div className="search-bar-wrapper">
        <SearchBarWrapper>
          <IoSearchOutline className="search-icon" />
          <SearchBar placeholder="여행지, 키워드를 입력해 보세요" />
        </SearchBarWrapper>
      </div>

      <SectionTitle>여행의 순간을 함께 느껴보세요</SectionTitle>

      <StyledSwiper
        spaceBetween={15}
        slidesPerView={1}  // 한 번에 1개의 슬라이드만 보이도록 설정
        centeredSlides={true}  // 활성 슬라이드를 가운데로 배치
        initialSlide={0}  // 첫 번째 슬라이드를 기본으로 선택
        pagination={{ clickable: true }}
        modules={[Pagination]}
        >
        <SwiperSlide>
            slide1
        </SwiperSlide>
        <SwiperSlide>
            slide2
        </SwiperSlide>
        <SwiperSlide>
            slide3
        </SwiperSlide>
        </StyledSwiper>



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
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 390px;
  min-height: 100vh;
  background-color: #f5f5f5;
  color: black;
  text-align: center;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
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
  color: black;
  margin: 24px 0 16px 0;
  width: 263px;
  height: 27px;
`;

const StyledSwiper = styled(Swiper)`
  margin-bottom: 60px;
  width: 100%;
  height:343px;

  .swiper-wrapper {
    display: flex;
  // 슬라이드들을 중앙에 배치
    align-items: center;
  }

  .swiper-slide {
    width: 209px;
    height: 263px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e0e0e0;
    border-radius: 26px;
    transition: all 0.3s ease-in-out;
  }

  .swiper-slide-active {
    width: 273px!important;
    height: 343px;
    align-items: center;
  }

  .swiper-slide-prev,
  .swiper-slide-next {
    width: calc(273px * 0.75);
    height: calc(343px * 0.75);
    opacity: 0.6;
  }
  
  .swiper-pagination-bullets {
    position: absolute;
    bottom: 10px;
  }

  .swiper-pagination-bullet {
    background: #000;
    opacity: 0.5;
  }

  .swiper-pagination-bullet-active {
    background: #fff;
    opacity: 1;
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
