import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactsForm } from './components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  addContact = (data) => {
    if (this.state.contacts.some(({ name }) => data.name === name)) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    this.setState((state) => ({
      contacts: state.contacts.concat({ ...data, id: nanoid() })
    }));
  }

  deleteContact = (contactId) => {
    this.setState((state) => ({
      contacts: state.contacts.filter(({ id }) => contactId !== id)
    }));
  }

  setFilter = (filterQuery) => {
    this.setState({ filter: filterQuery });
  }

  filterContacts() {
    return this.state.contacts.filter(({ name }) => name.toLowerCase().includes(this.state.filter))
  }

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactsForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <ContactsFilter changeFilter={this.setFilter} />
        <ContactsList
          contacts={this.filterContacts()}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
};