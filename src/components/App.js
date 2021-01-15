import React, { Component } from 'react';
import Layout from './Layout';
import ContactList from './ContactList/ContactList'

import ContactForm from './ContactForm/ContactForm';
//import createContact from "../utils/create-contact";
//import { v4 as uuidv4 } from 'uuid';

export default class App extends Component {
  state = {
    contacts: [],
  }

 /* addContact = () => {
    const contact = createContact();
    //console.log(createContact());
    
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };
  */
   /*createContact({ name, number, uuidv4 }) {
    return {
      id: uuidv4(),
      number: { number },
      name: { name }
    };
    };*/ 
  formSubmitHandler = data => {
    console.log(data);
  };
  
  render() {
    const { contacts } = this.state;

    return (
      <>
        <Layout title="Phonebook">
          <ContactForm
            onSubmit={this.formSubmitHandler}
            //onAddContact={this.addContact}
            avalue={this.state.name}
            onNameInput={this.handleChange}
            bvalue={this.state.number}
            onNumberInput={this.handleChange}
            
            contacts={contacts} />
        </Layout>

        {contacts.length > 0 && (<Layout title="Contacts">
          <ContactList
            onRemoveContact={this.removeContact}
            contacts={contacts} />
        </Layout>)}
      </>
    )
  }
}
