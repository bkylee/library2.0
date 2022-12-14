let Book = class{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    };
    info(){
        return `${title} by ${author}, ${pages} pages, ${read}`;
    };
};

const library = [];

function addBook(){    
    //get for contents for card 
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = Number(document.getElementById('pages').value);
    const read = document.getElementById('read');
    let readValue = null;
    read.checked == true ? readValue = true : readValue = false;
    
    //add values from text input into object, add object to library
    const book = new Book(title,author,pages, read);
    library.push(book);
}

const showBook = (library)=>{
    const display = document.getElementById('display');
    const index = library.length - 1;
    const book = library[index];

        const bookCard = document.createElement('div');
        //show title
        const title  = document.createElement('div');
        title.textContent = `Title: ${book.title}`;
        bookCard.appendChild(title);
       
        //author
    const author = document.createElement('div');
        author.textContent = `Author: ${book.author}`;
        bookCard.appendChild(author);

        //number of pages 
    const pages = document.createElement('div');
        pages.textContent = `Pages: ${book.pages}`;
        bookCard.appendChild(pages);

        //If read or not 
        const read = document.createElement('input');
        const label = document.createElement('label');
        label.setAttribute('for','Read');
        label.textContent = "Read";
        read.setAttribute('id', 'Read');
        read.setAttribute('type','checkbox');
        book.read.checked == true ? read.checked=true : read.checked = false;
        bookCard.appendChild(label);
        bookCard.appendChild(read);

        //append bookCard to display
        display.appendChild(bookCard);
    };

//reset library and screen 
    const reset = (library)=>{
        library.length = 0;
        const display = document.getElementById('display');
        display.querySelectorAll('*').forEach(node=>{node.remove()});   
    }

const submit = document.querySelector('#submit');

submit.addEventListener('click', ()=>{
    addBook();
    showBook(library);
});

const resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', ()=>reset(library));