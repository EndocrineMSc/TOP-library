class Book {
    #title = "Unknown Title";
    #author = "Unknown Author";
    #pages = "Unknown Number";
    #read = "";

    constructor(title, author, pages, readStatus) {
        if (title != "") {this.#title = title;}
        if (author != "") {this.#author = author;}
        if (pages != "") {this.#pages = pages;}
        this.#read = !readStatus ? "not read yet" : "already read";
    }

    /**
     * @param {boolean} hasRead
     */
    set readStatus(hasRead) {
        hasRead ? this.#read = "already read" : this.#read = "not read yet";
    }

    info() {
        return (`${this.#title} by ${this.#author}, ${this.#pages} pages, ${this.#read}`);
    };
}