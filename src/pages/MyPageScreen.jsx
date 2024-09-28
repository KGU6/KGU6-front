import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Footer from '../components/common/Layout/Footer';
import { BottomSheet } from 'react-spring-bottom-sheet';
import TravelCard from '../components/MyPage/TravelCard';
import { getProfile } from '../api/userApi';

const GradientBackground = styled.div`
  height: 100vh;
  background: radial-gradient(circle, #a7e661, #dff6c5);
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  padding-top: 20px;
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
  margin-bottom: 10px;
`;

const StatNumber = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin-top: 5px;
`;

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 100%;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.8);

  padding: ${({ isMyPage }) => (isMyPage ? '20px' : '20px 0')};

  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  flex-grow: 1;
  overflow-y: auto;
`;

const MyPageScreen = () => {
  const [profileImage, setProfileImage] = useState(null);
  const sheetRef = useRef(null);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  useEffect(() => {
    (async () => {
      const response = await getProfile();
      console.log(response);
    })();
  }, []);

  return (
    <GradientBackground>
      {/* 프로필 영역 */}
      <ProfileSection>
        <ProfileImage
          onClick={() => document.getElementById('fileInput').click()}
        >
          {profileImage ? <img src={profileImage} alt='프로필 이미지' /> : '+'}
        </ProfileImage>
        <HiddenFileInput
          id='fileInput'
          type='file'
          accept='image/*'
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
      <BottomSheet
        open
        blocking={false}
        ref={sheetRef}
        defaultSnap={() => 80}
        snapPoints={({ maxHeight }) => [
          Math.floor(maxHeight * 0.95),
          Math.floor(maxHeight * 0.55),
        ]}
        expandOnContentDrag
        // onSpringEnd={() => setPostListHeight(sheetRef.current?.height || 0)}
      >
        <CardList isMyPage={true}>
          <TravelCard />
          <TravelCard />
          <TravelCard />
          <TravelCard />
        </CardList>
      </BottomSheet>

      <Footer />
    </GradientBackground>
  );
};

export default MyPageScreen;
