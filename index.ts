function returnParams(params: any): any {
  return new Date();
}

let x = returnParams("helo");
//* above function is a generic function as it can take params of any type. But the problem
//* here is that let say we call the function by passing string and the function can return any parameter. As we have defined the return type of the function as any

//* But lets say we want that the params of function and the return return type both should be same. Then generics come into play

function returnParams2<Type>(params: Type): Type {
  return params;
}

let y = returnParams2<string>("Hello");
// let z = returnParams2<number>("Hello"); // this will throw an error

// Generics with arrow function
const returnParams3 = <T>(param: T): T => param;

// Generics with function expression
const returnParams4 = function<T>(params:T):string {
  return "hello";
}

//Generics with type alias

type FuncType = <T, V>(param: T) => V;


// generics with function call signature
type ObjType = {
  myParams : <T, U>(param1: T, param2: U) => T | U;
}


// example

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

let arr1 = [1,2,3,4]
let arr2 = ["srting"]

let firstEl = getFirstElement(arr1);
let firstEl2 = getFirstElement<string>(arr2)


/**
 * Different Type Aliases
 */

type ReturnFn = <T>(params: T) => T;
type ReturnFn2<T> = (params: T) => T;   //* these both are different


/**
 * Generics and Constraints with Arrays
 */

type HasLength = {
  length: number;
}

function logLength<T extends HasLength>(item: T): void {
  console.log(item.length);
}



logLength([1,2,2,2,2])
logLength("arr3")
logLength({ name: "hello" })  // this will throw an error
logLength({ name: "hello", length: 1 })  // this will not throw error because it has length property


/**
 * * Generics with objects
 */

type KeyValuePair<KeyType, ValueType> = {
  key: KeyType;
  value: ValueType
}

let stringNumberPair: KeyValuePair<string, number> = {
  key: "hello",
  value: 212
}

let numberStringPair: KeyValuePair<number, string[]> = {
  key: 23,
  value: ["a"]
}


// Constraints with Objects

type HasId = {
  id: number,
}

function printId<T extends HasId>(obj: T): void {
  console.log(obj.id)
}

printId({ name: "Dikshant", id: 1 });
printId({ name: "Dikshant"});     // throws an error because it does'nt have id


/**
 * * Keyof Operator
 */

type Events = {
  key: number;
  date: Date;
  type: "indoor" | "outdoor"
}

type UnionOfKeys = keyof Events;  // "key" | "date" | "type"

let e1: UnionOfKeys = "key";  //✅
let e2: UnionOfKeys = "hello"; //❌


/**
 * Index Signatures
 */

type Numeric = {
  [key: number]: string;
}

type NumericKeyOf = keyof Numeric;    //* the type of NumericKeyOf is number


/**
 * * Partial Types
 */

type Person = {
  name: string;
  age: number;
  address: string;
}

type PartialPerson = {
  [K in keyof Person]?: Person[K] | null
}


let partialPerson: PartialPerson = { // this is Valid
  name:"dikshant",
}


/**
 * Default values of Generics
 */

async function fetchData<T = any>(url: string): Promise<T> {
  const response = await fetch("www.google.com");
  const data = await response.json();

  return data;
}


type Post = {
  title: string;
  author: string;
  date: Date
}

let d1 = fetchData("www.ggo.com");
let d2 = fetchData<Post>("www.ggogl.com");

