class book  {
    constructor(author, name, pages){
        this.author = author
        this.name = name
        this.pages = pages
    }

    authorSpeaking() {
        console.log("hello, my name is " + this.author)
    }

    nameOfBook() {
        console.log("the name of the book is " + this.name)
    }

    amountOfPages() {
        console.log("there are lots of pages, but I think there are " + this.pages + " pages")
    }
}

const book1 = new book("jules vernes", "secret island", 500)
const book2 = new book("jules vernes", "15-years-old captain", 400)

book1.authorSpeaking()
book1.nameOfBook()
book1.amountOfPages()

book2.authorSpeaking()
book2.nameOfBook()
book2.amountOfPages()