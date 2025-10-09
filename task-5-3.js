const books = [
  { title: 'Harry Potter', genre: 'fantasy', pages: 350, rating: 8.7 },
  { title: 'Dune', genre: 'sci-fi', pages: 540, rating: 9.3 },
  { title: 'Sherlock Holmes', genre: 'detective', pages: 280, rating: 8.5 },
  { title: 'The Hobbit', genre: 'fantasy', pages: 310, rating: 8.9 },
  { title: 'Foundation', genre: 'sci-fi', pages: 400, rating: 8.8 },
];
const ratingTop = books.filter(elem => elem.rating > 8.5);
// console.log(ratingTop);
const titleName = ratingTop.map(elem => elem.title);
// console.log(titleName);
const averageRating =
  ratingTop.reduce((acc, elem) => acc + elem.rating, 0) / titleName.length;
// console.log(averageRating.toFixed(1));
