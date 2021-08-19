import { createSelector } from "reselect";

export const getAllContacts = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;
export const getLoader = (state) => state.contacts.isLoading;

export const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filterString) => {
    const filter = filterString.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  }
);
