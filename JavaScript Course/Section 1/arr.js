// push(...items) adds items to the end.
// pop() removes the element from the end and returns it.
// shift() removes the element from the beginning and returns it.
// unshift(...items) adds items to the beginning.

// let arr = ["I", "study", "JavaScript"];
///////////////////////// SPLICE //////////////////////
let arr = [1,2,3,4,5]
arr.splice(1, 1); // from index 1 remove 1 element

console.log( arr ); // ["I", "JavaScript"]


let arr1 = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr1.splice(0, 3, "Let's", "dance");

console.log( arr1 ) // now ["Let's", "dance", "right", "now"]

// Here we can see that splice returns the array of removed elements:

let arr2 = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
let removed = arr2.splice(0, 2);

console.log( removed ); // "I", "study" <-- array of removed elements

// The splice method is also able to insert the elements without any removals. For that, we need to set deleteCount to 0:

let arr5 = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr5.splice(2, 0, "complex", "language");

console.log( arr5 ); // "I", "study", "complex", "language", "JavaScript"

/////////////////////////////// for each /////////////////////////

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
});


["Bilbo", "Gandalf", "Nazgul"].forEach(element => {
    console.log(element)
});

//////////////////////// Searching ///////////////////////
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];
  
let user = users.find(item => item.id == 1);

console.log(user.name); // John


let users2 = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "John"}
];
  
  // Find the index of the first John
console.log(users2.findIndex(user => user.name == 'John')); // 0

// Find the index of the last John
console.log(users2.findLastIndex(user => user.name == 'John')); // 3