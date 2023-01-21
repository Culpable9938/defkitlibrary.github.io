


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
    let name = document.getElementsByName('title')[0].value
    let author = document.getElementsByName('author')[0].value
    let pages = document.getElementsByName('pages')[0].value
    let read = false

    let myBook = new Book(name,author,pages, read)
    myLibrary.push(myBook)

    console.log('nyeh')

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

        book.innerHTML = '<h4>' + title + '</h4> <h5>by ' + author + '</h5><br> <p>by ' + pages + '</p>'
        book.classList.add('books')
        bookList.appendChild(book)

    }
}

showLibrary()