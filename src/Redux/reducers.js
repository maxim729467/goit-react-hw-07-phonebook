import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import * as actions from "./actions";

const contactReducer = createReducer([], {
  [actions.fetchContactsSuccess]: (_, action) => [...action.payload],
});

const loadingReducer = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,
});

const filterReducer = createReducer("", {
  [actions.updateFilterValue]: (_, action) => action.payload,
});

const contactRootReducer = combineReducers({
  items: contactReducer,
  filter: filterReducer,
  isLoading: loadingReducer,
});

export const reducer = combineReducers({
  contacts: contactRootReducer,
});
