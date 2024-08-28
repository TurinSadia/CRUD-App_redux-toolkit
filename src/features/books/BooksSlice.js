import { createSlice } from "@reduxjs/toolkit"; // Use ES Module import
import { v4 as uuidv4 } from "uuid";

const initialBooks = {
  books: [
    {id: uuidv4(),title: "The Merchant of Venice",author: "William Shakespeare"},
    { id: uuidv4(), title: "Mein Kamph", author: "Adolf Hitler" },
    { id: uuidv4(), title: "An Equal Music ", author: "Vikram Seth" },
  ],
};

export const BooksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const bookToUpdate = state.books.find((book) => book.id === id);
      if (bookToUpdate) {
        bookToUpdate.title = title;
        bookToUpdate.author = author;
      }
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

// Export the actions and reducer
export const { showBooks, addBook, deleteBook, updateBook } =
  BooksSlice.actions;
export default BooksSlice.reducer;
