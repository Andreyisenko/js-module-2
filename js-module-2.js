// console.log('hello js-module-2');

// let price = 0;
// const subscription = 'pro';
// if (subscription === 'pro') {
//   price += 1;
// }
// console.log(price);

// function getPrice(subscription) {
//   let price = 0;

//   if (subscription === 'pro') {
//     price += 100;
//   }
//   if (subscription === 'free') {
//     price += 50;
//   }
//   return price;
// }
// console.log(getPrice('pro'));
// console.log(getPrice('free'));

// functio`n getPrice(subscription) {
//   let price = 20;

//   if (subscription === 'pro') {
//     price += 100;
//   } else price += 50;

//   return price;
// }
// console.log(getPrice('pro'));
// console.log(getPrice('free'));`

// function checkStorage(available, ordered) {
//   if (available >= ordered) {
//     return `Order is processed, our manager will contact you`;
//   } else {
//     return `Not enough goods in stock!`;
//   }
// }

// console.log(checkStorage(100, 50));
// console.log('vasia');

// const key = 3;
// switch (key) {
//   case 1:
//     console.log('ok');

//     break;
//   case 2:
//     console.log('not');

//     break;
//   case 3:
//     console.log('good');

//     break;

//   default:
//     console.log('finish');

//     break;
// }

// const fruits = 'apple';

// switch (fruits) {
//   case 'coconat':
//     console.log('22');

//     break;
//   case 'banana':
//     console.log('manki');

//     break;
//   case 'berry':
//     console.log('bee');

//   default:
//     console.log('zerro');

//     break;
// }

// const day = 5;
// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log('work day');

//     break;
//   case 6:
//   case 7:
//     console.log('day off');

//     break;
//   default:
//     console.log('no day');

//     break;
// }

// const day = 8;

// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log('This is a working day');
//     break;
//   case 6:
//   case 7:
//     console.log('It is a day off');
//     break;
//   default:
//     console.log('Invalid');
// }
// console.log(Boolean(NaN));

// console.log(false && 3);

// function toggleModalVisibility(isVisible) {
//   isVisible = true === !isVisible;
//   return isVisible;
// }

// console.log(toggleModalVisibility(true));
// console.log(toggleModalVisibility(false));

// const fruit = 'apple';

// console.log(fruit[fruit.length - 1]);
// console.log(fruit.toLowerCase());
// console.log(fruit.toUpperCase());
// const fru = fruit.slice(1, 4);
// console.log(fru);

// function getSubstring(string, length) {
//   return string.slice(0, length);
// }

// console.log(getSubstring('Hello world', 3));
// console.log(getSubstring('Hello world', 5));
// console.log(getSubstring('Hello world', 8));
// console.log(getSubstring('Hello world', 11));
// console.log(getSubstring('Hello world', 0));
// console.log('vasil');
// const lang = 'java script';
// console.log(lang.slice(2, lang.length));
// console.log(lang.slice(2, lang.length).toUpperCase());
// console.log(lang.slice(2, lang.length - 1));
// console.log(lang.includes('va scr'));

// function checkForName(fullName, firstNAme) {
//   const res = fullName.toLowerCase().includes(firstNAme.toLowerCase());
//   return res;
// }

// console.log(checkForName('Jason Neis', 'Jason'));
// console.log(checkForName('Jason Neis', 'jAsOn'));
// console.log(checkForName('Jason Neis', 'Jacob'));
// console.log(checkForName('Caty Stars', 'Caty'));
// console.log(checkForName('Caty Stars', 'cAtY'));
// console.log(checkForName('Caty Stars', 'Andromeda'));

// const user = 'Jas1on Neis';
// // const res = user.startsWith('Jason ');
// // console.log(res);

// // const resFin = user.endsWith();
// // console.log(resFin);
// const ind = user.indexOf('on');
// console.log(ind);
// let num = 2;

// while (num < 10) {
//   console.log('ok');
//   num += 1;
//   console.log(num);
// }

// let count = 0;

// do {
//   console.log(`Count: ${count}`);
//   count += 1;
// } while (count < 5);
// console.log(Math.random());

// let sum = Math.floor(Math.random() * (10 + 1));
// console.log(sum);

// for (let index = 0; index < 5; index++) {
//   console.log(index);
// }

// let a = 4;
// const b = a--;
// console.log(a);
// console.log(b);
// console.log(a);
// console.log(b);
// let counter = 0;
// while (counter <= 10) {
//   console.log(counter);
//   counter++;
// }
// console.log(1);

// console.log(foo([1, 2, 3, 4, 5, 4]));

// function foo(params) {
//   let sum = 0;
//   for (const element of params) {
//     console.log((sum += element));
//   }
//   return sum;
// }
// console.log(foo([1, 2, 3, 4, 5, 4]));

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Ключ
//   //   console.log(book[key]); // Значення властивості з таким ключем
// }
// console.log(null ?? 4);

function foo(params) {
  console.log(arguments);
  // console.log(arguments.length);
  const arg = Array.from(arguments);

  console.log(Array.isArray(arg));
  return arg;
}

console.log(foo(1, 2, 3, 4, 5, 6));
