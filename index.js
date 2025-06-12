"use strict";
/**
 * Named Function
 */
function Intro(name, age) {
    return `Hello, My name is ${name} and I'm ${age} years old`;
}
/**
 * Function expression
 */
const Intro2 = function (name, age) {
    return `Hello, My name is ${name} and I'm ${age} years old`;
};
/**
 * Arrow function
 */
const Intro3 = (name, age) => {
    return `Hello, My name is ${name} and I'm ${age} years old`;
};
/**
 * Optional Parameters
 */
function Intro4(name, age, country) {
    return `Hello, My name is ${name} and I'm ${age} years old`;
}
Intro4("dhfasd", 343);
Intro4("dhfasd", 343, "faihg");
/**
 * Custom types with function
 */
var AgeUnit;
(function (AgeUnit) {
    AgeUnit["Years"] = "years";
    AgeUnit["Months"] = "months";
})(AgeUnit || (AgeUnit = {}));
function convertAgeToMonths(person) {
    if (person.ageUnit === AgeUnit.Years) {
        person.age *= 12;
        person.ageUnit = AgeUnit.Months;
    }
    return person;
}
let p = {
    name: "Dikshant",
    age: 21,
    ageUnit: AgeUnit.Years
};
console.log(p);
let p1 = {
    name: "Scott",
    age: 39,
    greet: (msg) => `${msg} ${p1.name}`
};
console.log(p1.greet("Hello"));
/**
 * Type Inference with anonomous functions
 */
let students = ["x", "y", "z"];
students.map((student) => {
    console.log(student);
});
students.map(function (student) {
    console.log(student);
});
/**
 * Void and Never Type
 */
function writeToDatabase(val) {
    console.log(val);
}
function throwError(err) {
    throw new Error(err);
}
/**
 * Async functions
 */
async function fetchUserFromDB(id) { }
const anotherAsyncFn = async (id) => { };
async function fetchUser(id) {
    return Promise.resolve({
        name: "John",
        age: 39
    });
}
/**
 * Rest Parameters and Arguments
 */
function multipleBy(by, ...numbers) {
    return numbers.map(n => n * by);
}
console.log(multipleBy(2, 2, 3, 4, 5, 6, 6));
console.log(multipleBy(6, 32, 2, 4));
/**
 * functions with tuples
 */
const arg = [1, 2];
function calculateAngleWithX(...point) {
    return Math.atan2(point[1], point[0]);
}
console.log(calculateAngleWithX(1, 1));
function printStdDetails(std) {
    console.log(std.name, std.branch, std.year, std.age);
}
function updateDetailsById(record, id, { name, branch, age, year }) {
    if (id >= record.length) {
        console.log("No Record found!");
    }
    record[id] = { name, branch, age, year };
    return record[id];
}
let stds = [{
        name: "Dikshant",
        branch: "CSE",
        age: 21,
        year: 4
    }];
