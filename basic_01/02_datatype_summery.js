// **************primitive datatype*************
// there are 7 type of primitive datatype ...string,Number,Boolean,null,undefined,symbol,BigInt
//And basicully these type of data type is CALL BY VALUE.....
//as we knoow 'call by value' uses a copy of a main data type and make changes and return the value.
//in JS we can't define types
// '()' these are called perenthesis.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



//  *********************Reference (Non primitive)******************

//3 types .... Array,Objects,Function

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3