let person: object = {
    name: "Dikshant",
    age: 20
}


let car: {} = {
    model: "BMW",
    color: "black",
}

person = []
car = () => { }

//* if we not annotating strict types to objects (or simpling annotating to Object type), person and car can be assigned to array, function, tuple. Which we dont want

let book: {
    movie: string,
    rating: number,
} = {
    movie: "Godfather",
    rating: 4
}

//* Above method of annotating is called object literals annotation

book = []   // now this will throw an error

/**
 * Using type aliasing
 */

type Post = {
    title: string
    content: string
    date: Date
    author: string
}

let post1: Post = {
    title: "Init Post",
    content: "first post",
    date: new Date(),
    author: "new User"
}

let post2: Post = {
    title: "2 Post",
    content: "2 post",
    date: new Date(),
    author: "new User"
}


//* declaring types for nested objects
type User = {
    name: string
    post: Post
}
// another way
// type User = {
//     name: string
//     post: {
//         title: string
//         content: string
//     }
// }

let user1: User = {
    name: "Dikshant",
    post: post1
}


/**
 * Index Signatures
 */

// let say we want to declare a type for student with properties name, branch and awards. Award is an object containing objects of award but we dont know the name of awards (i.e. key)

type Student = {
    name: string
    branch: string
    awards: {
        [key: string]: {        //* here we're not sure about the key (i.e. name of award) but we know that it is string for sure
            title: string
            date: Date
        }
    }
}

//* Any object can have atmost one Index Signature and signature is only for string or number which is quite obvious


/**
 * Optional Properties and readonly property
 */

type Mobile = {
    name: string
    price: number
    resistence?: "ip 6.7" | "ip 6.5"  //* using `?` we mark this property as optional
    readonly isbn: string  //* once this property is assigned it not be updated again
}

let m1: Mobile = {
    name: "hauwai",
    price: 55000,
    resistence: "ip 6.5",
    isbn: "12345tfdsw234"
}

let m2: Mobile = {
    name: "hauwai",
    price: 55000,
    isbn: "12345tfcxsw345"
}

m2.isbn = "2345trew2345tg"  // this will throws an error

/**
 * Union type on objects
 */

type Dog = {
    name: string
    barks: boolean
    wags: boolean
}

type Cat = {
    name: string
    purrs: boolean
}

type DogAndCatUnion = Dog | Cat;

//* Union is valid only in case in which the object should contain all properties of atleast one type

let animal1: DogAndCatUnion = {  // this only contain Dog type
    name: "Dog 1",
    barks: true,
    wags: true
}

let animal2: DogAndCatUnion = {  // this only contain Cat type
    name: "Dog 2",
    purrs: true
}

let animal3: DogAndCatUnion = {  // this contain all properties of Cat and one property of Dog
    name: "Special Cat",
    purrs: true,
    wags: true
}


/**
 * Discriminating Unions
 */

type NetworkLoadingState = {
    state: "loading"
}

type NetworkFailedState = {
    state: "failed"
    code: number
}

type NetworkSuccessState = {
    state: "success"
    response: {
        title: string
        duration: number
        summary: string
    }
}

type NetworkState = NetworkFailedState | NetworkLoadingState | NetworkSuccessState;
function logger(state: NetworkState) {
    switch (state.state) {
        case "loading":
            return "loading..."
            break;
        case "failed":
            return `Error ${state.code}`
            break;
        case "success":
            return `Success ${state.response.title}`
            break;
        default:
            break;
    }
}


/**
 * Intersection Type
 */

//* in intersection type of T1 and T2, it should contain common properties and unique properties of both.

type ElectricCar = {
    name: string
    color: string
    fuel: "battery" | "petrol"
    battery: number
}

type PetrolCar = {
    name: string
    color: string
    fuel: "petrol" | "battery"
    tank: number
}

type HybridCar = ElectricCar & PetrolCar;

let car1: HybridCar = {
    name: "brezza",
    color: "white",
    fuel: "petrol",
    tank: 30,
    battery: 20
}
