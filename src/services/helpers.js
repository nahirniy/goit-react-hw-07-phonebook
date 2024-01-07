import { Notify } from 'notiflix';

export function createContact(elements) {
  const { name, number } = elements;

  return { name: name.value, phone: number.value };
}

export function isContactDublicate(contacts, newContact) {
  const inContact = contacts.some(
    ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
  );

  if (inContact) Notify.failure(`${newContact.name} is already in contacts`);

  return inContact;
}
