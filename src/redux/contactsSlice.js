import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { initialState } from './initialState';
import { addContactThunk, deleteContactThunk, getContactsThunk } from './thunk';
import {
  STATUS,
  appendThunk,
  handleFulfilled,
  handleFulfilledAdd,
  handleFulfilledDel,
  handleFulfilledGet,
  handlePending,
  handleRejected,
} from '../services/function-thunk';

const contactsSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload.toLowerCase();
    },
  },

  extraReducers: builder => {
    const { PENDING, REJECTED, FULFILLED } = STATUS;

    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(addContactThunk.fulfilled, handleFulfilledAdd)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDel)
      .addMatcher(isAnyOf(...appendThunk(PENDING)), handlePending)
      .addMatcher(isAnyOf(...appendThunk(FULFILLED)), handleFulfilled)
      .addMatcher(isAnyOf(...appendThunk(REJECTED)), handleRejected);
  },
});

export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
