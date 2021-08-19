import styles from "./App.module.css";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import Loader from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { fetchContacts, postContact } from "services";
import { useEffect } from "react";
import {
  getAllContacts,
  getFilteredContacts,
  getFilter,
  getLoader,
} from "Redux/selectors";

export default function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const notify = (name) => toast.warn(`${name} is already in contacts`);

  const onAddContact = (newContact) => {
    const contactPresenceCheck = getAllContacts(state).find(
      ({ name }) => name === newContact.name
    );

    if (contactPresenceCheck !== undefined) {
      notify(newContact.name);
      return;
    }

    dispatch(postContact(newContact));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = getFilteredContacts(state);
  const isLoading = getLoader(state);

  return (
    <div className={styles.Container}>
      {isLoading && (
        <FallbackContainer>
          <Loader type="Circles" color="#FF4500" height={80} width={80} />
        </FallbackContainer>
      )}
      <ToastContainer />
      <h1>Phonebook</h1>
      <ContactForm addContact={onAddContact} />
      <h2>Contacts</h2>
      <Filter value={getFilter(state)} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

const FallbackContainer = styled.div`
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translate(350%, -50%);
`;
