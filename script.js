let myLibrary = []

function Book(title,author,pages,read){
    this.title= title;
    this.author= author;
    this.pages= pages;
    this.read= read;
}
function render(){
    let libraryEl = document.querySelector("#library")
    libraryEl.innerHTML="";
    for(let i=0;i<myLibrary.length;i++){
        let book = myLibrary[i]
        let bookEl = document.createElement('div') 
        bookEl.setAttribute("class", "book-card" )
        bookEl.innerHTML = `
        <div class="container-libros">
            <div class="card-body">
                <h2 class="book-title">${book.title}</h2>
                <h5 class="book-author">${book.author}</h5>
                <p>${book.pages}Paginas</p>
                <p class="read-status">${book.read ? "Leido" : "Aun no se ha leido"}</p>
            </div>
        </div>
        `;
        libraryEl.appendChild(bookEl)
    }
}
function addBookToLibrary(){
    let title = document.querySelector("#title").value
    let author = document.querySelector("#author").value 
    let pages = document.querySelector("#pages").value  
    let read = document.querySelector("#read").checked
    let newBook = new Book(title,author,pages,read)
    myLibrary.push(newBook)
    render()
    //Do stuff here
}

let newBookbtn = document.querySelector("#new-book-btn")
newBookbtn.addEventListener("click", function(){
    let newBookForm = document.querySelector("#new-book-form")
    newBookForm.style.display="block" 
    newBookForm.style.background="white"
})

document.querySelector("#new-book-form").addEventListener("submit", function(event){
    event.preventDefault()
    addBookToLibrary()
})
