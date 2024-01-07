import { useDispatch, useSelector } from 'react-redux';
import { Field, Form, Formik } from 'formik';

import { addContactThunk } from '../../redux/thunk';
import { selectItems } from '../../redux/selectors';
import { isContactDublicate, validateName, validatePhone } from '../../services/helpers';
import { ErrorValidate } from './ErrorValidate';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const contacts = useSelector(selectItems);
  const dispatch = useDispatch();

  const handleSubmit = (newContact, { resetForm }) => {
    const inContact = isContactDublicate(contacts, newContact);

    if (inContact) return;

    dispatch(addContactThunk(newContact));

    resetForm();
  };

  return (
    <Formik initialValues={{ name: '', phone: '' }} onSubmit={handleSubmit}>
      {({ errors, touched }) => (
        <Form className={css.form}>
          <label htmlFor="name" className={css.label}>
            Name
            <Field
              className={css.input}
              type="text"
              name="name"
              id="name"
              validate={validateName}
            />
            {errors.name && touched.name && <ErrorValidate error={errors.name} />}
          </label>
          <label htmlFor="phone" className={css.label}>
            Number
            <Field
              className={css.input}
              type="tel"
              name="phone"
              id="phone"
              validate={validatePhone}
            />
            {errors.phone && touched.phone && <ErrorValidate error={errors.phone} />}
          </label>
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};
