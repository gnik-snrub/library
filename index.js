let myLibrary = [];

function Book(title, author, year, pages, read) {
    this.title = title;
    this.author = author;
    this.year = year.toString();
    this.pages = pages + ' pg';
    this.read = read;

    this.addBook = function() {
        const bookPanel = document.createElement('div');
        bookPanel.classList.add('book');

        const title = document.createElement('h2');
        title.classList.add('title')
        title.textContent = this.title;
        bookPanel.appendChild(title);

        const author = document.createElement('h3');
        author.classList.add('author')
        author.textContent = this.author;
        bookPanel.appendChild(author);

        const year = document.createElement('div');
        year.classList.add('year')
        year.textContent = this.year;
        bookPanel.appendChild(year);

        const pages = document.createElement('div');
        pages.classList.add('pages')
        pages.textContent = this.pages;
        bookPanel.appendChild(pages);

        const read = document.createElement('input');
        read.classList.add('read')
        read.setAttribute('type', 'checkbox');
        if (this.read) {
            read.checked = true;
        } else {
            read.checked = false;
        }
        bookPanel.appendChild(read);
        return bookPanel
    }
}

let hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 1937, 310, false);
let investor = new Book("The Intelligent Investor", "Benjamin Graham", 1987, 622, true);
let catchtwentytwo = new Book("Catch-22", "Joseph Heller", 2011, 541, false);

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function addBooks() {
    const container = document.querySelector('.card-container')

    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
    for (book in myLibrary) {
        container.appendChild(myLibrary[book].addBook());
    }
}

function startup() {
    addBookToLibrary(hobbit);
    addBookToLibrary(investor);
    addBookToLibrary(catchtwentytwo);
    addBooks();
}

const newBookButton = document.querySelector('.new-book');
const clearBooksButton = document.querySelector('.reset');

const overlay = document.querySelector('.popup-container');
const newBookPopup = document.querySelector('.new');
const clearBooksPopup = document.querySelector('.clear');

newBookButton.addEventListener('click', function() {
    overlay.classList.add('active');
    newBookPopup.classList.add('active');
});

clearBooksButton.addEventListener('click', function() {
    overlay.classList.add('active');
    clearBooksPopup.classList.add('active');
});

function clearScreen() {
    overlay.classList.remove('active');
    newBookPopup.classList.remove('active');
    clearBooksPopup.classList.remove('active');
}

const clearOverlay = document.querySelectorAll('.cancel-button');

clearOverlay.forEach(btn => btn.addEventListener('click', clearScreen));

const clearBooksConfirmButton = document.querySelector('.clear-confirm');

clearBooksConfirmButton.addEventListener('click', function() {
    myLibrary = [];
    addBooks();
    clearScreen();
});

startup();