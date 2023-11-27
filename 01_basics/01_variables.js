const accountId = 144553
let accountEmail="pushkar@google.com"
var accountPassword="12345"
accountCity="Jaipur"
//  accountId=2 wrong
accountEmail="pus@pu.com"
accountPassword="432"
accountCity="Jamshedpur"
let accountState // not defined
 console.log(accountId);
 console.log(accountEmail);
 console.log(accountPassword);
 console.log(accountCity);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
     /* Prefer not to use var because of issue
         in block scope and functional scope */