import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { getContactsThunk } from './thunk';
import { Notify } from 'notiflix';

function addNewContact(items, contact) {
  const existsContact = items.some(
    ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
  );

  if (existsContact) {
    Notify.failure(`${contact.name} is already in contacts`);
    return;
  }

  items.push(contact);
}

function handleFulfilled(state, { payload }) {
  const { items } = state.contacts;

  addNewContact(items, payload);
}

const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: initialState,
  // reducers: {
  //   addContact(state, action) {
  //     const newContact = action.payload;
  //     const newName = newContact.name;
  //     const { items } = state.contacts;

  //     const existsContact = items.some(
  //       ({ name }) => name.toLowerCase() === newName.toLowerCase()
  //     );

  //     if (existsContact) {
  //       Notify.failure(`${newName} is already in contacts`);
  //       return;
  //     }

  //     newContact.id = nanoid();
  //     items.push(newContact);
  //   },
  //   deleteContact(state, action) {
  //     const { items } = state.contacts;
  //     const idDeleteContact = action.payload;

  //     const index = items.findIndex(({ id }) => id !== idDeleteContact);
  //     items.splice(index, 1);
  //   },
  //   setFilter(state, action) {
  //     state.filter = action.payload.toLowerCase();
  //   },
  // },

  extraReducers: builder => {
    builder.addCase(getContactsThunk.fulfilled, handleFulfilled);
  },
});

// export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
