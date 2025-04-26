const accountId = 144332
// accountId = 2  not allowed
console.log(accountId);
let accountEmail = "ac@ac.com"
var accountPassword = "321312"
/*
Prefer not to use
var beacause of issue in block scope and functional scope
*/
accountCity = "Jaipur"

accountEmail = "bc@bc.com"
accountPassword = "123321"
accountCity = "Bengaluru"
let accountState
console.table([accountEmail,accountId,accountPassword,accountCity, accountState])