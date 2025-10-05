// let sum = 0;
// function foo(params) {
//   console.log(params);
//   console.log(params[params.length - 1]);

//   sum += params.length;
//   for (const element of params) {
//     // console.log(element);
//     sum += element;
//   }
//   return sum;
// }

// // foo([1, 2, 3, 4, 5]);
// console.log(foo([1, 2, 3, 4, 5]));

// const arr = ['HTML', 'JS', 'CSS', 'React'];
// const arr2 = arr.slice();
// console.log(arr2);

// const newArr = arr.splice(1, 2, 'Node', 'Postgres');
// // console.log(arr);
// // console.log(newArr);
// // console.log(arr);
// console.log(arr2);
// const rew = arr2.reverse();
// console.log(rew);
// console.log(rew[rew.length - 1]);

// const arr = ['HTML', 'JS', 'CSS', 'React'];
// const arr2 = arr.slice(0, 2);
// console.log(arr2);
// console.log(arr);

// const playList = {
//   name: 'Bob',
//   rating: 4,
//   isFavorite: true,
//   tracks: ['tracks-1', 'tracks-2', 'tracks-3'],
// };
// playList.name = 'Didi';
// playList.fulMane = 'Bob Marly';
// console.log(playList);
// console.log(playList.fulMane);
// console.log(playList.fulMane);
// console.log(playList.tracks[1]);
// console.log(playList);
// console.dir(playList);
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const strArr = ['a', 'b', 'c', 'd', 5, 6, 7, 8];
// const newArr = [];
// // console.log(arr);
// for (const element of arr) {
//   console.log(element);
//   newArr.push(element + 10);
// // }
// const strD = 'a b d d dcs jds  nls nskl d s';
// console.log(arr);
// console.log(strD);
// console.log(strArr);
// // for (const element of strArr) {
// //   console.log(typeof element);
// // }
// // console.log(strArr[strArr.length - 1]);
// const sum = strArr.concat(arr);
// console.log(sum);
// // console.log(Array.isArray(sum));
// // console.log(Array.isArray(Array.from(strD)));
// const newArr = strD.split(' ');
// console.log(newArr);
// const nevS = newArr.join(' ');
// console.log((nevS);
// const foo = () => {
//   return {
//     a: 2,
//     d: 3,
//   };
// };

// console.log(foo());

const fruits = [
  'apple',
  'banana',
  'cherry',
  'orange',
  'kiwi',
  'grape',
  'pear',
  'mango',
  'melon',
  'plum',
];
const newFrut = fruits.map(frut => {
  return `meny ${frut}`;
});

// console.log(fruits);
// console.log(newFrut);
