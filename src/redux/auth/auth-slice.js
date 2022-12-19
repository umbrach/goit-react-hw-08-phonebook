import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, fetchCurrentUser } from './auth-operation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrenUser: false,
  error: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.pending](state) {
      state.error = false;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.rejected](state, action) {
      state.error = true;
    },
    [logout.fulfilled](state, actiom) {
      state.user = {};
      state.isLoggedIn = false;
      state.token = '';
    },
    [fetchCurrentUser.pending](state) {
      state.isFetchingCurrenUser = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrenUser = false;
    },
    [fetchCurrentUser.rejected](state, action) {
      state.isFetchingCurrenUser = false;
      state.user = {};
      state.isLoggedIn = false;
      state.token = '';
    },
  },
});

export const authReducer = authSlice.reducer;
