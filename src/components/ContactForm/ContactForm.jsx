import { useDispatch, useSelector } from 'react-redux';

import { addContactThunk } from '../../redux/thunk';
import { selectItems } from '../../redux/selectors';
import { isContactDublicate, createContact } from '../../services/helpers';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const contacts = useSelector(selectItems);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = createContact(e.target.elements);
    const inContact = isContactDublicate(contacts, newContact);

    if (inContact) return;

    dispatch(addContactThunk(newContact));

    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="name" className={css.label}>
        Name
        <input className={css.input} type="text" name="name" id="name" required />
      </label>
      <label htmlFor="number" className={css.label}>
        Number
        <input className={css.input} type="tel" name="number" id="number" required />
      </label>
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
