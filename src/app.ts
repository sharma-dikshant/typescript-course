/** Decorators */

// decorators is a special kind of declarations that can modify classes, methods, properties, parameters at design time;

function methodLogger(target: any, context: any) {
    console.log(target);
    console.log(context);
}
 
function classDecorator(target: any, context: any) {
    console.log(target);
    console.log(context);
}

@classDecorator
class User {
    constructor(public name: string) {}

    @methodLogger
    greet() {
        console.log(`Hello this is ${this.name}`)
    }
}
