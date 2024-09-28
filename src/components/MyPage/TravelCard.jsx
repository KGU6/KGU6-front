import styled from "styled-components";
import LocationIcons from "../../assets/icons/location.svg?react";
import sampleImage from "../../assets/sampleimg.jpg";

const Card = styled.div`
  width: 168px;
  height: 223px;
  background-color: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 20 20 0 0px;
`;

const CardContent = styled.div`
  padding: 10px;
  background-color: #ffffff;
`;

const Location = styled.div`
  font-size: 12px;
  color: #8a8a8a;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
`;

const Date = styled.div`
  font-size: 12px;
  color: #8a8a8a;
`;

const LocationIcon = styled(LocationIcons)`
  width: 14px;
  height: 14px;
  margin-right: 10px;
`;

const TravelCard = ({ imageUrl, location, title, date }) => (
  <Card>
    <CardImage src={imageUrl || sampleImage} alt={title} />{" "}
    {/* 이미지 URL이 없으면 기본 이미지 사용 */}
    <CardContent>
      <Location>
        <LocationIcon />
        {location || "영국, 런던"}
      </Location>
      <Title>{title || "런던 숨겨진 명소 여행"}</Title>
      <Date>{date || "2024.05.28"}</Date>
    </CardContent>
  </Card>
);

export default TravelCard;
