import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { SubTitle } from '../../pages/HomePage/HomePage';
// import { Rplace } from '../../api/Homepage/Rplace';

// 이미지 파일을 import로 불러오기
import circle1 from '../../assets/homepage/circle/circle1.svg';
import circle2 from '../../assets/homepage/circle/circle2.svg';
import circle3 from '../../assets/homepage/circle/circle3.svg';
import circle4 from '../../assets/homepage/circle/circle4.svg';
import circle5 from '../../assets/homepage/circle/circle5.svg';
import circle6 from '../../assets/homepage/circle/circle6.svg';
import circle7 from '../../assets/homepage/circle/circle7.svg';
import circle8 from '../../assets/homepage/circle/circle8.svg';
import circle9 from '../../assets/homepage/circle/circle9.svg';
import circle10 from '../../assets/homepage/circle/circle10.svg';

const RecommendPlace = () => {

    const circleImgList = [
        { img: circle1 },
        { img: circle2 },
        { img: circle3 },
        { img: circle4 },
        { img: circle5 },
        { img: circle6 },
        { img: circle7 },
        { img: circle8 },
        { img: circle9 },
        { img: circle10 },
    ];

    return (
        <>
            <RPlaceWrapper>
                <SubTitle>추천 여행지</SubTitle>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={12.5}
                    className="circleSwiper"
                    style={{ height: 'auto', minHeight: '60px' }}
                    allowTouchMove={true}
                    grabCursor={true}
                >
                    {circleImgList.map((circle, index) => (
                        <SwiperSlide key={index}>
                            <CircleItem img={circle.img} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </RPlaceWrapper>
        </>
    );
};

export default RecommendPlace;

const RPlaceWrapper = styled.div`
    width: 100%;
    height: auto;
`;

const CircleItem = styled.div`
  width: 60px;
  height: 60px;
  background-color: #e0e0e0;
  border-radius: 50%;
  text-align: center;
  font-size: 14px;
  font-weight: var(--weight-semi-bold);
  color: white;
  background-image: url(${props => props.img});
  background-size: cover; /* 이미지가 원형에 맞게 커버되도록 설정 */
  background-position: center; /* 이미지가 중앙에 위치하도록 설정 */
  display: flex;
  justify-content: center;
  align-items: center; /* 원의 정중앙에 텍스트 배치 */
`;
