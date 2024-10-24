// singleton

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "ayan",
    "full name": "ayan ali",
    [mySym]: "mykey1",
    age: 18,
    location: "abcdfdj",
    email: "ayan.google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "ayan@ali.com"
// Object.freeze(JsUser)
JsUser.email = "ayan@jhfsdjh"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
