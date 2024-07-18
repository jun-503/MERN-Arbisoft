function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Execute greet("Alice") after 2 seconds
let timerId = setTimeout(greet, 2000, "Alice");

// Cancel the timeout before it executes
// clearTimeout(timerId);


let count = 0;

function logCount() {
  console.log(`Count: ${count}`);
  count++;
}

// Execute logCount() every 1 second
let intervalId = setInterval(logCount, 1000);

// Stop the interval after 5 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval stopped.");
}, 5000);


/////// Example //////////

function printNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      console.log(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
}

// usage:
printNumbers(5, 10);

////////  This is the way to call a function in setTimeout means the function should be called inside the function i.e a wrapper function //////////

let user = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    }
};

setTimeout(function() {
user.sayHi(); // Hello, John!
}, 1000);

////////////// WIll Not Work //////////////

// let user = {
//     firstName: "John",
//     sayHi() {
//       alert(`Hello, ${this.firstName}!`);
//     }
// };
  
// setTimeout(user.sayHi, 1000); // Hello, undefined!
