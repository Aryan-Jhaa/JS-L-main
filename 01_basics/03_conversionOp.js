let score = "33a"

console.log(typeof score);
console.log((typeof(score)));

let valueInNo = Number(score);

console.log(typeof valueInNo);
console.log(valueInNo);

// "33" can be converted to a no but "33a" cannot and will fetch NaN

let gameCounter = 100;

console.log("gameCounter " + gameCounter);
console.log("After post inc " + gameCounter++);  
console.log("current value: " + gameCounter);
console.log("After pre inc " + ++gameCounter);  
