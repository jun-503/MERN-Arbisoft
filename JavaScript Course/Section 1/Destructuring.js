let user = new Map();
user.set("name", "John");
user.set("age", "30");

// Map iterates as [key, value] pairs, very convenient for destructuring
for (let [key, value] of user) {
  console.log(`${key}:${value}`); // name:John, then age:30
}



let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest is an array of items, starting from the 3rd one
console.log(alert(rest[0])); // Consul
console.log(alert(rest[1])); // of the Roman Republic
console.log(alert(rest.length)); // 2



let options = {
    title: "Menu",
    width: 100,
    height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;

// width -> w
// height -> h
// title -> title

alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200



let options1 = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};

// destructuring assignment split in multiple lines for clarity
let {
size: { // put size here
    width,
    height
},
items: [item1, item2], // assign items here
title1 = "Menu" // not present in the object (default value is used)
} = options1;

console.log(title1);  // Menu
console.log(width);  // 100
console.log(height); // 200
console.log(item1);  // Cake
console.log(item2);  // Donut


let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
};

function showMenu({
title = "Untitled",
width: w = 100,  // width goes to w
height: h = 200, // height goes to h
items: [item1, item2] // items first element goes to item1, second to item2
}) {
console.log( `${title} ${w} ${h}` ); // My Menu 100 200
console.log( item1 ); // Item1
console.log( item2 ); // Item2
}

showMenu(options);



///////////////////// EXAMPLE


function topSalary(salaries) {

    let maxSalary = 0;
    let maxName = null;
  
    for(const [name, salary] of Object.entries(salaries)){
      if (maxSalary < salary) {
        maxSalary = salary;
        maxName = name;
      }
    }
  
    return maxName;
}



console.log(topSalary(salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  }))
  


