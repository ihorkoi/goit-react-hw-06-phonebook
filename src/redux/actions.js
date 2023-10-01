export const addContact = contact => {
  return {
    type: 'contacts/addContact',
    payload: contact,
  };
};
