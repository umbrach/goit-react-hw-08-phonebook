import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './slice';


export const store = configureStore({
  reducer: {
    contacts: usersReducer,
  },
});

export default store;
