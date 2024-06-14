// if

const isUserloggedIn = true;
const temp = 41

if (temp < 50) {
    console.log(("less than 50"));
}
else {
    console.log("Greater than 50");
}

const score = 200;

if (score > 100) {
    const power = "fly";
    console.log(`Power is than they can ${power}, inside if statement`);
}

const balance = 1000;

if (balance > 500) console.log(("inside scope")); //implicit scope, not good practise 

if (balance <= 500) {
    console.log("Less than or equal to 500");
} else if (balance <= 750) {
    console.log("Less than or equal to 750");
} else {
    console.log("more than or equal to 750");
}

const UserloggedIn = true;
const debitCard = true;
const loggedInFromEmail = false;

if (UserloggedIn || loggedInFromEmail) {

    console.log("User is logged in");
}

if (UserloggedIn && debitCard) {

    console.log("Allowed to buy subscription");
}
