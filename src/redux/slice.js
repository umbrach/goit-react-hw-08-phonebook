import { createSlice } from '@reduxjs/toolkit';
import { fetchAddContact, fetchData, fetchDeleteContact } from './operations';

const valueSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    findUserAction(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchData.pending]: state => {
      state.contacts.isLoading = true;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchData.rejected]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [fetchAddContact.pending]: state => {
      state.contacts.isLoading = true;
    },
    [fetchAddContact.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [fetchAddContact.rejected]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [fetchDeleteContact.pending]: state => {
      state.contacts.isLoading = true;
    },
    [fetchDeleteContact.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = state.contacts.items.filter(
        item => item.id !== action.payload.id
      );
    },
    [fetchDeleteContact.rejected]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
});

export const { findUserAction } = valueSlice.actions;
export const usersReducer = valueSlice.reducer;
