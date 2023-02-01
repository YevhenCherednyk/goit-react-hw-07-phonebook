import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { toast } from 'react-toastify';
import { Form, Label, Span, Input, Button } from './ContactForm.styled';
import { selectContacts } from 'redux/selectors';

export default function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    const { name, phone } = evt.target;

    if (contacts.find(contact => contact.name === name.value)) {
      return toast.error(`Sorry, ${name.value} is already in contacts.`);
    }

    if (contacts.find(contact => contact.phone === phone.value)) {
      return toast.error(
        `Sorry, phone number: ${phone.value} is already in contacts.`
      );
    }

    const newContact = {
      name: name.value,
      phone: phone.value,
    };

    dispatch(addContact(newContact));

    evt.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <Span>Name</Span>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        <Span>Number</Span>
        <Input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}
