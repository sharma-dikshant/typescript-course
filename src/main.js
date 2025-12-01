/** this keyword */

// method -> object
// function -> window, global

const book = {
    title: "Book title",
    read () {
        console.log(this)
    }
}

// book.read();    // prints book obj

book.stopReading = function () {  
    console.log(this)
}

// book.stopReading(); // prints the book obj

book.startReading = () => { 
    console.log(this)
}

book.startReading() // {}

function test() {
    console.log(this)
}

// test() // global node obj

const test1 = () => {
    console.log(this)
}


// test1()   // {}

const test2 = function () {
    console.log(this)
}



const book2 = {
    title: "the title",
    author: ['author1', 'author2', 'author3'],
    read () {
        console.log(this)
    },
    printAuthor () {
        this.author.forEach(function(author) {
            console.log(this.title, '-' ,author)
        })
    },
    printAuthor1 () {
        this.author.forEach(function(author) {
            console.log(this.title, '-' ,author)
        }, this)
    },
    printAuthor2 () {
        this.author.forEach((author) => {
            console.log(this.title, '-' , author)
        })
    },

}

book2.printAuthor()
book2.printAuthor1()
book2.printAuthor2()