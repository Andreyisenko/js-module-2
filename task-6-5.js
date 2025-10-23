class Movie {
  constructor(obj) {
    this.title = obj.title;
    this.director = obj.director;
    this.year = obj.year;
    this.watched = obj.watched;
    this.rating = obj.rating;
  }
  getInfo() {
    return `Фільм: ${this.title}, Режисер: ${this.director}, Рік: ${this.year}, Переглянуто: ${this.watched}, Оцінка: ${this.rating}`;
  }
  toggleWatched() {
    this.watched = !this.watched;
  }
  rateMovie(newRating) {
    this.rating = newRating;
  }
}

class VideoStore {
  constructor(obj) {
    this.name = obj.name;
    this.movies = obj.movies;
  }
  addMovie(movie) {
    this.movies.push(movie);
  }
  listMovies() {
    return this.movies.map(movi => movi.getInfo());
  }
  findMovieByTitle(title) {
    return this.movies.find(movi => movi.title === title);
  }
  listWatchedMovies() {
    return this.movies.filter(movi => movi.watched);
  }
  averageRating() {
    const allRating = this.movies.reduce(
      (acc, movi) => (acc += movi.rating),
      0
    );
    return allRating / this.movies.length;
  }
}

const movie1 = new Movie({
  title: 'War',
  director: 'Andrey Isenko',
  year: 2023,
  watched: true,
  rating: 7.5,
});
const movie2 = new Movie({
  title: 'Victory',
  director: 'Yana Isenko',
  year: 2024,
  watched: true,
  rating: 8,
});
const movie3 = new Movie({
  title: 'King of the ring',
  director: 'Tod Rish',
  year: 2020,
  watched: false,
  rating: 6,
});
const movie4 = new Movie({
  title: 'Selery',
  director: 'Tim Roc',
  year: 2025,
  watched: false,
  rating: 4,
});

const store = new VideoStore({
  name: 'VideoStor',
  movies: [movie1, movie2, movie3, movie4],
});

// console.log(movie4.getInfo());
// movie1.toggleWatched();
// console.log(movie1.watched);
// console.log(movie1.rating);
// movie1.rateMovie(3);
// console.log(movie1.rating);

store.addMovie(
  new Movie({
    title: 'Tor',
    director: 'Anton Simko',
    year: 2019,
    watched: false,
    rating: 5,
  })
);
// console.log(store.movies);
// console.log(store.listMovies());
// console.log(store.findMovieByTitle('Tor'));
// console.log(store.listWatchedMovies());
// console.log(store.averageRating());
