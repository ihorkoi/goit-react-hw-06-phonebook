import { ContactForm } from './ContactForm/ContactForm';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>

      {/* {contacts.length === 0 ? (
        <p>You don`t have any contact yet</p>
      ) : (
        <>
          <h2>Contacts</h2>

          <Filter onChange={handleFilterState}></Filter>
          <ContactsList
            props={filteredContacts(contacts, filter)}
            removeContact={removeContact}
          />
        </>
      )} */}
    </div>
  );
};
