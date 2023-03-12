
export const FormFone = ({ handleSubmit, handleInput, name, number }) => {
    return (
        < form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input
                    onChange={handleInput}
                    value={name}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                {/* <label htmlFor="exampleInputEmail1" className="form-label">Phone number</label> */}
                {/* <input
                    onChange={handleInput}
                    value={number}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                /> */}
                <div id="name" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <button type="submit" className="btn btn-primary" >Submit</button>
        </form >
    )
}