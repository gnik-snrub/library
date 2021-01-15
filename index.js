let myLibrary = [];

function Book(title, author, year, pages, read) {
    this.title = title;
    this.author = author;
    this.year = year.toString();
    this.pages = pages + ' pg';
    this.read = read;

    this.addBook = function(val) {
        const bookPanel = document.createElement('div');
        bookPanel.classList.add('book');

        const title = document.createElement('h2');
        title.textContent = this.title;
        bookPanel.appendChild(title);

        const author = document.createElement('h3');
        author.textContent = this.author + ', ' + this.year;
        bookPanel.appendChild(author);

        const pages = document.createElement('div');
        pages.textContent = this.pages;
        bookPanel.appendChild(pages);

        const readToggle = document.createElement('button');
        readToggle.classList.add('read-toggle');
        if (this.read) {
            readToggle.classList.add('read');
            readToggle.textContent = "Read"
        } else {
            readToggle.classList.add('unread');
            readToggle.textContent = "Unread"
        }
        bookPanel.appendChild(readToggle);

        const removeBook = document.createElement('button');
        removeBook.classList.add('remove-book');
        removeBook.textContent = "Remove Book";
        bookPanel.appendChild(removeBook);

        bookPanel.setAttribute('data-value', val);
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
    let i = 0;
    for (book in myLibrary) {
        container.appendChild(myLibrary[book].addBook(i));
        i++;
    }

    const readBookButtons = document.querySelectorAll('.read-toggle');
    readBookButtons.forEach(btn => btn.addEventListener('click', function() { toggleReadStatus(btn) }));

    function toggleReadStatus(btn) {
        if (btn.classList.contains('read')) {
            btn.classList.add('unread');
            btn.classList.remove('read');
            btn.textContent = "Unread";
        } else if (btn.classList.contains('unread')) {
            btn.classList.add('read');
            btn.classList.remove('unread');
            btn.textContent = "Read";
        }
    }

    const removeBookButtons = document.querySelectorAll('.remove-book');
    removeBookButtons.forEach(btn => btn.addEventListener('click', function() { removeBook(btn) }));
    
    function removeBook(btn) {
        myLibrary.splice(btn.getAttribute('data-value'), 1);
        addBooks();
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
    addBookFromForm.reset();
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

const addBookFromForm = document.querySelector('.add-book-form');

addBookFromForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('newTitle').value;
    const author = document.getElementById('newAuthor').value;
    const year = document.getElementById('newYear').value;
    const pages = document.getElementById('newPages').value;
    const read = document.getElementById('newRead').checked;
    let newBook = new Book(title, author, year, pages, read);
    addBookToLibrary(newBook);
    
    addBooks();
    clearScreen();
});

startup();