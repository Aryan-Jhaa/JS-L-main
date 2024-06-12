function sayMyName(){
    console.log("Aryan");
}
sayMyName();


function addTwoNumbers(num1,num2) {
    return num1 + num2;
}
const result = addTwoNumbers(3,5);
console.log("Result: " + result);


function loginUserMessage(username){
    if (!username) {
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage("sepecat"));

function calculateCartPrice(...num) {    /// ... is rest operator in a parameter
    return num;
}
console.log(calculateCartPrice(200,400,500,1000));

//object and functions

const user = {
    username: "aryan",
    price: 199
}

function handleObj(anyobject) {
    console.log(`The username is ${anyobject.username} and the price is ${anyobject.price}`);
}

handleObj(user);

handleObj({
    username: "sepecat",
    price: 399
})