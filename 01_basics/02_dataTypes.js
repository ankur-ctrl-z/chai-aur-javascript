"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object // typeof null returns "object" — this is a JavaScript bug from the past (it's not really an object, but it shows "object")

// Symbols are often used as object keys to avoid key name conflicts
const user1 = Symbol("id");
const user2 = Symbol("id");

const database = {};
database[user1] = { name: "Rahul", age: 25 };
database[user2] = { name: "Rahul", age: 30 };

console.log(database[user1]); // { name: "Rahul", age: 25 }
console.log(database[user2]); // { name: "Rahul", age: 30 }