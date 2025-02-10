// premitive datatypes
// 7 type : String ,Number, boolean ,Null, undifined ,Symbol ,BigInt 
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// reference type
// array , Object ,Function

const heros = ["shaktiman","nagraj","mayank"];
let myObj = {
    name: "mayank",
    age : 21
}

const MyFunction = function(){
    console.log("hello world");
}
// console.log(typeof score)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack(premetive) and heap(non-premetive)
let MyName = "mayank"
let anotherName = MyName
anotherName = "mayank2003"
// console.log(anotherName)
// console.log(MyName)

let userOne = {
    email: "mayank@gmail.com",
    upi:"user@oksbi"
}

let userTwo = userOne
// userTwo.email = "mayank12@gmail.com"
console.log(userOne.email);
console.log(userTwo.email)
