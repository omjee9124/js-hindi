//Immediately Invoked Function Expressions(IIFE)


(function chai(){
    //named IIFY
    console.log("DB Connected");
})();
// chai()

// ()(); ======> IIFY

(function aurCode() {
    console.log("DB Connected Two")
})();

( (name)=> {
    console.log(`"DB Connected Two" ${name}`)
})("Dubey");