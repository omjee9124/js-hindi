const myNums =[1,2,3]


// const myTotal = myNums.reduce(function(acc,currVal){
//     console.log(`acc: ${acc} and currVal: ${currVal}`)
//     return acc+ currVal
// },0)

const myTotal= myNums.reduce((acc,curr) => acc+curr,0)

console.log(myTotal)

const shoppingCart = [
    {
        itemName: "jsCourse",
        price: 999
    },
    {
        itemName: "DataScience",
        price: 1999
    },
    {
        itemName: "MobileCourse",
        price: 2999
    },
    {
        itemName: "SScCourse",
        price: 3999
    }
]

const priceToday = shoppingCart.reduce((acc,item) => acc + item.price,0);
console.log(priceToday);