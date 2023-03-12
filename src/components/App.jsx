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
    this.state.contacts.push({ id: userId, name: this.state.name, number: this.state.number });
    console.log(this.state);
    e.currentTarget.reset();
    // this.setState({ [e.target.name.name]: "" });
  }
  handleInput = e => {
    console.log({ [e.target.name]: e.target.value });
    this.setState(
      { [e.target.name]: e.target.value }
    )
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
