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

function checkStorage(available, ordered) {
  if (available >= ordered) {
    return `Order is processed, our manager will contact you`;
  } else {
    return `Not enough goods in stock!`;
  }
}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 150));
console.log(checkStorage(150, 180));
