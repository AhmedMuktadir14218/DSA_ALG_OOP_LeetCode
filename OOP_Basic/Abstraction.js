class Vehicle {
  constructor(make, model, year) {
    this._make = make;
    this._model = model;
    this._year = year;
  }

  displayInfo() {
    console.log(`Vehicle: ${this._year} ${this._make} ${this._model}`);
  }

  move() {
    throw new Error("This method must be implemented by subclasses");
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this._doors = doors;
  }

  move() {
    console.log("Car is moving...");
  }
}

let myCar = new Car("Toyota", "Camry", 2022, 4);
myCar.displayInfo();
myCar.move();
