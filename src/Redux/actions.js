import { createAction } from "@reduxjs/toolkit";

export const fetchContactsSuccess = createAction("contacts/getContacts");
export const fetchContactsRequest = createAction("contacts/loading");
export const fetchContactsError = createAction("contacts/setError");
export const updateFilterValue = createAction("contacts/filter");
