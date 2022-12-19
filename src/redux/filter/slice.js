const { createSlice } = require('@reduxjs/toolkit');

const filtersSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    findUserAction(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { findUserAction } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
