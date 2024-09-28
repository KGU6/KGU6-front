import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { HSwiper } from "../../api/Homepage/HSwiper";

// App component
const HomeSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0); // 현재 선택된 슬라이드 인덱스
  const swiperRef = useRef(null); // Swiper에 대한 참조
  const [apiData, setApiData] = useState([]);
  const [placeData, setPlaceData] = useState([]);

  useEffect(() => {
    // API로부터 데이터를 받아와 `placeData`를 업데이트합니다.
    const fetchData = async () => {
      const data = await HSwiper();
      setApiData(data.travelogs);  // API 데이터를 상태에 저장

      const updatedPlaceData = data.travelogs.map((item, index) => ({
        Title: item.title || `Title${index + 1}`,
        userName: item.userName || `Subtitle${index + 1}`,
        img: item.imageUrl || '', // imageUrl을 img로 설정
      }));

      setPlaceData(updatedPlaceData); // 업데이트된 데이터를 `placeData`로 설정
    };

    fetchData();
  }, []);

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
  width: 100%; /* 부모 컨테이너의 전체 너비 */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledSwiper = styled(Swiper)`
  width: calc(100% + 20px); /* 10px 왼쪽, 10px 오른쪽 여백 포함 */
  height: 373px;
  margin-left: -16px; /* Swiper를 왼쪽으로 10px 이동 */

  .swiper-pagination {
    position: absolute;
    left: 52%;
    bottom: 0px; /* Swiper 하단에서 약간 떨어뜨림 */
    transform: translateX(-50%); /* 중앙 정렬을 위한 transform */
    z-index: 10; /* 필요시 z-index를 설정하여 다른 요소 위에 표시되도록 함 */
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
  height: ${({ isActive }) => (isActive ? "343px" : "276px")};
  margin-top: ${({ isActive }) => (isActive ? "0" : "33.5px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: height 0.3s ease-in-out;
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

