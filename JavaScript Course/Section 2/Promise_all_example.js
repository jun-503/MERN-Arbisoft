const promise1 = new Promise((resolve, reject) => {
    // Some async operation
    setTimeout(() => resolve('Result 1'), 1000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Result 2'), 500);
  });
  
  Promise.all([promise1, promise2])
    .then(results => {
      console.log(results); // ['Result 1', 'Result 2']
    })
    .catch(error => {
      console.error('One of the promises failed:', error);
});