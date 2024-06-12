const JSUser = {
    name: "Aryan",
    age: 21,
    Degree: "B.Tech",
    isLoggedIn: true
}

//Accessing the values:

console.log(JSUser.name);
console.log(JSUser["Degree"]);

//overwriting the values

JSUser.Degree = "BE";

console.log(JSUser["Degree"]);
/*
 Object.freeze(JSUser); //No more modification of values allowed
 JSUser.name = "Harsh";
*/

console.log(JSUser);

//Functions in JS

JSUser.greeting = function() {
    console.log(`Hello JSUser ${this.name} `); //Using this keyword for same object
}
console.log(JSUser.greeting());

//Singleton Object

const JSUser2 = new Object() //same as JSUser2 = {}
console.log(JSUser2);

const regularUser = {
    userfullname: {
        firstname: "Aryan",
        lastname: "Jha"
    }
}
console.log(regularUser.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

const obj4 = Object.assign({},obj1,obj2,obj3); //use empty arr{} cause its (target,source)
console.log(obj4);

//using spread

const objFinal = {...obj1, ...obj2, ...obj3};
console.log(objFinal);