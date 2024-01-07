import { shallowEqual, useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../../redux/selectors';
import { ContactItem } from './ContactItem/ContactItem';
import css from './ContactList.module.css';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts, shallowEqual);

  return (
    <>
      <ul className={css.contact_list}>
        {visibleContacts.map(({ id, name, number }) => {
          return <ContactItem key={id} id={id} name={name} number={number} />;
        })}
      </ul>
    </>
  );
};
