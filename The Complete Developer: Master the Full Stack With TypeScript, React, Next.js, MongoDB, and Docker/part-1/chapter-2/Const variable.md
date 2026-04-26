# Summary
1. `const` variables are used for declaring constant "such as data types"
2. `const` variables do not create properties "of the global object when declared globally"
3. `const` variables cannot be accessed before being declared
4. `const` variables in JavaScript are not *truly* immutable the way they would be in other programming languages, but only *look* immutable

`const` variables in JavaScript are *read-only references* to a value. This means you cannot reassign *different* values to the "variable identifier" for "primitive data types", however,  non-primitive data types, like objects or arrays, can mutate the value of a const through methods or "direct property access".

## Primitive and non-primitive data type changes

```JavaScript
const primitiveDataType = 1;
try {
	primitiveDataType = 2;
} catch (err) {
	console.log(err);
}

const nonPrimitiveDataType = [];
nonPrimitiveDataType.push(1);

console.log(nonPrimitiveDataType);
```