// console.log(typeof '6');

class Car {
  #yer;
  constructor(obj) {
    // console.log('call constructor');

    this.speed = obj.speed;
    this.color = obj.color;
    this.userName = obj.userName;
    this.#yer = obj.yer;
  }
  get yer() {
    return this.#yer;
  }

  set yer(newYer) {
    if (newYer === '') {
      console.log('invalid data');
      return;
    }
    this.#yer = newYer;
  }
}

const tesla = new Car({ userName: 'Bob', speed: 150, color: 'red', yer: 2024 });
const bmw = new Car({ userName: 'Nik', speed: 200, color: 'green', yer: 2022 });
// console.log(tesla);
// console.log(bmw.yer);
// console.log((bmw.yer = 2025));
