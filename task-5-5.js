// console.log('aa');

// const sims = {
//   userName: 'Didi',
// };

// const user = {
//   userName: 'Bob',
//   foo() {
//     console.log(this);
//   },
// };

// user.foo.call(user);
// user.foo.call(sims);

// const user = {
//   userName: 'Vasil',
//   foo() {
//     console.log(this);
//     console.log(this.userName);
//   },
// };

// const fun = user.foo;
// // const fun = user.foo.bind(user);
// user.foo();
// fun();

// function foo(color) {
//   console.log(this);
//   this.color = color;
// }
// const hat = { color: 'green' };
// const hoody = { color: 'blue' };
// const changeColor = foo.bind(hat);
// changeColor('red');
// console.log(hat);
// console.log(hoody);

// foo.call(hat, 'rrr');
// foo.apply(hoody, ['www', 'ddd']);

// const user = {
//   userName: 'Nadiya',
//   lastName: 'Podzegun',
//   age: 26,
// };

// function newage(oneYear) {
//   this.age += oneYear;
//   console.log(this);
//   console.log(user.age);
// }
// newage.call(user, 1);
