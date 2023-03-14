export const NewContacts = ({ newContact }) => {
    const listItems = newContact.map((contact) => {

        return (< li key={contact.id}>{contact.name}: {contact.number}</li>)
    });
    return (

        <ul>
            {listItems}

        </ul>)
};