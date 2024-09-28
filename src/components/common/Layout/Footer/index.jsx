import { Container, Nav } from "./Footer.style.js";
import NavItemContainer from "./NavItemContainer.jsx";

import CreateIcon from "@/assets/icons/footer/create-icon.svg?react";
import HomeIcon from "@/assets/icons/footer/home-icon.svg?react";
import SearchIcon from "@/assets/icons/footer/search-icon.svg?react";
import ProfileIcon from "@/assets/icons/footer/profile-icon.svg?react";
import UsageIcon from "@/assets/icons/footer/usage-icon.svg?react";

// Todo: NavItemContainer컴포넌트 children으로 icon 삽입 필요
// 임의로 내용 작성함

const Footer = () => {
  return (
    <Container>
      <Nav>
        <NavItemContainer path={"/"}>
          <HomeIcon />
        </NavItemContainer>
        <NavItemContainer path={"/search"}>
          <SearchIcon />
        </NavItemContainer>
        <NavItemContainer path={"/create-post"}>
          <CreateIcon />
        </NavItemContainer>
        <NavItemContainer path={"/usage-history"}>
          <UsageIcon />
        </NavItemContainer>
        <NavItemContainer path={"/my-profile"}>
          <ProfileIcon />
        </NavItemContainer>
      </Nav>
    </Container>
  );
};

export default Footer;
