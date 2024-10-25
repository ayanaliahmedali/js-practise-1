// const tinderUser = new Object()   // ya singleton object ha

const tinderUser = {}  /*ya non singleton object ha*/

tinderUser.id = "123890"
tinderUser.name = "Sammer"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "sameer@gmail.com",
    fullname: {
        userfullname: {
            firstname: "ayan",
            lastname: "ali"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "aycshbch"

    },
    {
        id: 1,
        email: "aycshbch"

    },
    {
        id: 1,
        email: "aycshbch"

    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));

