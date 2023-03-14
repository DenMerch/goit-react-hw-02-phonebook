export const TryeContacts = ({ tryeContacts }) => {

    const listItems = tryeContacts.map((contact) => {

        return (< li key={contact.id}>{contact.name}: {contact.number}</li>)
    });

    return (

        <ul>
            {listItems}

        </ul>)
};