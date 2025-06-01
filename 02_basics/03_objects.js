//singleton
//object.create

const mySym =Symbol("key1")

//object literals
const jsUser = {
    name:"Om",
    "full Name":"Om Ji Dubey",
    // mySym :"abcd",//it initialize as a string
    [mySym] :"abcd",
    age:20,
    location:"Greater Noida",
    email:"good@gmail.com",
    isLoggedIn:true,
    lastLoginDays:["monday","saturday"]

}
// console.log(jsUser.email);
// console.log(jsUser["full Name"]);
// console.log(jsUser[mySym]);

// console.log(jsUser["name"])

jsUser.email = "verygood@gmail.com"
console.log(jsUser.email)

Object.freeze(jsUser)
jsUser.email = "notgodd@gmail.com"//not implemented because of Object.freeze method is called
console.log(jsUser)