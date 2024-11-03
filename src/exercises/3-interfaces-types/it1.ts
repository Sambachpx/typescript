/*
Exercise: Book Library
Create interfaces for:
1. Book (title, author, year)
2. Library (books, addBook, removeBook)
Implement a simple library system
*/

// Write your solution here

interface Book {
  title: string;
  author: string;
  year: number;
}

interface Library {
  books: Book[];
  addBook: (book: Book) => void;
  deleteBook: (title: string) => void;
}

class librarysystem implements Library {
  books: Book[] = [];

  addBook(book: Book): void {}

  removeBook(title: string): void {}
}
