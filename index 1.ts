// interface Person {
//     name: string;
//     email: string;
//     age: number;
//     phone?: string;
//     greet?: () => void;
// }

// /**
//  * Interfaces and custom types are very similar in many ways, but interfaces have their own place, especially when we start using them in conjunction with our classes and see how they can help us in structuring our classes and utilizing inheritance as well.
// So the question is, when dealing with just objects, should you use a custom type or you should use an interface like we have done over here?
// The answer to that is that it's your choice and it doesn't matter.
// What matters is that you do use either of the two and that's it.
// I prefer interfaces as that brings some consistency to my code.
// You can choose whatever you want to.
// Having said that, just like custom types, our interfaces can have optional properties as well and can also include call signatures too.
//  */


// interface User {
//     name: string;
//     email: string;
//     login(): void;
// }

// class Admin implements User {
//     constructor (public name: string, public email: string, private crediential: string, protected level: number) { }

//     login(): void {
//         console.log("Admin is logged in!")
//     }
// }


// class Customer implements User {
//     constructor (public name: string, public email: string, private mobile: string) {}

//     login(): void {
//         console.log("Customer is Logged in!")
//     }
// }

// class Auth {
//     public static login (user: User) {
//         user.login();
//     }
// }

// const admin = new Admin("Dikshant", "admin@test.io", "ertfdg25fd", 1);
// const customer = new Customer("Mark", "mark@gmail.com", "9876543210");

// Auth.login(admin);  //* this will login admin
// Auth.login(customer); //* this will login customer



