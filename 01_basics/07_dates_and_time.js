const myDate = new Date()
// console.log(myDate);

// console.log(myDate.toString())
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate)

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toLocaleString())

// let myCreatedDate = new Date("2023-01-15")//YYYY-MM-DD
let myCreatedDate = new Date(2023,10,5,3,50) //,MM-DD-YYYY
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()))

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())


newDate.toLocaleString('default',{
    weekday: "long"
})