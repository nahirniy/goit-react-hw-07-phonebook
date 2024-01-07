import { addContactThunk, deleteContactThunk, getContactsThunk } from '../redux/thunk';

const arrThunk = [getContactsThunk, addContactThunk, deleteContactThunk];

export const appendThunk = type => arrThunk.map(thunk => thunk[type]);

export const STATUS = {
  PENDING: 'pending',
  REJECTED: 'rejected',
  FULFILLED: 'fulfilled',
};
export function handlePending({ contacts }) {
  contacts.isLoading = true;
}
export function handleFulfilled({ contacts }) {
  contacts.isLoading = false;
  contacts.error = null;
}
export function handleRejected({ contacts }, { error }) {
  contacts.isLoading = false;
  contacts.error = error.message;
}

export function handleFulfilledGet({ contacts }, { payload }) {
  contacts.items = payload;
}

export function handleFulfilledAdd({ contacts }, { payload }) {
  contacts.items.push(payload);
}

export function handleFulfilledDel({ contacts }, { payload }) {
  contacts.items = contacts.items.filter(({ id }) => id !== payload.id);
}
