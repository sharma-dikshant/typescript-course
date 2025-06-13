"use strict";
/**
 * *Classes
 */
// class User {
//     name = "Dikshant"
//     email = "hello@gmail.com"
//     greet() {
//         return this.name;
//     }
// }
// const user1 = new User();
// console.log(user1)
class User {
    constructor(name, email, lastname, phone) {
        this.name = name;
        this.email = email;
        this.lastname = lastname;
        this.phone = phone;
    }
    greet() {
        return `Hello! ${this.name}`;
    }
}
class Admin extends User {
    constructor(name, email, department, lastname) {
        super(name, email, lastname);
        this.isAdmin = true;
        this.department = department;
    }
    printName() {
        console.log(this.name);
    }
}
const user1 = new User("Dikshant", "test@gmail.com");
const user2 = new User("Dikshant", "test@gmail.com", "Sharma");
const admin = new Admin("Alice", "alice@admin.io", "sales", "Doe");
console.log(user1.greet());
console.log(user2);
console.log(admin);
// user1.email = "hert4o" // cant do this
//* Typescript treated classes as types
/**
 * * Generics with classes
 */
class Box {
    constructor(value) {
        this._value = value;
    }
    get value() {
        return this._value;
    }
    set value(newValue) {
        this._value = newValue;
    }
}
let numberBox = new Box(11);
let HelloBox = new Box("hello");
console.log(HelloBox.value);
HelloBox.value = "shello";
console.log(HelloBox.value);
class Repository {
    constructor() {
        this._items = [];
    }
    add(item) {
        this._items.push(item);
    }
    getItemById(id) {
        return this._items.find(item => item.id === id);
    }
    deleteItemById(id) {
        this._items = this._items.filter(item => item.id !== id);
    }
    updateItemById(id, newItem) {
        const idx = this._items.findIndex(item => item.id === id);
        if (idx != -1) {
            this._items[idx] = newItem;
            return newItem;
        }
        return undefined;
    }
    getAllItem() {
        return this._items;
    }
}
const repo1 = new Repository();
const repo2 = new Repository();
repo1.add({
    name: "Dikshant",
    email: "hello@gmail.com",
    id: 1,
    age: 21
});
repo2.add({
    id: 1,
    title: "Harry Potter",
    ISBN: 1234567891234
});
console.log(repo1.getItemById(1));
/**
 * * Mixins
 */
//  this is an constructor
function TimeStamp(Base) {
    return class extends Base {
        constructor() {
            super(...arguments);
            this.timestamp = new Date();
        }
        getTimestamp() {
            return this.timestamp;
        }
    };
}
class Booking {
    constructor(name) {
        this.name = name;
    }
}
class BookingWithTimestamp extends TimeStamp(Booking) {
    constructor(name, hotel) {
        super(name);
        this.hotel = hotel;
        this.hotel = hotel;
    }
}
console.log(BookingWithTimestamp);
