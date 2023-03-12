import { Component } from "react"
import { FormFone } from "./Forms/FormsFone";
import { nanoid } from 'nanoid'
import { Contacts } from "./Contacts/Contacts";



export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  }
  handleSubmit = e => {
    e.preventDefault()
    const userId = nanoid()
    this.state.contacts.push({ id: userId, name: this.state.name });
    this.setState({ [e.target.name.name]: "" });
    // this.setState({ [e.target.number.name]: "" });
  }
  handleInput = e => {
    this.setState(prevState => {
      return { [e.target.name]: e.target.value }
    })
  }
  render() {
    return (
      <div
        style={{
          flexDirection: "column",
          height: '100vh',
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
        />
        <Contacts contacts={this.state.contacts} />

      </div>
    );
  }

};
