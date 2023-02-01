import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Item, ContactInfo, NameBox, Button } from './ContactItem.styled';

const ContactItem = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
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

export default ContactItem;
