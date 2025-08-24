const user = {
    username:"dubey",
    loginCount:8,
    signedIn:true,

    getUserDetails: function(){
        //console.log("Got user detail from database")
        //console.log(`'username: ${this.username}`);
        console.log(this)
    }
}

const user2 = {
    username:"dubey",
    loginCount:8,
    signedIn:true,

    getUserDetails: function(){
        //console.log("Got user detail from database")
        //console.log(`'username: ${this.username}`);
        console.log(this)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this // likho ye ya mat likho implicitally define hota hai
}

const userOne = new User("Dubey",8, true)
const userTwo = new User("ChaiaurCode",11, false)
console.log(userOne.constructor)
// console.log(userTwo)

/*
NEW KEYWORD

-empty object create hota hai
-constructor function called
- this keyword inject
- get the value
*/