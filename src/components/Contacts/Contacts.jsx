export const Contacts = ({ contacts }) => {

    const listItems = contacts.map((contact) => {
        console.log(contact);
        return (< li key={contact.id}>{contact.name}: {contact.number}</li>)
    })

    return (
        <>
            < h2 > Contacts</h2 >
            <ul>
                {listItems}
            </ul>
        </>

    )
}