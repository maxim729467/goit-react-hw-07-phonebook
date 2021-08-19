import axios from "axios";
import * as actions from "Redux/actions";
import { toast } from "react-toastify";

const errorNotice = () =>
  toast.error("The request couldn't be processed. Please try again.");

export const fetchContacts = () => (dispatch) => {
  dispatch(actions.fetchContactsRequest());

  axios
    .get("http://localhost:4000/contacts")
    .then((response) => {
      dispatch(actions.fetchContactsSuccess(response.data));
    })
    .catch(() => {
      errorNotice();
      dispatch(actions.fetchContactsError());
    });
};

export const postContact = (contact) => (dispatch) => {
  dispatch(actions.fetchContactsRequest());
  axios
    .post("http://localhost:4000/contacts", {
      ...contact,
    })
    .then(function (response) {
      if (response.status === 201) {
        dispatch(fetchContacts());
      }
    })
    .catch(function () {
      errorNotice();
      dispatch(actions.fetchContactsError());
    });
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(actions.fetchContactsRequest());
  axios
    .delete(`http://localhost:4000/contacts/${id}`)
    .then(function (response) {
      if (response.status === 200) {
        dispatch(fetchContacts());
      }
    })
    .catch(function () {
      errorNotice();
      dispatch(actions.fetchContactsError());
    });
};
