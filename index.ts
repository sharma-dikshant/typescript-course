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
    public name: string;
    readonly email: string;  //* readonly property
    lastname?: string;      //* optional property
    private phone?: string;

    constructor(name: string, email: string, lastname?: string, phone?: string) {
        this.name = name;
        this.email = email;
        this.lastname = lastname;
        this.phone = phone;
    }

    greet () {
        return `Hello! ${this.name}`;
    }
}

class Admin extends User {
    isAdmin:boolean = true;
    department: string;

    constructor(name: string, email: string, department: string, lastname?: string) {
        super(name, email, lastname)
        this.department = department;
    }

    public printName() {
        console.log(this.name);
    }
}

const user1 = new User("Dikshant", "test@gmail.com");
const user2 = new User("Dikshant", "test@gmail.com", "Sharma");

const admin = new Admin("Alice", "alice@admin.io", "sales", "Doe");

console.log(user1.greet());
console.log(user2);
console.log(admin)

// user1.email = "hert4o" // cant do this
//* Typescript treated classes as types


/**
 * * Generics with classes
 */

class Box<T> {
    private _value: T;

    constructor(value: T) {
        this._value = value;
    }

    get value():T {
        return this._value;
    }

    set value(newValue: T) {
        this._value = newValue;
    }
}


let numberBox = new Box(11);
let HelloBox = new Box<string>("hello");

console.log(HelloBox.value)
HelloBox.value = "shello";
console.log(HelloBox.value)


type Identifiable = {
    id: number;
}

class Repository<T extends Identifiable> {
    private _items: T[] = [];

    add (item: T): void {
        this._items.push(item);
    }

    getItemById (id: number ): T | undefined {
        return this._items.find(item => item.id === id);
    }

    deleteItemById (id: number): void {
        this._items = this._items.filter(item => item.id !== id);
    }

    updateItemById (id: number, newItem: T): T | undefined {
        const idx = this._items.findIndex(item => item.id === id);

        if (idx != -1) {
            this._items[idx] = newItem;
            return newItem;
        }
        
        return undefined;
    }

    getAllItem (): T[] {
        return this._items;
    }
}

// type Students = {
//     id: number;
//     name: string;
//     email: string;
//     age: number;
// }
type Student = Identifiable & {
    // id: number;
    name: string;
    email: string;
    age: number;
}

type Book = Identifiable & {
    title: string;
    ISBN: number;
}

const repo1 = new Repository<Student>();
const repo2 = new Repository<Book>();

repo1.add({
    name: "Dikshant",
    email: "hello@gmail.com",
    id: 1,
    age: 21
})

repo2.add({
    id: 1,
    title: "Harry Potter",
    ISBN: 1234567891234
})

console.log(repo1.getItemById(1));


/**
 * * Mixins
 */

                            //  this is an constructor
function TimeStamp<T extends new (...args: any[]) => {}> (Base: T) {
    return class extends Base {
        protected timestamp: Date = new Date();

        getTimestamp () {
            return this.timestamp;
        }
    }

}

class Booking {
    constructor(public name: string) {}
}


class BookingWithTimestamp extends TimeStamp(Booking) {
    constructor (name: string, public hotel: string) {
        super(name);
        this.hotel = hotel;
    }
}

console.log(BookingWithTimestamp)