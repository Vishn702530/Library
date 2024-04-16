const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");


showButton.addEventListener("click", () => {
    dialog.showModal();
});


closeButton.addEventListener("click", () => {
    dialog.close();
});


const myLibrary = [
    new Book('How To be a Programmer', 'Robert L', 100),
    new Book('Practices of an Agile Developer', 'Vekant Subramanyam', 200),
    new Book('The Pragmatic Programmer', 'David Hunt', 300)
];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
    displayBooks();

}


function displayBooks() {
    const bookList = document.getElementById('booklist')
    bookList.innerHTML = '';

    myLibrary.forEach((book, index) => {

        const bookCard = document.createElement('div')
        bookCard.classList.add('book-card');

        bookCard.innerHTML = `
        <h3>Title: ${book.title}</h3>
        <p>Author :${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <br>
        <button id="remov" onclick= "removeBook(${index})">Remove Book</button>
        `;
        bookList.appendChild(bookCard)
    });

}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}
document.getElementById('addform').addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;

    const newBook = new Book(title, author, pages);
    addBookToLibrary(newBook);

    document.getElementById('addform').reset();
});

displayBooks();