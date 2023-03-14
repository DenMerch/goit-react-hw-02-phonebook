import { Component } from "react"
import { ContactForm } from "./Forms/FormsFone";
import { nanoid } from 'nanoid'
import { Filter } from "./Filter/Filter";
import { Contacts } from "./Contacts/Contacts"
import Notiflix from 'notiflix';
export class App extends Component {
  state = {
    contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    filter: '',
  }
  handleSubmit = ({ name, number }) => {
    const userId = nanoid()
    const isNamePresent = this.state.contacts.filter(el => el.name === name)[0];
    isNamePresent ? this.alert(name) :
      this.setState(({ contacts }) => ({ contacts: [...contacts, { id: userId, name, number }] }))
  };
  alert = (name) => {
    return Notiflix.Notify.failure(`${name} is alredy in contacts`)
  }
  handleInput = e => {
    this.setState(
      { [e.target.name]: e.target.value }
    )
  }
  findName = e => {
    this.setState(
      { [e.target.name]: e.target.value }
    )
  }
  foundedName = (name, contacts) => {
    return contacts.filter(contact => contact.name.toLowerCase().replace(" ", '').includes(name))
  }
  render() {
    return (
      <div
        style={{
          flexDirection: "column",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <h2>Phonebook</h2>
        <ContactForm handleSubmit={this.handleSubmit}
          atate={this.state}
        />
        <Filter
          findName={this.handleInput}
          filter={this.state.filter}
        />
        <Contacts
          // newContact={this.state.contacts}
          newContact={this.foundedName(this.state.filter,
            this.state.contacts)}
        />
      </div>
    );
  }
};


