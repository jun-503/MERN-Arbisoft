let cache = new Map();

// calculate and remember the result
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* calculations of the result for */ obj;

    cache.set(obj, result);
    return result;
  }

  return cache.get(obj);
}

// Now we use process() in another file:

// 📁 main.js
let obj = {/* let's say we have an object */};

let result1 = process(obj); // calculated

// ...later, from another place of the code...
let result2 = process(obj); // remembered result taken from cache

// ...later, when the object is not needed any more:
obj = null;

console.log(cache.size); // 1 (Ouch! The object is still in cache, taking memory!)


/////////// WEAK MAP  /////////////////

// 📁 cache.js
let cache1 = new WeakMap();

// calculate and remember the result
function process(obj1) {
  if (!cache1.has(obj1)) {
    let result = /* calculate the result for */ obj1;

    cache1.set(obj1, result);
    return result;
  }

  return cache1.get(obj1);
}

// 📁 main.js
let obj1 = {/* some object */};

let result11 = process(obj1);
let result22 = process(obj1);

// ...later, when the object is not needed any more:
obj1 = null;

// Can't get cache.size, as it's a WeakMap,
// but it's 0 or soon be 0
// When obj gets garbage collected, cached data will be removed as well