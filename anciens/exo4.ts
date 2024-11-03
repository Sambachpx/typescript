// Exercise: Create an object representing a book
// Write your code here

interface Book {
  title: string;
  author: string;
  year: number;
}

let book: Book = {
  title: "book1",
  author: "test",
  year: 2000,
};

console.log("Book:", book);
