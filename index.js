let myLibrary = [];

function Book(title, author, year, pages, read) {
  this.title = title;
  this.author = author;
  this.year = year.toString();
  this.pages = pages + ' pg';
  this.read = read;
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

function addBooks() {
    const container = document.querySelector('.container')

    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }

    for (bookId in myLibrary) {
        const bookPanel = document.createElement('div');
        bookPanel.classList.add('book');

        const title = document.createElement('h2');
        title.classList.add('title')
        title.textContent = myLibrary[bookId].title;
        bookPanel.appendChild(title);

        const author = document.createElement('h3');
        author.classList.add('author')
        author.textContent = myLibrary[bookId].author;
        bookPanel.appendChild(author);

        const year = document.createElement('div');
        year.classList.add('year')
        year.textContent = myLibrary[bookId].year;
        bookPanel.appendChild(year);

        const pages = document.createElement('div');
        pages.classList.add('pages')
        pages.textContent = myLibrary[bookId].pages;
        bookPanel.appendChild(pages);

        const read = document.createElement('input');
        read.classList.add('read')
        read.setAttribute('type', 'checkbox');
        if (myLibrary[bookId].read) {
            read.checked = true;
        } else {
            read.checked = false;
        }
        bookPanel.appendChild(read);

        container.appendChild(bookPanel);
    }
}

addBooks();