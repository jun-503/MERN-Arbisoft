let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let doublePrices = Object.fromEntries(
// convert prices to array, map each key/value pair into another pair
// and then fromEntries gives back the object
Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
);

console.log(doublePrices.meat); // 8