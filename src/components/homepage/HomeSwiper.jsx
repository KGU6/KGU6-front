import React, { useRef, useState } from "react";
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
        spaceBetween={50} 
        slidesPerView={1.5} 
        centeredSlides
        loop
        modules={[Pagination]}
        style={{ height: '373px', width: '100%', margin: '0 auto' }} // Swiper의 넓이를 100%로 설정
        onSlideChange={handleSlideChange}
        ref={swiperRef}
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
  width:100%; /* 부모 요소의 좌우 패딩이 20px씩 있다고 가정 */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* 절대적으로 배치되지 않도록 상대적 배치를 사용 */
`;


const Card = styled.div`
  background-color: #f0f0f0; /* 회색 배경색 */
  width: 273px;
  padding:20px;
  border-radius: 20px;
  text-align: center;
  position: relative;
  height: ${({ isActive }) => (isActive ? "343px" : "276px")}; /* 선택된 슬라이드와 그렇지 않은 슬라이드의 높이 구분 */
  margin-top:${({ isActive }) => (isActive ? "0" : "33.5px")};
  display: flex;
  flex-direction: column;
  justify-content: center; /* 중앙 정렬 */
  transition: height 0.3s ease-in-out; /* 높이 변경 시 부드럽게 애니메이션 적용 */
`;

const CardTitle = styled.span`
  position:relative;
  top:68px;
  font-size: 28px;
  word-break:keep-all;
  text-align:left;
  color: #ffffff;
  font-weight: var(--weight-bold);
  margin-bottom: 0;
`;

const CardDescription = styled.p`
  position:relative;
  top:78px;
  font-size: 16px;
  color: #ffffff;
  word-break:keep-all;
  text-align:left;
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
