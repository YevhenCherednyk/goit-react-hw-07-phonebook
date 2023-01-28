import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { toast } from 'react-toastify';
import { Item, ContactInfo, NameBox, Button } from './ContactItem.styled';

const ContactItem = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
    toast.info(`${name} removed from contacts.`);
  };

  return (
    <Item key={id}>
      <ContactInfo>
        <NameBox>{name}</NameBox> : {phone}
      </ContactInfo>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};

export default ContactItem;
