import React from 'react';
import { useSelector } from 'react-redux';
import { List } from './ContactList.styled';
import { selectFilteredContacts } from 'redux/selectors';
import ContactItem from 'components/ContactItem';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactItem key={id} contact={{ id, name, phone }} />
      ))}
    </List>
  );
};

export default ContactList;
