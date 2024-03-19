// // LET KEYWORD & CONSTANT
// const myFavoriteName = "Ritik"
// // myFavoriteName = "Ritik Raj"
// console.log(myFavoriteName);

// example with the help of var k keyword
// var name = "ritik";
// if('true'){
//     var name = "raj";
//     console.log(name);
// }
//  name = "singh";
// console.log(name)

// example with the help of let k keyword
// let name = "ritik";
// if('true'){
//     let name = "raj";
//     console.log(name);
// }
//  let = "singh";
// console.log(name)

// template string-escamscript 2015
// let firstName = "ritik";
// let lastName = "raj";

// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);

// string interpolation
// let age = 29;
// // string interpolation with varibales
// let message = `I am ${age} yers old.`;
// console.log(message);

// DEFAULT PARAMETER
// Write a function to find sum of two number? what bif duirng function call user only passs one rugments
// function sum (a,b=8){
//     return a+b;
// }
// console.log(sum(5, 31));


// FAT ARROW FUNCTION
const sum =(a,b) => {
let result = `The sum of ${a} and ${b} is ${a + b}`;
console.log(result);
};
sum (5,5)
