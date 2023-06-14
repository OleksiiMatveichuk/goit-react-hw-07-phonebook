import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  items: [],
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
});

export const { addContact, deleteContact, updateFilter } =
  phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;
