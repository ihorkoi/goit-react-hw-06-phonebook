import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(contacts, action) {
        const alreadyIn = contacts.find(
          ({ name }) => name.toLowerCase() === action.payload.name.toLowerCase()
        );
        if (alreadyIn) {
          alert(`${action.payload.name} is already in contacts`);
          return;
        }
        contacts.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: {
      reducer(contacts, action) {
        return contacts.filter(contact => contact.id !== action.payload);
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
