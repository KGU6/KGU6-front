import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { HSwiper } from '../../api/Homepage/HSwiper';

// App component
const HomeSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0); // 현재 선택된 슬라이드 인덱스
  const swiperRef = useRef(null); // Swiper에 대한 참조
  const [placeData, setPlaceData] = useState([]);

  useEffect(() => {
    // API로부터 데이터를 받아와 `placeData`를 업데이트합니다.
    const fetchData = async () => {
      const data = await HSwiper();
      const updatedPlaceData = data.travelogs.map((item, index) => ({
        Title: item.title || `Title${index + 1}`,
        userName: item.userName || `Subtitle${index + 1}`,
        img: item.imageUrl || '', // imageUrl을 img로 설정
      }));

      setPlaceData(updatedPlaceData.slice(0, 5)); // 최대 5개로 제한
    };

    fetchData();
  }, []);

  useEffect(() => {
    // placeData가 로드되면 중앙 슬라이드가 선택되도록 설정
    if (placeData.length > 0 && swiperRef.current) {
      swiperRef.current.swiper.slideTo(1); // 중앙 슬라이드를 2번째로 설정
    }
  }, [placeData]);

  // 슬라이드 변경 시 현재 활성화된 슬라이드 인덱스를 업데이트
  const handleSlideChange = () => {
    if (swiperRef.current) {
      setActiveIndex(swiperRef.current.swiper.realIndex);
    }
  };

  return (
    <SwiperContainer>
      <StyledSwiper
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1.5}
        loop
        centeredSlides
        modules={[Pagination]}
        onSlideChange={handleSlideChange}
        ref={swiperRef}
      >
        {placeData.map((data, index) => (
          <SwiperSlide key={index}>
            <Card isActive={index === activeIndex} img={data.img}>
              <CardTitle>{data.Title}</CardTitle>
              <CardDescription>{data.userName}</CardDescription>
            </Card>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </SwiperContainer>
  );
};

export default HomeSwiper;

const SwiperContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledSwiper = styled(Swiper)`
  width: calc(100% + 20px);
  height: 373px;
  margin-left: -16px;

  .swiper-pagination {
    position: absolute;
    left: 52%;
    bottom: 0px;
    transform: translateX(-50%);
    z-index: 10;
  }
`;

const Card = styled.div`
  background-color: #f0f0f0;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  width: 273px;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  position: relative;
  height: ${({ isActive }) => (isActive ? '343px' : '276px')};
  margin-top: ${({ isActive }) => (isActive ? '0' : '33.5px')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: height 0.3s ease-in-out;
  overflow: hidden; /* 자식 요소가 부모 경계를 넘지 않도록 설정 */

  /* 어두운 오버레이 추가 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25); /* 배경을 살짝 어둡게 만듦 */
    z-index: 1; /* 오버레이가 배경 이미지 위에 오도록 설정 */
    border-radius: 20px; /* 오버레이의 모서리도 둥글게 설정 */
  }

  /* 자식 요소를 오버레이 위로 올림 */
  span, p {
    position: relative;
    z-index: 2;
  }
`;


const CardTitle = styled.span`
  position: relative;
  top: 68px;
  font-size: 28px;
  word-break: keep-all;
  text-align: left;
  color: #ffffff;
  font-weight: var(--weight-bold);
  margin-bottom: 0;
`;

const CardDescription = styled.p`
  position: relative;
  top: 78px;
  font-size: 16px;
  color: #ffffff;
  word-break: keep-all;
  text-align: left;
`;
