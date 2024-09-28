import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// icon
import { IoSearchOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import HomeSwiper from '../../components/homepage/HomeSwiper';
import TagSwiper from '../../components/homepage/TagSwiper';
import { FreeMode } from 'swiper/modules';
//testimg
import OdaibaImage from '../../assets/placeImg/odaiba.jpg';
import RecommendPlace from '../../components/homepage/RecommendPlace';
import HotPlaceGrid from '../../components/homepage/HotPlaceGrid';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const navigate = useNavigate();

  const goToSearch = () => {
    navigate('/search');
  };

  const placeData = [
    { Title: "Title1", sub: "Subtitle1", img: OdaibaImage },
    { Title: "Title2", sub: "Subtitle2", img: OdaibaImage },
    { Title: "Title3", sub: "Subtitle3", img: OdaibaImage },
    { Title: "Title3", sub: "Subtitle3", img: OdaibaImage },
  ];

  return (
    <Container>
      <SearchBarWrapper>
        <IoSearchOutline className="search-icon" />
        <SearchBar onClick={goToSearch} placeholder="여행지, 키워드를 입력해 보세요" />
        <FaRegBell className='bell-icon' />
      </SearchBarWrapper>

      <SectionTitle><span className='greenText'>여행의 순간</span>을 함께 느껴보세요</SectionTitle>
      <div className='SwiperWrapper'><HomeSwiper /></div>

      <RecommendPlace/>
      <HotPlaceGrid/>

      <KeywordSection>
        <SubTitle className='keywordTitle'>#키워드별 여행기</SubTitle>
        <div className='SwiperWrapper'>
          <TagSwiper selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
        </div>
        <div className='SwiperWrapper'>
          <Swiper
            slidesPerView={1.6}
            spaceBetween={4} // 각 슬라이드 간 간격
            className="tagImgSwiper"
            freeMode={true}
            modules={[FreeMode]}
          >
            {[1, 2, 3, 4, 5].map((_, index) => (
              <SwiperSlide key={index}>
                <KeywordImg img={OdaibaImage} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
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
    width: 100vw; 
    min-height: 390px;
    position: relative;
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
  margin-top: 64px;

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

export const SubTitle = styled.h3`
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

const KeywordSection = styled.div`
  width: 100%;
  margin-bottom: 24px;
  position: relative;

  .tagSwiper {
    margin-bottom: 10px;
  }

  .SwiperWrapper {
    width: calc(100vw + 40px); /* 패딩을 고려한 넓이 조정 */
    min-height: 62px;
    position: relative;
    left: -20px; /* 왼쪽으로 슬라이더를 이동 */
  }
`;
const KeywordImg = styled.div`
  width: 232px;
  height: 162px;
  background-color: #bdbdbd;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 10px;
`;