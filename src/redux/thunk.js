import { createAsyncThunk } from '@reduxjs/toolkit';

import { getContacts, addContact, deleteContact } from 'services/contacts-api';

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', () =>
  getContacts()
);
export const addContactThunk = createAsyncThunk('contacts/fetchAll', contact =>
  addContact(contact)
);

export const deleteContactThunk = createAsyncThunk('contacts/fetchAll', id =>
  deleteContact(id)
);
