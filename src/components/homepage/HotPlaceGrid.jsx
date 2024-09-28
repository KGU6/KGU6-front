import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SubTitle } from '../../pages/HomePage/HomePage';
// testimg
import { FaLocationDot } from "react-icons/fa6";
import { Hplace } from '../../api/Homepage/Hplace';

const HotPlaceGrid = () => {
  const [apiData, setApiData] = useState([]);
  const [placeData, setPlaceData] = useState([]);

  useEffect(() => {
    // API로부터 데이터를 받아와 `placeData`를 업데이트합니다.
    const fetchData = async () => {
      const data = await Hplace();
      setApiData(data.travelogs);  // API 데이터를 상태에 저장

      // `placeData` 업데이트: `travelog` 배열의 `imageUrl`을 사용
      const updatedPlaceData = data.travelogs.map((item, index) => ({
        Title: item.title || `Title${index + 1}`,
        sub: item.placeName || `Subtitle${index + 1}`,
        img: item.imageUrl || '', // imageUrl을 img로 설정
      }));

      setPlaceData(updatedPlaceData.slice(0, 4)); // 최대 4개로 제한
    };

    fetchData();
  }, []);

  return (
    <>
      <SubTitle>요즘 떠오르는 핫플레이스</SubTitle>
      <PlaceGrid>
        {placeData.map((data, index) => (
          <PlaceItem key={index}>
            <PlaceImgBox img={data.img} />
            <PlaceText>
              <p>{data.Title}</p>
              <span><FaLocationDot /> {data.sub}</span>
            </PlaceText>
          </PlaceItem>
        ))}
      </PlaceGrid>
    </>
  );
};

export default HotPlaceGrid;

const PlaceImgBox = styled.div`
  width: 168px;
  height: 162px;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 10px;
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
    display: flex;
    align-items: center;
    margin: 0;
    font-size: 12px;
    color: #8C8D90;
    gap: 4px;

    svg {
      color: #97DF47;
    }
  }
`;
