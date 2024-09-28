import React, { useState } from 'react';
import styled from 'styled-components';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// icon
import { IoSearchOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa6";
import HomeSwiper from '../../components/homepageSwiper/HomeSwiper';
import TagSwiper from '../../components/homepageSwiper/TagSwiper';
import { FreeMode } from 'swiper/modules';

const HomePage = () => {

  return (
    <Container>
      <SearchBarWrapper>
        <IoSearchOutline className="search-icon" />
        <SearchBar placeholder="여행지, 키워드를 입력해 보세요" />
        <FaRegBell className='bell-icon' />
      </SearchBarWrapper>

      <SectionTitle><span className='greenText'>여행의 순간</span>을 함께 느껴보세요</SectionTitle>
      <div className='SwiperWrapper'><HomeSwiper /></div>

      <SubTitle>추천 여행지</SubTitle>
      <Swiper
        slidesPerView={5}
        spaceBetween={12.5}
        className="circleSwiper"
        style={{ height: 'auto', minHeight: '60px' }}
        allowTouchMove={true}
        grabCursor={true}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
          <SwiperSlide key={index}>
            <CircleItem />
          </SwiperSlide>
        ))}
      </Swiper>

      <SubTitle>요즘 떠오르는 핫플레이스</SubTitle>
      <PlaceGrid>
        <PlaceItem>
          <PlaceholderBox />
          <PlaceText>
            <p>Title</p>
            <span><FaLocationDot /> Subtitle</span>
          </PlaceText>
        </PlaceItem>
        <PlaceItem>
          <PlaceholderBox />
          <PlaceText>
            <p>Title</p>
            <span><FaLocationDot /> Subtitle</span>
          </PlaceText>
        </PlaceItem>
        <PlaceItem>
          <PlaceholderBox />
          <PlaceText>
            <p>Title</p>
            <span><FaLocationDot /> Subtitle</span>
          </PlaceText>
        </PlaceItem>
        <PlaceItem>
          <PlaceholderBox />
          <PlaceText>
            <p>Title</p>
            <span><FaLocationDot /> Subtitle</span>
          </PlaceText>
        </PlaceItem>
      </PlaceGrid>

      <KeywordSection>
        <SubTitle className='keywordTitle'>#키워드별 여행기</SubTitle>
        <TagSwiper/>
        <Swiper
          slidesPerView={1.4}
          spaceBetween={16} // 각 슬라이드 간 간격
          className="tagImgSwiper"
          freeMode={true}
          modules={[FreeMode]}
        >
          {[1, 2, 3, 4, 5].map((_, index) => (
            <SwiperSlide key={index}>
              <KeywordImg />
            </SwiperSlide>
          ))}
        </Swiper>
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

  .SwiperWrapper {
    width: 100%;
    height: 400px;
  }

  .sectionLine {
    width: 100%;
    height: 5px;
    color: #EFF1F4;
  }

  .circleSwiper{
    width:100%;
  }
`;

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 10px;

  .search-icon {
    font-size: 17px;
    position: relative;
    left: 64px;
    z-index: 3;
  }

  .bell-icon {
    position: absolute;
    right: 0;
    font-size: 24px;
    color: #BBBEC2;
  }
`;

const SearchBar = styled.input`
  width: 268px;
  height: 40px;
  position: relative;
  left: 32px;
  background-color: #F2F3F3;
  padding: 12px 12px 12px 36px;
  border-radius: 22px;
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

  .greenText {
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
  width: 100%;
  height:28px;
  font-size: 20px;
  line-height: 28px;
  text-align: left;
  font-weight: var(--weight-bold);
  margin-top: 30px;
  margin-bottom: 12px;
  &.keywordTitle{
    margin-bottom:0;
  }
`;

const CircleItem = styled.div`
  width: 60px;
  height: 60px;
  background-color: #e0e0e0;
  border-radius: 50%;
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
  width: 100%;
  text-align: left;
  margin-top: 8px;

  p {
    margin: 0;
    margin-bottom: 2px;
    font-size: 16px;
    font-weight: var(--weight-semi-bold);
  }

  span {
    display: flex; /* 아이콘과 텍스트를 한 줄로 정렬 */
    align-items: center; /* 수직 정렬 */
    margin: 0;
    font-size: 12px;
    color: #8C8D90; /* 텍스트 색상 */
    gap: 4px; /* 아이콘과 텍스트 사이의 간격 */

    svg {
      color: #97DF47; /* 아이콘 색상을 녹색으로 설정 */
    }
  }
`;

const KeywordSection = styled.div`
  width: 100%;
  margin-bottom: 24px;

  .tagSwiper{
    margin-bottom:10px;
  }
`;
const KeywordImg = styled.div`
  width: 232px!important;
  height: 162px;
  background-color: #bdbdbd;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 10px;
`;