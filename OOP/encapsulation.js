class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

const car1 = new Car("Toyota", "Camry", 2022);
console.log(car1.displayInfo()); // "2022 Toyota Camry"
