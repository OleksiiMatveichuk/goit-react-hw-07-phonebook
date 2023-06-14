import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './slice';

export const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
  },
});
