import { useDispatch } from 'react-redux';

import { setFilter } from '../../redux/contactsSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const findContact = ({ target: { value } }) => dispatch(setFilter(value));

  return (
    <>
      <h2>Contacts</h2>
      <label className={css.label} htmlFor="filter">
        Find contacts by name
        <input
          type="text"
          id="filter"
          name="filter"
          className={css.input}
          onInput={findContact}
        />
      </label>
    </>
  );
};
