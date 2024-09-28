import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
//icon
import { RiKakaoTalkFill } from 'react-icons/ri';
import { SiNaver } from 'react-icons/si';
import { FaApple } from 'react-icons/fa';
import { IoMdArrowBack } from 'react-icons/io';

function LoginPage() {
  const [clicked, setIsClicked] = useState(false);
  const [logoing, setIsLogoing] = useState(true);
  const [fadeOut, setFadeOut] = useState(false); // fade-out 상태 추가
  const [username, setUsername] = useState(''); // 아이디 입력값 관리
  const [password, setPassword] = useState(''); // 비밀번호 입력값 관리
  const [emailWarning, setEmailWarning] = useState(''); // 이메일 경고 메시지

  const navigate = useNavigate();

  // 이메일 형식 검증 함수
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 형식의 정규식
    return emailRegex.test(email); // 이메일 형식이 맞으면 true 반환
  };

  const isButtonActive =
    username.trim() !== '' && password.trim() !== '' && validateEmail(username); // 이메일 형식과 공백이 아닌 값 체크

  const handleLoginClick = () => {
    setIsClicked(!clicked);
  };

  const setCookie = (name, value, days) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000); // days 이후 만료
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;`;
  };

  const goToHome = () => {
    if (validateEmail(username)) {
      setCookie('username', username, 7);
      navigate('/h');
    }
  };

  const handleMouseEnter = () => {
    if (!validateEmail(username)) {
      setEmailWarning('올바른 이메일 형식이 필요합니다.'); // 이메일 경고 메시지 설정
    } else {
      setEmailWarning(''); // 이메일 형식이 맞을 경우 경고 메시지 초기화
    }
  };

  const handleMouseLeave = () => {
    setEmailWarning(''); // 마우스를 떼면 경고 메시지를 없앰
  };

  // 3초 후 logoing을 false로 설정하며, 그 전에 fade-out 상태로 전환
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // fade-out 시작
      setTimeout(() => {
        setIsAnimating(false); // 애니메이션 종료
        setIsLogoing(false); // 로고 화면 비활성화
      }, 1000); // fade-out 애니메이션이 끝난 후 로고를 숨김
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // 초기 로딩 화면에서 fade-out 및 z-index 조정
  return (
    <>
      {logoing && (
        <Container
          className={`second ${fadeOut ? 'fade-out' : ''}`}
          style={{ zIndex: 999 }}
        >
          <img src='../src/assets/login/mainLogo.png' alt='Main Logo' />
        </Container>
      )}

      {clicked && (
        <Container className='second'>
          <button className='arrow' onClick={handleLoginClick}>
            <IoMdArrowBack />
          </button>
          <span className='title'>로그인</span>
          <MainWrapper>
            <LoginForm>
              <InputWrapper>
                <input
                  className='idpw'
                  type='text'
                  placeholder='이메일을 입력해주세요'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} // 아이디 입력값 업데이트
                />
                <input
                  className='idpw'
                  type='password'
                  placeholder='비밀번호를 입력해주세요'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // 비밀번호 입력값 업데이트
                />
              </InputWrapper>
              <SubmitButton
                active={isButtonActive}
                onClick={goToHome}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                로그인
              </SubmitButton>
              {emailWarning && <WarningMessage>{emailWarning}</WarningMessage>}{' '}
              {/* 경고 메시지 출력 */}
            </LoginForm>
            <LinksContainer>
              <Link href='#'>아이디 찾기</Link>
              <span>|</span>
              <Link href='#'>비밀번호 찾기</Link>
              <Link href='#'>회원가입</Link>
            </LinksContainer>
          </MainWrapper>
          <SocialLogin>
            <span className='menuText'>간편 로그인</span>
            <div className='SBtnWrapper'>
              <SocialButton color='#03c75a'>
                <SiNaver />
              </SocialButton>
              <SocialButton color='#fddc3f'>
                <RiKakaoTalkFill />
              </SocialButton>
              <SocialButton color='#000000'>
                <FaApple />
              </SocialButton>
            </div>
          </SocialLogin>
        </Container>
      )}

      <Container style={{ zIndex: 1 }}>
        <div className='logoWrapper'>
          <div className='logo'>구름으로</div>
          <div className='logo'>기록하는</div>
          <div className='logo'>당신만의 여행기</div>
        </div>
        <FirstButtonContainer>
          <SignupButton>회원가입</SignupButton>
          <LoginButton onClick={handleLoginClick}>로그인</LoginButton>
        </FirstButtonContainer>
      </Container>
    </>
  );
}

export default LoginPage;

// styled-components
const Container = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  flex-direction: column;
  align-items: center;
  width: 390px;
  height: 844px;
  color: white;
  text-align: center;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.38) 38%,
      rgba(0, 0, 0, 0.475) 47.5%,
      rgba(0, 0, 0, 0.76) 76%,
      rgba(0, 0, 0, 0.95) 95%
    ),
    url('/src/assets/login/loginbg.jpg');
  background-size: cover;
  background-position: center;
  z-index: 999;
  transition: z-index 0.5s ease-out; /* z-index 변경 애니메이션 */

  .title {
    position: absolute;
    font-size: 18px;
    line-height: 22px;
    top: 75px;
    height: 20px;
    width: 60px;
    color: #18191a;
    font-weight: var(--weight-semi-bold);
  }

  .logoWrapper {
    display: flex;
    gap: 20px;
    flex-direction: column;
    width: 300px;
    height: 147px;
    position: absolute;
    top: 386px;
    text-align: left;
    .logo {
      font-size: 30px;
      font-weight: var(--weight-light);
      &:last-of-type {
        font-weight: var(--weight-semi-bold) !important;
      }
    }
  }

  .arrow {
    font-size: 25px;
    color: #8c8d90;
    background-color: transparent;
    position: absolute;
    left: 19px;
    top: 71px;
    padding: 0;
  }

  &.second {
    background-color: white;
    background-image: none;
    img {
      position: absolute;
      top: 378px;
      width: 160px;
      height: 37px;
      margin: 0 auto;
    }
  }

  // fade-out 애니메이션
  &.fade-out {
    opacity: 0;
    transition: opacity 1s ease-out;
  }
`;

