//#1. Primitive Data types
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
/*
const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null; //empty
let userEmail; // undefined because there is no data in it.

const id = Symbol("123");
const anotherId = Symbol("123");

//console.log(id == anotherId);
*/
const bigNumber = 3456237894742314434n;

// #2 Reference (Non primitive)
// Array, Object, Function
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
	name: "Prit",
	age: 22,
};

const myFunction = function () {
	console.log("Hello World");
};
console.log(typeof myFunction);

// ++++++++++++++++++++++++++++++++++++++++++++++++++
//Stake (Primitive), Heap(Non-Primitive)
// Primitive data types are stored in the stack memory.
//Non - Primitive data types are stored in the Heap memory.

let myYoutubename = "Hitespatel.com";
let anothname = myYoutubename;
anothname = "chaiaurcode";
console.log(myYoutubename);
console.log(anothname);

let user = {
	email: "user@google.com",
	upi: "user@ybl",
};

let userTwo = user;
userTwo.email = "user2@google.com";
console.log(user.email);
console.log(userTwo.email);
