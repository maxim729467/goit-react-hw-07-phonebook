import React, { useState } from "react";
import shortid from "shortid";
import { Form, Input, Label, Button } from "./ContactForm.styles.js";

function ContactForm({ addContact }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const reset = () => {
    setName("");
    setNumber("");
  };

  const onChange = (e) => {
    switch (e.currentTarget.name) {
      case "name":
        return setName(e.target.value);

      case "number":
        return setNumber(e.target.value);

      default:
        return;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    addContact(newContact);
    reset();
  };

  return (
    <Form onSubmit={onSubmit}>
      <Label>
        Name
        <Input
          onChange={onChange}
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </Label>
      <Label>
        Number
        <Input
          onChange={onChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          value={number}
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}

export default ContactForm;
