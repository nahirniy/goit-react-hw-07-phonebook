import { useSelector } from 'react-redux';
import css from './Error.module.css';
import { selectError } from '../../redux/selectors';

export const Error = () => {
  const error = useSelector(selectError);

  return <h2 className={css.error}>{error}</h2>;
};
