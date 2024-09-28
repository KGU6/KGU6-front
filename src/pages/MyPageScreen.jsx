import { useState } from "react";
import styled from "styled-components";
import LocationIconSrc from "../assets/location.svg";

const GradientBackground = styled.div`
  background: radial-gradient(circle, #a7e661, #dff6c5);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* 남은 공간을 채우기 위한 설정 */
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 70px;
  width: 100vw;
`;

const ProfileImage = styled.div`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  background-color: #e0e0e0;
  border: 10px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: inset 0px 4px 6px rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const ProfileName = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  padding: 15px;
  background-color: rgba(224, 247, 217, 0.8);
  border-radius: 20px;
  margin-bottom: 30px;
  position: relative;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const Divider = styled.div`
  position: absolute;
  width: 1px;
  height: 40px;
  background-color: #8fc566;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StatLabel = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #7b7b7b;
`;

const StatNumber = styled.span`
  font-size: 22px;
  font-weight: 700;
  margin-top: 5px;
`;

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 90%;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  flex-grow: 1; /* 남은 공간을 차지 */
  overflow-y: auto; /* 콘텐츠가 많을 경우 스크롤 처리 */
`;

const Card = styled.div`
  width: 40vw;
  height: 30vh;
  background-color: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CardTextContainer = styled.div`
  padding: 10px;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #525252;
  font-weight: 500;
`;

const LocationIcon = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 5px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 5px;
  color: #000;
`;

const Date = styled.div`
  font-size: 16px;
  color: #7b7b7b;
`;

const MyPageScreen = () => {
  const [profileImage, setProfileImage] = useState(null);

  // 파일 업로드가 발생했을 때 처리하는 함수
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // 이미지 미리보기 URL 생성
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <GradientBackground>
      {/* 프로필 영역 */}
      <ProfileSection>
        <ProfileImage
          onClick={() => document.getElementById("fileInput").click()}
        >
          {profileImage ? <img src={profileImage} alt="프로필 이미지" /> : "+"}
        </ProfileImage>
        <HiddenFileInput
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        <ProfileName>여행하는 미르미</ProfileName>

        {/* 통계 영역 */}
        <StatsContainer>
          <StatItem>
            <StatLabel>여행기</StatLabel>
            <StatNumber>7</StatNumber>
          </StatItem>
          <Divider />
          <StatItem>
            <StatLabel>구름핀</StatLabel>
            <StatNumber>62</StatNumber>
          </StatItem>
        </StatsContainer>
      </ProfileSection>

      {/* 카드 리스트 */}
      <CardList>
        <Card>
          <CardImage
            src="https://via.placeholder.com/300x150"
            alt="Card Image"
          />
          <CardTextContainer>
            <Location>
              <LocationIcon src={LocationIconSrc} alt="Location icon" />
              영국, 런던
            </Location>
            <Title>런던 숨겨진 명소 여행</Title>
            <Date>2024.05.28</Date>
          </CardTextContainer>
        </Card>
        {/* 다른 카드들 추가 */}
      </CardList>
    </GradientBackground>
  );
};

export default MyPageScreen;
