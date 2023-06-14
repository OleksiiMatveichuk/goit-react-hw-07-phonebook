import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6489cc885fa58521cab0456b.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'contacts/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const addContacts = createAsyncThunk(
//   'contacts/addContact',
//   async (contact, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post('contacts');
//       //   return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const filterContacts = createAsyncThunk(
//   'contacts/filterContact',
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post('contacts');
//       //   return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
