// let myName = "Dubey     "
// let myChannel = "Chai"

// console.log(myName.truelength);


let myHeroes = ["thor","Spiderman"]

let heroPower = {
    thor: "Hammer",
    Spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.Spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log("Hitesh is present in all objects")
}

Array.prototype.heyHitesh = function(){
    console.log("Hitesh says Hello")
}

// heroPower.hitesh()

myHeroes.hitesh()
myHeroes.heyHitesh()
// heroPower.heyHitesh()


//INHERITANCE


const user = {
    name: "Chai",
    email:"chai@google.com"
}
const teacher ={
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__:teachingSupport

}

teacher.__proto__ = user

//Modern Syntax

Object.setPrototypeOf(teachingSupport, teacher) 

let anotherUserName ="ChaiAurCode"

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}
anotherUserName.trueLength()
"iceTea".trueLength()