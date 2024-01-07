import css from './ContactForm.module.css';

export const ErrorValidate = ({ error }) => {
  return <div className={css.error}>{error}</div>;
};
