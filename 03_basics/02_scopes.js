// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ",a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "ayan" /* variable declared*/

    function two(){
        const website = "hebrew language"
        console.log(username);
        
    }
    // console.log(website);

    two()
    
}

one()

if (true) {
    const username = "ayan"
    if (username === "ayan") {
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
    
}

// console.log(username);

// ++++++++++++++++++++++++ interesting +++++++++++++++++++++=

console.log(addone(5))

function addone(num){
    return num + 1
}

const addTwo = function (num){
    return num + 2
}

addTwo(5)

// waiting i am going to sleep your work video 22 is panding ok 
