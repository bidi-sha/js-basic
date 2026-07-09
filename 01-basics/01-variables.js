const account_Id = 1445533
let account_Email = "isha@google.com"
var account_Password = "12345"
account_City = "Ghy"
let account_State;

// accountId = 2 // not allowed


account_Email = "ia@hc.com"
account_Password = "21212121"
account_City = "Bengaluru"

console.log(account_Id);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([account_Id, account_Email, account_Password, account_City, account_State])