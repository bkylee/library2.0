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

    })
}
