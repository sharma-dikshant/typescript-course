/** Decorators */

// decorators is a special kind of declarations that can modify classes, methods, properties, parameters at design time;

function methodLogger(target: any, context: any) {
    // console.log('method decorators');

    function replacement(this: any, ...args: any[]) {
        // console.log(this);
        // console.log(args);
        console.log('invocation started');
        const res = target.call(this, ...args);
        console.log("invocation ended");
    }

    return replacement;
}
 

class User {
    constructor(public name: string) {}

    @methodLogger
    greet(greeting: string) {
        console.log(`${greeting} ${this.name}`)
    }
}

let user: User = new User("newUser");

user.greet('hello, howre you ');
