import { NavItem } from './Footer.style.js';
import { useLocation } from 'react-router-dom';

const NavItemContainer = ({ children, contentName, path }) => {
  const location = useLocation();

  return (
    <NavItem to={path} $isActive={path === location.pathname}>
      {children}
      {contentName && <span>{contentName}</span>}
    </NavItem>
  );
};

export default NavItemContainer;
