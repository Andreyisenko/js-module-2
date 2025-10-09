const transactions = [
  { id: 1, type: 'deposit', amount: 1500 },
  { id: 2, type: 'withdrawal', amount: 500 },
  { id: 3, type: 'deposit', amount: 2200 },
  { id: 4, type: 'deposit', amount: 400 },
  { id: 5, type: 'withdrawal', amount: 700 },
  { id: 6, type: 'deposit', amount: 1200 },
];
// console.log(transactions);
const depos = transactions
  .filter(elem => elem.type === 'deposit')
  .reduce((acc, elemDep) => (acc += elemDep.amount), 0);

const trans = transactions.find(elem => elem.amount > 2000);
// console.log(trans);
const arrSum = transactions.map(elem => elem.amount);
// console.log(arrSum);
const sortAmount = transactions.toSorted((a, b) => b.amount - a.amount);
// console.log(sortAmount);
