/**
 * Named Function
 */

function Intro(name: string, age: number): string {
  return `Hello, My name is ${name} and I'm ${age} years old`;
}

/**
 * Function expression
 */

const Intro2 = function (name: string, age: number): string {
  return `Hello, My name is ${name} and I'm ${age} years old`;
};

/**
 * Arrow function
 */

const Intro3 = (name: string, age: number): string => {
  return `Hello, My name is ${name} and I'm ${age} years old`;
};

/**
 * Optional Parameters
 */

function Intro4(name: string, age: number, country?: string): string {
  return `Hello, My name is ${name} and I'm ${age} years old`;
}

Intro4("dhfasd", 343);
Intro4("dhfasd", 343, "faihg");

/**
 * Custom types with function
 */

enum AgeUnit {
  Years = "years",
  Months = "months",
}

type Person = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
};

function convertAgeToMonths(person: Person): Person {
  if (person.ageUnit === AgeUnit.Years) {
    person.age *= 12;
    person.ageUnit = AgeUnit.Months;
  }
  return person;
}

let p: Person = {
  name: "Dikshant",
  age: 21,
  ageUnit: AgeUnit.Years,
};

console.log(p);

/**
 * Function Call Signatures
 */

type Person2 = {
  name: string;
  age: number;
  greet: (msg: string) => string; //* function call signature
};

let p1: Person2 = {
  name: "Scott",
  age: 39,
  greet: (msg) => `${msg} ${p1.name}`,
};

console.log(p1.greet("Hello"));

/**
 * Type Inference with anonomous functions
 */

let students: string[] = ["x", "y", "z"];

students.map((student) => {
  //* here typescript correctly infered that student is a string
  console.log(student);
});
students.map(function (student) {
  //* here also typescript correctly infered that student is a string
  console.log(student);
});

/**
 * Void and Never Type
 */

function writeToDatabase(val: string): void {
  //* this func does'nt return anything
  console.log(val);
}

function throwError(err: string): void {
  //* this function throws an eror thats why it is never type
  throw new Error(err);
}

type check = never extends void ? true : false; // true

/**
 * Async functions
 */

async function fetchUserFromDB(id: number): Promise<any> {}

const anotherAsyncFn = async (id: number): Promise<any> => {};

type User = {
  name: string;
  age: number;
};

async function fetchUser(id: number): Promise<User> {
  return Promise.resolve({
    name: "John",
    age: 39,
  });
}

/**
 * Rest Parameters and Arguments
 */

function multipleBy(by: number, ...numbers: number[]): number[] {
  return numbers.map((n) => n * by);
}

console.log(multipleBy(2, 2, 3, 4, 5, 6, 6));
console.log(multipleBy(6, 32, 2, 4));

/**
 * functions with tuples
 */

const arg = [1, 2];

function calculateAngleWithX(...point: [number, number]): number {
  return Math.atan2(point[1], point[0]);
}

console.log(calculateAngleWithX(1, 1));

/**
 * Parameter Desturcturing
 */

type Student = {
  name: string;
  branch: string;
  age: number;
  year: number;
};

function printStdDetails(std: Student): void {
  console.log(std.name, std.branch, std.year, std.age);
}

function updateDetailsById(
  record: Student[],
  id: number,
  { name, branch, age, year }: Student
): void | Student {
  if (id >= record.length) {
    console.log("No Record found!");
  }

  record[id] = { name, branch, age, year };
  return record[id];
}

let stds: Student[] = [
  {
    name: "Dikshant",
    branch: "CSE",
    age: 21,
    year: 4,
  },
];

/**
 * Function Overloading
 */

type Reservation = {
  departureDate: Date;
  returnDate: Date;
  DepartureFrom: string;
  Destination: string;
};

//* Overloaded type => 4 arg and 3 arg
type Reserve = {
  (
    departureDate: Date,
    returnDate: Date,
    departureFrom: string,
    destination: string
  ): Reservation | never; //* Means that either this signature is used or not
  (departureDate: Date, departureFrom: string, destination: string):
    | Reservation
    | never;
};

type DemoType = (n1: number, n2?: number) => Reservation;

function demo(n1, n2): Reservation {
  console.log(n1, n2);
  return {
    departureDate: new Date(),
    returnDate: new Date(),
    DepartureFrom: "Jaipur",
    Destination: "LA",
  };
}

