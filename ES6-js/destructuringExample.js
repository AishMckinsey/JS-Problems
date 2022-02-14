// INPUT : [userId, username, email, age, firstName, lastName]
// OUTPUT: {username: " ", email: " "}

const userArray = process.argv.slice(2);
//console.log(userArray);
let user = {};
[,user.username, user.email] = userArray;

console.log(user); // {username: "jdoe", email: "john@doe.com"}
