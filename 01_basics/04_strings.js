const firstName = "Aryan"
const lastName = "Jha"
let fullName = firstName + " " + lastName

console.log(fullName);

//Modern method of writing strings 

console.log(`My first name is ${firstName} and my last name is ${lastName} `);

//Strings as objects

const city = new String('Delhi')
console.log(city);
console.log(city[0]);
console.log(city.length);
console.log(city.toUpperCase());

const newString = city.substring(0, 3);
console.log(newString);

