// 4.  Arrange in alphabetical order.
//  Write a program that accepts a list of objects representing books [ title, author, and year] and a callback 
// function. The program should use the map function to create a new list containing only the titles of the books, 
// and then pass this new list to the callback function. The callback function should then log the titles to the 
// console in alphabetical order

let books=[
    {
        title: "Book Title 1",
        author: "Author Name 1",
        year: 2000
    },
    {
        title: "A Book Title 2",
        author: "Author Name 2",
        year: 2010
    },
    {
        title: "Book Title 3",
        author: "Author Name 3",
        year: 2020
    }
];

function alphabetical(callback,books) {
    let res=books.map((book)=>{
        return book.title;
    });
    callback(res.sort());
}

function callback(title){
    title.forEach((ttl) => {
        console.log(ttl);
    });
}

alphabetical(callback,books);