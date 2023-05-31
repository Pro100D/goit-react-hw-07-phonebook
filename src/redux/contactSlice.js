import { addContactPost, fetchContacts, deleteContact } from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const contactInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleReject = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const contactsSlice = createSlice({
  name: 'contact',
  initialState: contactInitialState,
  extraReducers: {
    // запрос за всеми контактами
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleReject,
    // добавление контакта через пост запрос
    [addContactPost.pending]: handlePending,
    [addContactPost.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContactPost.rejected]: handleReject,
    // удаление контакта
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleReject,
  },
});

export const contactReducer = contactsSlice.reducer;
