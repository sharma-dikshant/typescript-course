### Simple Typguard in JavaScript
This is a simple type guard implementation in JavaScript that checks if a value is of a specific type. It can be used to ensure that variables are of the expected type before performing operations on them.
```js
function convertNumbertoString(number) {
  if (typeof number !== 'number') {
    throw new TypeError('Expected a number');
  }
  return number.toString();
}
```

__point:__ `array` and `null` in js is treated as an object.      
__point:__ `null`, `undefined`, `NaN`, `""`, `false`, `0` are treated as falsy values in `js` and `ts`