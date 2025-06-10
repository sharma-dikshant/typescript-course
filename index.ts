/**
 * Arrays 
 */

let a: number[] = [1, 2, 4, 5]
let b: Array<string> = ["a", "b", "c"]
let c: (number | string)[] = [1, 4, "adfg"]

type Person = {
    name: string
    age: number
    gender: "male" | "female"
}

// Arrays of objects
let persons: Person[] = [
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
]

/**
 * Tuples
 */

let s: [string, string, number] = ["John", "Doe", 18]

type Student = [string, string, number, string?]

let s1: Student = ["Dikshant", "Sharma", 20, "hello@gmail.com"]
let s2: Student = ["X", "Y", 20]


type ListOfStudents = [string, ...Student[]]

let failedStudents: ListOfStudents = ["failed", s1, s2, ["new", "student", 21]]

/**
 * Readonly arrays and tuples
 */

// arrays
let num: readonly number[] = [1, 2, 3, 3, 2, 22]
num.push(12);   // this will thow warning
type A = Readonly<string[]>
type B = readonly (number | string)[]

// tuples
type ReadOnlyTuple = readonly [string, string, number]


/**
 * Enums
 */

enum Direction {
    Up,     // 0
    Left,   // 1
    Right,  // 2
    Down,   // 3
}

//* enums are constants readonly and typescript behind the scenes assigns incremental numerical values to each properties. Like here, 

console.log(Direction.Right)

enum Direction2 {
    Up = 1,
    Left,   // 2
    Right,  // 3
    Down    // 4
}

console.log(Direction2.Down)

enum Roles {
    ADMIN = "admin",
    AUTHOR = "author",
    WRITER = "writer"
}

console.log(Roles.ADMIN)

type User = {
    name: string
    email: string
    role: string
}

let user1: User = {
    name: "dikshant sharma",
    email: "hello@email.com",
    role: Roles.ADMIN
}

console.log(user1)

//* enums can be heterogenous

enum Direction3 {
    Up = "up",
    Left = 1,
    Down = 2,
    Right = "right"
}

//* all enums are compiled down to objects and constants


/**
 * Difference between enum and const objects
 */

enum Constants {
    pi = 3.14,
    e = 2.44,
}

//* this enums is completely compiled down to js

const enum EConstants {
    pi = 3.14,
    e = 2.44
}

//* when we declare enums with const then only the used enum property is compiled to js


const OConstants = {
    pi: 3.14,
    e: 2.44
} as const;

//* now this object will behave as an enum. Because we cant update the properties of this object

/**
 * Computed Enums
 */

enum AccessPermission {
    None = 0,
    Read = 1,
    Write = 2,
    ReadWrite = Read + Write,
    Delete = 4,
    All = ReadWrite + Delete
}

console.log(AccessPermission.All, AccessPermission.ReadWrite)


/**
 * enums as types
 */

enum ShapeType {
    Circle = "circle",
    Square = "square"
}

type Circle = {
    shape: ShapeType.Circle,
    radius: number
}

type Square = {
    shape: ShapeType.Square,
    length: number
}

let c1: Circle = {
    radius: 2,
    shape: ShapeType.Circle
}