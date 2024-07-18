class Animal {
    // Constructor to initialize properties
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    // Method to describe the animal
    describe() {
      return `${this.name} is ${this.age} years old.`;
    }
  
    // Method to simulate the animal's sound
    makeSound() {
      console.log(`${this.name} makes a sound.`);
    }
}


class Dog extends Animal {
    constructor(name, age, breed) {
      super(name, age); // Call the parent class constructor
      this.breed = breed;
    }
  
    // Overriding the makeSound method
    makeSound() {
      console.log(`${this.name} barks.`);
    }
  
    // Additional method specific to Dog
    fetch() {
      console.log(`${this.name} is fetching the ball.`);
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, color) {
      super(name, age); // Call the parent class constructor
      this.color = color;
    }
  
    // Overriding the makeSound method
    makeSound() {
      console.log(`${this.name} meows.`);
    }
  
    // Additional method specific to Cat
    scratch() {
      console.log(`${this.name} is scratching.`);
    }

}


const myDog = new Dog('Rex', 5, 'Labrador');
console.log(myDog.describe()); // Rex is 5 years old.
myDog.makeSound(); // Rex barks.
myDog.fetch(); // Rex is fetching the ball.

const myCat = new Cat('Whiskers', 3, 'black');
console.log(myCat.describe()); // Whiskers is 3 years old.
myCat.makeSound(); // Whiskers meows.
myCat.scratch(); // Whiskers is scratching.

  
  