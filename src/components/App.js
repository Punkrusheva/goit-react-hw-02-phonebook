import React, { Component } from 'react';
import Layout from './Layout';
import ContactList from './ContactList/ContactList'
import ContactForm from './ContactForm/ContactForm';
import ContactFilter from './ContactFilter/ContactFilter';
import shortid from 'shortid';

export default class App extends Component {
  state = {
    filter: '',
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  }
 
  filterInputId = shortid.generate();

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    this.props.onChange(this.state);
    //console.log(value);
  };
  
  formSubmitHandler = ({ name, number }) => {
    const { contacts } = this.state;
    console.log(contacts);
    this.contactId = shortid.generate();
    const contact = {
      id: this.contactId,
      name,
      number,
    };
    if (contact.name !== '') {
        console.log(contact);
        this.setState(prevState => {
          return {
            contacts: [...prevState.contacts, contact],
          };
        });
    } 
  };

  /*preventDoubleContacts = () => {
    const { contacts, contact } = this.state;
    const normalizedFilter = contact.toLowerCase().trim();
   console.log(contacts.find(contact =>
      contact.name.toLowerCase().includes(contact.toLowerCase().trim())
    ));
  }*/

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  /*filterSubmitHandler = ({ filter }) => {
    const filterTrim = filter.trim();
    
    for (let i = 0; i < this.state.contacts.length; i++) {
      const element = this.state.contacts[i].name;
      //console.log(element);
      if (element.includes({ filterTrim })) {
        console.log(element.includes({ filterTrim }));
      }
      return {
        contacts: [...element],
      }
       } else {console.log('нет')}
    }*/
        //
       /*this.setState(prevState => {
          return {
            filterContacts: [...prevState.contacts.filter({filter})],
          };
        });*/
    
  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
  
  render() {
    const { contacts, filter } = this.state;
    
    const visibleContacts = this.getVisibleContacts();


    return (
      <>
        <Layout title="Phonebook">
          <ContactForm
            onSubmit={this.formSubmitHandler}
            avalue={this.state.name}
            onNameInput={this.handleChange}
            bvalue={this.state.number}
            onNumberInput={this.handleChange}
            contacts={contacts} />
        </Layout>

        {contacts.length > 0 && (<Layout title="Contacts">
          <ContactFilter
            onChange={this.changeFilter}
            value={filter}
            onFilterInput={this.handleChange}
          ></ContactFilter>
          <ContactList
            onRemoveContact={this.removeContact}
            contacts={visibleContacts} />
        </Layout>)}
      </>
    )
  }
}