import { useDispatch } from 'react-redux';
import { Form, Input, Button } from './ContactForm.styled';
import { addContact } from 'redux/contactsSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleContact = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const { name, number } = form.elements;

    const newContact = {
      name: name.value,
      number: number.value,
    };

    dispatch(addContact(newContact));
    form.reset();
  };

  return (
    <Form action="" onSubmit={handleContact}>
      <label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Za-яА-Я]+(([' \-][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button>Add contact</Button>
    </Form>
  );
};
