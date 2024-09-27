import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// App component
const HomeSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0); // 현재 선택된 슬라이드 인덱스
  const swiperRef = useRef(null); // Swiper에 대한 참조

  // 슬라이드 변경 시 현재 활성화된 슬라이드 인덱스를 업데이트
  const handleSlideChange = () => {
    if (swiperRef.current) {
      setActiveIndex(swiperRef.current.swiper.realIndex);
    }
  };

  return (
    <SwiperContainer>
      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={30} // 슬라이드 간 간격
        slidesPerView={1.3} // 슬라이드의 일부분을 보여주기 위해 1보다 큰 값 설정
        centeredSlides // 선택된 슬라이드를 중앙에 위치시킴
        loop // 슬라이드가 무한히 반복되도록 설정
        modules={[Pagination]}
        style={{ height: '373px' }} // Swiper의 높이를 직접 설정
        onSlideChange={handleSlideChange} // 슬라이드 변경 시 이벤트 핸들러
        ref={swiperRef} // Swiper에 대한 참조
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <Card isActive={index === activeIndex}>
              <CardTitle>{slide.title}</CardTitle>
              <CardDescription>{slide.description}</CardDescription>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};

export default HomeSwiper;

const SwiperContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right:10px;
`;

const Card = styled.div`
  background-color: #f0f0f0; /* 회색 배경색 */
  width: 273px;
  border-radius: 20px;
  text-align: center;
  padding: 20px;
  height: ${({ isActive }) => (isActive ? "343px" : "276px")}; /* 선택된 슬라이드와 그렇지 않은 슬라이드의 높이 구분 */
  margin-top:${({ isActive }) => (isActive ? "0" : "33.5px")};
  display: flex;
  flex-direction: column;
  justify-content: center; /* 중앙 정렬 */
  transition: height 0.3s ease-in-out; /* 높이 변경 시 부드럽게 애니메이션 적용 */
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const slidesData = [
  {
    title: "체코를 200% 경험하는 방법",
    description: "체코를 사랑할 수 밖에 없는 N가지 이유",
  },
  {
    title: "체코의 멋진 건축물",
    description: "체코의 아름다운 건축물과 문화",
  },
  {
    title: "체코의 자연 경관",
    description: "체코에서 만날 수 있는 놀라운 자연",
  },
  {
    title: "체코의 자연 경관",
    description: "체코에서 만날 수 있는 놀라운 자연",
  },
  {
    title: "체코의 자연 경관",
    description: "체코에서 만날 수 있는 놀라운 자연",
  },
];
