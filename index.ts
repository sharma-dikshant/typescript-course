/**
 * * Interface inheritence
 */
interface User {
    name: string;
    email: string;
    phone: number;
    age: number;
}

interface UserWithAddress extends User {
    address: string;
}

const user1: User = {
    name: "Dikshant",
    email: "abc@gmail.com",
    phone: 1234567890,
    age: 21
}

const userWithAdd: UserWithAddress = {
    address: "India",
    name: "dikshant", 
    email: "abc@gmail.com",
    phone: 1234593,
    age: 21
}

/**
 * * Inheriting from multiple Interfaces
 */


enum Roles {
    ADMIN = "admin",
    WRITER = "writer",
    EDITOR = "editor"
}

interface Role {
    role: Roles
}

enum AppPermissions {
    WRITE = "write",
    READ = "read",
    EXECUTE = "execute"
}

interface UserPermissions {
    permission: AppPermissions[]
}


interface Admin extends User, Role, UserPermissions {
    department: string;
}

const bob: Admin = {
    name: "Bob",
    email: "bob@gmail.com",
    phone: 123452,
    age: 43,
    department: "sales",
    role: Roles.ADMIN,
    permission: [AppPermissions.EXECUTE, AppPermissions.READ, AppPermissions.WRITE]
}

// console.log(bob)


/**
 * * Generics with Interfaces
 */

enum AutomobileType {
    car = "car",
    bike = "bike",
    truck = "truck"
}

enum AutomobileBrand {
    honda = "honda",
    maruti = "maruti",
    toyota = "toyota",
}

enum AutomobileColor {
    black = "black",
    white = "white",
}

interface Automobile<Type, Brand, Color>{
    type: Type;
    brand: Brand;
    color: Color[];
    description: string;
}


const brezza:Automobile<AutomobileType, AutomobileBrand, AutomobileColor> = {
    type: AutomobileType.car,
    brand: AutomobileBrand.maruti,
    color: [AutomobileColor.white, AutomobileColor.black],
    description: "this is a brezza"
}

const sedan:Automobile<AutomobileType, AutomobileBrand, number> = {
    type: AutomobileType.car,
    brand: AutomobileBrand.maruti,
    color: [112, 1312],
    description: "this is a brezza"
}

console.log(brezza)


class Car implements Automobile<string, AutomobileBrand, AutomobileColor> {
    type: string = "car";
    constructor (public brand: AutomobileBrand, public color: AutomobileColor[], public description: string) {}
}


const suv: Car = new Car(AutomobileBrand.toyota, [AutomobileColor.black, AutomobileColor.white], "this is an SUV");

console.log(suv)


/**
 * * difference between Interface and types
 */

//? types
//* types provides ability to created union and intersection types.

type User1 = {
    name: string
}

type Admin1 = {
    isAdmin: boolean
}

const joe: User1 & Admin1 = {
    name: "Joe Doe",
    isAdmin: true
}

//* tuples can be declared using type keyword but can't be created using interfaces
type ResponseTuple = [string, number]


//* if we declare two types with same name then it gives conflict error
//* but in case of interfaces, if we declare multiple interfaces with same name then they combined together

interface Person {
    name: string
}

interface Person {
    email: string
}

const p1: Person = {
    name: "DIkshant",
    email: "abc@gmail.com"
}

//* interface provides feature of inheritance

interface Employee extends Person { }