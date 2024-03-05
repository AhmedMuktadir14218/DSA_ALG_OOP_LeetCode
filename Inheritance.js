class Vehicle {
  constructor(make, model, year) {
    this._make = make;
    this._model = model;
    this._year = year;
  }

  displayInfo() {
    console.log(`Vehicle: ${this._year} ${this._make} ${this._model}`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this._doors = doors;
  }

  get doors() {
    return this._doors;
  }

  set doors(value) {
    this._doors = value;
  }
}

let myCar = new Car("Toyota", "Camry", 2022, 4);
myCar.displayInfo();
