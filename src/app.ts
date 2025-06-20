// simple typeguard in javascript

/*
function convertNumberToString (number) {
    if (typeof number !== "number") {
        console.log("Please enter a valid number");
        return;
    }

    return number.toString();
}
*/

const user = {
    name:"dikshant",
    age: 21
}

let anotherUser: typeof user;


//! Arrays and nulls is treated as objects in JavaScript
function printStrings (args: string | string[] | null) {
    // if (typeof args === 'object') {
    if (args && typeof args === 'object') {
        for (const s of args) {
            console.log(s)
        }
    } else if (typeof args === 'string') {
        console.log(args)
    } else {
        console.log("Please enter a valid string")
    }
}

//* Truthiness Narrowing

//* null, undefined, false, 0, NaN, '' -> these all are treated as falsy values in Js & Ts

type Person = {
    name: string;
    age?: number;
}

function printAge (person: Person) {
    if (person.age) {
        console.log(person.age);
    } else {
        console.log("age is unknown")
    }
}

//* Equality Narrowing

/**
 * ===
 * !==
 * ==
 * !=
 */

type Circle = {
    kind: "circle";
    radius: number;
}

type Square = {
    kind: "square";
    side: number;
}

type Shape = Circle | Square;

function calculateArea(shape: Shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
    } else {
        return shape.side ** 2;
    }
}

//* in operator narrowing

function calculateArea2(shape: Shape) {
    if ("radius" in shape) {
        return Math.PI * shape.radius ** 2;
    } else {
        return shape.side ** 2;
    }
}

//* instanceOf typeguard

abstract class Product {
    constructor(public name: string, public price: number) {}
    abstract getPrice():number {};
}


class Electronics extends Product {
    constructor(name:string, price: number, public warrenty: number) {
        super(name, price);
    }

    getPrice(): number {
        return this.price;
    }
}

class Clothing extends Product {
    constructor (name: string, price: number, public size: number, public material: string) {
        super(name, price);
    }

    getPrice(): number {
        return this.price;
    }
}


function printProduct(product: Product) {
    console.log(`Name = ${product.name}`);
    console.log(`Price = ${product.price}`);

    if (product instanceof Electronics) {
        console.log(`Warrenty = ${product.warrenty}`);
    } else if (product instanceof Clothing) {
        console.log(`Material = ${product.material}`)
    }
}
