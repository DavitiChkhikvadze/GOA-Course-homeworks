function checkAssignment() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("შევამოწმოთ დავალება");
        }, 1000);
    });
}

function completeAssignment() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("დავალება შესრულდა");
        }, 1500);
    });
}

function evaluateAssignment() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random();
            if (randomNumber > 0.5) {
                resolve(`დავალება შესრულდა წარმატებულად და მივიღე ${Math.round(randomNumber * 10)} ქულა`);
            } else {
                reject("ჩავიჭერით");
            }
        }, 2000);
    });
}

checkAssignment()
    .then((message1) => {
        console.log(message1);
        return completeAssignment();
    })
    .then((message2) => {
        console.log(message2);
        return evaluateAssignment();
    })
    .then((successMessage) => {
        console.log(successMessage);
    })
