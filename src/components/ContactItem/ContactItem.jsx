import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { toast } from 'react-toastify';
import { selectError } from 'redux/selectors';
import { Item, ContactInfo, NameBox, Button } from './ContactItem.styled';

const ContactItem = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
    !error && toast.info(`${name} removed from contacts.`);
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
