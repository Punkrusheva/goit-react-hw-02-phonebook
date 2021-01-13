import React, { Component } from 'react';
import Layout from './Layout';
import ContactList from './ContactList/ContactList'
//import contacts from '../Phonebook/phonebook.json';
//import contacts1 from '../Phonebook/phonebook1.json';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import createContact from "../utils/create-contact";

export default class App extends Component {
  state = {
    contacts: [],
  };

  addContact = () => {
    const contact = createContact();
    
    console.log(contact);

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <Layout title="Phonebook">
          <PhonebookForm onAddContact={this.addContact} contacts={contacts} />
        </Layout>

        {contacts.length > 0 && (<Layout title="Contacts">
          <ContactList onRemoveContact={this.removeContact} contacts={contacts} />
        </Layout>)}
      </>
    )
  }
}
