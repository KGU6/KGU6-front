import styled from "styled-components";

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
`;

const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border: 1px solid #ccc;
`;

const ProfileName = styled.p`
  font-size: 18px;
  color: #7d7d7d;
  margin: 0;
`;

const StatSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
  background-color: #e0e0e0;
  border-radius: 20px;
  margin: 20px 0;
`;

const StatItem = styled.div`
  flex: 1;
  text-align: center;
  border-right: ${(props) => (props.border ? "1px solid #ccc" : "none")};
`;

const StatLabel = styled.p`
  margin: 0;
  font-size: 14px;
  color: #7d7d7d;
`;

const StatValue = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

const ProfileCard = () => {
  return (
    <ProfileWrapper>
      <ProfileImage>
        {/* 이미지 */}
        <img src="#" alt="profile" />
      </ProfileImage>
      <ProfileName>닉네임</ProfileName>
      <StatSection>
        <StatItem border>
          <StatLabel>lorem</StatLabel>
          <StatValue>10</StatValue>
        </StatItem>
        <StatItem border>
          <StatLabel>lorem</StatLabel>
          <StatValue>200</StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>lorem</StatLabel>
          <StatValue>30</StatValue>
        </StatItem>
      </StatSection>
    </ProfileWrapper>
  );
};

export default ProfileCard;
