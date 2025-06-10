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


const safeInteger: number = Number.MAX_SAFE_INTEGER;

let bigInt1 = BigInt(2345678998765423454);
bigInt1 = bigInt1 + 5n;
let bitInt2 = 234584392034985n;

console.log(bigInt1);
console.log(bitInt2);


function returnParams(params) { // throw an error for noImplicitAny
    return params;
}
function returnParams1(params: any) { // strictly typed to any. So no error
    return params;
}

let x: unknown = 11;
console.log(typeof x)


function multipleByTwo(num: unknown) {
    if (typeof num === "number") {
        return 2 * num;
    }

    console.error("Please enter a valid Number")
}

console.log(multipleByTwo(3))
console.log(multipleByTwo("hello"))



type Point = {
    x: number;
    y: number;
}

let p1: Point = { x: 11, y: 42 };
let p2: Point = { x: 32, y: "sting" };
let p3: Point = { x: 22, y: 44, z: 423 }


let age: string | number;
age = 11;
age = "11";

function print(input: string | undefined) {
    if (input) {
        console.log(input)
    }

    console.log("No input");
}


type CustomDate = Date;
type DateAssignment = CustomDate extends Date ? Date : undefined;


/**
 * Never type
 */

const throwAnError = (errMessage: string) => {
    throw new Error(errMessage);
}


/**
 * Type Casting
 */


let firstName = <any>"Dikshant";
let lastName = "Sharma" as any;


type User {
    name: string,
    email: string,
}

// This function returns an object user
async function getUser() {
    const response = await fetch("www.google.com");
    const user = (await response.json()) as User;
    return user;
}

// but here the type of user1 is infered as Promise<Response>
// so can use typecast as we are sure here that reponse of getUser is a user objext
const user1 = getUser();