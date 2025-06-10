import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book, BookFilter } from "../types";
import { BooksState } from "../interfaces";

const initialState: BooksState = {
  books: [
    {
      id: "1",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      read: false,
    },
    {
      id: "2",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      read: true,
    },
  ],
  filter: "all",
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Omit<Book, "id">>) => {
      const newBook: Book = {
        ...action.payload,
        id: Date.now().toString(),
      };
      state.books.push(newBook);
    },
    updateBook: (state, action: PayloadAction<Book>) => {
      state.books = state.books.map((book) =>
        book.id === action.payload.id
          ? action.payload
          : book
      );
    },
    removeBook: (state, action: PayloadAction<string>) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    toggleRead: (state, action: PayloadAction<string>) => {
      const book = state.books.find((book) => book.id === action.payload);
      if (book) {
        book.read = !book.read;
      }
    },
    setFilter: (state, action: PayloadAction<BookFilter>) => {
      state.filter = action.payload;
    },
  },
});

export const { addBook, updateBook, removeBook, toggleRead, setFilter } =
  booksSlice.actions;
export default booksSlice.reducer;
