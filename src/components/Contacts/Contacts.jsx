import PropTypes from 'prop-types';
// import { Button } from './Contacts.styled';
import { useDispatch } from 'react-redux';
import { getConacts, getFilterValue } from 'redux/selectors';
import ListItem from '@mui/material/ListItem';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUsersThunk, deleteContactsThunk } from 'redux/contacts/thunk.users';
import Button from '@mui/material/Button';

const Contacts = ({ options }) => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilterValue);

  useEffect(() => {
    dispatch(getUsersThunk({}));
  }, [dispatch]);
  const contactsFromState = useSelector(getConacts);

  const getVisibleContacts = () => {
    const normalaziedFilter = filter?.toLowerCase();
    return contactsFromState?.filter(contact =>
      contact.name.toLowerCase().includes(normalaziedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  const handleDeleteContact = e => {
    // dispatch(deleteUserAction(e.target.id));
    dispatch(deleteContactsThunk(e.target.id));
  };
  return (
    <>
      {visibleContacts?.map(visibleContact => (
        <ListItem
          dense
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
          }}
          key={visibleContact.id}
          className="list__item"
        >
          <span>{visibleContact.name} </span>
          <br />
          <span>{visibleContact.number}</span>
          <Button
            variant="outlined"
            type="button"
            id={visibleContact.id}
            onClick={handleDeleteContact}
            size="small"
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </>
  );
};

Contacts.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  // onClick: PropTypes.func.isRequired,
};

export default Contacts;
