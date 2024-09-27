import React, { useState } from "react";
import styled from "styled-components";
//icon
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { FaApple } from "react-icons/fa";

function LoginPage() {
  const [clicked, setIsClicked] = useState(false);

  // LoginButton을 눌렀을 때 상태 변경
  const handleLoginClick = () => {
    setIsClicked(true);
  };

  // clicked가 true이면 새로운 화면을 렌더링
  if (clicked) {
    return (
      <Container>
        <span className="title">로그인</span>
        <MainWrapper>
          <LoginForm>
            <InputWrapper>
              <input className="idpw" type="text" placeholder="아이디를 입력해주세요" />
              <input className="idpw" type="password" placeholder="비밀번호를 입력해주세요" />
            </InputWrapper>
            <SubmitButton>로그인</SubmitButton>
          </LoginForm>
          <LinksContainer>
            <Link href="#">아이디 찾기</Link>
            <span>|</span>
            <Link href="#">비밀번호 찾기</Link>
            <Link href="#">회원가입</Link>
          </LinksContainer>
        </MainWrapper>
        <SocialLogin>
          <span className="menuText">간편 로그인</span>
          <div className="SBtnWrapper">
            <SocialButton color="#03c75a"><SiNaver/></SocialButton>
            <SocialButton color="#fddc3f"><RiKakaoTalkFill/></SocialButton>
            <SocialButton color="#000000"><FaApple/></SocialButton>
            </div>
        </SocialLogin>
      </Container>
    );
  }

  // clicked가 false일 때 기존 로그인 화면 렌더링
  return (
    <Container>
      <div className="logo">LOGO</div>
      <FirstButtonContainer>
        <SignupButton>회원가입</SignupButton>
        <LoginButton onClick={handleLoginClick}>로그인</LoginButton>
      </FirstButtonContainer>
    </Container>
  );
}

export default LoginPage;
//제일 초기 화면
const Container = styled.div`
  display: flex;
  position:relative;
  flex-direction: column;
  align-items: center;
  width: 390px;
  height: 844px;
  background-color: #9fdd59;
  color: white;
  text-align: center;
  .title{
    position: absolute;
    font-size: 18px;
    line-height:22px;
    top:75px;
    height:20px;
    width:60px;
  }
  .logo{
    font-size: 48px;
    margin-top: 100px;
    font-weight: bold;
    position:absolute;
    top:305px;
    @media (max-width: 768px) {
      font-size: 36px;
    }

  }
`;

const FirstButtonContainer = styled.div`
  width: 314px;
  height: 120px;
  position:absolute;
  top:605px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 116px;
`;

const Button = styled.button`
  padding: 15px;
  font-size: 18px;
  line-height: 22px;
  color: black;
  border-radius: 44px;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px;
  }
`;

const SignupButton = styled(Button)`
  background-color: #6eeb83;
  border: none;
`;

const LoginButton = styled(Button)`
  background-color: transparent;
  color: black;
  border: 0.6px solid #6eeb83;
`;


//여기부터 로그인 세부

const MainWrapper = styled.div`
  width: 100%;
  display: flex;       
  flex-direction: column; 
  align-items: center;
  position: relative;
  top: 186px;
`;

const LoginForm = styled.div`
  width: 100%;
  max-width: 321px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
  gap:10px;
  margin-bottom:54px;
  .idpw{
    width: 100%;
    padding: 15px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-sizing: border-box;

    &::placeholder {
      color: #ccc;
    }
  }
`

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #e8f5e9;
  color: #333;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  margin-bottom:14px;
  cursor: pointer;

  &:hover {
    background-color: #dcedc8;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  position: relative;
  gap:10px;
  width: 100%;
  max-width: 321px;
  margin: 10px 0;
  font-size: 14px;
  color: #666;
`;

const Link = styled.a`
  color: #666;
  text-decoration: none;
  &:last-of-type {
    text-decoration: underline;
    position: absolute;
    right:0;
  }
`;

const SocialLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position:absolute;
  top:522px;
  .menuText {
    font-size: 16px;
    color: #4d4d4d;
  }
  .SBtnWrapper {
    display: flex;
    gap: 13px;
    width:100%;
  }
`;

const SocialButton = styled.button`
  background: ${({ color }) => color || "#ccc"};
  width: 47px !important;
  height: 47px !important;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: white;
  box-sizing: border-box;
  padding:0;
`;


