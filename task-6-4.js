class Book {
  constructor(obj) {
    this.title = obj.title;
    this.author = obj.author;
    this.pages = obj.pages;
    this.read = obj.read;
  }
  getInfo() {
    return `Книга ${this.title}, Автор: ${this.author}, Сторінок: ${this.pages}, Прочитано: ${this.read}`;
  }

  toggleRead() {
    if (this.read) {
      this.read = false;
    } else {
      this.read = true;
    }
  }
}

class Library {
  constructor(obj) {
    this.name = obj.name;
    this.books = obj.books;
  }
  addBook(book) {
    this.books.push(book);
  }
  listBooks() {
    return this.books.map(elem => elem.getInfo());
  }

  findBooksByAuthor(author) {
    return this.books.filter(elem => elem.author === author);
  }

  markBookAsRead(title) {
    const findBook = this.books.find(elem => elem.title === title);
    if (findBook) {
      findBook.toggleRead();
    }

    return findBook.read;
  }
}

const book1 = new Book({
  title: 'King',
  author: 'Tim Gotip',
  pages: 300,
  read: true,
});

const book2 = new Book({
  title: 'Moon',
  author: 'Viktor Fox',
  pages: 522,
  read: false,
});

const book3 = new Book({
  title: 'Victory',
  author: 'Samanta Bool',
  pages: 332,
  read: true,
});

// console.log(book3.getInfo());
const bestLibrary = new Library({
  name: 'bigL',
  books: [book1, book2, book3],
});
// console.log(bestLibrary);
bestLibrary.addBook(
  new Book({
    title: 'War',
    author: 'Sam Smit',
    pages: 442,
    read: false,
  })
);

// console.log(bestLibrary.findBooksByAuthor('Sam Smit'));
// console.log(bestLibrary.books);
// console.log(bestLibrary.markBookAsRead('King'));
// console.log(bestLibrary.listBooks());
