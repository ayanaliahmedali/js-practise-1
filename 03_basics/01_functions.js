function sayMyName() {
    console.log("A");
    console.log("Y");
    console.log("A");
    console.log("N");
}

// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);   
// }

function addTwoNumber(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumber(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username = "samer"){
    if(!username){
         console.log("please enter a username");
         return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("ayan"))
// console.log(loginUserMessage())

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "ayan",
    prices: 199
}

function handleObject(anyobject){
console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}

// handleObject(user)
// handleObject({
//     username: "ahmed",
//     price: 399
// })

const myNewArray = [200, 900, 600, 800]

function returnSecondValue(getArray){
    return getArray[0]
}

console.log(returnSecondValue(myNewArray));
