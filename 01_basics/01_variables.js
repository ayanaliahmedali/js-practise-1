const accountId = 10902
let accountEmail = "ayan@google.com"
var accountPassword = "209045"
accountCountry = "karachi"


accountEmail = "ahmed@gmail.com"
accountPassword = "204567"
accountCountry = "lahore"
console.log(accountId);

/*
prefer not use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCountry]);

