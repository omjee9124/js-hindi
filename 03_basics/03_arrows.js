const user ={
    username: "Om Ji",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Dubey"
//     // console.log(this.username) WILL NOT GIVE VALUE
// }
// chai()

// const chai = function (){
//     let username = "Dubey"
//     console.log(this.username)
// }
// chai()

const chai = () => {
    let username = "Dubey"
    console.log(this)
}
// chai()

//ARROW FUNCTION

// const addTwo = (num1,num2) => {
//     return num1 +num2
// }
//OR

const addTwo = (num1,num2) => ( num1 + num2 )

console.log(addTwo(3,4))