// Create a terminal clock (HH:MM:SS)
let runTime = (whatTime) => {
    let intervalId =
        setInterval(() => {
            whatTime();
        }, 1000);
}

let whatTime = () => {
    let dateObject = new Date();
    console.log(dateObject.getHours() + `:` + dateObject.getMinutes() + `:` + dateObject.getSeconds());
}

module.exports = runTime;
module.exports = whatTime;

runTime(whatTime);




// Calculate the time it takes between a setTimeout call and the inner function actually running
let func = () => {
    v = new Date();
    for (i = 1; i <= 10000000; i++) {
        console.log(i);
    }
    b = new Date();
    console.log(v, b, b - v);
}
setTimeout(() => {
    func();
}, 1000);
