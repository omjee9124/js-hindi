const myarr = [0,1,2,3,4,5]
const myheroes = ["superman","batman"]

const myarr2 = new Array(1,2,3,4,5)
// console.log(myarr[2]);
// console.log(myheroes);

// Arrays methods

// myarr2.push(6)
// console.log(myarr2);

// myarr2.pop()
// console.log(myarr2);

// myarr.unshift(9)
// console.log(myarr);

// myarr.shift()
// console.log(myarr);

// console.log(myarr.includes(5))
// console.log(myarr.indexOf(4))

const newArray = myarr.join()

// console.log(myarr)
// console.log(newArray);
// console.log(typeof newArray);


//  slice, splice

console.log(myarr);


const mn1 = myarr.slice(1,4)
console.log("B", myarr);
console.log(mn1);


const mn2 = myarr.splice(1,3)
console.log("C", myarr);
console.log(mn2);
