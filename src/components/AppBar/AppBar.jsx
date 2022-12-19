import { useSelector } from 'react-redux';
import UserMenu from './UserMenu/UserMenu';
import NavList from './NavList/NavList';
import authSelectors from 'redux/auth/auth-selectors';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const ApBar = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        {isLoggedIn ? <UserMenu /> : <NavList />}
      </Toolbar>
    </AppBar>
  );
};

export default ApBar;
