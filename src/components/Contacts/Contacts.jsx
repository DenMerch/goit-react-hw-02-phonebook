export const Contacts = ({ newContact, findName, filter }) => {

    const listItems = newContact.map((contact) => {

        return (< li key={contact.id}>{contact.name}: {contact.number}</li>)
    });

    return (
        <>
            < h2 > Contacts</h2 >
            <p>Find contacts by name</p>
            <label htmlFor="filter" className="form-label">Name</label>
            <input
                onChange={findName}
                value={filter}
                id="filter"
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <ul>
                {listItems}
            </ul>
        </>

    )
}