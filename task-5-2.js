const books = [
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'fantasy',
    pages: 310,
    rating: 9.2,
  },
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'dystopian',
    pages: 328,
    rating: 8.9,
  },
  {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    genre: 'fantasy',
    pages: 450,
    rating: 9.5,
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'classic',
    pages: 277,
    rating: 7.8,
  },
  {
    title: 'Game of Thrones',
    author: 'George R.R. Martin',
    genre: 'fantasy',
    pages: 835,
    rating: 9.4,
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'classic',
    pages: 324,
    rating: 9.1,
  },
];
// console.log(books);
const fent = books.filter(elem => elem.genre === 'fantasy');
// console.log(fent);

const ratingTop = books.toSorted((a, b) => a.rating - b.rating);
// console.log(ratingTop);
const top = ratingTop[ratingTop.length - 1];
// console.log(top);
const allStr = books.reduce((acc, elem) => acc + elem.pages, 0);
// console.log(allStr);
const arrName = books.map(elem => elem.title);
// console.log(arrName);
const arrSort = books.toSorted((a, b) => b.pages - a.pages);
// console.log(arrSort);
const reting = books.reduce((acc, elem) => acc + elem.rating, 0);
// console.log(reting);
const averRating = reting / books.length;
// console.log(averRating.toFixed(1));
