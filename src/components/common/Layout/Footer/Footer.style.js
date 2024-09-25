import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.footer`
  height: 70px;
  display: flex;

  box-sizing: border-box;
  padding: 10px 0;
  z-index: 999;

  background-color: var(--color-white);
  border-top: 1px solid var(--color-gray-300);
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItem = styled(Link)`
  width: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  color: var(--color-gray-200);
  font-weight: var(--weight-light);
  font-size: 12px;

  svg {
    fill: ${(props) => (props.$isActive ? '#181F29' : '#B0B9C2')};
  }
`;
