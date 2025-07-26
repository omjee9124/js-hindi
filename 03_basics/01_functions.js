function sayMyName(){
    console.log("H");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}

// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumber(number1, number2){
    // let result = (number1 + number2)
    // return result;

    return number1+number2;
}

// addTwoNumber(4,"banana")

const result = addTwoNumber(4,5);

// console.log("Result:", result);


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username")
        return 
    }
    return `${username} just logged in`
}

// let name = loginUserMessage()
let name = loginUserMessage("Dubey")

// console.log(name);

// HOW REST OPERATOR IS USED IN FUNCTION

function calculteCartPrice(...num1){
    return num1;
}

// console.log(calculteCartPrice(200,400,500))

//HOW OBJECT IS CREATED IN A FUNCTION AND ALSO HOW WE CAN USE IT IN FUNCTION


const user = {
    username: "Om Ji",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

// handleObject({
//     username:"Sam",
//     price:399
// })

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue([200,400,600,1000]))