import { Container } from './ContactsPage.styled';
import Form from '../../components/Form/Form';
import Contacts from '../../components/Contacts/Contacts';
import Filter from '../../components/Filter/Filter';
import List from '@mui/material/List';

const ContactsPage = () => {
  return (
    <Container>
      <h2>Phonebook</h2>
      <Form />
      <Filter />
      <h2>Contacts</h2>
      <List>
        <Contacts />
      </List>
    </Container>
  );
};

export default ContactsPage;
