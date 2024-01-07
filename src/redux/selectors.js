import { createSelector } from '@reduxjs/toolkit';

export const selectItems = state => state.phonebook.contacts.items;
const seleсtFilter = state => state.phonebook.filter;

export const selectVisibleContacts = createSelector(
  [selectItems, seleсtFilter],

  (items, filter) => {
    return items.filter(({ name }) => name.toLowerCase().includes(filter));
  }
);
