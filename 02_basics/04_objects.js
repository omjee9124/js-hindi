// const tinderUser = new Object();

const tinderUser ={}

tinderUser.id = "123abc"
tinderUser.name = "Samay"
tinderUser.isLoggedIn = true
// console.log(tinderUser);

const regularUser = {
    email : "someone@gmail.com",
    fullname:{
        userfullname:{
            firstname : "Om Ji ",
            lastname : "Dubey"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname.userfullname);

const obj1 ={1:"a",2:"b",3:"c"}
const obj2 ={4:"d",5:"e",6:"f"}

//FOR MERGING TWO OBJECTS

// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
console.log(obj3)