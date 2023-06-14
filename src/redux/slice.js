import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { fetchContacts } from 'service/phoneboockAPI';

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
    addContact: {
      prepare: contact => {
        return { payload: { ...contact, id: nanoid() } };
      },
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
    },
    deleteContact(state, { payload }) {
      state.items = state.items.filter(el => el.id !== payload);
    },
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
      console.log('action', payload);
      state.items = payload;
    },
    [fetchContacts.rejected]: () => {},
  },
});

export const { addContact, deleteContact, updateFilter } =
  phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;
