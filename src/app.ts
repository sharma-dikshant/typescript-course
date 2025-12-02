/** Decorators */

// decorators is a special kind of declarations that can modify classes, methods, properties, parameters at design time;

/** Decorator Factory function */
function methodLogger(prefix: string) {
    // decorator function
    return function (target: any, context: any) {
        // replacement function
        return function (this: any, ...args: any[]) {
            console.log(`${prefix} invocation started`);
            const res = target.call(this, ...args);
            console.log(`${prefix} invocation ended`);
        }
    }
}
 

class User {
    constructor(public name: string) {}

    @methodLogger("LOG:")
    greet(greeting: string) {
        console.log(`${greeting} ${this.name}`)
    }
}

let user: User = new User("newUser");

// user.greet('hello, howre you ');



/** Field Decorators */

function addDefaultPost<This, Value extends Post[]>(target: undefined, context: ClassFieldDecoratorContext<This, Value>) {
    return function(initialValue: Value) {
        initialValue.push({
            title: "Default",
            content: "Default Post"
        })
        return initialValue;
    }
}

type Post = {
    title: string;
    content: string;
}

class Author {
    @addDefaultPost<Author, Post[]>
    public posts: Post[] = [];

    constructor(public name: string) {}

    greet(greeting: string) {
        console.log(`${greeting} ${this.name}`)
    }
}


const author = new Author("test user");
console.log(author.posts)
author.greet("Hello")