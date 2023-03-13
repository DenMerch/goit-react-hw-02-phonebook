import { Component } from "react"
import { FormFone } from "./Forms/FormsFone";
import { nanoid } from 'nanoid'
import { Contacts } from "./Contacts/Contacts";



export class App extends Component {
  state = {
    contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
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
