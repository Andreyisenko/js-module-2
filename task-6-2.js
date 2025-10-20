// class Book {
//   constructor({ title, author, year, isAvailable }) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     this.isAvailable = isAvailable;
//   }
//   getInfo() {
//     return `Книга: ${this.title}, Автор: ${this.author}, Рік: ${this.year}, Доступна: ${this.isAvailable}`;
//   }
//   borrow() {
//     if (this.isAvailable === true) {
//       this.isAvailable = false;
//     } else {
//       return `Книга ${this.title} наразі недоступна`;
//     }
//     return `Ви взяли книгу ${this.title}`;
//   }

//   return() {
//     return (this.isAvailable = true);
//   }
// }

// const book1 = new Book({
//   title: 'King',
//   author: 'Bob Marly',
//   year: 1980,
//   isAvailable: true,
// });
// // console.log(book1);
// // console.log(book1.getInfo());
// // console.log(book1.borrow());
// // console.log(book1.return());

// class Library {
//   constructor(obj) {
//     this.name = obj.name;
//     this.books = obj.books;
//   }
//   addBook(book) {
//     this.books.push(book);
//   }
//   showAvailableBooks() {
//     return this.books;
//   }
//   findBookByTitle(title) {
//     return this.books.find(book => book === title);
//   }
// }

// const bigLibrary = new Library({
//   name: 'Space',
//   books: ['Space-1', 'Space-2', 'Space-3', 'Space-4'],
// });
// // console.log(bigLibrary);
// // bigLibrary.addBook('Moon');
// // console.log(bigLibrary.showAvailableBooks());
// // console.log(bigLibrary.findBookByTitle('Moon'));

// // console.log(bigLibrary.books);
