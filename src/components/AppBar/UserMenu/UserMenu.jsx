import { useDispatch, useSelector } from 'react-redux';

import { logout } from 'redux/auth/auth-operation';
import authSelectors from 'redux/auth/auth-selectors';
import { UserMenuStyled } from './UserMenu.styled';
import Button from '@mui/material/Button';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.selectUserName);

  const handlleLogoutClick = () => {
    dispatch(logout());
  };
  return (
    <>
      <UserMenuStyled>
        <p>Hello, {userName}</p>
        <Button variant="contained" size="small" onClick={handlleLogoutClick}>
          Logout
        </Button>
      </UserMenuStyled>
    </>
  );
};

export default UserMenu;
