// The map method in JavaScript creates a new array populated with the results of calling a provided function on every element in the calling array. Here are some examples of how to use the map method:

// Example 1: Basic Transformation
// Convert an array of numbers to their squares.


const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);

console.log(squares); // Output: [1, 4, 9, 16, 25]

// Example 2: Extracting Specific Property from Objects
// Extract the names from an array of objects.
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
const names = users.map(user => user.name);

console.log(names); // Output: ['Alice', 'Bob', 'Charlie']

// Example 3: Adding a Property to Each Object
// Add a new property to each object in an array.


const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 500 }
];
const productsWithTax = products.map(product => ({
  ...product,
  priceWithTax: product.price * 1.2
}));

console.log(productsWithTax);
// Output: 
// [
//   { name: 'Laptop', price: 1000, priceWithTax: 1200 },
//   { name: 'Phone', price: 500, priceWithTax: 600 }
// ]

// Example 4: Converting Strings to Numbers
// Convert an array of string numbers to an array of actual numbers.


// const stringNumbers = ['1', '2', '3', '4', '5'];
// const numbers1 = stringNumbers.map(Number);

// console.log(numbers1); // Output: [1, 2, 3, 4, 5]

// Example 5: Using Index in Transformation
// Create an array of strings that describe the position of each element.

const items = ['a', 'b', 'c', 'd'];
const descriptions = items.map((item, index) => `Item ${index + 1}: ${item}`);

console.log(descriptions); 
// Output: 
// [
//   'Item 1: a',
//   'Item 2: b',
//   'Item 3: c',
//   'Item 4: d'
// ]

// Example 6: Flattening an Array of Arrays
// Flatten a two-dimensional array (array of arrays) into a one-dimensional array.

const arrays = [[1, 2], [3, 4], [5, 6]];
const flattened = arrays.map(arr => arr.join(',')).join(',').split(',').map(Number);

console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]
// Example 7: Capitalizing First Letter of Each String
// Capitalize the first letter of each string in an array.


const words = ['hello', 'world', 'javascript'];
const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

console.log(capitalizedWords); // Output: ['Hello', 'World', 'Javascript']

