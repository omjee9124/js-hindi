const data = Object.getOwnPropertyDescriptor(Math, "PI")
//it tells the property of the object 
console.log(Math.PI)
Math.PI = 5;
console.log(Math.PI)
console.log(data)

// if you want to give your method the following properties

const chai ={
    name:"Ginger",
    price:250,
    isAvailable: true,

    orderChai: function(){
        console.log("Cai nhi bni")
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai, 'name',{
    writable:false,
    enumerable:false
})
// console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !=='function'){
        console.log(`${key} : ${value}`)

    }
}