const genres = [
  'fantasy',
  'sci-fi',
  'romance',
  'fantasy',
  'thriller',
  'mystery',
  'romance',
  'drama',
  'sci-fi',
  'adventure',
];

// console.log(genres);
const uniqGenr = [...new Set(genres)];
// console.log(uniqGenr);

const authors = [
  {
    name: 'J.K. Rowling',
    books: [
      { title: 'Harry Potter', genre: 'fantasy', pages: 350, rating: 8.7 },
      { title: 'Fantastic Beasts', genre: 'fantasy', pages: 290, rating: 8.2 },
    ],
  },
  {
    name: 'Frank Herbert',
    books: [
      { title: 'Dune', genre: 'sci-fi', pages: 540, rating: 9.3 },
      { title: 'Dune Messiah', genre: 'sci-fi', pages: 350, rating: 8.5 },
    ],
  },
  {
    name: 'George Orwell',
    books: [
      { title: '1984', genre: 'dystopian', pages: 328, rating: 9.1 },
      { title: 'Animal Farm', genre: 'satire', pages: 112, rating: 8.4 },
    ],
  },
];
// console.log(authors);
const allBook = authors.flatMap(elem => elem.books);
// console.log(allBook);
const uniqGenre = [...new Set(allBook.map(elem => elem.genre))];
// console.log(uniqGenre);
const allPage = allBook.reduce((acc, elem) => acc + elem.pages, 0);
// console.log(allPage);
const midleRating =
  allBook.reduce((acc, elem) => acc + elem.rating, 0) / allBook.length;
console.log(midleRating.toFixed(2));
