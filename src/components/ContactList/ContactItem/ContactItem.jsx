import { useDispatch } from 'react-redux';

import { deleteContactThunk } from '../../../redux/thunk';
import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContactThunk(id));

  return (
    <li className={css.item}>
      {name}: {number}
      <button type="button" className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};
