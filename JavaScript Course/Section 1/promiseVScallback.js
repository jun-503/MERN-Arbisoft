//////////// Call Back //////////////////


function step1(callback) {
    setTimeout(() => {
        callback(null, 'Step 1 completed');
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        callback(null, 'Step 2 completed');
    }, 1000);
}

step1((err, result1) => {
    if (err) {
        console.error(err);
    } else {
        console.log(result1);
        step2((err, result2) => {
            if (err) {
                console.error(err);
            } else {
                console.log(result2);
            }
        });
    }
});



////////  Promise  /////////////


function step1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Step 1 completed');
            
        }, 1000);
    });
}

function step2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Step 2 completed');
        }, 1000);
    });
}

step1()
    .then(result1 => {
        console.log(result1);
        return step2();
    })
    .then(result2 => {
        console.log(result2);
    })
    .catch(err => {
        console.error(err);
    });

