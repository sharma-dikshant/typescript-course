"use strict";
/**
 * Arrays
 */
let a = [1, 2, 4, 5];
let b = ["a", "b", "c"];
let c = [1, 4, "adfg"];
// Arrays of objects
let persons = [
    {
        name: "x",
        age: 23,
        gender: "male"
    },
    {
        name: "y",
        age: 20,
        gender: "female"
    }
];
/**
 * Tuples
 */
let s = ["John", "Doe", 18];
let s1 = ["Dikshant", "Sharma", 20, "hello@gmail.com"];
let s2 = ["X", "Y", 20];
let failedStudents = ["failed", s1, s2, ["new", "student", 21]];
/**
 * Readonly arrays and tuples
 */
// arrays
let num = [1, 2, 3, 3, 2, 22];
num.push(12); // this will thow warning
/**
 * Enums
 */
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Left"] = 1] = "Left";
    Direction[Direction["Right"] = 2] = "Right";
    Direction[Direction["Down"] = 3] = "Down";
})(Direction || (Direction = {}));
//* enums are constants readonly and typescript behind the scenes assigns incremental numerical values to each properties. Like here, 
console.log(Direction.Right);
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Left"] = 2] = "Left";
    Direction2[Direction2["Right"] = 3] = "Right";
    Direction2[Direction2["Down"] = 4] = "Down"; // 4
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Down);
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "admin";
    Roles["AUTHOR"] = "author";
    Roles["WRITER"] = "writer";
})(Roles || (Roles = {}));
console.log(Roles.ADMIN);
let user1 = {
    name: "dikshant sharma",
    email: "hello@email.com",
    role: Roles.ADMIN
};
console.log(user1);
//* enums can be heterogenous
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "up";
    Direction3[Direction3["Left"] = 1] = "Left";
    Direction3[Direction3["Down"] = 2] = "Down";
    Direction3["Right"] = "right";
})(Direction3 || (Direction3 = {}));
//* all enums are compiled down to objects and constants
/**
 * Difference between enum and const objects
 */
var Constants;
(function (Constants) {
    Constants[Constants["pi"] = 3.14] = "pi";
    Constants[Constants["e"] = 2.44] = "e";
})(Constants || (Constants = {}));
//* when we declare enums with const then only the used enum property is compiled to js
const OConstants = {
    pi: 3.14,
    e: 2.44
};
//* now this object will behave as an enum. Because we cant update the properties of this object
/**
 * Computed Enums
 */
var AccessPermission;
(function (AccessPermission) {
    AccessPermission[AccessPermission["None"] = 0] = "None";
    AccessPermission[AccessPermission["Read"] = 1] = "Read";
    AccessPermission[AccessPermission["Write"] = 2] = "Write";
    AccessPermission[AccessPermission["ReadWrite"] = 3] = "ReadWrite";
    AccessPermission[AccessPermission["Delete"] = 4] = "Delete";
    AccessPermission[AccessPermission["All"] = 7] = "All";
})(AccessPermission || (AccessPermission = {}));
console.log(AccessPermission.All, AccessPermission.ReadWrite);
/**
 * enums as types
 */
var ShapeType;
(function (ShapeType) {
    ShapeType["Circle"] = "circle";
    ShapeType["Square"] = "square";
})(ShapeType || (ShapeType = {}));
let c1 = {
    radius: 2,
    shape: ShapeType.Circle
};
