let Book = class{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    };
    get title(){
        return this.title;
    };
    get author(){
        return this.author;
    };
    get pages (){
        return this.pages;
    };
    get read(){
        return this.read;
    };

    set read(read){
        this.read = read;
    };

    info(){
        return `${title} by ${author}, ${pages} pages, ${read}`;
    };
};

const library = [];

function addBook(){    
    //get for contents for card 
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = Number(document.getElementById('pages').value);
    let read = document.getElementById('read').value;
    
    //add values from text input into object, add object to library
    const book = new Book(title,author,pages, read);
    library.push(book);
}

const showBooks = (library)=>{
    const wrapper = document.getElementById('wrapper');
    library.forEach((book)=>{
        //show title
        const title  = document.createElement('div');
        title.textContent = `Title: ${book.title}`;
        document.body.appendChild(title);
       
        //author
    const author = document.createElement('div');
        author.textContent = `Author: ${book.author}`;
        bookCard.appendChild(author);

        //number of pages 
    const pages = document.createElement('div');
        pages.textContent = `Pages: ${book.pages}`;
        bookCard.appendChild(pages);

        const read = document.createElement('checkbox');
        const label = document.createElement('label');
        label.setAttribute('for','Read');
        label.textContent = "Read";
        read.setAttribute('id', 'Read');
        book.read === "yes" ? read.setAttribute('value', 'yes') : read.setAttribute('value', 'no');
    });
}
