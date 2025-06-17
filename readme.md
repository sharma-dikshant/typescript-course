__point:__ The folder in which `tsconfig.json` is located is treated as the root of the project. And whenever there is a new ts file in this root folder then it is automatically creates a new equivalent `.js` file in the same folder due to default configuration of TypeScript compiler.

## Including and Excluding Files
To include or exclude files from the compilation, you can use the `include` and `exclude` options in your `tsconfig.json`. For example:

```json
{
    "exclude": ["node_modules", "*.exclude.ts", "**/*.exclude.ts"]
    "include": ["src"], // this will only complle files in the src folder
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs"
  },
}
```

- TypeScript will only compile files `include - exclude`.     
- By default, ts ignores `node_modules` unless you explicitly specify the `exclude` option. If you've used `excude` option, then you need to explicitly exclude `node_modules` if you dont want to compile files in that folder.


## rootDir and outDir   
The `rootDir` and `outDir` options in `tsconfig.json` are used to specify the input and output directories for your TypeScript files.
- `rootDir`: This option specifies the root directory of input files. And only ts file inside this folder will be compiled. 
- `outDir`: This option specifies the output directory for the compiled JavaScript files. All compiled `.js` files will be placed in this directory. Typescript follows the file/folder structure of the `rootDir` when placing the compiled files in the `outDir`.
For example:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist"
  }
}
```

## Setting up a Compilation Target
You can specify the ECMAScript target version for your compiled JavaScript files using the `target` option in `tsconfig.json`. For example, to compile to ES5:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs"
  }
}
```

## Typescript Core Libs
TypeScript comes with a set of core libraries that provide type definitions for standard JavaScript features. You can specify which libraries to include in your project using the `lib` option in `tsconfig.json`. For example, to include the ES2015 and DOM libraries:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "lib": ["es2015", "dom"]
  }
}
```

## sourceMap
You can generate source maps for your TypeScript files by setting the `sourceMap` option to `true` in your `tsconfig.json`. This will create `.map` files alongside your compiled JavaScript files, which can be useful for debugging. For example:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "sourceMap": true
  }
}
```