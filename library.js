let myLibrary = [];
const bookDisplay = document.getElementById("book-display");
const buttonImage = document.createElement("img");
buttonImage.src = "images/alpha-x-circle.svg";

//add books
const addBookButton = document.getElementById("add-book");
const newBookTitle = document.getElementById("title");
const newBookAuthor = document.getElementById("author");
const newBookPages = document.getElementById("pages");
const newBookStatus = document.getElementById("status");
addBookButton.addEventListener("click", addBookByButton, false);

//form
const formContainer = document.getElementById("form-container");
const newBookButton = document.getElementById("new-book");
newBookButton.addEventListener("click", unhideForm, false);
addBookButton.addEventListener("click", hideForm, false);
hideForm();

function Book(title, author, pages, status) {
    this.title = title != "" ? title : "Unknown Title";
    this.author = author != "" ? author : "Unknown Author";
    this.pages = pages != "" ? pages : "Unknown no.";
    this.haveToRead = !status;
    this.read = !status ? "not read yet" : "already read";

    this.info = function() {
        return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
    };
}

const bookPrototype = Book.prototype;

bookPrototype.setAsRead = function () {
    this.haveToRead = false;
    this.read = "already read";
}

function addBookByButton(event) {
    event.preventDefault();
    let newBook = new Book(newBookTitle.value, newBookAuthor.value, newBookPages.value, newBookStatus.checked);
    addBookToLibrary(newBook);
    newBookTitle.value = "";
    newBookAuthor.value = "";
    newBookPages.value = "";
    newBookStatus.checked = false;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();
}

function hideForm() {
    formContainer.setAttribute("hidden", "true");
}

function unhideForm() {
    formContainer.removeAttribute("hidden");
}

function displayBooks() {
    bookDisplay.innerHTML = "";
    myLibrary.forEach((book) => {
        let bookCard = document.createElement("div");
        bookCard.classList.add("book");
        let index = myLibrary.indexOf(book);
        bookCard.dataset.indexNumber = index;

        let bookInfo = document.createElement("div");
        bookInfo.textContent = book.info();

        let readButton = document.createElement("button");
        readButton.setAttribute("type", "button");
        readButton.addEventListener("click", setBookReadStatus);
        readButton.classList.add("readButton");
        readButton.setAttribute("title", "Set book as read");

        let buttonImage = document.createElement("img");
        buttonImage.setAttribute("src", "images/book-open-variant-outline.svg");
        
        readButton.appendChild(buttonImage);
        bookCard.appendChild(readButton);
        bookCard.appendChild(bookInfo);
        bookDisplay.appendChild(bookCard);
    });
    addRemover();
}

function addRemover() {
    let currentBooks = Array.from(document.getElementsByClassName("book"));
    let index = 0;
    currentBooks.forEach((book) => {
        let remover = document.createElement("button");
        let newImage = document.createElement("img");
        newImage.src = "images/alpha-x-circle.svg";
        remover.appendChild(newImage);
        remover.classList.add("remover");
        remover.type = "button";
        remover.addEventListener("click", (event) => removeBook(event));
        remover.setAttribute("title", "Remove book");

        book.appendChild(remover);
        index++;
    });
}

function removeBook(event) {
    const bookCard = event.target.parentElement.parentElement;
    const index = bookCard.dataset.indexNumber;
    myLibrary.Count > 1 ? myLibrary.splice(index, 1) : myLibrary = [];
    bookDisplay.removeChild(bookCard);
}

function setBookReadStatus(event) {
    let bookCard = event.target.parentElement;
    let index = bookCard.dataset.indexNumber;
    let book = myLibrary[index];
    book.setAsRead();
    displayBooks();
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
const book2 = new Book("Die Stadt der träumenden Bücher", "Walter Moers", 480, false);
const book3 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 366, false);
const book4 = new Book("Eragon", "Christopher Paolini", 509, false);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
