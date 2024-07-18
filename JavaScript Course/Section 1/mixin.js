// Define multiple mixins
const sayMixin = {
    sayHi() {
      console.log(`Hello, ${this.name}`);
    },
    sayBye() {
      console.log(`Bye, ${this.name}`);
    }
};

const canEat = {
    eat() {
        console.log(`${this.name} is eating.`);
    }
};

const canSleep = {
    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
};

// Define a class
class Person {
constructor(name) {
    this.name = name;
}
}

// Copy methods from mixins to the Person prototype
Object.assign(Person.prototype, sayMixin, canEat, canSleep);

// Create an instance of Person
const person = new Person('Bob');
person.sayHi();  // Hello, Bob
person.eat();    // Bob is eating.
person.sleep();  // Bob is sleeping.
person.sayBye(); // Bye, Bob
  