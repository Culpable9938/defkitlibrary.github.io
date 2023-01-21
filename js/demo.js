


let myLibrary = [
    {
        title: "A Game of Thrones",
        author: "George R. R. Martin",
        pages: 694,
        read: false
    }
];

function Book(title, author, pages, read)
{
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}


function addBookToLibrary() { 
    let name = document.getElementsByName('title').value
    let author = document.getElementsByName('author').value
    let pages = document.getElementsByName('pages').value
    let read = false

    let myBook = new Book(name,author,pages, read)
    myLibrary.push(myBook)

    showLibrary()

} 


function showLibrary() 
{
    const bookList = document.querySelector('#library');
    const books = document.querySelectorAll(".books")

    for (let i = 0; i < books.length; i++)
    {
        books[i].remove();
    }

    for(let mybooks = 0; mybooks < myLibrary.length; mybooks++)
    {
        const book = document.createElement('div')

        book.innerHTML = '<h2>' + title + '</h2> <h3>by ' + author + '</h3><br> <h4>by ' + pages + '</h4>'
        book.classList.add('books')
        bookList.appendChild(book)

    }
}

showLibrary()