const FirstButtonContainer = styled.div`
  width: 314px;
  height: 120px;
  position: absolute;
  top: 605px;
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
`;

const SignupButton = styled(Button)`
  background-color: #97df47;
  color: #18191a;
  border: none;
  font-weight: var(--weight-bold);
`;

const LoginButton = styled(Button)`
  background-color: transparent;
  color: #9fdd59;
  border: 0.6px solid #9fdd59;
  &:hover {
    background-color: #97df47;
    color: #ffffff;
  }
`;

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
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 54px;
  color: black;
  .idpw {
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
`;

const SubmitButton = styled.button`
  width: 323px;
  height: 55px;
  padding: 10px 12px;
  background: ${({ active }) => (active ? '#97DF47' : '#DFF6C5')};
  color: #ffffff;
  font-size: 16px;
  font-weight: var(--weight-bold);
  border-radius: 8px;
  margin-bottom: 14px;
  cursor: ${({ active }) => (active ? 'pointer' : 'default')};
  &:hover {
    background-color: ${({ active }) => (active ? '#87ceeb' : '#dcedc8')};
  }
`;

const WarningMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: -10px;
`;

const LinksContainer = styled.div`
  display: flex;
  position: relative;
  gap: 10px;
  width: 100%;
  max-width: 321px;
  margin: 10px 0;
  font-size: 14px;
  color: #666;
`;

const Link = styled.a`
  color: #666;
  text-decoration: none;
  &:hover {
    color: #97df47;
  }
  &:last-of-type {
    text-decoration: underline;
    position: absolute;
    right: 0;
  }
`;

const SocialLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: absolute;
  top: 522px;
  .menuText {
    font-size: 16px;
    color: #4d4d4d;
  }
  .SBtnWrapper {
    display: flex;
    gap: 13px;
    width: 100%;
  }
`;

const SocialButton = styled.button`
  background: ${({ color }) => color || '#ccc'};
  width: 47px !important;
  height: 47px !important;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  line-height: 26px;
  color: white;
  box-sizing: border-box;
  padding: 0;
  &:first-of-type {
    font-size: 24px;
  }
`;
