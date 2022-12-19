import { createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  addContactThunk,
  getUsersThunk,
  deleteContactsThunk,
} from './thunk.users';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const mySlice = createSlice({
  name: 'contacts',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  // extraReducers: builder => {
  //   builder
  //     .addCase(getUsersThunk.pending, handlePending)
  //     .addCase(getUsersThunk.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.error = null;
  //       state.users = action.payload;
  //     })
  //     .addCase(getUsersThunk.rejected, handleRejected);
  // },
  extraReducers: {
    [getUsersThunk.pending]: handlePending,
    [getUsersThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.users = action.payload;
    },
    [getUsersThunk.rejected]: handleRejected,
    [addContactThunk.pending]: handlePending,
    [addContactThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.users.push(action.payload);
    },
    [addContactThunk.rejected]: handleRejected,
    [deleteContactsThunk.pending]: handlePending,
    [deleteContactsThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.users.findIndex(
        task => task.id === action.payload.id
      );
      state.users.splice(index, 1);
    },
    [deleteContactsThunk.rejected]: handleRejected,
  },
});

const persistConfig = {
  key: 'users',
  storage,
  whitelist: [],
};

export const contactsReducer = persistReducer(persistConfig, mySlice.reducer);

export const usersReducer = mySlice.reducer;

// export const { createUserAction, deleteUserAction, findUserAction } =
//   mySlice.actions;
