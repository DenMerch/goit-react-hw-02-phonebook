import { Component } from "react";

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }
    handleInput = e => {

        this.setState(
            { [e.target.name]: e.target.value }
        )
    }
    handBtnSubmit = e => {
        e.preventDefault()
        this.props.handleSubmit(e)
        this.setState({ [e.target.name.name]: '', [e.target.number.name]: '' })
    }
    render() {
        return (
            <form onSubmit={this.handBtnSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        onChange={this.handleInput}
                        value={this.state.name}
                        id="name"
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                    <label htmlFor="number" className="form-label">Phone number</label>
                    <input
                        onChange={this.handleInput}
                        value={this.state.number}
                        id="number"
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary"  >Submit</button>
            </form >
        )
    }
}
