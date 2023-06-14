import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from 'service/phoneboockAPI';
import { addContacts, deleteContacts } from 'service/phoneboockAPI';

const initialState = {
  items: [],
  isLoading: false,
  error: null,

  filter: '',
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    updateFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    // [fetchContacts.rejected]: () => { },

    [addContacts.pending]: state => {
      state.isLoading = true;
    },
    [addContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items.push(payload);
    },
    // [addContacts.rejected]: () => { },

    [deleteContacts.pending]: state => {
      state.isLoading = true;
    },
    [deleteContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.filter(el => el.id !== payload.id);
    },
    // [deleteContacts.rejected]: () => {},
  },
});

export const { addContact, deleteContact, updateFilter } =
  phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;
