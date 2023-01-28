import React from 'react';
import PropTypes from 'prop-types';
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
