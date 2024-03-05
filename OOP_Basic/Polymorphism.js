class Animal {
  speak() {
    throw new Error("This method must be implemented by subclasses");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow!");
  }
}

let dog = new Dog();
let cat = new Cat();

dog.speak();
cat.speak();
