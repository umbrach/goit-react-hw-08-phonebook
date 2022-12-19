import { createAction } from '@reduxjs/toolkit';

export const fetchContatsRequest = createAction(
  'phonebook/fetchContatsRequest'
);
export const fetchContatsSuccess = createAction(
  'phonebook/fetchContatsSuccess'
);
export const fetchContatsError = createAction('phonebook/fetchContatsError');

export const addContactRequest = createAction('phonebook/addContactRequest');
export const addContactSuccess = createAction('phonebook/addContactSuccess');
export const addContactError = createAction('phonebook/addContactError');

export const deleteContactRequest = createAction(
  'phonebook/deleteContactRequest'
);
export const deleteContactSuccess = createAction(
  'phonebook/deleteContactSuccess'
);
export const deleteContactError = createAction('phonebook/deleteContactError');

export const changeFilter = createAction('phonebook/filterContact');
