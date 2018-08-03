class Car {
  constructor() {
    this.wheels = 4;
    this.type = "Hatchback";
  }

  alertBrand() {
    console.log("hey");
  }
}

class Ferrari extends Car {
  // extends super class constructor
  constructor() {
    super();
    this.windows = 4;
  }
}

const car = new Car();
car.alertBrand();
const ferrari = new Ferrari();
console.log(ferrari.wheels);
