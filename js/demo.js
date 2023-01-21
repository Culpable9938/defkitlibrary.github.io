


let myLibrary = [

];

function Book(title, author, pages, read)
{
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}


function addBookToLibrary() { 
    const name = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const read = false

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

        book.innerHTML = '<h4>' + myLibrary[mybooks].title + '</h4> <h5>by ' + myLibrary[mybooks].author + '</h5> <h6>' + myLibrary[mybooks].pages + ' pages </h6>'
        book.classList.add('books')
        book.setAttribute("data-index", mybooks)
        bookList.appendChild(book)

    }
}

showLibrary()