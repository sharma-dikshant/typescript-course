__command to compile ts file__ : `tsc ./index.js`  
__command to watcht ts file__ : `tsc -w ./index.js`   
__to ignore ts errors__: use `// @ts-ignore`    

__point__: If there is any typescript error, still it can compile into js file and working due to default typescipt settings.  
__point__: no type is carried to js file at the time of compilation. Only a few like `enum` is carried to js file at rare.   

## js vs ts:        
```txt
    Features                            Javascript                         typescript
    how are types bound                 Dynamic                            Statically
    Types automatically converted?      Yes                                No (at times)
    When are types checked?             Runtime                            Compile time
    When errors surface?                Runtime                            Compile time
```
__Primitive Types__ : A primitive is data that is not a object and has no methods or properties. A primitive value is represented directly at the lowest level of the language implementation.          
```txt
    Primitive Data type in Js:
    string    symbol    null
    number    bigInt    undefined
    boolean   

``` 

__Inference__: When typescript guesses the type of a variable based on the value assigned to it, it is called inference.        
__Type Annotations__: When you explicitly specify the type of a variable, it is called type annotation.  
```ts
    let x: number = 10; // type annotation
    let y = 10; // inference
```

__Point__: Bigint is a new data type introduced in es2020. It is not equivalent to number. It is used to represent integers with arbitrary precision.  
```ts
    let x: bigint = 10n; // bigint
    let y: number = 10; // number
```

__Doubt: Symbol Type.__         
# Typescript Type System:
```txt
    Typescript Type System:
    1. Primitive Types
    2. Object Types
    3. Union Types
    4. Intersection Types
    5. Literal Types
    6. Tuple Types
    7. Enum Types
    8. Any Type
    9. Unknown Type
    10. Void Type
    11. Never Type
```

__Primitive Types__: These are the basic data types in typescript. They are the building blocks of typescript.  
```ts
    let x: number = 10; // number
    let y: string = "hello"; // string
    let z: boolean = true; // boolean
    let a: null = null; // null
    let b: undefined = undefined; // undefined
    let c: bigint = 10n; // bigint
    let d: symbol = Symbol("symbol"); // symbol
```         
__Any type__: It is the default Js behavior. It is used when you don't know the type of a variable. It can be any type.  
```ts
    let x: any = 10; // any
    x = "hello"; // still valid
    x = true; // still valid
```

```ts
function returnParams(params) { // throw an error for noImplicitAny
    return params;
}
function returnParams1(params:any) { // strictly typed to any. So no error
    return params;
}
```

__Unknown type__: It is similar to any type, but more strict. It is used when you don't know the type of a variable, but you want to ensure that it is not any type.  
```ts
    let x: unknown = 10; // unknown
    x = "hello"; // still valid
    x = true; // still valid


    function multipleByTwo(num: unknown) {
        if (typeof num === "number") {
            return 2 * num;
        }
        console.error("Please enter a valid Number")
    }

    console.log(multipleByTwo(3))
    console.log(multipleByTwo("hello"))
```

__Note__:
```js
    // Javascript types are:
    // Date
    // RegExp
    // Function
    // Array
    // Object
    // Map
    // Set
    // WeakMap
    // WeakSet
    // Error
    // Promise
```

__type alias__: It is used to create a new name for a type. It is useful when you want to create a new type based on an existing type.  
```ts
    type Point = {
        x: number;
        y: number;
    };

    let p: Point = { x: 10, y: 20 }; // Point type
```

__Duck Typing__: It is a concept in typescript used for type inference. 
```txt
"If it looks like a duck, quacks like a duck, then it is a duck!"
```

__Difference btw type declaration, annotation and inference__:  
```js
    // Type Declaration: It is used to create a new type based on an existing type.
    type Point = {
        x: number;
        y: number;
    }

    // Type Annotation: It is used to explicitly specify the type of a variable.

    let p1: Point = { x: 10, y: 20 }; // type annotation
    let p2: Point = { x: 10, y: 20 }; // type annotation

    // Type Inference: It is used to automatically infer the type of a variable based on the value assigned to it.
    function Diff(p1: Point, p2: Point): Point {
        return { x: p1.x - p2.x, y: p1.y - p2.y };
    }
    let diff = Diff(p1, p2); // type inference
```


__Union Type__: It is used to specify that a variable can be one of multiple types.
```ts
let age : string | number;
age = 11;
age = "11";

function print(input: string | undefined) {
    if (input) {
        console.log(input)
    }

    console.log("No input");
}
```

__Conditional Type Assignment__: It is used to assign a type based on a condition. It is useful when you want to assign a type based on a condition.
```ts
type CustomDate = Date;
type DateAssignment = CustomDate extends Date ? Date : undefined;
```

__Type Hierarchy__:
![Type Hierarchy](./Udemy%20ScreenShot%202025-06-09%2013-09-37.jpeg)

__Notes:__           
- child types extends parent types.
```js
    let x = any extends unknown ? true : false; // true
```
- parent types can be used in place of child types.
- child types cannot be used in place of parent types.
- never is most strict type in typescript.
- unknown is most liberal type in typescript.

__Never Type__: It is used to specify that a function will never return a value. It is useful when you want to specify that a function will never return a value. Most common use case is when a function throws an error or has an infinite loop.  

```ts
const throwAnError (message: string) : never => {
    throw new Error(message);
}
```
