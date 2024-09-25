import { Container, Nav } from './Footer.style.js';
import NavItemContainer from './NavItemContainer.jsx';

// Todo: NavItemContainer컴포넌트 children으로 icon 삽입 필요
// 임의로 내용 작성함

const Footer = () => {
  return (
    <Container>
      <Nav>
        <NavItemContainer contentName={'메인'} path={'/'}></NavItemContainer>
        <NavItemContainer
          contentName={'채팅'}
          path={'/chat-list'}
        ></NavItemContainer>
        <NavItemContainer
          contentName={'글쓰기'}
          path={'/create-post'}
        ></NavItemContainer>
        <NavItemContainer
          contentName={'이용내역'}
          path={'/usage-history'}
        ></NavItemContainer>
        <NavItemContainer
          contentName={'내 정보'}
          path={'/my-profile'}
        ></NavItemContainer>
      </Nav>
    </Container>
  );
};

export default Footer;
