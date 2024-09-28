import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { SubTitle } from '../../pages/HomePage/HomePage';
import { Rplace } from '../../api/Rplace';

const RecommendPlace = () => {
    const[apiData,setApiData]=useState(null);

    useEffect(()=>{
        setApiData(Rplace());
    },[])

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
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
                        <SwiperSlide key={index}>
                            <CircleItem>aa</CircleItem>
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
  color:white;
  background-image:url();
  display: flex;
  justify-content: center;
  align-items: center; /* 원의 정중앙에 텍스트 배치 */
`;
