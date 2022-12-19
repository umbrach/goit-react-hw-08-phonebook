import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    Notify.failure('user is existing');
    throw error;
  }
});

const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('users/login', credentials);

    token.set(data.token);
    return data;
  } catch (error) {
    Notify.failure('Email or password is not valid');
    throw error;
  }
});

const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');

    token.unset();
  } catch (error) {
    throw error;
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunAPI) => {
    const state = thunAPI.getState();
    const persistedToken = state.auth.token;
    token.set(persistedToken);
    if (!persistedToken) {
      return thunAPI.rejectWithValue();
    }
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunAPI.rejectWithValue();
    }
  }
);

export { register, login, logout, fetchCurrentUser };
