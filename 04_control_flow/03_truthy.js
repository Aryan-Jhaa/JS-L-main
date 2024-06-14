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