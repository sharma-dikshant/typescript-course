## Utility Types Simple Implementation.
- Like who `Partial` and `Exclude` in TypeScript, works. These types are inbuilt supported by TypeScript.
```ts
//* Mapped Types
type Partial<T> = {
  [P in keyof T]?: T[P];
}

//* Conditional Types
type Exclude<T, U> = T extends U ? never : T;

```
### Utility Types
- `Partial<T>`: Constructs a type with all properties of `T` set to optional.
- `Exclude<T, U>`: Constructs a type by excluding from `T` all properties
  that are assignable to `U`.
- `Pick<T, K>`: Constructs a type by picking the set of properties `K` from `T`.
- `Omit<T, K>`: Constructs a type by omitting the set of properties `K` from `T`.
- `Record<K, T>`: Constructs an object type whose property keys are `K` and property values are `T`.
- `Required<T>`: Constructs a type with all properties of `T` set to required.
- `Readonly<T>`: Constructs a type with all properties of `T` set to readonly (immutable).
- `Awaited<T>`: Constructs a type that unwraps the promise type `T`.
- String Manipulation Types:
  - `Uppercase<T>`: Converts a string literal type to uppercase.
  - `Lowercase<T>`: Converts a string literal type to lowercase.
  - `Capitalize<T>`: Capitalizes the first character of a string literal type.
  - `Uncapitalize<T>`: Uncapitalizes the first character of a string literal type.

- `satisifies` operator: Used to assert that a type satisfies a specific structure or interface.
```ts
type Properties = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];

const color = {
    red: [255, 0, 0],
    green: "#00ff00",
    blue: [255, 255, 0]
} satisfies Record<Properties, RGB | string>
```
