"use strict";
function returnParams(params) {
    return new Date();
}
let x = returnParams("helo");
//* above function is a generic function as it can take params of any type. But the problem
//* here is that let say we call the function by passing string and the function can return any parameter. As we have defined the return type of the function as any
//* But lets say we want that the params of function and the return return type both should be same. Then generics come into play
function returnParams2(params) {
    return params;
}
let y = returnParams2("Hello");
// let z = returnParams2<number>("Hello"); // this will throw an error
// Generics with arrow function
const returnParams3 = (param) => param;
// Generics with function expression
const returnParams4 = function (params) {
    return "hello";
};
// example
function getFirstElement(arr) {
    return arr[0];
}
let arr1 = [1, 2, 3, 4];
let arr2 = ["srting"];
let firstEl = getFirstElement(arr1);
let firstEl2 = getFirstElement(arr2);
function logLength(item) {
    console.log(item.length);
}
logLength([1, 2, 2, 2, 2]);
logLength("arr3");
logLength({ name: "hello" }); // this will throw an error
logLength({ name: "hello", length: 1 }); // this will not throw error because it has length property
let stringNumberPair = {
    key: "hello",
    value: 212
};
let numberStringPair = {
    key: 23,
    value: ["a"]
};
function printId(obj) {
    console.log(obj.id);
}
printId({ name: "Dikshant", id: 1 });
printId({ name: "Dikshant" }); // throws an error because it does'nt have id
let e1 = "key"; //✅
let e2 = "hello"; //❌
let partialPerson = {
    name: "dikshant",
};
/**
 * Default values of Generics
 */
async function fetchData(url) {
    const response = await fetch("www.google.com");
    const data = await response.json();
    return data;
}
let d1 = fetchData("www.ggo.com");
let d2 = fetchData("www.ggogl.com");
