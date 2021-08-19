import React from "react";
import { List } from "./ContactList.styles";
import ContactItem from "./ContactItem";

const ContactList = ({ contacts }) => {
  return (
    <List>
      <ContactItem contacts={contacts} />
    </List>
  );
};

export default ContactList;
