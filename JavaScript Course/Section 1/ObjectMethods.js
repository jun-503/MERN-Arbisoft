let user = {
    name: "John",
    age: 30
};

// loop over values
for (let value of Object.values(user)) {
    console.log(value); // John, then 30
}