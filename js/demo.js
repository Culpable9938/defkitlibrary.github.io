

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

function addBookToLibrary(event)
{
    let name = 'asd'
    let author = 'author'
    let pages = 'pages'
    let read = true

    let myBook = new Book(name,author,pages, read)
    myLibrary.push(myBook)

    event.preventDefault();
}

function showLibrary() 
{
    const bookList = document.querySelector('#library');

    for(let mybooks = 0; mybooks < myLibrary.length; mybooks++)
    {
        const book = document.createElement('div')

        book.innerHTML = 'This is the book'
        bookList.appendChild(book)
    }
}

showLibrary()
console.log('done')