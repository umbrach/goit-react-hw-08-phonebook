import { useState } from 'react';
import s from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { fetchAddContact } from 'redux/operations';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.contacts.items);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        throw new Error('Error');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setName(e.currentTarget.value);
    setNumber(e.currentTarget.value);
      const contact = {
        id: nanoid(),
        name,
        number,
      };
    const alreadyInContacts = contacts.find(item => item.name === name);
    if (alreadyInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(fetchAddContact(contact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={name}
          onChange={handleChange}
          required
        ></input>
      </label>
      <label>
        Phone number
        <input
          className={s.input}
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          name="number"
          value={number}
          onChange={handleChange}
          required
        ></input>
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func,
};
