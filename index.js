"use strict";
// const students = [
//     {
//         "name": "Dikshant",
//         "score": 89,
//     },
//     {
//         "name": "Dikshant",
//         "score": 89,
//     }
// ]
// for (const student of students) {
//     console.log("name: ", student.name);
//     console.log("score: ", student.grade);
// }
// @ ts-ignore
// function add(a:number, b:number) {
//     return a + b;
// }
// console.log(add(5, 4));
// console.log(add("text", 3));
/**
 * Big integers in Js
 */
const safeInteger = Number.MAX_SAFE_INTEGER;
let bigInt1 = BigInt(2345678998765423454);
bigInt1 = bigInt1 + 5n;
let bitInt2 = 234584392034985n;
console.log(bigInt1);
console.log(bitInt2);
function returnParams(params) {
    return params;
}
function returnParams1(params) {
    return params;
}
let x = 11;
console.log(typeof x);
function multipleByTwo(num) {
    if (typeof num === "number") {
        return 2 * num;
    }
    console.error("Please enter a valid Number");
}
console.log(multipleByTwo(3));
console.log(multipleByTwo("hello"));
let p1 = { x: 11, y: 42 };
let p2 = { x: 32, y: "sting" };
let p3 = { x: 22, y: 44, z: 423 };
let age;
age = 11;
age = "11";
function print(input) {
    if (input) {
        console.log(input);
    }
    console.log("No input");
}
/**
 * Never type
 */
const throwAnError = (errMessage) => {
    throw new Error(errMessage);
};
