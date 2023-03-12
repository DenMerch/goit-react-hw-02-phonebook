import { Component } from "react"
import { FormFone } from "./Forms/FormsFone";
import { nanoid } from 'nanoid'
import { Contacts } from "./Contacts/Contacts";



export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  }

  handleSubmit = e => {
    e.preventDefault()
    const userId = nanoid()
    this.state.contacts.push({ id: userId, name: this.state.name, number: this.state.number });
    this.setState({ name: '' });
    this.setState({ number: '' });
  }
  handleInput = e => {

    this.setState(
      { [e.target.name]: e.target.value }
    )
  }
  findName = e => {
    console.log(this.state);
    this.setState(
      { [e.target.name]: e.target.value }
    )

  }
  foundedName = (name, contacts) => {
    const newContacts = contacts.filter(contact => {

      if (contact.name.toLowerCase().replace(" ", '').includes(name)) {
        return contact
      }
    })
    console.log(newContacts);
    return newContacts;
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
        <FormFone handleSubmit={this.handleSubmit}
          handleInput={this.handleInput}
          name={this.state.name}
          number={this.state.number}
        />
        <Contacts
          findName={this.handleInput}
          filter={this.state.filter}
          newContact={this.foundedName(this.state.filter,
            this.state.contacts)}
        />

      </div>
    );
  }

};
