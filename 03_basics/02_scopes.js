//let var const
//SCOPE


let a = 300
if(true){
    let a = 10
    // console.log("Inner:",a);
    const b = 20
    var c = 30 //availlable globally because it
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Om"

    function two(){
        const website = "website"
        console.log(username);

    }
    // console.log(website);

    two()
}

// one()

if(true){
    const username = "Dubey"
    if(username === "Dubey"){
        const website =" youtube";
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username)


//+++++++++++++++Interesting+++++++++++++++++

addOne(5);
function addOne(value){
    return value+1;
}

//addTwo(5)// not allowed before initiallization
const addTwo = function addTwo(num){
    return num +2;
}

addTwo(5)