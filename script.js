let Book = class{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    set read(read){
        this.read = read;
    }
    set title(title){
        this.title = title;
    }
    info(){
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}