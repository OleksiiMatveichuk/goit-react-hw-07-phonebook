import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilterContact = state => state.contacts.filter;
export const selectIsLoading = state => state.contacts.isLoading;

export const selectFilter = createSelector(
  [selectContacts, selectFilterContact],
  (contacts, filterValue) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);
