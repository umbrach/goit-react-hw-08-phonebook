import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operation';
import { Report } from 'notiflix';
import { RegisterPage } from './RegisterPage.styled';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    if (password.length < 7) {
      Report.warning('Password must be min 7 symbols');
      return;
    }
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <RegisterPage>
      <h1>Register page</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-required"
          type="text"
          name="name"
          value={name}
          label="Name"
          onChange={handleChange}
          size="small"
          required
        ></TextField>
        <br />
        <br />

        <TextField
          id="outline-required"
          type="email"
          name="email"
          value={email}
          label="email"
          onChange={handleChange}
          size="small"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        ></TextField>
        <br />
        <br />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          helperText="Min 7 symbols"
          autoComplete="current-password"
          name="password"
          value={password}
          onChange={handleChange}
          size="small"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{7,}"
          required
        />

        <br />
        <br />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </RegisterPage>
  );
};

export default RegisterForm;
