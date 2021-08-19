import React from "react";
import { Item, Button } from "./ContactItem.styles";
import { deleteContact } from "services";
import { useDispatch } from "react-redux";

const ContactItem = ({ contacts }) => {
  const dispatch = useDispatch();

  return contacts.map(({ name, number, id }) => {
    return (
      <Item key={id}>
        {name}: {number}
        <Button onClick={() => dispatch(deleteContact(id))} type="button">
          Delete
        </Button>
      </Item>
    );
  });
};

export default ContactItem;
