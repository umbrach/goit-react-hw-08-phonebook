import { NavLink } from 'react-router-dom';
import { HeaderList } from './NavList.styled';

const NavList = () => {
  return (
    <HeaderList className="header-list">
      <li>
        <NavLink to="login" className="header-item">
          Log In
        </NavLink>
      </li>
      <li>
        <NavLink to="register" className="header-item">
          Sign up
        </NavLink>
      </li>
    </HeaderList>
  );
};

export default NavList;
