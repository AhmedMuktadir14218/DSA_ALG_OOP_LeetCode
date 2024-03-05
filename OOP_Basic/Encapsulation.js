class Car {
  constructor(make, model, year) {
    this._make = make;
    this._model = model;
    this._year = year;
  }

  get make() {
    return this._make;
  }

  set make(value) {
    this._make = value;
  }

  get model() {
    return this._model;
  }

  set model(value) {
    this._model = value;
  }

  get year() {
    return this._year;
  }

  set year(value) {
    this._year = value;
  }

  displayInfo() {
    console.log(`Car: ${this._year} ${this._make} ${this._model}`);
  }
}

let myCar = new Car("Toyota", "Camry", 2022);
myCar.displayInfo();
