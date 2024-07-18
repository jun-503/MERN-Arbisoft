function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}`);
};


const alice = new Person('Alice');
alice.sayHello(); // Hello, my name is Alice
// Create a new object with Person.prototype as its prototype
const newPerson = Object.create(Person.prototype);

// Manually assign properties
newPerson.name = 'Bob';

// Call the sayHello method
newPerson.sayHello(); // Hello, my name is Bob


///////////  F.Prototype /////////////
let animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

console.log( rabbit.eats ); // true
