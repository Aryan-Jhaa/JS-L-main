const userEmail = "aryan@js.com";

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Dont have user email");
}

/* 
    Falsy values
    false, 0, -0, BigInt 0n, "", null, undefinded, NaN

    Truthy values
    "0", 'false', " ", [], {}, function(){}

*/

// To check if array is empty in a condition

const arr = [];

if (arr.length === 0) {
    console.log("Array is empty");
}

// To check empty object

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10;
console.log(val1);

val1 = null ?? 15;
console.log(val1);

val1 = null ?? 5 ?? 15; //the first acceptable value will be taken 
console.log(val1);

// Termiary Operator

// condition ? true : false

const iceTea = 100;

iceTea <=80 ? console.log("less than 80") : console.log("more than 80");