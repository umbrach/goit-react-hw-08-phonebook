import { Report } from 'notiflix/build/notiflix-report-aio';
import { useSelector, useDispatch } from 'react-redux';
import { getConacts } from 'redux/selectors';
import { addContactThunk } from 'redux/contacts/thunk.users';
import { MyForm } from './Form.styled';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const { useState } = require('react');

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contactsFromState = useSelector(getConacts);

  const stateMap = {
    name: setName,
    number: setNumber,
  };

  const handleAddContact = event => {
    const { name } = event.target;
    stateMap[name](event.target.value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    const contact = {};
    contact.name = name;
    contact.number = number;

    const findedContact = contact.name.toLowerCase();
    if (
      contactsFromState.find(contact =>
        contact.name.toLowerCase().includes(findedContact)
      )
    ) {
      Report.failure(`${contact.name} is already in contacts`);
    } else {
      dispatch(addContactThunk(contact));
    }
    reset();
  };

  return (
    <MyForm onSubmit={handleSubmit}>
      <TextField
        id="outlined-required"
        type="text"
        name="name"
        label="Name"
        value={name}
        onChange={handleAddContact}
        size="small"
        inputProps={{
          pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
        }}
        helperText="Name may contain only letters"
        required
      ></TextField>
      <br />

      <TextField
        id="outlined-number"
        type="tel"
        name="number"
        label="Number"
        value={number}
        onChange={handleAddContact}
        inputProps={{
          inputMode: 'numeric',
          pattern: '[0-9, +, -]*',
        }}
        size="small"
        helperText="Number may contain only digit"
        required
      />

      <br />
      <br />
      <Button variant="contained" type="submit">
        Add Contact
      </Button>
      <br />
      <br />
    </MyForm>
  );
};

export default Form;
