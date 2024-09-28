import React from 'react';
import styled from 'styled-components';
import { SubTitle } from '../../pages/HomePage/HomePage';
//testimg
import OdaibaImage from '../../assets/placeImg/odaiba.jpg';
import { FaLocationDot } from "react-icons/fa6";

const HotPlaceGrid = () => {

    const placeData = [
        { Title: "Title1", sub: "Subtitle1", img: OdaibaImage },
        { Title: "Title2", sub: "Subtitle2", img: OdaibaImage },
        { Title: "Title3", sub: "Subtitle3", img: OdaibaImage },
        { Title: "Title3", sub: "Subtitle3", img: OdaibaImage },
      ];
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