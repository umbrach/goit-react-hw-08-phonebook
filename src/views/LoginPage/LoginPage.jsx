import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from 'redux/auth/auth-operation';
import { LoginPage } from './LoginPage.styled';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <LoginPage>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-required"
          label="email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          size="small"
          //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        ></TextField>
        <br />
        <br />

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          name="password"
          value={password}
          onChange={handleChange}
          size="small"
          //   pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}"
          required
        />

        <br />
        <br />
        <Button variant="contained" type="submit">
          Log in
        </Button>
      </form>
    </LoginPage>
  );
};

export default LoginForm;
