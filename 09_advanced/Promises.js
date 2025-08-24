// Technique 1

const promiseOne = new Promise(function(resolve, reject){
    console.log("Promise one async")
    setTimeout(function(){
        console.log("Async task is Complete")
    },1000)
    resolve();
})

promiseOne.then(function(){
    console.log("Promise Consumed")
})

// Technique 2

new Promise(function(resolve, reject){
    
    setTimeout(function(){
        console.log("Async two is completed")
    },1000)
    resolve()
}).then(function(){
    console.log("Async two resolved")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai", email:"chai@example.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Dubey", password:"321"})
        }else{
            reject('ERROR, Something went wrong')
        }
    },2000)
})
promiseFour
.then((user) =>{
    console.log(user);
    return user.username
})
.then((username) =>{
    console.log(username)
})
.catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("The Promise is either resolved or rejected")
})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript", password:"321"})
        }else{
            reject('ERROR, Js went wrong')
        }
    },2000)
})
async function consumedPromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
    
}
consumedPromiseFive()

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data)
//     }catch(error){
//         console.log("Error",error)
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) =>console.log(error))

 