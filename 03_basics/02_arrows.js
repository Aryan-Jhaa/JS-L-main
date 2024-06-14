const user = {
    username: "aryan",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
    }
}
// user.welcomeMessage();
// user.username = "harsh";
// user.welcomeMessage();

// console.log(this); //in a Browser it can display 'window' cause that is the most global object there

function chai() {
    let username = "aryan"
    console.log(this.username); //will give undefined, only work in objects
}
chai();

const Arror_chai = () => {
    let username = "arroe_user"
    console.log(this);
}
Arror_chai();