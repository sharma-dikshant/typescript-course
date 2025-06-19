//* Awaited<T>
//example 1
const promise : Promise<string> = new Promise((res, rej) => {
    setTimeout(() => {
        res("Hello")
    }, 1000);
})

type AwaitedType = Awaited<typeof promise>

//example 2

async function example () {
    const response = new Promise((res, rej) => {
        setTimeout(() => {
            res(1)
        }, 1000);
    })

    type ResponseDataType = Awaited<typeof response>;
    const data: ResponseDataType = await response;

    console.log(typeof data)
}

example();



//* Record<Key, Value>

type Roles = "author" | "editor" | "researcher"

interface User {
    name: string;
    email: string;
    age: number;
}

interface Article {
    title: string;
    content: string;
    contributors: Record<Roles, User>
}

const article: Article = {
    title: "dja gerigtrgf erge",
    content: "ierhrgenr roih freigae reag reg erg efwdgy  dfgehg",
    contributors: {
        author: {name: "John", email: "John@email.com", age: 32},
        editor: {name: "Rohit", email: "rohit@email.com", age: 21},
        researcher: {name: "Pavan", email: "pavan@email.com", age: 23}
    }
}

interface Person {
    name: string;
    email: string;
    age: number;
}

type NameAndAge = Pick<Person, "name" | "age">

const person:NameAndAge = {
    name: "Dikshant",
    age: 23
}


//*  Omit<OldType, Keys>

interface NewUser {
    name: string;
    email: string;
    age: number;
    password: string;
    passwordConfirm: string;
    _id: string;
}

type LimitedUser = Omit<NewUser, "password" | "passwordConfirm" | "_id">

//* Partial<Type>

function updateUser (user: NewUser, updates: Partial<NewUser>): NewUser {
    return { ...user, ...updates }
}
 

// lets test it
const p1: NewUser = {
    name: "dikshant",
    age: 21,
    email: "dikshant@email.com",
    password: 'tfdsghtrffgrt',
    passwordConfirm: 'tfdsghtrffgrt',
    _id: "23retdf3rev"
}

const updatedP1: NewUser = updateUser(p1, {name: "Dikshant Sharma"});
console.log(updatedP1)

//* Required<Type>

// Let say we want to register the student to our platform with only name and email required. But as soon as student try to login, password and studentId are also needed

interface Student {
    name: string;
    email: string;
    password?: string;
    studentId?: string;
}

type RegisteredUser = Required<Pick<Student, "name" | "email" | "password" | "studentId">>


//* String manipulation Utility Types

type City = "Delhi" | "mumbai" | "jaipuR"

type LowercaseCity = Lowercase<City>
type UppercaseCity = Uppercase<City>
type CapitalizeCity = Capitalize<City>
type UnCapitalizeCity = Uncapitalize<City>



// Satisfies Operator

type Properties = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];

/*
const color: Record<Properties, RGB | string> = {
    red: [255, 0, 0],
    green: "#00ff00",
    blue: [255, 255, 0]
}

color.green.toLowerCase();  //* this will throw error

if (typeof color.green === "string") {  //* this will not throw error
    color.green.toUpperCase();
}

*/

//* but if we strict type color using satisfies operator then it will automatically checks all properties of color whether it is of type RGB or string

const color = {
    red: [255, 0, 0],
    green: "#00ff00",
    blue: [255, 255, 0]
} satisfies Record<Properties, RGB | string>

color.green.toLocaleLowerCase();    // now this will not throw error