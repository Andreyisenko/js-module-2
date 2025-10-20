class User {
  #password;
  constructor(obj) {
    this.name = obj.name;
    this.email = obj.email;
    this.#password = obj.password;
  }
  checkPassword(pass) {
    return this.#password === pass ? true : false;
  }
  changePassword(oldPass, newPass) {
    if (this.#password === oldPass) {
      return (this.#password = newPass);
    }
  }
  getInfo() {
    return `Користувач: ${this.name}, Email: ${this.email}`;
  }
}

class Admin extends User {
  constructor(obj) {
    super(obj);
  }

  banUser(user) {
    console.log(`Адмін ${this.name} заблокував користувача ${user.name}`);
  }
}

const user1 = new User({
  name: 'Andriy',
  email: 'andriy@gmail.com',
  password: '1234',
});
const Adm = new Admin({
  name: 'sssss',
  email: 'andriy@gmail.com',
  password: '1234',
});
// console.log(user1.getInfo());
// console.log(user1.checkPassword('1234'));
// console.log(user1.changePassword('1234', '1111'));
// Adm.banUser(user1);
