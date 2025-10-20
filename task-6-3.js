class Product {
  constructor(obj) {
    this.name = obj.name;
    this.brand = obj.brand;
    this.price = obj.price;
    this.quantity = obj.quantity;
  }
  getInfo() {
    return `Продукт: ${this.name}, Бренд: ${this.brand}, Ціна: ${this.price}, Кількість: ${this.quantity}`;
  }
  sell(amount) {
    if (amount > this.quantity) {
      return `Недостатньо товару на складі`;
    }
    return (this.quantity -= amount);
  }
  restock(amount) {
    return (this.quantity += amount);
  }
}

const milk = new Product({
  name: 'Milk',
  brand: 'Ferma',
  price: 25,
  quantity: 43,
});

const frosty = new Product({
  name: 'Frosty',
  brand: 'Ecco',
  price: 10,
  quantity: 552,
});
const cookies = new Product({
  name: 'Cookies',
  brand: 'Nestle',
  price: 41,
  quantity: 23,
});

// console.log(milk);
// console.log(milk.getInfo());
// console.log(milk.restock(7));
// console.log(milk.sell(7));

class Store {
  constructor(obj) {
    this.name = obj.name;
    this.products = obj.products;
  }
  addProduct(product) {
    this.products.push(product);
  }
  showProducts() {
    return this.products;
  }
  findProductByName(name) {
    return this.products.find(elem => elem.name === name);
  }
  sellProduct(name, amount) {
    const prodFind = this.products.find(elem => elem.name === name);
    if (!prodFind) {
      return `Такого продукту немає на складі`;
    }
    return prodFind.sell(amount);
  }
}

const prod = new Store({
  name: 'eat',
  products: [milk, frosty, cookies],
});

// console.log(prod.products);
// prod.addProduct({ name: 'qqq', brand: 'fff', price: 33, quantity: 32 });
// console.log(prod);
// console.log(prod.showProducts());
// console.log(prod.findProductByName('Cookies'));
// console.log(prod.sellProduct('Cookies', 4));
// console.log(prod.products[2]);
// console.log(prod.sellProduct('Cookies'));
