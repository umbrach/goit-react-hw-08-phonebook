import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import s from './AutNav.module.css';
import Typography from '@mui/material/Typography';

const AutNav = () => (
  <div className={s.AutNav}>
    <Typography color="inherit">
      <NavLink
        to={routes.login}
        activeClassName={s.activelink}
        className={s.link}
      >
        Login
      </NavLink>
    </Typography>
    <Typography color="inherit">
      <NavLink
        to={routes.register}
        activeClassName={s.activelink}
        className={s.link}
      >
        Register
      </NavLink>
    </Typography>
  </div>
);

export default AutNav;
