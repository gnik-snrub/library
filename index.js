let myLibrary = [];

function Book(title, author, year, pages, read) {
  this.title = title
  this.author = author
  this.year = year
  this.pages = pages
  this.read = read
}

let hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 1937, 310, false);
let investor = new Book("The Intelligent Investor", "Benjamin Graham", 1987, 622, true);
let catchtwentytwo = new Book("Catch-22", "Joseph Heller", 2011, 541, false);

function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBookToLibrary(hobbit);
addBookToLibrary(investor);
addBookToLibrary(catchtwentytwo);

