//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["ayan", "ali", "ahmed"];
let myObj = {
    name: "ayan",
    age: 18,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myObj);

// +++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive), heap(non-primitive)

let myYoutubename = "ayan.dot.com"

let anothername = myYoutubename
anothername = "ahmed"

// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
    email: "ahmed@google.com",
    upi: "ayan@ybl",
}

let userTwo = userOne
userTwo.email = "ayan@google.com"

console.log(userOne.email);
console.log(userTwo.email);



