"use strict";
const user1 = {
    name: "Dikshant",
    email: "abc@gmail.com",
    phone: 1234567890,
    age: 21
};
const userWithAdd = {
    address: "India",
    name: "dikshant",
    email: "abc@gmail.com",
    phone: 1234593,
    age: 21
};
/**
 * * Inheriting from multiple Interfaces
 */
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "admin";
    Roles["WRITER"] = "writer";
    Roles["EDITOR"] = "editor";
})(Roles || (Roles = {}));
var AppPermissions;
(function (AppPermissions) {
    AppPermissions["WRITE"] = "write";
    AppPermissions["READ"] = "read";
    AppPermissions["EXECUTE"] = "execute";
})(AppPermissions || (AppPermissions = {}));
const bob = {
    name: "Bob",
    email: "bob@gmail.com",
    phone: 123452,
    age: 43,
    department: "sales",
    role: Roles.ADMIN,
    permission: [AppPermissions.EXECUTE, AppPermissions.READ, AppPermissions.WRITE]
};
// console.log(bob)
/**
 * * Generics with Interfaces
 */
var AutomobileType;
(function (AutomobileType) {
    AutomobileType["car"] = "car";
    AutomobileType["bike"] = "bike";
    AutomobileType["truck"] = "truck";
})(AutomobileType || (AutomobileType = {}));
var AutomobileBrand;
(function (AutomobileBrand) {
    AutomobileBrand["honda"] = "honda";
    AutomobileBrand["maruti"] = "maruti";
    AutomobileBrand["toyota"] = "toyota";
})(AutomobileBrand || (AutomobileBrand = {}));
var AutomobileColor;
(function (AutomobileColor) {
    AutomobileColor["black"] = "black";
    AutomobileColor["white"] = "white";
})(AutomobileColor || (AutomobileColor = {}));
const brezza = {
    type: AutomobileType.car,
    brand: AutomobileBrand.maruti,
    color: [AutomobileColor.white, AutomobileColor.black],
    description: "this is a brezza"
};
const sedan = {
    type: AutomobileType.car,
    brand: AutomobileBrand.maruti,
    color: [112, 1312],
    description: "this is a brezza"
};
console.log(brezza);
class Car {
    constructor(brand, color, description) {
        this.brand = brand;
        this.color = color;
        this.description = description;
        this.type = "car";
    }
}
const suv = new Car(AutomobileBrand.toyota, [AutomobileColor.black, AutomobileColor.white], "this is an SUV");
console.log(suv);
const joe = {
    name: "Joe Doe",
    isAdmin: true
};
const p1 = {
    name: "DIkshant",
    email: "abc@gmail.com"
};
